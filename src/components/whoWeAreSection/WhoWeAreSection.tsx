import generateUniqueRandomNumbers from "../../utils/GenerateRandomArrayValues";
import MessagesWrapper2 from "../messageComponent/messagesWrapper2/MessagesWrapper";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";

const WhoWeAreSection = () => {
  let display = false;

  if (window.innerWidth > 825) display = true;

  const randomData = generateUniqueRandomNumbers(11, 6);
  return (
    <div className={style.container}>
      <MessagesWrapper2 />
      <div className={style.textContainer}>
        <h2>Who we are</h2>
        <p>
          With over a hundred 5-star reviews in very short time, Tazzweed became
          the new procurement tool of choice for thousands of users across the
          GCC. The role of Tazzweed as a tool in managing Enterprise supplies,
          enhancing efficiency, ensuring regulatory compliance and aiding
          decision-taking makes it indispensable for the success of customers.
        </p>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default WhoWeAreSection;
