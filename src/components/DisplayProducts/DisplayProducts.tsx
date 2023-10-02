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
  const { data } = props;
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
      {gridView
        ? data.map((item: any, i: number) => (
            <ProductCard data={item} key={i} />
          ))
        : data.map((item: any, i: number) => (
            <ProductCardSquare data={item} key={i} />
          ))}
    </div>
  );
};

export default DisplayProducts;
