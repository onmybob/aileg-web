import { treeType } from "@/types/treeType";

const docsNavData: treeType[] = [
  {
    id: 1,
    parentId: null,
    href: "",
    lable: "Introduction",
    icon: null,

    children: [
      {
        id: 6,
        parentId: 1,
        href: "/docs/introduction",
        lable: "What is aileg?",
        icon: null,
        children: [],
      },
    ],
  },
  {
    id: 2,
    parentId: null,
    href: "#",
    lable: "Quickstart",
    icon: null,
    children: [
      {
        id: 21,
        parentId: 2,
        href: "/docs/quickstart/overview",
        lable: "Overview",
        icon: null,
        children: [],
      },
      {
        id: 22,
        parentId: 2,
        href: "#",
        lable: "HTTP Headers",
        icon: null,
        children: [],
      },
      {
        id: 23,
        parentId: 2,
        href: "#",
        lable: "Response Headers",
        icon: null,
        children: [],
      },
      {
        id: 24,
        parentId: 2,
        href: "#",
        lable: "Hello World",
        icon: null,
        children: [],
      },
    ],
  },
  {
    id: 4,
    parentId: null,
    href: "#",
    lable: "Computer vision",
    icon: null,
    children: [
      {
        id: 41,
        parentId: 4,
        href: "#",
        lable: "Face recognition",
        icon: null,
        children: [],
      },
      {
        id: 42,
        parentId: 4,
        href: "#",
        lable: "Face generation",
        icon: null,
        children: [],
      },
      {
        id: 43,
        parentId: 4,
        href: "#",
        lable: "Skin beauty",
        icon: null,
        children: [],
      },
      {
        id: 44,
        parentId: 4,
        href: "#",
        lable: "License Plate Recognition",
        icon: null,
        children: [],
      },
    ],
  },
  {
    id: 3,
    parentId: null,
    href: "#",
    lable: "Data and Analytics",
    icon: null,
    children: [],
  },

  {
    id: 5,
    parentId: null,
    href: "#",
    lable: "Language processing",
    icon: null,
    children: [],
  },
  {
    id: 6,
    parentId: null,
    href: "#",
    lable: "Voice",
    icon: null,
    children: [],
  },
];

export default docsNavData;
