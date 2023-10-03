export type Project = {
  id: number;
  title: string;
  team: string;
  description: string;
  details: string;
  icons: string[];
  githubLink: string;
  demoLink: string;
  image: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MyYouTube",
    team: "",
    description: "Youtube clone application",
    details:
      "By logging in, users can access features such as 'subscribe' and 'watch later', enabling them to save their favorite videos.",
    icons: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/AtenaHatta/MyYouTube",
    demoLink: "https://my-you-tube-client-git-main-atenahatta.vercel.app/",
    image:
      "https://ik.imagekit.io/atcan/Group%201%20(1).png?updatedAt=1690743749251",
  },
  {
    id: 2,
    title: "Trivia guru",
    team: "Team project",
    description: "The ultimate quiz game",
    details:
      "Select a category and the number of questions to start the game. At the end, your answers will be displayed as a score.",
    icons: ["JavaScript", "jQuery", "Bootstrap"],
    githubLink: "https://github.com/Vvan31/MovieGuru",
    demoLink: "https://triviaguru.netlify.app/top.html",
    image: "https://ik.imagekit.io/atcan/truvia.png?updatedAt=1694512570823",
  },

  {
    id: 3,
    title: "Diagnose",
    team: "",
    description: "Black Trigger Diagnose",
    details:
      "A multiple-choice question with four options will appear. Depending on your answers, the final result will change.",
    icons: ["jQuery", "HTML", "CSS"],
    githubLink: "https://github.com/AtenaHatta/black_trigger_diagnose",
    demoLink: "https://blacktriggerdiagnose.netlify.app/",
    image:
      "https://ik.imagekit.io/atcan/Group%2012.png?updatedAt=1694559533161",
  },
];
