import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import Contact from "../contactUs/Contact.tsx";
import Product from "../product/Product.tsx";
import Products from "../products/Products.tsx";
import Home from "./Home";
import Blogs from "../blogs/Blogs.tsx";
import { Blog } from "../blog/Blog.tsx";

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
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
  {
    name: "blog",
    href: "/blog/:id",
    element: <Contact />,
  },
  {
    name: "product",
    href: "/product/:id",
    element: <Product />,
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
