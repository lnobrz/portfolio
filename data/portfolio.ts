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
    category: "application dev",
    name: "Minimal Iphone",
    tag: "Design",
    coverImage: "/images/gallery/img_10.jpg",
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
