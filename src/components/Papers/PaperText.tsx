import { PaperType } from '@/types';
import { FC } from 'react';

interface IPaperProps {
  paper: PaperType;
}

function replaceSpecialCharactersWithSuperscript(inputString: string) {
  return inputString.replace(/[*#]/g, match => `<sup>${match}</sup>`);
}

export const PaperText: FC<IPaperProps> = ({ paper }) => {
  const renderComment = (comment: string) => {
    const hasOral = comment.includes('Oral Presentation');

    if (hasOral) {
      const parts = comment.split('Oral Presentation');
      return (
        <p className="mt-3 italic-text text-textDark md:max-w-[700px]">
          {parts[0]}
          <b className="pl-1 text-text">Oral Presentation</b>
          {parts[1]}
        </p>
      );
    }

    return (
      <p className="mt-3 italic-text text-textDark md:max-w-[700px]">
        {comment}
      </p>
    );
  };

  const renderItem = (author: string) => {
    const formattedAuthor = replaceSpecialCharactersWithSuperscript(author);
    const isNaZhao = formattedAuthor.includes('Na Zhao');

    return (
      <span className="mr-2 mt-2 inline-block rounded-full bg-neon/15 px-3 py-1 text-text">
        {isNaZhao ? (
          <b dangerouslySetInnerHTML={{ __html: formattedAuthor }}></b>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: formattedAuthor }}></span>
        )}
      </span>
    );
  };

  const linkStyle = {
    textDecoration: 'underline',
  };

  return (
    <article className="mb-5 flex flex-col items-center border-b border-textDark/20 pb-5 md:flex-row">
      <div className="mb-2 ml-2 mt-10 md:ml-5 md:mt-0">
        <h3 className="text-base font-semibold text-text">{paper.title}</h3>
        {paper.authors.map((author, i) =>
          author.startsWith('#') || author.startsWith('*') ? (
            <span key={`${author}-${i}`} className="text-textDark">
              {author}
            </span>
          ) : (
            <span key={`${author}-${i}`}>{renderItem(author)}</span>
          ),
        )}

        {renderComment(paper.content)}
        {renderComment(paper.comment)}

        {paper.pdf.trim() !== '' && (
          <span className="mt-2 text-textDark">
            <span className="text-base text-neon" style={linkStyle}>
              [<a href={paper.pdf}>PDF</a>]
            </span>
          </span>
        )}
        {paper.project.trim() !== '' && (
          <span className="ml-2 mt-2 text-textDark">
            <span className="text-base text-neon" style={linkStyle}>
              [<a href={paper.project}>Project</a>]
            </span>
          </span>
        )}
        {paper.video.trim() !== '' && (
          <span className="ml-2 mt-2 text-textDark">
            <span className="text-base text-neon" style={linkStyle}>
              [<a href={paper.video}>Video</a>]
            </span>
          </span>
        )}
        {paper.code.trim() !== '' && (
          <span className="ml-2 mt-2 text-textDark">
            <span className="text-base text-neon" style={linkStyle}>
              [<a href={paper.code}>Code</a>]
            </span>
          </span>
        )}
      </div>
    </article>
  );
};
