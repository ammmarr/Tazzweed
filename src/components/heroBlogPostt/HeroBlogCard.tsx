import { useParams } from "react-router-dom";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
const HeroBlogCard = ({ data }: any) => {
  const params = useParams();

  console.log(data);
  return (
    <>
      {data[0] && (
        <div className={style.container}>
          <div className={style.imageContainer}>
            <img src={data.meta_image} />
          </div>
          <div className={style.textSection}>
            <h3 className={style.h3}>Highlighted</h3>
            <h1 className={style.h1}>{data.name}</h1>
            <p className={style.p}></p>
            <div className={style.buttonAndContainer}>
              <WhatsappButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBlogCard;
