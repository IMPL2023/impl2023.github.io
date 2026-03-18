type NewsCategory =
  | 'paper'
  | 'join'
  | 'visit'
  | 'service'
  | 'talk'
  | 'grant'
  | 'milestone';

interface NewType {
  date: string;
  content: string;
  category?: NewsCategory;
}

export type { NewType, NewsCategory };
