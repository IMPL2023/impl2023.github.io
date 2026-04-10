type NewsCategory = 'paper' | 'join' | 'service' | 'talk' | 'grant';

interface NewType {
  date: string;
  content: string;
  category?: NewsCategory;
}

export type { NewType, NewsCategory };
