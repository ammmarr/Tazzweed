import React from "react";
import style from "./index.module.scss";
import demo from "../../assets/images/demo1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={demo} />
        </div>
        <div className={style.textSection}>
          <h1 className={style.h1}>{data.title}</h1>
          <p className={style.p}>{data.body}</p>
          <div className={style.buttonContainer}>
            <Link
              className="button"
              style={{ fontSize: "10px" }}
              to={`/product/${data.id}`}
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
