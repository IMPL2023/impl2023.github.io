import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects, News } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Title } from '@/components/Common/Title';
import { TitleS } from '@/components/Common/TitleS';

function B() {
  const boldStyle = {
    fontWeight: 'bold', // 设置文本粗体样式
  };

  return <span style={boldStyle}></span>;
}
const Joinus: FC = () => {
  return (
    <Layout>
      <div className="space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0">
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          We are currently looking for self-motivated PhD students (starting
          from Fall 2026 or later), Post-docs (starting at any time), and
          Visiting graduate students (CSC-funded or self-funded) to work
          together on 3D computer vision. The specific research topics include
          (but are not limited to):
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark  pl-4">
          <ol style={{ listStyleType: 'decimal' }}>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                3D Scene Understanding with the following practical learning
                problems
              </b>
              :
              <ol style={{ listStyleType: 'disc' }}>
                <li>
                  Data-efficient learning (e.g., semi-supervised, few-shot, and
                  active learning)
                </li>
                <li>
                  Multi-modal joint learning (modalities include text, images,
                  depth maps, and point clouds)
                </li>
                <li>
                  Out-of-distribution learning (e.g., domain
                  adaptation/generalization, open-vocabulary learning)
                </li>
                <li>Continual learning</li>
              </ol>
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                3D Scene Reconstruction and Generation/Editing
              </b>
              :
              <ol style={{ listStyleType: 'disc' }}>
                <li>Generalizable 3D scene reconstruction</li>
                <li>Dynamic 3D scene reconstruction</li>
                <li>3D/4D scene generation</li>
                <li>3D/4D scene editing</li>
              </ol>
            </li>
            {/* <li style={{ padding: '2px' }}>
            <b className='text-text pl-1'>3D Scene Generation and Editing</b>:
              <ol style={{ listStyleType: 'disc' }}>
                <li>Text-to-3D</li>
                <li>Image-to-3D</li>
              </ol>
            </li> */}
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">Embodied AI</b>:
              <ol style={{ listStyleType: 'disc' }}>
                <li>Embodied perception (active perception)</li>
                <li>Embodied navigation</li>
                <li>Embodied manipulation</li>
              </ol>
            </li>
          </ol>
        </div>

        <Title title="PhD" />
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          <h2>General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
            <li style={{ padding: '2px' }}>
              You should have{' '}
              <b className="text-text pl-1">
                {' '}
                a bachelor's or master's degree in computer science or a related
                field, with excellent academic performance.{' '}
              </b>
            </li>
            <li style={{ padding: '2px' }}>
              You should have strong programming skills and be familiar with
              deep learning frameworks like PyTorch.
              <b className="text-text pl-1 pr-1">
                Winners of ACM/ICPC or NOI/IOIare preferred
              </b>
              .
            </li>
            <li style={{ padding: '2px' }}>
              You should have some research experience in computer
              vision/machine learning.
              <b className="text-text pl-1">
                Having relevant research papers is a plus
              </b>
              .
            </li>
            <li style={{ padding: '2px' }}>
              You should have good English reading, writing, and oral
              communication skills. The English requirement for admission to
              SUTD's PhD program is approximately:
              <b className="text-text pl-1">
                TOEFL &gt;=90, IELTS &gt;=6.5 (For exceptionally qualified
                applicants, English proficiency requirements may be relaxed).
              </b>
              .
            </li>
            <li style={{ padding: '2px' }}>
              You should be
              <b className="text-text pl-1">
                self-motivated, passionate about research
              </b>
              , and be able to
              <b className="text-text pl-1">
                withstand challenges and the intense pressure
              </b>{' '}
              of PhD work.
            </li>
          </ol>
        </div>
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          <h2>PhD Scholarships:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
            <li style={{ padding: '2px' }}>
              SUTD Graduate Fellowship: The application deadline for{' '}
              <b className="text-text pl-1">September 2026</b> is{' '}
              <b className="text-text pl-1">15 April 2026</b>. For more details,
              please see
              <b className="text-text pl-1">
                <a
                  style={{ textDecoration: 'underline' }}
                  href="https://www.sutd.edu.sg/programme-listing/sutd-phd-programme/financing/scholarship/"
                >
                  SUTD PhD Programme
                </a>
              </b>
              .
            </li>
            {/* <li style={{ padding: '2px' }}>
                SINGA Scholarship: The application deadline for 
                <b className='text-text pl-1'> Fall 2026 </b> admission is 
                <b className='text-text pl-1'> 1 December 2025</b>. 
                For more details, please see  
                <b className='text-text pl-1'>     <a  style={{ textDecoration: 'underline' }} href='https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa'>
                  SINGA</a></b>.
              </li> */}
            <li style={{ padding: '2px' }}>
              If you have published a top conference paper as the first author,
              you can also apply for the AISG Scholarship (6700 SGD per month
              for international students). The application deadline for
              <b className="text-text pl-1">September 2026 </b>
              admission is
              <b className="text-text pl-1">31 March 2026 </b>. For more
              details, please see
              <b className="text-text pl-1">
                {' '}
                <a
                  style={{ textDecoration: 'underline' }}
                  href="https://aisingapore.org/research/phd-fellowship-programme/"
                >
                  AISG PhD Fellowship Programme
                </a>
              </b>
              .
            </li>
            <li style={{ padding: '2px' }}>
              If you hold Singapore Citizen/PR status, there are more
              scholarship options available (please email for consultation).
            </li>
          </ol>
        </div>
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          <h2>What We Offer:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'disc' }}>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">Hands-on research guidance</b>
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">Comprehensive research support</b>,
              including sufficient computational resources and recruitment of
              undergraduate research assistants
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Diverse collaboration opportunities
              </b>
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Recommended internship opportunities at leading companies
              </b>
            </li>
          </ol>
        </div>
        <TitleS title="PostDoc" />
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          <h2>General Requirements:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'decimal' }}>
            <li style={{ padding: '2px' }}>
              A PhD in
              <b className="text-text pl-1">
                computer science (artificial intelligence, machine learning,
                computer vision, or related fields)
              </b>
              , with a solid theoretical foundation and extensive research
              experience.
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Significant research achievements in computer vision, machine
                learning
              </b>
              , etc. Ability to independently conduct research work, with
              relevant research papers or academic works (Preference will be
              given to applicants with experience in
              <b className="text-text pl-1">
                3D computer vision or those who have published in top journals
                or international conferences
              </b>
              ).
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">Strong programming skills</b>,
              proficient in Python, C++, and familiar with common deep learning
              frameworks (such as TensorFlow, PyTorch).
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Good teamwork spirit and academic communication skills
              </b>
              , able to collaborate effectively with team members from diverse
              backgrounds. Preference will be given to those with international
              academic exchange and project management experience.
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Proficiency in both written and spoken English
              </b>
              , with the ability to write academic papers/reports and
              communicate fluently with project collaborators.
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Strong self-motivation and problem-solving abilities
              </b>
              , able to independently conduct high-quality research. Innovation
              and passion for research, capable of driving project progress
              within a team.
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Strong research interest and curiosity
              </b>
              , willing to actively undertake research projects, mentor
              students, and participate in academic presentations and seminars.
              Ability to handle high-intensity research work and demonstrate
              independent working capabilities.
            </li>
          </ol>
        </div>
        <p className="w-4/5 md:w-4/5 text-text text-xl">
          <h2>What We Offer:</h2>
        </p>
        <div className="w-4/5 md:w-4/5 text-textDark pl-4 ">
          <ol style={{ listStyleType: 'disc' }}>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Highly competitive salary and benefits
              </b>{' '}
              .
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                Comprehensive academic support and resources
              </b>
              , with{' '}
              <b className="text-text pl-1">sufficient research funding</b>.
            </li>
            <li style={{ padding: '2px' }}>
              <b className="text-text pl-1">
                A positive academic atmosphere and an international work
                environment
              </b>
              , encouraging personal growth and career development.
            </li>
          </ol>
        </div>
        <TitleS title="Visiting Students" />
        <p className="w-4/5 md:w-4/5 text-text pl-4">
          We welcome CSC-funded or self-funded visiting graduate students with
          research experience in 3D computer vision or machine learning to visit
          and study in our lab.
        </p>

        <Title title="How to apply?" />
        <p className="w-4/5 md:w-4/5 text-textDark ">
          Please send your
          <b className="text-text pl-1"> English resume </b>,
          <b className="text-text pl-1">transcripts </b>, together with
          <b className="text-text pl-1">a research proposal in English </b>
          (optional for visiting students) stating your interested research
          topic in 3D computer vision, to Professor Zhao Na at
          <b className="text-text pl-1">na_zhao@sutd.edu.sg </b>. The email
          title should be: [Target Position (PhD/Postdoc/Visiting) Application]
          Your Name + Institution Name + Qualification (Bachelor/Master/PhD)
        </p>
      </div>
    </Layout>
  );
};

export default Joinus;
