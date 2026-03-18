import { Title } from '../Common/Title';
import { Member } from './Member';
import { MemberType } from '@/types';
import data from '@/data';

const Faculty: MemberType[] = [];
const PhDs: MemberType[] = [];
const PostDocs_RAs: MemberType[] = [];
const Visitors: MemberType[] = [];
const Alumni: MemberType[] = [];
const Masters: MemberType[] = [];

data.members.forEach(item => {
  switch (item.type) {
    case 'Faculty':
      Faculty.push(item);
      break;
    case 'PhD':
      PhDs.push(item);
      break;
    case 'PostDoc':
      PostDocs_RAs.push(item);
      break;
    case 'RA':
      PostDocs_RAs.push(item);
      break;
    case 'Visitor':
      Visitors.push(item);
      break;
    case 'Alumni':
      Alumni.push(item);
      break;
    case 'Master':
      Masters.push(item);
      break;
  }
});

const getAlumniDescription = (member: MemberType) => {
  return [member.title, member.comment, member.bg].filter(Boolean).join(' · ');
};

export const Members = () => {
  return (
    <div
      className="flex flex-col items-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
      id="work"
    >
      <Title title="Faculty" />
      <div className="flex flex-wrap mt-10">
        {Faculty.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>

      <Title title="Research Staff" />
      <div className="flex flex-wrap mt-10">
        {PostDocs_RAs.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>

      <Title title="PhD Students" />
      <div className="flex flex-wrap mt-10">
        {PhDs.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>

      <Title title="Master's Students" />
      <div className="flex flex-wrap mt-10">
        {Masters.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>

      <Title title="Visitors" />
      <div className="flex flex-wrap mt-10">
        {Visitors.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>

      <Title title="Alumni" />
      <div className="mt-10 w-full space-y-8">
        {Alumni.map((member, i) => {
          const description = getAlumniDescription(member);

          return (
            <article key={i}>
              {member.homepage ? (
                <a
                  className="text-3xl font-bold text-text underline-offset-4 hover:underline"
                  href={member.homepage}
                >
                  {member.name}
                </a>
              ) : (
                <h3 className="text-3xl font-bold text-text">{member.name}</h3>
              )}
              <p className="mt-3 text-2xl text-textDark leading-relaxed">
                {description
                  ? `${description} → ${member.destination || 'NA'}`
                  : member.destination || 'NA'}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
