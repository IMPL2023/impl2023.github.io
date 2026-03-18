import { MemberType } from '@/types';
import { FC } from 'react';
import Card from 'react-bootstrap/Card';

interface IMemberProps {
  member: MemberType;
}

export const Member: FC<IMemberProps> = ({ member }) => {
  const parts = member.bg.split('|');

  return (
    <Card
      className="flex flex-col border-0 bg-transparent p-4 pb-4 shadow-none"
      style={{ width: '18rem' }}
    >
      <Card.Img variant="top" src={member.image} sizes="" />
      <Card.Body className="rounded-b-md border border-textDark/15 bg-card p-3 shadow-sm">
        {member.homepage === '' ? (
          <Card.Title className="p-1 text-text">{member.name}</Card.Title>
        ) : (
          <a
            className="p-1 text-text underline underline-offset-4"
            href={member.homepage}
          >
            {member.name}
          </a>
        )}

        <ul
          style={{ listStyleType: 'square' }}
          className="ml-4 pl-2 text-textDark"
        >
          {member.title === '' ? null : (
            <li>
              <Card.Text className="p-1 text-textDark">
                {member.title}
              </Card.Text>
            </li>
          )}

          {member.comment === '' ? null : (
            <li>
              <Card.Text className="p-1 text-textDark">
                {member.comment}
              </Card.Text>
            </li>
          )}

          {parts.map((item, index) => (
            <li key={index}>
              <Card.Text className="p-1 text-textDark">{item}</Card.Text>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};
