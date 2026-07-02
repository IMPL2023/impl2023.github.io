import { PaperType } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

interface IPaperProps {
  paper: PaperType;
}

function replaceSpecialCharactersWithSuperscript(inputString: string) {
  return inputString.replace(/[+#*]/g, match => `<sup>${match}</sup>`);
}

export const Paper: FC<IPaperProps> = ({ paper }) => {
  const renderComment = (comment: string) => {
    if (comment.trim() === '') {
      return null;
    }

    const hasOral = comment.includes('Oral Presentation');

    if (hasOral) {
      const parts = comment.split('Oral Presentation');
      return (
        <p className="mt-1.5 text-sm italic leading-relaxed text-textDark">
          {parts[0]}
          <b className="pl-1 text-text">Oral Presentation</b>
          {parts[1]}
        </p>
      );
    }

    return (
      <p className="mt-1.5 text-sm italic leading-relaxed text-textDark">
        {comment}
      </p>
    );
  };

  const renderAuthor = (author: string) => {
    const formattedAuthor = replaceSpecialCharactersWithSuperscript(author);
    const isNaZhao = formattedAuthor.includes('Na Zhao');

    return (
      <span
        className={isNaZhao ? 'font-semibold text-text' : undefined}
        dangerouslySetInnerHTML={{ __html: formattedAuthor }}
      />
    );
  };

  return (
    <article className="mb-4 grid gap-4 rounded-md border border-textDark/15 bg-card p-4 shadow-sm transition-transform hover:-translate-y-0.5 md:grid-cols-[280px_1fr] md:items-start lg:grid-cols-[320px_1fr]">
      <div className="flex aspect-[2.65/1] w-full items-center justify-center overflow-hidden rounded-md border border-textDark/10 bg-white p-2">
        <Image
          alt=""
          className="h-full w-full object-contain"
          height={150}
          loading="lazy"
          src={paper.image}
          width={420}
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-snug text-text">
          {paper.title}
        </h3>
        <div className="mt-2 border-l-2 border-text/40 pl-3 text-sm leading-relaxed text-textDark">
          {paper.authors.map((author, i) => (
            <span key={`${author}-${i}`}>
              {renderAuthor(author)}
              {i < paper.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        {renderComment(paper.content)}
        {renderComment(paper.comment)}

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-neon">
          {paper.pdf.trim() !== '' && (
            <a className="underline underline-offset-2" href={paper.pdf}>
              [PDF]
            </a>
          )}
          {paper.project.trim() !== '' && (
            <a className="underline underline-offset-2" href={paper.project}>
              [Project]
            </a>
          )}
          {paper.video.trim() !== '' && (
            <a className="underline underline-offset-2" href={paper.video}>
              [Video]
            </a>
          )}
          {paper.code.trim() !== '' && (
            <a className="underline underline-offset-2" href={paper.code}>
              [Code]
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
