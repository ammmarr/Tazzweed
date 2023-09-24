import React from "react";
import style from "./index.module.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}></div>
      <Footer />
    </>
  );
};
