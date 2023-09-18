import React from "react";
import style from "./index.module.scss";
import img from "../../assets/images/whoweare_img.webp";
import WhatsappButton from "../whatsappButton/WhatsappButton";
const WhoWeAreSection = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={img} />
      </div>
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
      </div>
    </div>
  );
};

export default WhoWeAreSection;
