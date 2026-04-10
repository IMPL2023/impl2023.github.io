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

const normalizeAlumniGroup = (
  alumniGroup?: string,
): MemberType['alumniGroup'] => {
  if (
    alumniGroup === 'Research Staff' ||
    alumniGroup === 'Visitors' ||
    alumniGroup === 'Graduate'
  ) {
    return alumniGroup;
  }

  return undefined;
};

const members: MemberType[] = data.members.map(item => ({
  ...item,
  alumniGroup: normalizeAlumniGroup(item.alumniGroup),
}));

members.forEach(item => {
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

const ALUMNI_SECTIONS: Array<'Research Staff' | 'Visitors' | 'Graduate'> = [
  'Research Staff',
  'Visitors',
  'Graduate',
];

const getAlumniGroup = (
  member: MemberType,
): 'Research Staff' | 'Visitors' | 'Graduate' => {
  if (member.alumniGroup) {
    return member.alumniGroup;
  }

  const text = `${member.title} ${member.comment}`.toLowerCase();

  if (text.includes('visiting')) {
    return 'Visitors';
  }

  if (text.includes('research fellow') || text.includes('research assistant')) {
    return 'Research Staff';
  }

  return 'Graduate';
};

const normalizeText = (text: string) => text.trim().toLowerCase();

const hasSameInstitution = (text: string, destination?: string) => {
  if (!text || !destination) {
    return false;
  }

  const primaryDestination = destination.split('·')[0].trim();
  const normalizedPrimaryDestination = normalizeText(primaryDestination);
  const normalizedText = normalizeText(text);

  const textSegments = text
    .split(',')
    .map(segment => segment.trim())
    .filter(Boolean)
    .map(segment => normalizeText(segment));

  return (
    normalizedText.includes(normalizedPrimaryDestination) ||
    textSegments.some(
      segment =>
        segment === normalizedPrimaryDestination ||
        normalizedPrimaryDestination.includes(segment) ||
        segment.includes(normalizedPrimaryDestination),
    )
  );
};

const normalizeComparableText = (text: string) =>
  text
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const includesStudentKeyword = (text: string) =>
  /student|ph\.d|phd|master/.test(text.toLowerCase());

const shouldHideBackground = (role: string, background: string) => {
  if (!role || !background) {
    return false;
  }

  const normalizedRole = normalizeComparableText(role);
  const normalizedBackground = normalizeComparableText(background);

  if (normalizedRole === normalizedBackground) {
    return true;
  }

  if (
    (normalizedRole.includes(normalizedBackground) ||
      normalizedBackground.includes(normalizedRole)) &&
    hasSameInstitution(role, background)
  ) {
    return true;
  }

  return (
    hasSameInstitution(role, background) &&
    includesStudentKeyword(role) &&
    includesStudentKeyword(background)
  );
};

const getInstitutionFromText = (text: string) => {
  const segments = text
    .split(',')
    .map(segment => segment.trim())
    .filter(Boolean);

  return segments[segments.length - 1] || '';
};

const addInstitutionIfMissing = (role: string, background: string) => {
  if (!role) {
    return '';
  }

  const institution = getInstitutionFromText(background);
  if (!institution) {
    return role;
  }

  return hasSameInstitution(role, institution)
    ? role
    : `${role}, ${institution}`;
};

const getAlumniSummary = (member: MemberType) => {
  const role = member.role || member.title || member.comment;
  const destination = member.destination || 'NA';
  const isVisitor = getAlumniGroup(member) === 'Visitors';
  const sameInstitution = hasSameInstitution(
    [role, member.bg].filter(Boolean).join(', '),
    destination,
  );
  const shouldHideDestination = isVisitor && sameInstitution;
  const backgroundSource = member.bg;
  const background = shouldHideBackground(role, backgroundSource)
    ? ''
    : backgroundSource;

  return {
    role,
    background,
    destination: shouldHideDestination ? '' : destination,
    isVisitor,
  };
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
      <div className="mt-10 w-full space-y-10">
        {ALUMNI_SECTIONS.map((section, sectionIndex) => {
          const items = Alumni.filter(
            member => getAlumniGroup(member) === section,
          );

          if (items.length === 0) {
            return null;
          }

          return (
            <section
              className={
                sectionIndex === 0 ? '' : 'border-t border-textDark/10 pt-8'
              }
              key={section}
            >
              <h3 className="text-2xl font-bold text-text">{section}</h3>
              <div className="mt-4 space-y-6">
                {items.map((member, i) => {
                  const summary = getAlumniSummary(member);

                  return (
                    <article
                      className="border-b border-textDark/10 pb-5 last:border-b-0"
                      key={`${section}-${member.name}-${i}`}
                    >
                      <div className="flex flex-col gap-2 md:grid md:grid-cols-[260px,1fr] md:gap-6">
                        <div>
                          {member.homepage ? (
                            <a
                              className="text-2xl font-semibold text-text underline-offset-4 hover:underline"
                              href={member.homepage}
                            >
                              {member.name}
                            </a>
                          ) : (
                            <h4 className="text-2xl font-semibold text-text">
                              {member.name}
                            </h4>
                          )}
                          {member.period ? (
                            <p className="mt-1 text-base text-textDark/80">
                              {member.period}
                            </p>
                          ) : null}
                        </div>
                        <div className="space-y-1 text-xl leading-relaxed text-textDark">
                          {summary.isVisitor ? (
                            <>
                              {summary.role ? (
                                <p>
                                  {addInstitutionIfMissing(
                                    summary.role,
                                    member.bg,
                                  )}
                                </p>
                              ) : null}
                              {summary.destination ? (
                                <p>
                                  <span className="mr-2 text-textDark/70">
                                    →
                                  </span>
                                  {summary.destination}
                                </p>
                              ) : null}
                            </>
                          ) : (
                            <>
                              {summary.role ? <p>{summary.role}</p> : null}
                              {summary.background ? (
                                <p>{summary.background}</p>
                              ) : null}
                              {summary.destination ? (
                                <p>
                                  <span className="mr-2 text-textDark/70">
                                    →
                                  </span>
                                  {summary.destination}
                                </p>
                              ) : null}
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
