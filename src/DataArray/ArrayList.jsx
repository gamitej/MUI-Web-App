import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
} from "@mui/icons-material";

// List Items Array For Sidebar
export const listSidebar = [
  {
    href: "#home",
    icon: <Home />,
    primary: "Homepage",
  },
  {
    href: "#pages",
    icon: <Article />,
    primary: "Pages",
  },
  {
    href: "#groups",
    icon: <Group />,
    primary: "Groups",
  },
  {
    href: "#marketplace",
    icon: <Storefront />,
    primary: "Marketplace",
  },
  {
    href: "#friends",
    icon: <Person />,
    primary: "Friends",
  },
  {
    href: "#settings",
    icon: <Settings />,
    primary: "Settings",
  },
  {
    href: "#profile",
    icon: <AccountBox />,
    primary: "Profile",
  },
];
