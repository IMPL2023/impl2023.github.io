import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects,News } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Title, } from '@/components/Common/Title';
import { TitleS, } from '@/components/Common/TitleS';

function B() {
  const boldStyle = {
    fontWeight: 'bold', // 设置文本粗体样式
  };

  return (

      <span style={boldStyle}></span>
  );
}
const Joinus: FC = () => {
  return (
    <Layout>
      <div className='space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0'>
        <p className="w-4/5 md:w-4/5 text-white text-xl">
          We are currently recruiting PhD students (starting from Fall 2024), 
          postdocs, and research assistants (starting anytime) in the field of 3D computer vision. 
          The specific research topics include (but are not limited to):
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark  pl-4">
          <ol style={{ listStyleType: 'decimal' }}>
            <li>
              <b className='text-white pl-1 pr-1'>     Data-efficient learning 
              </b>
                   (e.g., semi-supervised, few-shot learning, self-supervised learning) for 3D scene understanding;</li>
            <li>
              <b className='text-white pl-1 pr-1'>     Multi-modal joint learning</b> 
            
            for scene understanding with images and point clouds;</li>
            <li>
              
              <b className='text-white pl-1 pr-1'>     Out-of-distribution learning</b>
              (e.g., domain adaptation/generalization) on scene understanding;</li>
            
            <li>
              <b className='text-white pl-1 pr-1'>     Online 3D scene understanding
              </b> that reconstructs and understands 3D scenes simultaneously;</li>
            <li>
              <b className='text-white pl-1 pr-1'>     Lifelong/continual learning
              </b>     for 3D scene understanding;</li>
            <li>
              <b className='text-white pl-1'> Language-guided 3D scene understanding
              </b>.</li>
          </ol>
        </div>
      
        <Title  title="PhD" />
        <p className="w-4/5 md:w-4/5 text-white text-xl">
        <h2 >General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
              <li>
                You should have a   
                <b className='text-white pl-1'> bachelor's or master's degree in computer science or a related field, 
                with excellent academic performance
                </b>
                .</li>
              <li>
                You should have strong programming skills and be familiar with deep learning frameworks like PyTorch. 
                <b className='text-white pl-1 pr-1'>     
                Winners of ACM/ICPC or NOI/IOI
                </b>
                 are preferred.</li>
              <li>
                You should have some research experience in computer vision/machine learning. 
                <b className='text-white pl-1'>     
                Having relevant research papers is a plus
                </b>.</li>
              <li>
                You should have good English reading, writing, and oral communication skills. 
                The English requirement for admission to SUTD's PhD program is approximately: 
                <b className='text-white pl-1'>     
                TOEFL {'>'}=90, IELTS {'>'}=6.51
                </b>.</li>
              <li>
                You should be 
                <b className='text-white pl-1'> self-motivated and passionate about research
                </b>.</li>
              
            </ol>
        </div>
        <p className="w-4/5 md:w-4/5 text-white text-xl">
        <h2 >PhD Scholarships:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
              <li>
                SUTD Graduate Fellowship: 
                The application deadline for Fall 2024 admission is February 2024. 
                For more details, please see 
                <b className='text-white pl-1'>     <a href='https://sutd.edu.sg/Admissions/Graduate/PhD-Programmes/SUTD-PhD-Programme'>
                  SUTD PhD Programme</a></b>.</li>
              <li>
                SINGA Scholarship: The application deadline for Fall 2024 admission is approximately December 1, 2023. 
                For more details, please see 
                <b className='text-white pl-1'>     <a href='https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa'>
                  SINGA</a></b>.
              </li>
              <li>
                If you have published a top conference paper as the first author, 
                you can also apply for the AISG Scholarship (5000 SGD per month). 
                The application deadline for Fall 2024 admission is February 2024. 
                For more details, please see 
                <b className='text-white pl-1'>     <a href='https://aisingapore.org/research/phd-fellowship-programme/'>
                  AISG PhD Fellowship Programme
                </a></b>.</li>
              <li>
                If you hold Singapore Citizen/PR status, 
                there are more scholarship options available (please email for consultation).
              </li>
              
              
            </ol>
        </div>

        <TitleS  title="PostDoc, Research Associate and Research Assistant" />
        <p className="w-4/5 md:w-4/5 text-white text-xl">
          <h2 >General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>

            <li>
              You should have a degree in computer science or related fields.
              Postdocs (Research Fellow) should have a <b className='text-white pl-1'>     PhD degree</b>, 
              research associates (Research Associate) should have a <b className='text-white pl-1'>     master's degree</b>, 
              and research assistants (Research Assistant) should have at least a <b className='text-white pl-1'>     bachelor's degree</b>.
            </li>
            <li>
              You should have solid programming skills, familiar with <b className='text-white pl-1'>     pytorch/tensorflow</b> or other deep learning frameworks.
            </li>
            <li>
              You should have multiple project experiences in computer vision/machine learning.
              <b className='text-white pl-1'>     
              Research associates and postdocs should have publications in top international conferences/journals</b>.
            </li> 
            <li>
              You should have strong English reading, writing, and communication skills.
              Postdocs should have the ability to write scientific papers and reports independently.
            </li> 
            <li>
            You should have              
            <b className='text-white pl-1 '>     
            strong self-motivation and research enthusiasm</b>.
            Postdocs should have the ability to conduct independent research.
            </li> 
          </ol>
        </div>

        <Title  title="How to apply?" />
        <p className="w-4/5 md:w-4/5 text-textDark ">
          Please send your English resume and transcript to Professor Na Zhao at 
          <b className='text-white pl-1'>     na_zhao@sutd.edu.sg     </b>, 
          and write a 1-2 page Research Proposal (not required for visiting students) 
          stating your interested research topic in 3D computer vision. 
          The email title should be: 
          [Target Position (PhD/Postdoc/Associate/Assistant/Visiting/etc) Application] 
          Your Name + Institution Name + Qualification (Bachelor/Master/PhD)
        </p>
      </div>
      
    </Layout>
  );
};

export default Joinus;

