import { IoDice } from "react-icons/io5";
import { RxMagicWand } from "react-icons/rx";
import { GiLotusFlower } from "react-icons/gi";
import { HiOutlineFaceSmile } from "react-icons/hi2";

type Faq = {
  id: number;
  icon: any;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 1,
    icon: IoDice,
    question: "What is an Admin Dashboard?",
    answer:
      "Admin Dashboard is the backend interface of a website or an application that helps to manage the website's overall content and settings. It is widely used by the site owners to keep track of their website, make changes to their content, and more.",
  },
  {
    id: 2,
    icon: RxMagicWand,
    question: "What should an admin dashboard template include?",
    answer:
      "Admin dashboard template should include user & SEO friendly design with a variety of components and application designs to help create your own web application with ease. This could include customization options, technical support and about 6 months of future updates.",
  },
  {
    id: 3,
    icon: GiLotusFlower,
    question: "Why should I buy admin templates from Wrappixel?",
    answer:
      "Wrappixel offers high-quality templates that are easy to use and fully customizable. With over 101,801 happy customers & trusted by 10,000+ Companies. Wrappixel is recognized as the leading online source for buying admin templates.",
  },
  {
    id: 4,
    icon: HiOutlineFaceSmile,
    question: "Do Wrappixel offers a money guarantee?",
    answer:
      "There is no money back guarantee in most companies, but if you are unhappy with our product, Wrappixel gives you a 100% money back guarantee.",
  },
];
