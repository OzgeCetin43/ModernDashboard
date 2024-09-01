import flag1 from "../images/organic-traffic-flag-1.jpg";
import flag2 from "../images/organic-traffic-flag-2.jpg";
import flag3 from "../images/organic-traffic-flag-3.jpg";
import flag4 from "../images/organic-traffic-flag-4.jpg";

type OrganicTrafficCountry = {
  id: number;
  flag: any;
  total: number;
  country: string;
  percentage: number;
};

export const organicTrafficCountries: OrganicTrafficCountry[] = [
  {
    id: 1,
    flag: flag1,
    total: 35.365,
    country: "USA",
    percentage: 2.5,
  },
  {
    id: 2,
    flag: flag2,
    total: 24.865,
    country: "Germany",
    percentage: 1.2,
  },
  {
    id: 3,
    flag: flag3,
    total: 18.369,
    country: "Spain",
    percentage: 0.8,
  },
  {
    id: 4,
    flag: flag4,
    total: 11.325,
    country: "Bahamas",
    percentage: 2.5,
  },
];
