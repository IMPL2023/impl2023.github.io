
import { NewType } from '@/types';
import { FC } from 'react';
import Image from 'next/image';

interface NewProps {
  New_i: NewType;
}

export const New: FC<NewProps> = ({ New_i }) => {
  return (
    <article className="flex flex-col items-center mt-4 md:flex-row text-neon text-1xl text-textDark">
      <b>[{New_i.date}]</b>:   {New_i.content}
    </article>
  );
};
