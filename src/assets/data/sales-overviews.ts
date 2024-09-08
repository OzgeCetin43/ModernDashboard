import { FaSackDollar, FaBus } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaClock, FaCubes, FaUsers } from "react-icons/fa";

type SalesOverview = {
  id: number;
  price?: number;
  amount?: number;
  label: string;
  icon: any;
};

export const salesOverviews: SalesOverview[] = [
  {
    id: 1,
    price: 67.6,
    label: "Income",
    icon: FaSackDollar,
  },
  {
    id: 2,
    price: 12.6,
    label: "Completed",
    icon: CiBookmarkCheck,
  },
  {
    id: 3,
    amount: 143,
    label: "Pending",
    icon: FaClock,
  },
  {
    id: 4,
    amount: 651,
    label: "Dispatch",
    icon: FaBus,
  },
  {
    id: 5,
    price: 46,
    label: "Products",
    icon: FaCubes,
  },
  {
    id: 6,
    price: 8.8,
    label: "Customers",
    icon: FaUsers,
  },
];
