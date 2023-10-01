import React, { FC } from "react";
import style from "./index.module.scss";
import p1 from "../../assets/images/p1.jfif";
import tick from "../../assets/images/tick.png";
interface MessageComponentProps {
  text: string;
  top: string;
  left: string;
  img: any;
}
const MessageComponent: FC<MessageComponentProps> = ({
  text,
  top,
  left,
  img,
}) => {
  return (
    <div className={style.container} style={{ top, left }}>
      <div className={style.messageContainer}>
        <p> {text} </p>
        <img src={tick} />
      </div>

      <div className={style.imageContainer}>
        <img src={img} />
      </div>
    </div>
  );
};

export default MessageComponent;
