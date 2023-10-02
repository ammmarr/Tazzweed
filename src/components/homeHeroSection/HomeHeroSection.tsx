import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import doodle from "../../assets/images/doodle.png";
import textData, { TextData } from "../../assets/textData";
import MessageComponent from "../messageComponent/MessageComponent";
const HomeHeroSection = () => {
  let display = false;

  if (window.innerWidth > 1062) display = true;

  console.log(textData.map((each) => each));
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
          <WhatsappButton />
        </div>
        {display ? (
          <MessageComponent
            text={textData[11].text}
            top="50%"
            left="90%"
            img={textData[11].img}
          />
        ) : null}

        <MessageComponent
          text={textData[10].text}
          top="120%"
          left="-0%"
          img={textData[10].img}
        />
        {display ? (
          <MessageComponent
            text={textData[9].text}
            top="-30%"
            left="85%"
            img={textData[9].img}
          />
        ) : (
          <MessageComponent
            text={textData[9].text}
            top="-70%"
            left="55%"
            img={textData[9].img}
          />
        )}
        {display ? (
          <MessageComponent
            text={textData[8].text}
            top="120%"
            left="75%"
            img={textData[8].img}
          />
        ) : (
          <MessageComponent
            text={textData[8].text}
            top="160%"
            left="45%"
            img={textData[8].img}
          />
        )}
        {display ? (
          <MessageComponent
            text={textData[7].text}
            top="-40%"
            left="60%"
            img={textData[7].img}
          />
        ) : null}
        {display ? (
          <MessageComponent
            text={textData[7].text}
            top="120%"
            left="45%"
            img={textData[7].img}
          />
        ) : // <MessageComponent text="helloww" top="-20%" left="40%" />
        null}
      </div>
    </div>
  );
};

export default HomeHeroSection;
