import { FC } from "react";
import style from "./index.module.scss";

interface TestmmonialCardProps {
  name: string;
  photo: any;
  testmonial: string;
  position: string;
}
const TestmonialCard: FC<TestmmonialCardProps> = ({
  name,
  photo,
  testmonial,
  position,
}) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageContainer}>
          <div className={style.imageWrapper}>
            <img src={photo} />
          </div>
        </div>
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{testmonial}</p>
      </div>
    </div>
  );
};

export default TestmonialCard;
