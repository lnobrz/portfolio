export type ProjectInfo = {
  date: string;
  clientName: string;
  projectType: string;
  resume: string;
  about: string[];
  detailsTitle: string;
  details: string[];
  finalResult: string[];
  website: string;
};

export type ImageGallery = {
  src: string;
  width: number;
  height: number;
  alt: string;
}[];

type GalleryItem = {
  id: number;
  category: string;
  name: string;
  tag: string;
  coverImage: string;
  imageGallery: ImageGallery;
  slide: string[];
  projectInfo: ProjectInfo;
};

export type Item = GalleryItem;

export const items: Item[] = [
  {
    id: 1,
    category: "website institucional",
    name: "RB Ferragens",
    tag: "Website Institucional",
    coverImage: "/images/gallery/rb-ferragens-1.webp",
    slide: [
      "/images/gallery/rb-ferragens-1.webp",
      "/images/gallery/rb-ferragens-2.webp",
      "/images/gallery/rb-ferragens-3.webp",
      "/images/gallery/rb-ferragens-4.webp",
    ],
    imageGallery: [
      {
        src: "/images/gallery/rb-ferragens-5.webp",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/gallery/rb-ferragens-7.webp",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/gallery/rb-ferragens-6.webp",
        width: 960,
        height: 510,
        alt: "media",
      },
    ],
    projectInfo: {
      date: "06 de Junho, 2023",
      clientName: "RB Ferragens, Fortaleza/CE - Brasil",
      projectType: "UI/UX, Web Design",
      resume:
        "Projeto pioneiro para digitalizar a RB Ferragens, introduzindo um website institucional inovador e multifuncional.",
      about: [
        "O website da RB Ferragens foi projetado para catapultar a empresa no cenário digital, atendendo à necessidade de marcar presença online e alcançar novos clientes. Meu foco estava em tornar a empresa mais acessível e visível na internet, abrindo novos canais para localização e interação com o público.",
        "Além da criação do site, assumi um papel integral no desenvolvimento da identidade visual da empresa. Isso incluiu a configuração do Google My Business e Google Analytics, além de coordenar com um designer gráfico para a concepção de um logotipo representativo. Essas etapas foram cruciais para estabelecer uma presença coesa e profissional da RB Ferragens online.",
      ],
      detailsTitle: "Desbravando Novos Horizontes Digitais com a RB Ferragens",
      details: [
        "Iniciando com uma análise detalhada das necessidades do cliente, desenvolvi a identidade visual da RB Ferragens. Utilizei o Figma para desenhar interfaces intuitivas, realizando um extenso benchmarking. Este processo envolveu a análise de concorrentes para identificar oportunidades de destacar o website da RB Ferragens com um design e funcionalidades superiores.",
        "Para o desenvolvimento, escolhi a combinação de Next.js e TypeScript, visando otimizar o SEO e a qualidade do código. A escolha pelo Styled Components permitiu uma personalização avançada do estilo, além de eficiência no tempo de entrega. Todo o design foi construído do zero, alinhado ao objetivo de criar uma experiência de usuário única e atraente.",
        "Adicionalmente, incorporei animações sofisticadas usando Framer Motion, uma biblioteca de animações para React. Isso não só adicionou elegância ao website, mas também reforçou a sensação de um produto final bem polido e atento aos detalhes.",
      ],
      finalResult: [
        "O projeto da RB Ferragens culminou em um site único que reflete fielmente a essência do cliente. Sua entrada no mundo digital resultou em uma visibilidade significativa, atraindo novos clientes através de pesquisas online. O site não apenas cumpriu seu objetivo, mas também se destacou como uma vitrine digital para a empresa.",
        "Como meu primeiro projeto freelancer, o website da RB Ferragens foi uma jornada enriquecedora. Ele reforçou a importância da inclusão digital para pequenas empresas e a relevância do design na construção de softwares impactantes. Agradeço à RB Ferragens pela oportunidade de contribuir para sua transformação digital e por confiar em meu trabalho para dar este importante passo.",
      ],
      website: "https://www.rbferragens.com.br",
    },
  },
  {
    id: 2,
    category: "Desenvolvimento de Aplicativo",
    name: "HP Smart",
    tag: "Aplicação",
    coverImage: "/images/gallery/hp-smart-4.webp",
    slide: [
      "/images/gallery/hp-smart-1.webp",
      "/images/gallery/hp-smart-2.webp",
      "/images/gallery/hp-smart-3.webp",
    ],
    imageGallery: [
      {
        src: "/images/gallery/hp-smart-1.webp",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/gallery/hp-smart-3.webp",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/gallery/hp-smart-2.webp",
        width: 960,
        height: 510,
        alt: "media",
      },
    ],
    projectInfo: {
      date: "06 de Março de 2022",
      clientName: "Instituto Atlântico, Fortaleza/CE - Brasil",
      projectType: "Desenvolvimento de Aplicativos, Front-end",
      resume: "HP Smart: Renomada Aplicação de Impressão da HP",
      about: [
        "HP Smart, a aplicação líder mundial em impressão da HP, oferece uma experiência de usuário abrangente para os proprietários de impressoras HP. Esta aplicação não só facilita a impressão de documentos e a gestão de impressoras, mas também disponibiliza uma variedade de funcionalidades avançadas, como automação de tarefas de impressão, digitalização de documentos e edição de texto. Durante o período pandêmico, HP Smart emergiu como uma ferramenta essencial, contribuindo significativamente para a continuidade do trabalho remoto e apoiando inúmeras empresas em tempos desafiadores.",
      ],
      detailsTitle: "HP Smart: Inovação e Impacto Global",
      details: [
        "Desenvolver o HP Smart foi um desafio empolgante, envolvendo o uso de tecnologias de ponta como React, Typescript e Styled Components para a criação de interfaces, além de Jest e React Testing Library para testes unitários. O projeto destacou-se pela sua complexidade e base de usuários ativa em milhões. A minha jornada incluiu a colaboração com uma equipe multinacional e multifuncional, incluindo membros dos EUA e China, abrangendo designers, Product Owners, Scrum Masters e Technical Project Managers, todos trabalhando juntos sob a metodologia Scrum.",
      ],
      finalResult: [
        "Ao longo de dois anos, entreguei várias interfaces com foco em responsividade, performance e aderência às melhores práticas de design. Meus esforços também se concentraram na resolução eficaz de inúmeros bugs e na elaboração de documentações de software detalhadas, bem como estudos sobre melhorias futuras para a aplicação. Contribuir para que o HP Smart se tornasse a principal aplicação de impressão do mundo foi uma experiência gratificante. Os feedbacks positivos dos usuários e stakeholders sobre o produto desenvolvido são extremamente recompensadores, e é um orgulho ver o impacto global da minha contribuição.",
      ],
      website: "https://www.hpsmart.com/",
    },
  },
  {
    id: 3,
    category: "application design marketing",
    name: "Minimal Iphone",
    tag: "Design",
    coverImage: "/images/gallery/img_12.jpg",
    imageGallery: [
      {
        src: "/images/media/img_89.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_90.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_91.jpg",
        width: 960,
        height: 510,
        alt: "media",
      },
    ],
    slide: [
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
    ],
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
      resume: "",
      about: [""],
      detailsTitle: "",
      details: [""],
      finalResult: [""],
      website: "",
    },
  },
  {
    id: 4,
    category: "design dev",
    name: "Mobile Application",
    tag: "Appliction",
    coverImage: "/images/gallery/img_13.jpg",
    slide: [
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
    ],
    imageGallery: [
      {
        src: "/images/media/img_89.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_90.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_91.jpg",
        width: 960,
        height: 510,
        alt: "media",
      },
    ],
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
      resume: "",
      about: [""],
      detailsTitle: "",
      details: [""],
      finalResult: [""],
      website: "",
    },
  },
  {
    id: 5,
    category: "application dev",
    name: "Minimal Iphone",
    tag: "Design",
    coverImage: "/images/gallery/img_14.jpg",

    slide: [
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
      "/images/gallery/img_10.jpg",
    ],
    imageGallery: [
      {
        src: "/images/media/img_89.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_90.jpg",
        width: 460,
        height: 400,
        alt: "media",
      },
      {
        src: "/images/media/img_91.jpg",
        width: 960,
        height: 510,
        alt: "media",
      },
    ],
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
      resume: "",
      about: [""],
      detailsTitle: "",
      details: [""],
      finalResult: [""],
      website: "",
    },
  },
];
