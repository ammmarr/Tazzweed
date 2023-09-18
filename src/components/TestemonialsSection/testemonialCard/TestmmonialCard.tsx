import React from "react";
import style from "./index.module.scss";
import userImg from "../../../assets/images/userIMg.jpeg";
const TestmmonialCard = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageContainer}>
          <img src={userImg} />
        </div>
        <h3>Ammar</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          tempore dignissimos ut rem eos esse cumque illo quas culpa cum
          deleniti voluptate, a suscipit corporis nam reprehenderit sunt
          aliquid?
        </p>
      </div>
    </div>
  );
};

export default TestmmonialCard;
