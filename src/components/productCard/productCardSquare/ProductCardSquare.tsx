import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { FC } from "react";
import { ProductCardProps } from "../ProductCard";
const ProductCardSquare: FC<ProductCardProps> = ({ data }) => {
  let content = <p className={style.p}>{data?.description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(data[0]?.description)) {
    content = (
      <p
        className={style.p}
        dangerouslySetInnerHTML={{ __html: data[0]?.description }}
      ></p>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={`https://tazzweed.com${data.thumbnail}`} />
      </div>
      <div className={style.textContainer}>
        <h3>{data.item_name}</h3>
        <p></p>
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
  );
};

export default ProductCardSquare;
