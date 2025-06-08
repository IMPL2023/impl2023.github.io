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
  const renderComment = (comment:string )=> {
    // 检查 comment 中是否包含 'Oral'
    const hasOral = comment.includes('Oral Presentation');
  
    if (hasOral) {
      // 分割字符串
      const parts = comment.split('Oral Presentation');
      return (
        <p className="text-textDark mt-3 md:max-w-[700px] italic-text">
          {parts[0]}
          <b className='text-white pl-1'>Oral Presentation</b>
          {parts[1]}
        </p>)
    }
    else{
      console.log(comment)
      return (
        <p className="text-textDark mt-3 md:max-w-[700px] italic-text">
          {comment}
        </p>)
    }
  }
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
    // <article className="flex flex-col items-center mt-10 md:flex-row" style={divStyle}>
    <article
    className="
      flex flex-col  md:flex-row 
      bg-neutral-600 rounded-lg shadow-md
      
      border-l-4 border-neutral-600
      p-6 mb-6  
      transition-transform transform hover:-translate-y-2
    "
  >

      <Image
        alt=""
        src={paper.image}
        width={450}
        height={250}
        className="self-start w-[450px]  object-contain object-left-top rounded-lg flex-shrink-0"
        loading="lazy"
      />
      <div className="ml-2 mt-5 md:mt-0 md:ml-20">
        <h3 className="text-2xl font-semibold text-neon">{paper.title}</h3>
        {paper.authors.map((author, i) => (
          (author.startsWith('#')  || author.startsWith('*'))
          ?<span>{author}</span>
          :
          renderItem(author)
        ))}
        
        {/* <p className="text-textDark mt-3 md:max-w-[700px] italic-text">{paper.content}</p> */}
        {renderComment(paper.content)}
        {renderComment(paper.comment)}
        {/* <p className="text-textDark mt-3 md:max-w-[700px] italic-text">{paper.comment}</p> */}
        
        
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
