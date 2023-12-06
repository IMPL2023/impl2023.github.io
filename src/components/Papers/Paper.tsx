import { GitHubIcon, VisitIcon } from '../../Icons';
import { PaperType } from '@/types';
import { FC ,FunctionComponent} from 'react';
import Image from 'next/image';


interface IPaperProps {
  paper: PaperType;
}
function replaceSpecialCharactersWithSuperscript(inputString:string) {
  
  const replacedString = inputString.replace(/[*#]/g, (match) => `<sup>${match}</sup>`);
  return replacedString;
}


export const Paper: FC<IPaperProps> = ({ paper }) => {
  const renderItem = (author:string) => {
    author = replaceSpecialCharactersWithSuperscript(author)
    if (author.includes('Na Zhao')) {
      return <>
      <span className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2">
        <b dangerouslySetInnerHTML={{__html:author }}></b>
      </span>
      </>
      
    }
    else{
      return <>
      <span className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2">
        <span dangerouslySetInnerHTML={{ __html:author }}></span>
      </span>
      </>
      
    }
  };
  const linkStyle = {
    textDecoration: "underline",
  };
  const divStyle = {
    borderBottom: '2px solid rgba(255, 255, 255, 0.1)', // 设置白色下边框
  };
  return (
    <article className="flex flex-col items-center mt-10 md:flex-row" style={divStyle}>
      <Image
        alt={''}
        className="relative md:w-[450px] w-full ml-4 h-[250px] rounded-lg object-contain"
        height={250}
        loading="lazy"
        src={paper.image}
        width={450}
      />
      <div className="ml-2 mt-5 md:mt-0 md:ml-20">
        <h3 className="text-2xl font-semibold text-neon">{paper.title}</h3>
        {paper.authors.map((author, i) => (
          (author.startsWith('#')  || author.startsWith('*'))
          ?<span>{author}</span>
          :
          renderItem(author)
        ))}
        
        <p className="text-textDark mt-3 md:max-w-[700px] italic-text">{paper.comment}</p>
        
        {paper.pdf.trim() != "" &&<span className="text-textDark mt-2">
           <span className="text-neon" style={linkStyle}>[<a href={paper.pdf}>PDF</a>]</span> 
        </span>}
         {paper.project.trim() != "" && <span className="text-textDark mt-2 ml-2">
          <span className="text-neon" style={linkStyle}>[<a href={paper.project}>Project</a>]</span>
        </span> }
        {paper.video.trim() != "" && <span className="text-textDark mt-2 ml-2">
           <span className="text-neon" style={linkStyle}>[<a href={paper.video}>Video</a>]</span> 
        </span>}
        {paper.code.trim() != "" && <span className="text-textDark mt-2 ml-2">
          <span className="text-neon" style={linkStyle}>[<a href={paper.code}>Code</a>]</span> 
        </span>}

        
      </div>
    </article>
  );
};
