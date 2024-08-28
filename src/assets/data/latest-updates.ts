import { GiCycle } from "react-icons/gi";
import { CiBadgeDollar, CiBookmarkCheck } from "react-icons/ci";
import { IoAttachOutline } from "react-icons/io5";

type Update = {
  id: number;
  icon: any;
  description: string;
  time: string;
};

export const latestUpdates: Update[] = [
  {
    id: 1,
    icon: GiCycle,
    description:
      "David Linner requested money back for a double debit card charge",
    time: "10 minutes ago",
  },
  {
    id: 2,
    icon: CiBadgeDollar,
    description: "All sellers have received monthly payouts",
    time: "45 minutes ago",
  },
  {
    id: 3,
    icon: IoAttachOutline,
    description:
      "User Christopher Wallace is on hold and awaiting for staff reply",
    time: "2 hours ago",
  },
  {
    id: 4,
    icon: CiBookmarkCheck,
    description: "Ticket #43683 has been closed by Victoria Wilson",
    time: "April 25, 11:48",
  },
];
