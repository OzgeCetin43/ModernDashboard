import { LuDollarSign } from "react-icons/lu";
import { GiExpense, GiDatabase } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";

type Balance = {
  id: number;
  icon: any;
  title: string;
  price: number;
  increase?: number;
  decrease?: number;
};

export const balance: Balance[] = [
  {
    id: 1,
    icon: LuDollarSign,
    title: "Income",
    price: 35.3,
    increase: 4.3,
  },
  {
    id: 2,
    icon: GiExpense,
    title: "Expense",
    price: 7.14,
    decrease: 1.9,
  },
  {
    id: 3,
    icon: GiDatabase,
    title: "Upcoming",
    price: 7.42,
    increase: 7.11,
  },
  {
    id: 4,
    icon: FaDownload,
    title: "Saving",
    price: 2.44,
    increase: 3.47,
  },
];
