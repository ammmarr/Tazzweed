import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroProductCard />
      <Footer />
    </div>
  );
};

export default Home;
