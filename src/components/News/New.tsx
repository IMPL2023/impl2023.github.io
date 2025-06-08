
import { NewType } from '@/types';
import { FC } from 'react';
import Image from 'next/image';

interface NewProps {
  New_i: NewType;
}

// export const New: FC<NewProps> = ({ New_i }) => {
//   return (
//     <article className="flex flex-col items-center mt-4 md:flex-row text-neon text-1xl text-textDark">
//       <p><b>[{New_i.date}]</b>:   {New_i.content}</p>
//     </article>
//   );
// };
export const New: FC<NewProps> = ({ New_i }) => (
  <article
    className="
      flex flex-row items-start   /* 一行展示，垂直顶对齐 */
      mt-4 gap-2                  /* 外边距 & 项间距 */
    "
  >
    {/* 日期：不允许自身折行 */}
    <span className="whitespace-nowrap font-semibold text-cyan-100">
      [{New_i.date}]
    </span>

    {/* 内容：可以自己换行，但不会把自己挤到下一行把日期留下 */}
    <p className="flex-1 text-neon-400 leading-relaxed">
      {New_i.content}
    </p>
  </article>
);