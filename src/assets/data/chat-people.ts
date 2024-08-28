import img1 from "../images/history-1.jpg";
import img2 from "../images/history-2.jpg";
import img3 from "../images/history-3.jpg";
import img4 from "../images/history-4.jpg";
import img5 from "../images/history-5.jpg";
import img6 from "../images/history-6.jpg";

type ChatPerson = {
  id: number;
  image: any;
  fullName: string;
  newMessageNumber?: number;
  isActive: boolean;
};

export const chatPeople: ChatPerson[] = [
  {
    id: 1,
    image: img1,
    fullName: "Konnor Guzman",
    newMessageNumber: 4,
    isActive: true,
  },
  {
    id: 2,
    image: img2,
    fullName: "Travis Fuller",
    newMessageNumber: 2,
    isActive: false,
  },
  {
    id: 3,
    image: img3,
    fullName: "Alfredo Elliott",
    isActive: false,
  },
  {
    id: 4,
    image: img4,
    fullName: "Corey Evans",
    isActive: true,
  },
  {
    id: 5,
    image: img5,
    fullName: "Katrina West",
    newMessageNumber: 8,
    isActive: true,
  },
  {
    id: 6,
    image: img6,
    fullName: "Anthony Jensen",
    isActive: false,
  },
];
