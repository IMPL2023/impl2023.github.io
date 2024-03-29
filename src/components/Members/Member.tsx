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
  let parts = member.bg.split('|');
  return (
    <Card className='flex flex-col p-4 pb-4 ' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={member.image} sizes='' />
        <Card.Body className='bg-card p-2'>
          {/* <a style={{ textDecoration: 'underline' }}></a> */}
          {
            member.homepage === ''
              ? <Card.Title className='p-2'>{member.name}</Card.Title>
              : <a style={{ textDecoration: 'underline' }} href={ member.homepage }>
                  <Card.Text className='p-1'>
                    {member.name}
                  </Card.Text>
                </a>
          }
          {/* <Card.Title className='p-2'>{member.name}</Card.Title> */}
          <ul style={{listStyleType: 'square'}} className='ml-4 pl-2'>
 
            {member.title==='' ? '' :
              <li style={white}>
                <Card.Text className='p-1'>
                {member.title}
                </Card.Text>
              </li>
            }
            {member.comment==='' ? '' :
              <li style={white}>
                <Card.Text className='p-1'>
                {member.comment}
                </Card.Text>
              </li>
            }
            
            
            {parts.map((item, index) => (
              <li style={white} key={index}>
                <Card.Text className='p-1'>
                  {item}
                </Card.Text>
              </li>
            ))}
            {/* <li style={white}>
                <Card.Text className='p-2'>
              {member.bg}
              </Card.Text>
            </li> */}

            

            {/* <div className=''>
              <li style={white} className='pl-2 pt-1 pb-1'>
              <a href={'mailto:'+member.mail} >
                
                <svg  width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#d6d6d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </a>
              
              </li>
            </div> */}
            
          </ul>
          
          
          
        </Card.Body>
      </Card>
  );
};
