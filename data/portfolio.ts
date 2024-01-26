export type ProjectInfo = {
  date: string;
  clientName: string;
  projectType: string;
  resume: string;
  about: string[];
  detailsTitle: string;
  details: string[];
  finalResult: string[];
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
      date: "23 de Junho, 2023",
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
    },
  },
  {
    id: 2,
    category: "design marketing",
    name: "Mobile Application",
    tag: "Appliction",
    coverImage: "/images/gallery/img_11.jpg",
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
    },
  },
];
