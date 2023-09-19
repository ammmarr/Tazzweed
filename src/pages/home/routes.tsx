import {
  ArrowDropDown,
  FacebookRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import Home from "./Home";
import Contact from "../contactUs/Contact.tsx";

export const mainRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "Products & Services",
    href: "/what-we-do",
    element: <Contact />,
  },
  {
    name: "News",
    href: "/news",
    element: <Contact />,
  },
  {
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
];

mainRoutes;

export const socialMediaLinks = [
  {
    name: "Facebook",
    href: "facebook.com",
    icon: <FacebookRounded />,
  },
  {
    name: "instagram",
    href: "instagram.com",
    icon: <Instagram />,
  },
  {
    name: "twitter",
    href: "twitter.com",
    icon: <Twitter />,
  },
];
