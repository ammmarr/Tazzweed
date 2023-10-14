import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Contact from "../contactUs/Contact.tsx";
import Product from "../product/Product.tsx";
import Products from "../products/Products.tsx";
import Home from "./Home";
import Blogs from "../blogs/Blogs.tsx";
import Blog from "../blog/Blog.tsx";
import CookiesPage from "../cookies/CookiesPage.tsx";
import Terms from "../terms of use/Terms.tsx";
import Privacy from "../PrivacyPolicy/Privacy.tsx";

export const mainRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "Products & Services",
    href: "/products-and-services",
    element: <Products />,
  },
  {
    name: "Blog",
    href: "/blogs",
    element: <Blogs />,
  },
  {
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
];
export const allRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "Products & Services",
    href: "/products-and-services",
    element: <Products />,
  },
  {
    name: "Blog",
    href: "/blogs",
    element: <Blogs />,
  },

  {
    name: "blog",
    href: "/blog/:id",
    element: <Blog />,
  },
  {
    name: "product",
    href: "/product/:id",
    element: <Product />,
  },
  {
    name: "cookeis",
    href: "/cookies",
    element: <CookiesPage />,
  },
  {
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
  {
    name: "Terms Of Use",
    href: "/terms-of-use",
    element: <Terms />,
  },
  {
    name: "Privacy and Policy",
    href: "/privacy-policy",
    element: <Privacy />,
  },
];

mainRoutes;

export const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/tazzweed",
    icon: <FacebookRounded />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/tazzweed.ai/",
    icon: <Instagram />,
  },
  {
    name: "twitter",
    href: "https://twitter.com/tazzweedai",
    icon: <Twitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/100752194/",
    icon: <LinkedIn />,
  },
];
