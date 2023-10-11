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
  // console.log(props, "mid");
  const addMore = () => {
    setProductsCountToView((prev: number) => prev + 10);
  };
  console.log(displayableData);
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
        <div className="button" onClick={addMore}>
          Load More ...
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
