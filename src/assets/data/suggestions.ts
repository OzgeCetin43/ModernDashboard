import img1 from "../images/suggestion-1.jpg";
import img2 from "../images/suggestion-2.jpg";
import img3 from "../images/suggestion-3.jpg";

type Suggestion = {
  id: number;
  image: any;
  name: string;
  title: string;
};

export const suggestions: Suggestion[] = [
  {
    id: 1,
    image: img1,
    name: "Ester James",
    title: "Frontend Developer",
  },
  {
    id: 2,
    image: img2,
    name: "Jacqueline Steve",
    title: "UI/UX Designer",
  },
  {
    id: 3,
    image: img3,
    name: "George Whalen",
    title: "Backend Developer",
  },
];
