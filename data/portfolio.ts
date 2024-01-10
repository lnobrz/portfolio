type ProjectInfo = {
  date: string;
  clientName: string;
  projectType: string;
};

type GalleryItem = {
  id: number;
  category: string;
  name: string;
  tag: string;
  image: string;
  projectInfo: ProjectInfo;
};

export type Item = GalleryItem;

export const items: Item[] = [
  {
    id: 1,
    category: "application dev",
    name: "Minimal Iphone",
    tag: "Design",
    image: "/images/gallery/img_10.jpg",
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
    },
  },
  {
    id: 2,
    category: "design marketing",
    name: "Mobile Application",
    tag: "Appliction",
    image: "/images/gallery/img_11.jpg",
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
    },
  },
  {
    id: 3,
    category: "application design marketing",
    name: "Minimal Iphone",
    tag: "Design",
    image: "/images/gallery/img_12.jpg",
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
    },
  },
  {
    id: 4,
    category: "design dev",
    name: "Mobile Application",
    tag: "Appliction",
    image: "/images/gallery/img_13.jpg",
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
    },
  },
  {
    id: 5,
    category: "application dev",
    name: "Minimal Iphone",
    tag: "Design",
    image: "/images/gallery/img_14.jpg",
    projectInfo: {
      date: "23 July, 2020",
      clientName: "Mariona Adisson, USA",
      projectType: "UI/UX, Web Design",
    },
  },
];
