import tutorial1 from "../images/tutorial-1.jpg";
import tutorial2 from "../images/tutorial-2.jpg";
import tutorial3 from "../images/tutorial-3.jpg";
import tutorial4 from "../images/tutorial-4.jpg";

type Tutorial = {
  id: number;
  cover: any;
  title: string;
  description: string;
  date: string;
  star: number;
};

export const tutorials: Tutorial[] = [
  {
    id: 1,
    cover: tutorial1,
    title: "Web Design",
    description:
      "Web Design Trends: Provide an overview of current web design trends, such as minimalist design, microinteractions, dark mode, and immersive experiences.",
    date: "May 15, 2024",
    star: 5,
  },
  {
    id: 2,
    cover: tutorial2,
    title: "Web Development",
    description:
      "Web development is a vast field, and there are many other aspects and technologies involved. It's important to continuously learn and keep up with the latest trends and technologies to stay.",
    date: "May 12, 2024",
    star: 4,
  },
  {
    id: 3,
    cover: tutorial3,
    title: "UI Design",
    description:
      "UI design is an iterative process that involves research, ideation, prototyping, testing, and refinement. It requires a blend of creativity, user empathy, and understanding of design.",
    date: "May 9, 2024",
    star: 4.5,
  },
  {
    id: 4,
    cover: tutorial4,
    title: "UX Design",
    description:
      "UX design is a holistic approach that focuses on understanding and meeting user needs, ultimately aiming to create products that are valuable, usable, and delightful for the users.",
    date: "May 2, 2024",
    star: 3.5,
  },
];
