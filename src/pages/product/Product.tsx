import productsData from "../../assets/peoductsMockData";
import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <HeroProductCard />
        <div className={style.moreProducts}>
          <h3>
            Similar <span>Products</span>
          </h3>
          {productsData.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Home);
