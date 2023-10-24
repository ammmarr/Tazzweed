import productsData from "../../assets/peoductsMockData";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import Back from "../../components/back Button/Back";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import useGetData from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
const Home = () => {
  const { data, loading, error } = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.products"
  );
  console.log(data.data, "dd");
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <HeroProductCard />
        <div className={style.moreProducts}>
          <h3>
            Similar <span>Products</span>
          </h3>
          {data.data && (
            <DisplayProducts
              data={data.data}
              gridView={true}
              displayCount={3}
            />
          )}
          {/* <DisplayProducts data={data.data} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Home);
