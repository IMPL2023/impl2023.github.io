import { NewType } from '@/types';
import { FC } from 'react';

interface NewProps {
  New_i: NewType;
}

export const New: FC<NewProps> = ({ New_i }) => (
  <article className="mt-4 flex flex-row items-start gap-2 text-base">
    <span className="whitespace-nowrap font-semibold text-textDark">
      [{New_i.date}]
    </span>
    <p className="flex-1 leading-relaxed text-text">{New_i.content}</p>
  </article>
);
