import BlogPostCard from "../blogPostCard/BlogPostCard";
import ProductCard from "../productCard/ProductCard";
import style from "./index.module.scss";

interface DisplayProductsProps {
  data: any;
}
const DisplayProducts: React.FC<DisplayProductsProps> = (props) => {
  const { data } = props;
  return (
    <div className={style.container}>
      {data.map((item: any, i: number) => (
        <ProductCard data={item} key={i} />
      ))}
    </div>
  );
};

export default DisplayProducts;
