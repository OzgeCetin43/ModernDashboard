import img1 from "../images/message-1.jpg";
import img2 from "../images/message-2.jpg";
import img3 from "../images/message-3.jpg";
import img4 from "../images/message-4.jpg";

type Message = {
  id: number;
  image: any;
  author: string;
  text: string;
  time: string;
};

export const messages: Message[] = [
  {
    id: 1,
    image: img1,
    author: "James Lemire",
    text: "We talked about a project on LinkedIn.",
    time: "30 min ago",
  },
  {
    id: 2,
    image: img2,
    author: "Angela Bernier",
    text: "Answered to your comment on the cash flow forecast's graph 🏆.",
    time: "2 hrs ago",
  },
  {
    id: 3,
    image: img3,
    author: "Kenneth Brown",
    text: "Mentionned you in this comment on 📃 invoice #12501.",
    time: "10 hrs ago",
  },
  {
    id: 4,
    image: img4,
    author: "Maureen Gibson",
    text: "We talked about a project on LinkedIn.",
    time: "3 days ago",
  },
];
