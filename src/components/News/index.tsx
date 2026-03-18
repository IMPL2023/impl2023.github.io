import { Title } from '../Common/Title';
import { New } from './New';
import data from '@/data';
import { NewType, NewsCategory } from '@/types';
import { useMemo, useState } from 'react';

type NewsFilter = 'all' | NewsCategory;

const FILTERS: NewsFilter[] = [
  'all',
  'paper',
  'join',
  'visit',
  'service',
  'talk',
  'grant',
  'milestone',
];

const inferNewsCategory = (content: string): NewsCategory => {
  const text = content.toLowerCase();

  if (
    text.includes('grant') ||
    text.includes('funded') ||
    text.includes('funding')
  ) {
    return 'grant';
  }

  if (
    text.includes('invited to give') ||
    text.includes('keynote') ||
    text.includes('seminar') ||
    text.includes('workshop') ||
    text.includes('talk at')
  ) {
    return 'talk';
  }

  if (
    text.includes('invited to serve') ||
    text.includes('area chair') ||
    text.includes('chair') ||
    text.includes('editor') ||
    text.includes('committee') ||
    text.includes('associate editor')
  ) {
    return 'service';
  }

  if (
    text.includes('paper') ||
    text.includes('accepted by') ||
    text.includes('accepted to') ||
    text.includes('accepted at')
  ) {
    return 'paper';
  }

  if (text.includes('welcome') && text.includes('visit')) {
    return 'visit';
  }

  if (text.includes('welcome') || text.includes('join our lab')) {
    return 'join';
  }

  return 'milestone';
};

const getNewsCategory = (news: NewType): NewsCategory => {
  return news.category ?? inferNewsCategory(news.content);
};

export const News = () => {
  const [filter, setFilter] = useState<NewsFilter>('all');
  const newsItems = data.news as NewType[];

  const filteredNews = useMemo(() => {
    if (filter === 'all') {
      return newsItems;
    }

    return newsItems.filter(item => getNewsCategory(item) === filter);
  }, [filter, newsItems]);

  return (
    <div className="space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0 " id="work">
      <Title title="News" />

      <div className="flex flex-wrap gap-2 pt-1">
        {FILTERS.map(item => {
          const active = filter === item;

          return (
            <button
              key={item}
              className={`rounded-full border px-3 py-1 text-sm capitalize transition-colors ${
                active
                  ? 'border-neon bg-neon text-white'
                  : 'border-textDark/40 bg-white/60 text-text hover:border-neon hover:text-neon'
              }`}
              onClick={() => setFilter(item)}
              type="button"
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col">
        {filteredNews.map((N, i) => (
          <New key={`${N.date}-${i}`} New_i={N} />
        ))}
      </div>
    </div>
  );
};
