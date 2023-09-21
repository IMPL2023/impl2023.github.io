import { Title } from '../Common/Title';
import { Project } from './Paper';
import data from '@/data';

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
        {data.papers.map((paper, i) => (
          <Project key={i} paper={paper} />
        ))}
      </div>
    </div>
  );
};
