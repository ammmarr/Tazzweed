import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import FilterCard from "../../components/filterCard/FilterCard";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Products = () => {
  const [listOfProducts, setListOfProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (data) setListOfProducts(data);
    } catch (er) {
      console.error(er);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1>
          Our Products <span>!</span>
        </h1>
        <div className={style.filterAndDisplayContainer}>
          <FilterCard />
          <DisplayProducts data={listOfProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
