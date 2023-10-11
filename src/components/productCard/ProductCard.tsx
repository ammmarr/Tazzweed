import React from "react";
import { Link } from "react-router-dom";
import demo from "../../assets/images/demo1.jpg";
import style from "./index.module.scss";

export interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={`https://tazzweed.com${data.thumbnail}`} />
        </div>
        <div className={style.textSection}>
          <h1 className={style.h1}>{data.item_name}</h1>
          <p className={style.p}>{data.name}</p>
          <div className={style.buttonContainer}>
            <Link
              className="button"
              style={{ fontSize: "10px" }}
              to={`/product/${data.item_code}`}
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
