import Testemonials from "../../components/TestemonialsSection/Testemonials";
import ColloaboratedBrandsSection from "../../components/collaboratedBrandsSection/ColloaboratedBrandsSection";
import Footer from "../../components/footer/Footer";
import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import MessageComponent from "../../components/messageComponent/MessageComponent";
import Navbar from "../../components/navbar/Navbar";
import WhoWeAreSection from "../../components/whoWeAreSection/WhoWeAreSection";
import transition from "../../utils/transitions/transitions";
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

export default transition(Home);
