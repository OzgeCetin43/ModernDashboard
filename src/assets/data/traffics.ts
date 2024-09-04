import chrome from "../images/chrome.png";
import edge from "../images/edge.png";
import explorer from "../images/explorer.png";
import opera from "../images/opera.png";

type Traffic = {
  id: number;
  image: any;
  browser: string;
  sessions: number;
  sessionPercentage: number;
  bounceRate: number;
  transactions: number;
  transactionPercentage: number;
};

export const traffics: Traffic[] = [
  {
    id: 1,
    image: chrome,
    browser: "Chrome",
    sessions: 10853,
    sessionPercentage: 52,
    bounceRate: 52.8,
    transactions: 566,
    transactionPercentage: 92,
  },
  {
    id: 2,
    image: edge,
    browser: "Microsoft Edge",
    sessions: 2545,
    sessionPercentage: 47,
    bounceRate: 47.54,
    transactions: 498,
    transactionPercentage: 81,
  },
  {
    id: 3,
    image: explorer,
    browser: "Internet - Explorer",
    sessions: 1836,
    sessionPercentage: 38,
    bounceRate: 41.12,
    transactions: 455,
    transactionPercentage: 74,
  },
  {
    id: 4,
    image: opera,
    browser: "Opera",
    sessions: 1958,
    sessionPercentage: 31,
    bounceRate: 36.82,
    transactions: 361,
    transactionPercentage: 92,
  },
];
