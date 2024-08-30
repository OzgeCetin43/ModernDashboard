import img1 from "../images/analytics-shape-1.svg";
import img2 from "../images/analytics-shape-2.svg";
import img3 from "../images/analytics-shape-3.svg";

type SaleAnalytics = {
  id: number;
  image: any;
  title: string;
  price: number;
  percentage?: number;
  description: string;
};

export const saleAnalytics: SaleAnalytics[] = [
  {
    id: 1,
    image: img1,
    title: "Daily Sales",
    price: 249.95,
    percentage: 36,
    description: "You made an extra 135,000 this day",
  },
  {
    id: 2,
    image: img2,
    title: "Monthly Sales",
    price: 365.68,
    percentage: 20,
    description: "You made an extra 122,659 this month",
  },
  {
    id: 3,
    image: img3,
    title: "Yearly Sales",
    price: 496.43,
    description: "You made an extra 235,068 this year",
  },
];
