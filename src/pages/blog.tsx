import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';

interface IHomeProps {
  Posts: [PostType];
}

const Home: FC<IHomeProps> = ({ Posts }) => {
  return (
    <Layout>
      
    </Layout>
  );
};

export default Home;


