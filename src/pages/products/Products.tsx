import { useEffect, useState } from "react";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import FilterCard from "../../components/filterCard/FilterCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import mockData from "../../mockData";
import style from "./index.module.scss";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import axios from "axios";
interface FilterObject {
  brand: string[];
  itemGroup: string[];
}
const Products = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [gridView, setGridView] = useState(true);

  const [filterObject, setFilterObject] = useState<FilterObject>({
    brand: [],
    itemGroup: [],
  });
  const brandsFilter = [...filterObject.brand].map(
    (item: string, i) => `column_name${i}=brand&value${i}=${item}&`
  );
  const itemGroupFilter = [...filterObject.itemGroup].map(
    (item: string, i) =>
      `column_name${
        brandsFilter.length + i > 0 ? brandsFilter.length + i : i + 1
      }=item_group&value${brandsFilter.length + i}=${item}&`
  );
  console.log(itemGroupFilter, "groupFilter");
  // Handle filter change

  const handleFilterChange = (e: any) => {
    console.log("clicked");
    const inputCategory = e.target.getAttribute("data-inputCategory");
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked && inputCategory == "brand") {
      const filteredArray = [...filterObject.brand].filter(
        (item) => item != value
      );
      setFilterObject({ ...filterObject, brand: [...filteredArray, value] });
      return;
    }
    if (!checked && inputCategory == "brand") {
      const filteredArray = [...filterObject.brand].filter(
        (item) => item != value
      );
      setFilterObject({ ...filterObject, brand: [...filteredArray] });
      return;
    }
    if (checked && inputCategory == "itemGroup") {
      const filteredArray = [...filterObject.itemGroup].filter(
        (item) => item != value
      );
      setFilterObject({
        ...filterObject,
        itemGroup: [...filteredArray, value],
      });
      return;
    }
    if (!checked && inputCategory == "itemGroup") {
      const filteredArray = [...filterObject.itemGroup].filter(
        (item) => item != value
      );
      setFilterObject({ ...filterObject, itemGroup: [...filteredArray] });
      return;
    }
  };
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  let numberofSlidesToShow = 3;

  useEffect(() => {
    async function getDataFunction() {
      const url = "https://tazzweed.com/api/method/tazzweed.api.products";
      try {
        const { data } = await axios.get(url);
        setData(data.message);
        setFilteredProducts(data.message);
      } catch (err) {
        console.log(err);
        setError("No Resuts");
      }
    }
    getDataFunction();

    return () => {
      setError("");
    };
  }, []);
  useEffect(() => {
    let url = "https://tazzweed.com/api/method/tazzweed.api.products";
    // https://tazzweed.com/api/method/tazzweed.api.productsfilter?column_name1=brand&value1=acv
    if (filterObject.brand.length > 0 || filterObject.itemGroup.length > 0) {
      url = `https://tazzweed.com/api/method/tazzweed.api.productsfilter?${brandsFilter.join(
        ""
      )}`;
    }

    async function getDataAfterFilters() {
      try {
        const { data } = await axios.get(url);
        setFilteredProducts(data.message);
      } catch (err) {
        console.log(err);
        setError("No Resuts");
      }
    }
    getDataAfterFilters();
  }, [filterObject]);
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1>
          Our Products <span>!</span>
        </h1>
        <div className={style.filterAndDisplayContainer}>
          <FilterCard
            products={data}
            onFilterChange={handleFilterChange}
            gridView={gridView}
            setGridView={setGridView}
          />
          <DisplayProducts data={filteredProducts} gridView={gridView} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Products);
