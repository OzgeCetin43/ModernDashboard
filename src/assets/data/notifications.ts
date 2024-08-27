import { TiTick } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";

import img1 from "../images/notification-1.jpg";
import img2 from "../images/notification-2.jpg";

type Notification = {
  id: number;
  icon?: any;
  image?: any;
  text: string;
  author?: string;
  time: string;
};

export const notifications: Notification[] = [
  {
    id: 1,
    icon: TiTick,
    text: "Your Elite author Graphic Optimization reward is ready!",
    time: "Just 30 sec ago",
  },
  {
    id: 2,
    image: img1,
    text: "Answered to your comment on the cash flow forecast's graph 🏆.",
    author: "Angela Bernier",
    time: "48 min ago",
  },
  {
    id: 3,
    icon: FaCommentDots,
    text: "You have received 20 new messages in the conversation.",
    time: "2 hrs ago",
  },
  {
    id: 4,
    image: img2,
    text: "We talked about a project on LinkedIn.",
    author: "Maureen Gibson",
    time: "4 hrs ago",
  },
];
