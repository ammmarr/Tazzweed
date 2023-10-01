import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import doodle from "../../assets/images/doodle.png";
const HomeHeroSection = () => {
  return (
    <div className={style.heroSectionContainer}>
      <img src={doodle} className="doodleBG" />
      <div className={style.textContainer}>
        <h1 className={style.mainHeading}>AI-powered {"\n"}</h1>
        <h1 className={style.mainHeading} style={{ color: "var(--green)" }}>
          Procurement Assistant
        </h1>
        <h4 className={style.p}>
          For you, your Business and everything else! Text Tazzweed
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
  );
};

export default HomeHeroSection;
