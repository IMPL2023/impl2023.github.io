import { Title } from '../Common/Title';
import { Paper } from './Paper';
import { PaperText } from './PaperText';
import data from '@/data';
import { PaperType } from '@/types';
import { useRef, useState } from 'react';

type TimelineGroup = {
  label: string;
  papers: PaperType[];
  year: number;
};

const getPaperYear = (paper: PaperType) => {
  const [year] = paper.comment.match(/(?:19|20)\d{2}/) ?? [];

  return year ? Number(year) : 0;
};

const getTimelineYear = (paper: PaperType) => {
  const year = getPaperYear(paper);

  return year >= 2022 ? year : 2021;
};

const timelineGroups = Object.values(
  data.papers.reduce<Record<number, TimelineGroup>>((groups, paper) => {
    const year = getTimelineYear(paper);

    if (!groups[year]) {
      groups[year] = {
        label: year === 2021 ? '2021 and before' : String(year),
        papers: [],
        year,
      };
    }

    groups[year].papers.push(paper);

    return groups;
  }, {}),
).sort((a, b) => b.year - a.year);

export const Papers = () => {
  const [yearMenu, setYearMenu] = useState({
    isOpen: false,
    left: 0,
    top: 0,
  });
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleYearJump = (year: string) => {
    document.getElementById(`publications-${year}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setYearMenu(menu => ({
      ...menu,
      isOpen: false,
    }));
  };

  const handleTimelineMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setYearMenu({
      isOpen: true,
      left: Math.min(event.clientX + 16, window.innerWidth - 210),
      top: Math.min(event.clientY + 16, window.innerHeight - 280),
    });
  };

  const scheduleMenuClose = () => {
    closeTimer.current = setTimeout(() => {
      setYearMenu(menu => ({
        ...menu,
        isOpen: false,
      }));
    }, 180);
  };

  const keepMenuOpen = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="work">
      {/* <Title  title="Selected Publications" /> */}
      <Title title="Publications:" />
      <div className="mt-4 text-textDark">
        {/* <p>Please visit &nbsp;
          <a href='https://scholar.google.com/citations?user=KOL2dMwAAAAJ&hl=en&oi=ao' className='text-white'>
            my google scholar profile</a> 
            &nbsp; for the full publication list.
          </p> */}
      </div>

      <div className="mt-8">
        {timelineGroups.map(group => (
          <section
            className="scroll-mt-24 grid grid-cols-[7.75rem_1fr] gap-4 md:grid-cols-[12rem_1fr] md:gap-6"
            id={`publications-${group.year}`}
            key={group.year}
          >
            <div className="relative pt-1 text-right">
              <span className="inline-flex rounded-md bg-neon px-3 py-1 text-lg font-semibold text-white shadow-sm md:text-2xl">
                {group.label}
              </span>
            </div>

            <div className="relative border-l border-textDark/30 pb-10 pl-5 last:pb-0 md:pl-8">
              <div
                className="absolute -left-3 top-0 h-full w-6"
                onMouseLeave={scheduleMenuClose}
                onMouseMove={handleTimelineMouseMove}
              >
                <span className="absolute left-[5px] top-3 h-3.5 w-3.5 rounded-full border-2 border-neon bg-bgblue ring-4 ring-bgblue" />
              </div>
              <div className="flex flex-col">
                {group.papers.map((paper, i) =>
                  group.year <= 2021 ? (
                    <PaperText key={`${group.year}-${i}`} paper={paper} />
                  ) : (
                    <Paper key={`${group.year}-${i}`} paper={paper} />
                  ),
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {yearMenu.isOpen && (
        <div
          className="fixed z-50 w-48 rounded-lg border border-white/60 bg-white/65 p-2 text-left shadow-xl shadow-textDark/10 backdrop-blur-md"
          onMouseEnter={keepMenuOpen}
          onMouseLeave={scheduleMenuClose}
          style={{
            left: yearMenu.left,
            top: yearMenu.top,
          }}
        >
          {timelineGroups.map(yearGroup => (
            <button
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-textDark transition hover:bg-neon/15 hover:text-text"
              key={yearGroup.year}
              onClick={() => handleYearJump(String(yearGroup.year))}
              type="button"
            >
              {yearGroup.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
