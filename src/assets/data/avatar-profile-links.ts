import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CiBookmarkCheck, CiLock } from "react-icons/ci";
import { IoHelpBuoy, IoSettings } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";

type AvatarProfileLink = {
  id: number;
  icon: any;
  label: string;
  path: string;
};

export const avatarProfileLinks: AvatarProfileLink[] = [
  {
    id: 1,
    icon: FaUserCircle,
    label: "Profile",
    path: "/user-profile",
  },
  {
    id: 2,
    icon: MdOutlineMessage,
    label: "Messages",
    path: "/user-messages",
  },
  {
    id: 3,
    icon: CiBookmarkCheck,
    label: "Taskboard",
    path: "/user-taskboard",
  },
  {
    id: 4,
    icon: IoHelpBuoy,
    label: "Help",
    path: "/help",
  },
  {
    id: 5,
    icon: FaWallet,
    label: "Balance:  $5971.67",
    path: "/user-profile",
  },
  {
    id: 6,
    icon: IoSettings,
    label: "Settings",
    path: "/user-settings",
  },
  {
    id: 7,
    icon: CiLock,
    label: "Lock Screen",
    path: "/lock-screen",
  },
  {
    id: 8,
    icon: GrLogout,
    label: "Logout",
    path: "/logout",
  },
];
