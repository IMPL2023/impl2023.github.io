import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects,News,Members } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';



const Group: FC = () => {
  return (
    <Layout>
      <Members />
    </Layout>
  );
};

export default Group;

