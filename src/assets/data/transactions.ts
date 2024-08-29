import img1 from "../images/history-1.jpg";
import img2 from "../images/history-2.jpg";
import img3 from "../images/history-3.jpg";
import img4 from "../images/history-4.jpg";
import img5 from "../images/history-5.jpg";

type Transaction = {
  id: number;
  image: any;
  name: string;
  date: string;
  price: number;
  className: string;
};

export const transactions: Transaction[] = [
  {
    id: 1,
    image: img1,
    name: "Konnor Guzman",
    date: "Dec 21, 2021 - 08:05",
    price: 660.22,
    className: "transaction-increase",
  },
  {
    id: 2,
    image: img2,
    name: "Travis Fuller",
    date: "Dec 19, 2021 - 11:55",
    price: 33.63,
    className: "transaction-increase",
  },
  {
    id: 3,
    image: img3,
    name: "Alfredo Elliott",
    date: "Dec 16, 2021 - 14:45",
    price: 674.63,
    className: "transaction-increase",
  },
  {
    id: 4,
    image: img4,
    name: "Corey Evans",
    date: "Dec 13, 2021 - 11:30",
    price: 547.69,
    className: "transaction-decrease",
  },
  {
    id: 5,
    image: img5,
    name: "Katrina West",
    date: "Dec 10, 2021 - 09:41",
    price: 736.24,
    className: "transaction-increase",
  },
];
