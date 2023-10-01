import img from "../../assets/images/whoweare_img.webp";
import MessageComponent from "../messageComponent/MessageComponent";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import p1 from "../../assets/images/p1.jfif";
import p2 from "../../assets/images/p2.jfif";
import p3 from "../../assets/images/p3.jfif";
import p4 from "../../assets/images/p4.jfif";
import p5 from "../../assets/images/p5.jfif";
import p6 from "../../assets/images/p6.jfif";
const WhoWeAreSection = () => {
  let display = false;

  if (window.innerWidth > 825) display = true;
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
          text="I need assistance in sourcing raw materials for our manufacturing process. Can you help us find suitable suppliers?"
          top="-30%"
          left="-5%"
          img={p1}
        />
        {/* {/* <MessageComponent text="helloww" top="-30%" left="-2%" /> */}
        <MessageComponent
          text="We're looking for a supplier of eco-friendly packaging materials. Can you provide us with options?"
          top="110%"
          left="-0%"
          img={p2}
        />
        {display ? (
          <MessageComponent
            text="Can you help us locate a reputable electronics distributor for our upcoming product launch?"
            top="-40%"
            left="80%"
            img={p3}
          />
        ) : (
          <MessageComponent
            text="Can you help us locate a reputable electronics distributor for our upcoming product launch?"
            top="-40%"
            left="60%"
            img={p3}
          />
        )}
        {display ? (
          <MessageComponent
            text="We're interested in purchasing custom-branded merchandise for our company's promotional events. Can you find suppliers for this?"
            top="110%"
            left="75%"
            img={p4}
          />
        ) : (
          <MessageComponent
            text="We're interested in purchasing custom-branded merchandise for our company's promotional events. Can you find suppliers for this?"
            top="100%"
            left="65%"
            img={p4}
          />
        )}
        {display ? (
          <MessageComponent
            text="Do you have access to suppliers who can provide high-quality IT equipment for our office upgrade?"
            top="-60%"
            left="40%"
            img={p5}
          />
        ) : null}
        {display ? (
          <MessageComponent
            text="We're in need of a reliable food supplier for our restaurant. Can you recommend options with competitive pricing?
          "
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
