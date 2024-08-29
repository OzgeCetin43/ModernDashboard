import { IoIosSpeedometer } from "react-icons/io";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

type Menu = {
  id: number;
  label: string;
  icon: any;
  subMenu?: boolean;
  subMenuItems?: Array<{
    id: number;
    label: string;
    path: string;
  }>;
  path?: string;
};

export const menu: Menu[] = [
  {
    id: 1,
    label: "Dashboards",
    icon: IoIosSpeedometer,
    subMenu: true,
    subMenuItems: [
      {
        id: 2,
        label: "Analytics",
        path: "/",
      },
      {
        id: 3,
        label: "CRM",
        path: "/crm-dashboard",
      },
      {
        id: 4,
        label: "E-commerce",
        path: "/e-commerce-dashboard",
      },
      {
        id: 5,
        label: "Crypto",
        path: "/crypto-dashboard",
      },
      {
        id: 6,
        label: "Projects",
        path: "/projects-dashboard",
      },
      {
        id: 7,
        label: "NFT",
        path: "/nft-dashboard",
      },
      {
        id: 8,
        label: "Job",
        path: "/job-dashboard",
      },
    ],
  },
  {
    id: 9,
    label: "Apps",
    icon: AiOutlineAppstoreAdd,
    subMenu: true,
    subMenuItems: [
      {
        id: 10,
        label: "Calendar",
        path: "/calendar-app",
      },
      {
        id: 11,
        label: "Chat",
        path: "/chat-app",
      },
      {
        id: 12,
        label: "E-mail",
        path: "/e-mail-app",
      },
      {
        id: 13,
        label: "E-commerce",
        path: "/e-commerce-app",
      },
      {
        id: 14,
        label: "Projects",
        path: "/projects-app",
      },
      {
        id: 15,
        label: "Tasks",
        path: "/tasks-app",
      },
      {
        id: 16,
        label: "CRM",
        path: "/crm-app",
      },
      {
        id: 17,
        label: "Crypto",
        path: "/crypto-app",
      },
      {
        id: 18,
        label: "Invoices",
        path: "/invoices-app",
      },
      {
        id: 19,
        label: "Support Tickets",
        path: "/support-tickets-app",
      },
      {
        id: 20,
        label: "NFT Marketplace",
        path: "/nft-marketplace-app",
      },
      {
        id: 21,
        label: "File Manager",
        path: "/file-manager-app",
      },
      {
        id: 22,
        label: "To Do",
        path: "/to-do-app",
      },
      {
        id: 23,
        label: "Jobs",
        path: "/jobs-app",
      },
    ],
  },
  {
    id: 24,
    label: "Authentication",
    icon: FaUserLock,
    subMenu: true,
    subMenuItems: [
      {
        id: 25,
        label: "Sing In",
        path: "/sign-in",
      },
      {
        id: 26,
        label: "Sign Up",
        path: "/sign-up",
      },
      {
        id: 27,
        label: "Password Reset",
        path: "/password-reset",
      },
      {
        id: 28,
        label: "Password Create",
        path: "/password-create",
      },
      {
        id: 29,
        label: "Lock Screen",
        path: "/lock-screen",
      },
      {
        id: 30,
        label: "Logout",
        path: "/logout",
      },
      {
        id: 31,
        label: "Success Message",
        path: "/success-message",
      },
      {
        id: 32,
        label: "Two Step Verification",
        path: "/two-step-verification",
      },
      {
        id: 33,
        label: "Errors",
        path: "/errors",
      },
    ],
  },
  {
    id: 34,
    label: "Pages",
    icon: CgNotes,
    subMenu: true,
    subMenuItems: [
      {
        id: 35,
        label: "Profile",
        path: "/user-profile",
      },
      {
        id: 36,
        label: "Team",
        path: "/team",
      },
      {
        id: 37,
        label: "Timeline",
        path: "/timeline",
      },
      {
        id: 38,
        label: "FAQs",
        path: "/help",
      },
      {
        id: 39,
        label: "Pricing",
        path: "/pricing",
      },
      {
        id: 40,
        label: "Gallery",
        path: "/gallery",
      },
      {
        id: 41,
        label: "Maintenance",
        path: "/maintenance",
      },
    ],
  },
];
