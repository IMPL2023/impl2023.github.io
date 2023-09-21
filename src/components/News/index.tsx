import { Title } from '../Common/Title';
import { New } from './New';
import data from '@/data';

export const News = () => {
  return (
    <div className="space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0 " id="work">
      <Title  title="News" />
      <div className="flex flex-col">
        {data.news.map((N, i) => (
          <New key={i} New_i={N} />
        ))}
      </div>
    </div>
  );
};
