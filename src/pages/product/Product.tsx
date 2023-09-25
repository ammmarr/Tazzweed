import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
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
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
