import Layout from '@/Layout/Main.Layout';
import { Papers } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';



const Publications: FC = () => {
  return (
    <Layout>
      <Papers />
    </Layout>
  );
};

export default Publications;

