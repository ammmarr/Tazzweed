import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import style from "./index.module.scss";
import ProductCardSquare from "../productCard/productCardSquare/ProductCardSquare";

interface DisplayProductsProps {
  data: any;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const [gridView, setGridView] = useState(true);
  const [productsCountToView, setProductsCountToView] = useState(10);
  const { data } = props;
  const displayableData = [...data].splice(0, productsCountToView);
  // console.log(props, "mid");
  const addMore = () => {
    setProductsCountToView((prev: number) => prev + 10);
  };
  console.log(displayableData);
  return (
    <div className={style.container}>
      <div className={style.viewContainer}>
        <div
          className={style.iconBg}
          style={
            gridView
              ? { backgroundColor: "transparent", color: "var(--dark)" }
              : { backgroundColor: "var(--dark)" }
          }
          onClick={() => setGridView(false)}
        >
          <GridViewIcon />
        </div>
        <div
          className={style.iconBg}
          style={
            !gridView
              ? { backgroundColor: "transparent", color: "var(--dark)" }
              : { backgroundColor: "var(--dark)" }
          }
          onClick={() => setGridView(true)}
        >
          <ListIcon />
        </div>
      </div>
      {gridView ? (
        displayableData.map((item: any, i: number) => (
          <ProductCard data={item} key={i} />
        ))
      ) : (
        <div className={style.sqaureProductsContainer}>
          {displayableData.map((item: any, i: number) => (
            <ProductCardSquare data={item} key={i} />
          ))}
        </div>
      )}
      <div className={style.loadMoreContainer}>
        <div className="button" onClick={addMore}>
          Load More ...
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
