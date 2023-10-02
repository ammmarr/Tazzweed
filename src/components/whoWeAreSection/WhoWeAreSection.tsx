import textData from "../../assets/textData";
import p1 from "../../assets/images/p1.jfif";
import p2 from "../../assets/images/p2.jfif";
import p3 from "../../assets/images/p3.jfif";
import p4 from "../../assets/images/p4.jfif";
import p5 from "../../assets/images/p5.jfif";
import p6 from "../../assets/images/p6.jfif";
import generateUniqueRandomNumbers from "../../utils/GenerateRandomArrayValues";
import MessageComponent from "../messageComponent/MessageComponent";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";

const WhoWeAreSection = () => {
  let display = false;

  if (window.innerWidth > 825) display = true;

  const randomData = generateUniqueRandomNumbers(11, 6);
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2>Who we are</h2>
        <p>
          Yanzo is the new personal assistant of choice for thousands of users
          across the GCC. With over a hundred 5-star reviews, we always ensure
          you get what you want! Simply text Yanzo with your requirements and
          sit back while we handle it all! Whether its arranging the perfect
          day, buying an item, taking care of your pet, cleaning your home,
          renting a car or anything else that comes to your mind, Yanzo can
          handle it all!
        </p>
        <WhatsappButton />
        <MessageComponent
          text={textData[0].text}
          top="-30%"
          left="-5%"
          img={p1}
        />
        {/* {/* <MessageComponent text="helloww" top="-30%" left="-2%" /> */}
        <MessageComponent
          text={textData[1].text}
          top="110%"
          left="-0%"
          img={p2}
        />
        {display ? (
          <MessageComponent
            text={textData[2].text}
            top="-40%"
            left="80%"
            img={p3}
          />
        ) : (
          <MessageComponent
            text={textData[2].text}
            top="-40%"
            left="60%"
            img={p3}
          />
        )}
        {display ? (
          <MessageComponent
            text={textData[3].text}
            top="110%"
            left="75%"
            img={p4}
          />
        ) : (
          <MessageComponent
            text={textData[3].text}
            top="100%"
            left="60%"
            img={p4}
          />
        )}
        {display ? (
          <MessageComponent
            text={textData[4].text}
            top="-60%"
            left="40%"
            img={p5}
          />
        ) : null}
        {display ? (
          <MessageComponent
            //@ts-ignore

            text={textData[4].text}
            top="110%"
            left="45%"
            img={p6}
          />
        ) : // <MessageComponent text="helloww" top="-20%" left="40%" />
        null}
      </div>
    </div>
  );
};

export default WhoWeAreSection;
