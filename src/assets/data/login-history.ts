import { IoPhonePortraitOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

type History = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const loginHistory: History[] = [
  {
    id: 1,
    icon: IoPhonePortraitOutline,
    title: "iPhone 12 Pro",
    description: "Los Angeles, United States - March 16 at 2:47PM",
  },
  {
    id: 2,
    icon: IoPhonePortraitOutline,
    title: "Apple iPad Pro",
    description: "Washington, United States - November 06 at 10:43AM",
  },
  {
    id: 3,
    icon: IoPhonePortraitOutline,
    title: "Galaxy S21 Ultra 5G",
    description: "Conneticut, United States - June 12 at 3:24PM",
  },
  {
    id: 4,
    icon: GrPersonalComputer,
    title: "Dell Inspiron 14",
    description: "Phoenix, United States - July 26 at 8:10AM",
  },
];
