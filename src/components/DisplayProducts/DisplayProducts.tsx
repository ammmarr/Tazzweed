import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import style from "./index.module.scss";
import ProductCardSquare from "../productCard/productCardSquare/ProductCardSquare";

interface DisplayProductsProps {
  data: any;
  gridView: any;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const [productsCountToView, setProductsCountToView] = useState(10);
  const { data, gridView } = props;
  const displayableData = [...data].splice(0, productsCountToView);
  const addMore = () => {
    setProductsCountToView((prev: number) => prev + 10);
  };
  return (
    <div className={style.container}>
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
        {productsCountToView >= data.length ? (
          <div className="button" onClick={addMore}>
            Load More ...
          </div>
        ) : (
          <h2 style={{ textAlign: "center", margin: "10vh 0" }}>
            You are all caught up
          </h2>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
