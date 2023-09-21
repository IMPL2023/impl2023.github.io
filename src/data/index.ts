const data = {
  name: 'IMPL',
  image: '/avatar.png',
  username: 'avneesh0612',
  keywords:
    'Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator',
  profession: 'FullStack web3 developer',
  intro:
    'We are a dynamic research group dedicated to advancing the fields of Computer Vision and Machine Learning. Our research spans across two major areas:',
  intro2:
    '(1) Computer Vision: 3D computer vision, 3D scene understanding such as object detection and semantic segmentation. ',
  intro3:
    ' (2) Machine Learning: data-efficient learning, out-of-distribution learning, multi-modal learning, robust learning, continual learning.',
  about:
    '',
  website: 'https://www.avneesh.tech',
  projects: [
    {
      name: 'thirdweb',
      image: '/projects/thirdweb.png',
      about:
        "Build web3 apps easily with thirdweb's powerful SDKs, audited smart contracts, and developer tools—for Ethereum, Polygon, Solana, & more.",
      tech: ['Web3', 'Next.js', 'Chakra UI', 'Typescript', 'Content writing'],
      links: {
        Live: 'https://thirdweb.com/',
        Github: 'https://github.com/thirdweb-dev',
      },
      role: 'Developer Relations Engineer',
    },
    {
      name: 'Yoke',
      image: '/projects/yoke.png',
      about:
        'YOKE is the leading NIL software enabling teams to grow a business through building community. Thousands of athletes earn monthly income through NIL Clubs powered by YOKE.',
      tech: ['Next.js', 'Chakra UI', 'Typescript', 'web3', 'thirdweb'],
      links: {
        Live: 'https://www.yoketeam.com/',
      },
      role: 'Fullstack web3 developer',
    },
    {
      name: 'Candypay',
      image: '/projects/candypay.png',
      about: 'Seamless, mobile-native NFT & Payments experiences on solana! 🍭',
      tech: ['Next.js', 'solana', 'Typescript'],
      links: {
        GitHub: 'https://github.com/candypay',
        Live: 'https://www.producthunt.com/posts/faucetli',
      },
      role: 'Fullstack web3 developer',
    },
  ],
  links: [
    {
      name: 'GitHub',
      icon: 'github.svg',
      link: 'https://github.com/Na-Z',
    },

    {
      name: 'Google Scholar',
      icon: 'google-scholar.svg',
      link: 'https://scholar.google.com/citations?user=KOL2dMwAAAAJ&hl=en&oi=ao',
    },

    {
      name: 'Mail me',
      icon: 'mail.svg',
      link: 'mailto:na_zhao@sutd.edu.sg',
    },
    
  ],
  news:[
    {
      date:'Sep 2023',
      content:'One paper about visual domain generalization is accepted by IJCV 2023!'
    },
    {
      date:'Aug 2023',
      content:'One paper about robust few-shot point cloud segmentation is accepted by BMVC 2023!'
    },
    {
      date:'Aug 2023',
      content:'I am awarded a grant titled "Towards Realistic Deep Learning for 3D Vision" from A*STAR as the co-Investigator!'
    },
    {
      date:'Jul 2023',
      content:'One paper about generalized few-shot point cloud segmentation is accepted by ICCV 2023!'
    },
    {
      date:'Jun 2023',
      content:'One paper about 6-DoF grasps synthesis is accepted by IROS 2023!'
    },
    {
      date:'May 2023',
      content:'One paper about monocular 3D object detection is accepted by TCSVT 2023!'
    },
    {
      date:'Mar 2023',
      content:'I am invited to serve as Demo Chair at Sixth IEEE International Conference on Multimedia Information Processing and Retrieval (MIPR 2023)!'
    },
    {
      date:'Feb 2023',
      content:'I am invited to join the Organising Committee of IEEE ICME 2023 Workshop on 3D Multimedia Analytics, Search and Generation!'
    },
    {
      date:'Oct 2022',
      content:'I am awarded a grant titled "Multi-modal Joint Learning for Scene Understanding" from SUTD-ZJU IDEA as the sole Principal Investigator!'
    },
    {
      date:'Sep 2022',
      content:'I am awarded a grant titled "Data-efficient 3D Object Detection for Robot Perception" from TL@SUTD as the sole Principal Investigator!'
    },
    {
      date:'Aug 2022',
      content:'I join the Singapore University of Technology and Design as an Assistant Professor!'
    },
    {
      date:'Jul 2022',
      content:'Three papers are accepted by ECCV 2022!'
    },
    {
      date:'Dec 2021',
      content:'One paper about class-incremental 3D object detection is accepted by AAAI 2022 as an oral paper!'
    },
    {
      date:'Jun 2021',
      content:'I am selected for the CVPR 2021 Doctoral Consortium. My mentor is Prof. Serge Belongie!'
    },
    {
      date:'May 2021',
      content:'I win the IMDA Excellent Prize for my PhD thesis!'
    },
    {
      date:'[Mar 2021]',
      content:'I successfully defended my PhD thesis "Towards Learning Scene Semantics on 3D Point Clouds"!'
    },
    {
      date:'Mar 2021',
      content:'One paper about few-shot 3D semantic segmentation is accepted by CVPR 2021!'
    },
    {
      date:'Aug 2020',
      content:'I recieve the Research Achievement Award from SoC!'
    },
    {
      date:'Feb 2020',
      content:'One paper about semi-supervised 3D object detection is accepted by CVPR 2020 as an oral paper!'
    },
  ],
  papers:[
    {
      image:'/papers/Style-Hallucinated.png',
      title:'Style-Hallucinated Dual Consistency Learning: A Unified Framework for Visual Domain Generalization',
      authors:['Yuyang Zhao', 'Zhun Zhong', 'Na Zhao', 'Nicu Sebe', 'Gim Hee Lee'],
      content:'',
      comment:'International Journal on Computer Vision (IJCV), 2023',
      pdf:'https://arxiv.org/pdf/2212.09068.pdf',
      video:'',
      project:'',
      code:'https://github.com/HeliosZhao/SHADE-VisualDG',
    },
    {
      image:'/papers/Generalized-Few-Shot.png',
      title:'Generalized Few-Shot Point Cloud Segmentation Via Geometric Words',
      authors:['Yating Xu', 'Conghui Hu', 'Na Zhao', 'Gim Hee Lee'],
      content:'',
      comment:'International Conference on Computer Vision (ICCV), 2023',
      pdf:'https://na-z.github.io/',
      video:'',
      project:'',
      code:'https://github.com/Pixie8888/GFS-3DSeg_GWs',
    },
    {
      image:'/papers/PDR.png',
      title:'PDR: Progressive Depth Regularization for Monocular 3D Object Detection',
      authors:['Hualian Sheng', 'Sijia Cai', 'Na Zhao#', 'Bing Deng', 'Min-Jian Zhao#', 'Gim Hee Lee', '# indicates co-corresponding author'],
      content:'',
      comment:'IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2023',
      pdf:'https://ieeexplore.ieee.org/abstract/document/10124735',
      video:'',
      project:'',
      code:'',
    },
    {
      image:'/papers/Rethinking.png',
      title:'Rethinking IoU-based Optimization for Single-stage 3D Object Detection',
      authors:['Hualian Sheng', 'Sijia Cai', 'Na Zhao*', 'Bing Deng', 'Jianqiang Huang', 'Xian-Sheng Hua', 'Min-Jian Zhao', 'Gim Hee Lee', '* indicates corresponding author'],
      content:'',
      comment:'European Conference on Computer Vision (ECCV), 2022',
      pdf:'https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136690536.pdf',
      video:'',
      project:'',
      code:'https://github.com/hlsheng1/RDIoU',
    },
    {
      image:'/papers/Teaching.png',
      title:'Teaching with Soft Label Smoothing for Mitigating Noisy Labels in Facial Expressions',
      authors:['Tohar Lukov', 'Na Zhao', 'Gim Hee Lee', 'Ser-Nam Lim'],
      content:'',
      comment:'European Conference on Computer Vision (ECCV), 2022',
      pdf:'https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136720639.pdf',
      video:'',
      project:'',
      code:'https://github.com/toharl/soft',
    },
    {
      image:'/papers/Style-Hallucinated-Dual Consistency.png',
      title:'Style-Hallucinated Dual Consistency Learning for Domain Generalized Semantic Segmentation',
      authors:['Yuyang Zhao', 'Zhun Zhong', 'Na Zhao', 'Nicu Sebe', 'Gim Hee Lee'],
      content:'',
      comment:'European Conference on Computer Vision (ECCV), 2022',
      pdf:'https://www.ecva.net//papers/eccv_2022/papers_ECCV//papers/136880530.pdf',
      video:'',
      project:'',
      code:'https://github.com/HeliosZhao/SHADE',
    },
    {
      image:'/papers/Static-Dynamic.png',
      title:'Static-Dynamic Co-Teaching for Class-Incremental 3D Object Detection',
      authors:['Na Zhao', 'Gim Hee Lee'],
      content:'',
      comment:'Thirty-Sixth AAAI Conference on Artificial Intelligence, 2022 Oral Presentation',
      pdf:'https://ojs.aaai.org/index.php/AAAI/article/view/20254',
      video:'',
      project:'',
      code:'https://github.com/Na-Z/SDCoT',
    },
    {
      image:'/papers/Few-shot.png',
      title:'Few-shot 3D Point Cloud Semantic Segmentation',
      authors:['Na Zhao', 'Tat-Seng Chua', 'Gim Hee Lee'],
      content:'',
      comment:'IEEE Conference on Computer Vision and Patten Recognition (CVPR), 2021',
      pdf:'https://arxiv.org/pdf/2006.12052.pdf',
      video:'https://www.youtube.com/watch?v=i5X1L1_03Rs',
      project:'',
      code:'https://github.com/Na-Z/attMPTI',
    },
    {
      image:'/papers/SESS.png',
      title:'SESS: Self-Ensembling Semi-Supervised 3D Object Detection',
      authors:['Na Zhao', 'Tat-Seng Chua', 'Gim Hee Lee'],
      content:'',
      comment:'IEEE Conference on Computer Vision and Patten Recognition (CVPR), 2020 Oral Presentation',
      pdf:'https://arxiv.org/pdf/1912.11803.pdf',
      video:'https://www.youtube.com/watch?v=AGJsp4aksS0',
      project:'',
      code:'https://github.com/Na-Z/sess',
    },
    {
      image:'/papers/PS2-Net.png',
      title:'PS^2-Net: A Locally and Globally Aware Network for Point-Based Semantic Segmentation',
      authors:['Na Zhao', 'Tat-Seng Chua', 'Gim Hee Lee'],
      content:'',
      comment:'25th International Conference on Pattern Recognition (ICPR), 2020',
      pdf:'https://arxiv.org/pdf/1908.05425.pdf',
      video:'https://www.youtube.com/watch?v=IupewGCU0o8',
      project:'',
      code:'https://github.com/Na-Z/PS-2Net',
    },
  ],
  members:[
    {
      name:'XXX XXX',
      type:'PhD',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'PhD',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'PhD',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'PhD',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'PostDoc',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'PostDoc',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'RA',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Visitor',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Visitor',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Visitor',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
    {
      name:'XXX XXX',
      type:'Mentee',
      comment:'xxxx',
      topic:'xxxx',
      image:'/members/'
    },
  ]
};

export default data;
