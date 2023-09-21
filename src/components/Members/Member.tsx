import { GitHubIcon, VisitIcon } from '../../Icons';
import { MemberType } from '@/types';
import { FC } from 'react';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

interface IMemberProps {
  member: MemberType;
}

export const Member: FC<IMemberProps> = ({ member }) => {
  const white={
    color:'white'
  }
  return (
    <Card className='flex flex-col p-4 pb-4 ' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/members/placeHolder.png" sizes='' />
        <Card.Body className='bg-card p-2'>
          <Card.Title className='p-2'>{member.name}</Card.Title>
          <ul style={{listStyleType: 'square'}} className='m-4'>
            <li style={white}>
              <Card.Text className='p-2'>
              {member.comment}
            </Card.Text></li>
          <li style={white}>
              <Card.Text className='p-2'>
            topic:{member.topic}
            </Card.Text>
          </li>
          </ul>
          
          
          
        </Card.Body>
      </Card>
  );
};
