import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects,News } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { FundingNews } from '@/components';
interface IHomeProps {
  Posts: [PostType];
}

const Funding: FC = () => {
  return (
    <Layout>
      <FundingNews />
    </Layout>
  );
};

export default Funding;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts(data.username);

  return {
    props: {
      Posts: Posts.publication.posts,
    },
    revalidate: 60 * 60 * 24,
  };
};
