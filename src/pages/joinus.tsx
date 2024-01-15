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
          We are currently looking for self-motivated PhD students 
          (starting from Fall 2024 or later) and Post-docs to work together on 
          3D computer vision. The specific research topics include (but are not limited to):
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark  pl-4">
          <ol style={{ listStyleType: 'decimal' }}>
            <li style={{ padding: '2px' }}>
              Data-efficient learning (includes semi-supervised learning, 
              few-shot learning, self-supervised learning) for 3D scene understanding;
            </li>
            <li style={{ padding: '2px' }}>
              
              Multi-modal joint learning for scene understanding with images and point clouds;
            </li>
            <li style={{ padding: '2px' }}>
              
              Out-of-distribution learning (includes domain adaptation/generalization and 
              open-vocabulary learning) for scene understanding;
            </li>
            <li style={{ padding: '2px' }}>
              
              Continual/incremental learning for 3D scene understanding;
            </li>
            <li style={{ padding: '2px' }}>
              
              Semantic 3D scene reconstruction that jointly reconstructs and understands scenes;
            </li>
            <li style={{ padding: '2px' }}>
              
              Language-guided 3D scene understanding such as 3D Visual Grounding and 3D QA;
            </li>
            <li style={{ padding: '2px' }}>
              
              3D Generation and Editing (object-level or scene-level).
            </li>
            {/* <li style={{ padding: '2px' }}>  
              <b className='text-white pl-1 pr-1'>   3D Reconstruction and 3D Generation
              </b>
              .
            </li> */}
            
            {/* <li style={{ padding: '2px' }}>
              <b className='text-white pl-1 pr-1'>     Data-efficient learning 
              </b>
                   (e.g., semi-supervised, few-shot learning, self-supervised learning) for 3D scene understanding;</li>
            <li style={{ padding: '2px' }}>
              <b className='text-white pl-1 pr-1'>     Multi-modal joint learning</b> 
            
            for scene understanding with images and point clouds;</li>
            <li style={{ padding: '2px' }}>
              
              <b className='text-white pl-1 pr-1'>     Out-of-distribution learning</b>
              (e.g., domain adaptation/generalization) on scene understanding;</li>
            
            <li style={{ padding: '2px' }}>
              <b className='text-white pl-1 pr-1'>     Online 3D scene understanding
              </b> that reconstructs and understands 3D scenes simultaneously;</li>
            
            <li style={{ padding: '2px' }}>
              <b className='text-white pl-1'> Language-guided 3D scene understanding
              </b>;</li>
            <li style={{ padding: '2px' }}>
            <b className='text-white pl-1 pr-1'>     Lifelong/continual learning
            </b>     for 3D scene understanding;</li> */}
          </ol>
        </div>
      
        <Title  title="PhD" />
        <p className="w-4/5 md:w-4/5 text-white text-xl">
        <h2 >General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
              <li style={{ padding: '2px' }}>
                You should have <b className='text-white pl-1'> a bachelor's or master's degree in computer science or a related field, with excellent academic performance. </b> 
              </li>
              <li style={{ padding: '2px' }}>
                You should have strong programming skills and be familiar with deep learning frameworks like PyTorch.
                <b className='text-white pl-1 pr-1'>     
                Winners of ACM/ICPC or NOI/IOIare preferred.
                </b>
              </li>
              <li style={{ padding: '2px' }}>
                You should have some research experience in computer vision/machine learning. 
                <b className='text-white pl-1'>     
                Having relevant research papers is a plus
                </b></li>
              <li style={{ padding: '2px' }}>
                You should have good English reading, writing, and oral communication skills. 
                The English requirement for admission to SUTD's PhD program is approximately:
                <b className='text-white pl-1'>     
                TOEFL &gt;=90, IELTS &gt;=6.5.
                </b>
              </li>
              <li style={{ padding: '2px' }}>
                You should be 
                <b className='text-white pl-1'> self-motivated 
                </b>
                and 
                <b className='text-white pl-1'> self-motivated 
                passionate about research.
                </b></li>
              
            </ol>
        </div>
        <p className="w-4/5 md:w-4/5 text-white text-xl">
        <h2 >PhD Scholarships:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
              <li style={{ padding: '2px' }}>
                SUTD Graduate Fellowship: The application deadline for Fall 2024 admission is 
                February 2024. For more details, please see  
                <b className='text-white pl-1'>     <a  style={{ textDecoration: 'underline' }} href='https://sutd.edu.sg/Admissions/Graduate/PhD-Programmes/SUTD-PhD-Programme'>
                  SUTD PhD Programme</a></b>.</li>
              <li style={{ padding: '2px' }}>
                SINGA Scholarship: The application deadline for 
                <b className='text-white pl-1'> Spring 2025</b> admission is 
                <b className='text-white pl-1'> 1 June, 2023</b>. 
                For more details, please see  
                <b className='text-white pl-1'>     <a  style={{ textDecoration: 'underline' }} href='https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa'>
                  SINGA</a></b>.
              </li>
              <li style={{ padding: '2px' }}>
                If you have published a top conference paper as the first author, 
                you can also apply for the AISG Scholarship (5000 SGD per month 
                for international students). The application deadline for Fall 
                2024 admission is 7 February 2024. For more details, please see  
                <b className='text-white pl-1'>     <a  style={{ textDecoration: 'underline' }} href='https://aisingapore.org/research/phd-fellowship-programme/'>
                  AISG PhD Fellowship Programme
                </a></b>.</li>
              <li style={{ padding: '2px' }}>
                If you hold Singapore Citizen/PR status, 
                there are more scholarship options available 
                (please email for consultation).
              </li>
              
              
            </ol>
        </div>

        <TitleS  title="PostDoc" />
        <p className="w-4/5 md:w-4/5 text-white text-xl">
          <h2 >General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal'}}>

            <li style={{ padding: '2px' }}>
              You should have a 
              <b className='text-white pl-1'>PhD degree in computer science or a related field</b>, 
              with a specialization on computer vision.
        
            </li>
            <li style={{ padding: '2px' }}>
              You should have a strong background in 
              <b className='text-white pl-1'>
                computer vision/machine learning/3D geometry 
              </b>,
              along with a 
              <b className='text-white pl-1'>solid grasp of mathematical concepts </b> 
              related to 
              <b className='text-white pl-1'>
              computer vision/machine learning</b>.
            </li>
            <li style={{ padding: '2px' }}>
              You should have multiple project experiences in 
              <b className='text-white pl-1'>
              computer vision/machine learning</b>
              , 
              coupled with a track record of 
              <b className='text-white pl-1'>
              publishing research papers in esteemed conferences or journals
              </b>
              . 
            </li> 
            <li style={{ padding: '2px' }}>
              You should have excellent 
              <b className='text-white pl-1'>
              problem-solving 
              
              and 
              
              analytical abilities
              </b>
              .
            </li> 
            <li style={{ padding: '2px' }}>
              You should have strong 
              <b className='text-white pl-1'>
              English reading 
              
              and 
              
              academic writing skills
              </b>
              .
            </li> 
            <li style={{ padding: '2px' }}>
              You should have 
              <b className='text-white pl-1'>
              effective communication skills 
              and 
              the ability to work collaboratively </b>
              in a research group.
            </li> 
            <li style={{ padding: '2px' }}>
              You should have strong 
              <b className='text-white pl-1'>
              self-motivation
              
              and 
              
               research enthusiasm
               </b>
              .
            </li> 
            <li style={{ padding: '2px' }}>
            You should have              
            <b className='text-white pl-1 '>     
            strong self-motivation 
            and 
            research enthusiasm</b>.
            Postdocs should have the ability to conduct independent research.
            </li> 
            
          </ol>
        </div>

        <Title  title="How to apply?" />
        <p className="w-4/5 md:w-4/5 text-textDark ">
          Please send your 
          <b className='text-white pl-1 '>  
          English resume, transcripts
          </b>, 
          together with a 
          <b className='text-white pl-1 '> 
          research proposal 
          </b>
          stating your interested research topic in 
          3D computer vision, to Professor Zhao Na at 
          <b className='text-white pl-1 '> 
          <a href='mailto:na_zhao@sutd.edu.sg'>na_zhao@sutd.edu.sg</a>
          </b>
          . 
          The email title should be: [Target Position (PhD/Postdoc) Application] 
          Your Name + Institution Name + Qualification (Bachelor/Master/PhD).
        </p>
      </div>
      
    </Layout>
  );
};

export default Joinus;

