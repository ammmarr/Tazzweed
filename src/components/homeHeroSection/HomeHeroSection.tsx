import doodle from "../../assets/images/doodle.png";
import MessagesWrapper from "../messageComponent/messagesWrapper/MessagesWrapper";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
const HomeHeroSection = () => {
  let display = false;

  if (window.innerWidth > 1062) display = true;

  return (
    <div className={style.heroSectionContainer}>
      <MessagesWrapper />
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
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
