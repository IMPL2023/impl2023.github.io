import { Title } from '../Common/Title';
import { Paper } from './Paper';
import data from '@/data';
import { PaperType } from '@/types';
const List_2023:PaperType[] =[]
const List_2022_and_before:PaperType[] =[]

data.papers.forEach((item) => {

  if (item.comment.includes("2023")) {
    List_2023.push(item)
  }
  else{
    List_2022_and_before.push(item)
  }
});


export const Papers = () => {
  return (
    
      <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="work">
        <Title  title="Selected Publications" />
        <div className='mt-4 text-textDark'>
          <p>Please visit &nbsp;
          <a href='https://scholar.google.com/citations?user=KOL2dMwAAAAJ&hl=en&oi=ao' className='text-white'>
            my google scholar profile</a> 
            &nbsp; for the full publication list.
          </p>
        </div>
        
        <div className="flex flex-col">
          <article className="flex flex-col items-center mt-10 md:flex-row">
            <span className="text-2xl">
              <b>2023:</b>
            </span>
          </article>
          {List_2023.map((paper, i) => (
            <Paper key={i} paper={paper} />
          ))}
        </div>

        <div className="flex flex-col">
          <article className="flex flex-col  mt-10 ">
            <div className=''>
              <span className="text-2xl" >
                  <b>2022 and before:</b>
              </span>
            </div>

          </article>
          {List_2022_and_before.map((paper, i) => (
            <Paper key={i} paper={paper} />
          ))}
        </div>
        
      </div>
      
  );
};
