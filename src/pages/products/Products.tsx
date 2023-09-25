import { useEffect, useState } from "react";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import FilterCard from "../../components/filterCard/FilterCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import mockData from "../../mockData";
import style from "./index.module.scss";
interface FilterObject {
  brand: string[];
  itemGroup: string[];
}
const Products = () => {
  const [listOfProducts, setListOfProducts] = useState(mockData);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [filterObject, setFilterObject] = useState<FilterObject>({
    brand: [],
    itemGroup: [],
  });
  // Handle filter change

  const handleFilterChange = (e: any) => {
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
  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     if (data) setListOfProducts(data);
  //   } catch (er) {
  //     console.error(er);
  //   }
  // };
  // console.log();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.log(filteredProducts, "list f ");
  useEffect(() => {
    const filtered = [...listOfProducts].filter((item: any) => {
      if (filterObject.brand.length == 0 && filterObject.itemGroup.length == 0)
        return true;
      if (filterObject.brand.includes(item.brand)) return true;
      if (filterObject.itemGroup.includes(item.itemGroup)) return true;
    });
    setFilteredProducts(filtered);
  }, [filterObject]);
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1>
          Our Products <span>!</span>
        </h1>
        <div className={style.filterAndDisplayContainer}>
          <FilterCard products={mockData} onFilterChange={handleFilterChange} />
          <DisplayProducts data={filteredProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
