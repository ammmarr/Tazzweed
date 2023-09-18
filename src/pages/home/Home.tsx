import React from "react";
import Navbar from "../../components/navbar/Navbar";
import style from "./index.module.scss";
import background from "../../assets/images/home_bg.webp";
import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import WhoWeAreSection from "../../components/whoWeAreSection/WhoWeAreSection";
import ColloaboratedBrandsSection from "../../components/collaboratedBrandsSection/ColloaboratedBrandsSection";
import Testemonials from "../../components/TestemonialsSection/Testemonials";
import Footer from "../../components/footer/Footer";
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
