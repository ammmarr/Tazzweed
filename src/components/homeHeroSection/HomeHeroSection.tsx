import style from "./index.module.scss";
import stars from "../../assets/images/5star.png";
import background from "../../assets/images/home_bg.webp";
import WhatsappButton from "../whatsappButton/WhatsappButton";

const HomeHeroSection = () => {
  return (
    <div className="container">
      <div className={style.heroSectionContainer}>
        <div className={style.textContainer}>
          <h1 className={style.mainHeading}>Your AI-powered {"\n"}</h1>
          <h1 className={style.mainHeading} style={{ color: "#f0c40b" }}>
            Personal Assistant
          </h1>
          <h4 className={style.p}>
            For you, your Home, Pet, Car and everything else! Need a delivery,
            purchase, home or pet service? Simply text Yanzo!
          </h4>
          <div>
            {/* <div className={style.googleReviews}>
              <span className={style.googleReviews}>Google Reviews </span>
              <img src={stars} />
            </div> */}
            <WhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
