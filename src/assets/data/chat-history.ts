import img1 from "../images/history-1.jpg";
import img2 from "../images/history-2.jpg";
import img3 from "../images/history-3.jpg";
import img4 from "../images/history-4.jpg";
import img5 from "../images/history-5.jpg";
import img6 from "../images/history-6.jpg";

type History = {
  id: number;
  image: any;
  name: string;
};

export const chatHistory: History[] = [
  {
    id: 1,
    image: img1,
    name: "Konnor",
  },
  {
    id: 2,
    image: img2,
    name: "Travis",
  },
  {
    id: 3,
    image: img3,
    name: "Alfredo",
  },
  {
    id: 4,
    image: img4,
    name: "Corey",
  },
  {
    id: 5,
    image: img5,
    name: "Katrina",
  },
  {
    id: 6,
    image: img6,
    name: "Anthony",
  },
];
