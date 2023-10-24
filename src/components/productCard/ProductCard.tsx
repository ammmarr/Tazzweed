import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  let content = <p className={style.p}>{data?.description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(data?.description)) {
    content = (
      <p
        className={style.p}
        dangerouslySetInnerHTML={{ __html: data?.description }}
      ></p>
    );
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={`https://tazzweed.com${data.thumbnail}`} />
        </div>
        <div className={style.textSection}>
          <h1 className={style.h1}>{data.item_name}</h1>
          {content}
          <div className={style.buttonContainer}>
            <Link
              className="button"
              style={{ fontSize: "10px" }}
              to={`/product/${data.name}`}
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
