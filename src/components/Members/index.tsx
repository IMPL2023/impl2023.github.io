import { Title } from '../Common/Title';
import { Member } from './Member';
import { MemberType } from '@/types';
import data from '@/data';
const PhDs:MemberType[] =[]
const PostDocs_RAs:MemberType[] =[]
const Visitors:MemberType[] =[]
const Mentees:MemberType[] =[]


data.members.forEach((item) => {
  switch (item.type) {
    case "PhD":
      PhDs.push(item);
      break;
    case "PostDoc":
      PostDocs_RAs.push(item);
      break;
    case "RA":
      PostDocs_RAs.push(item);
      break;
    case "Visitor":
      Visitors.push(item);
      break;
    case "Mentee":
      Mentees.push(item);
      break;
  }
});



export const Members = () => {
  return (
    <div className="flex flex-col items-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0" id="work">
      
      <Title  title="PostDoc  / RA" />
      <div className="flex flex-wrap  mt-10">
        {PostDocs_RAs.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>


      <Title  title="PhD" />
      <div className="flex flex-wrap  mt-10">
        {PhDs.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>


      <Title  title="Visitors" />
      <div className="flex flex-wrap  mt-10">
        {Visitors.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>


      <Title  title="Mentees" />
      <div className="flex flex-wrap  mt-10">
        {Mentees.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>
    </div>
  );
};
