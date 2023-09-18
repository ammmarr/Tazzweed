import Testemonials from "../../components/TestemonialsSection/Testemonials";
import ColloaboratedBrandsSection from "../../components/collaboratedBrandsSection/ColloaboratedBrandsSection";
import Footer from "../../components/footer/Footer";
import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import Navbar from "../../components/navbar/Navbar";
import WhoWeAreSection from "../../components/whoWeAreSection/WhoWeAreSection";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <HomeHeroSection />
      <WhoWeAreSection />
      <ColloaboratedBrandsSection />
      <Testemonials />
      <Footer />
    </div>
  );
};

export default Home;
