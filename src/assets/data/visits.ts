type Visit = {
  id: number;
  channel: string;
  sessions: number;
  sessionPercentage: number;
  prevPeriod: number;
  prevPeriodPercentage: number;
  change: number;
  className: string;
};

export const visits: Visit[] = [
  {
    id: 1,
    channel: "Organic search",
    sessions: 10853,
    sessionPercentage: 52,
    prevPeriod: 566,
    prevPeriodPercentage: 92,
    change: 52.8,
    className: "change-increase",
  },
  {
    id: 2,
    channel: "Direct",
    sessions: 2545,
    sessionPercentage: 47,
    prevPeriod: 498,
    prevPeriodPercentage: 81,
    change: -17.2,
    className: "change-decrease",
  },
  {
    id: 3,
    channel: "Referal",
    sessions: 1836,
    sessionPercentage: 38,
    prevPeriod: 455,
    prevPeriodPercentage: 74,
    change: 41.12,
    className: "change-increase",
  },
  {
    id: 4,
    channel: "E-mail",
    sessions: 1958,
    sessionPercentage: 31,
    prevPeriod: 361,
    prevPeriodPercentage: 61,
    change: -8.24,
    className: "change-decrease",
  },
  {
    id: 5,
    channel: "Social",
    sessions: 1566,
    sessionPercentage: 26,
    prevPeriod: 299,
    prevPeriodPercentage: 49,
    change: 29.33,
    className: "change-increase",
  },
];
