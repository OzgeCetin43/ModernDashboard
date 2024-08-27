import img1 from "../images/post-1.jpg";
import img2 from "../images/post-2.jpg";
import img3 from "../images/post-3.jpg";

type Post = {
  id: number;
  image: any;
  title: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: 1,
    image: img1,
    title: "Design your apps in your own way",
    date: "15 Dec 2021",
  },
  {
    id: 2,
    image: img2,
    title: "Smartest Applications for Business",
    date: "28 Nov 2021",
  },
  {
    id: 3,
    image: img3,
    title: "How to get creative in your work",
    date: "21 Nov 2021",
  },
];
