import { FC } from "react";
import tick from "../../assets/images/tick.png";
import style from "./index.module.scss";
export interface MessageComponentProps {
  text: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  img: any;
}
const MessageComponent: FC<MessageComponentProps> = ({
  text,
  top,
  left,
  right,
  bottom,
  img,
}) => {
  return (
    <div className={style.container} style={{ top, left, bottom, right }}>
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
