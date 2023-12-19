import {
  SiDocker,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiTypescript,
  SiMui,
  SiVercel,
  SiNextdotjs,
  SiStrapi,
} from "react-icons/si";

const frontendIcons = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Nextjs" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiSass, name: "Sass" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiMui, name: "MaterialUI" },
];

const backendIcons = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiStrapi, name: "Strapi" },
  { icon: SiDocker, name: "Docker" },
];

const otherIcons = [
  { icon: SiGit, name: "Git" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiVercel, name: "Vercel" },
];

export { frontendIcons, backendIcons, otherIcons };
