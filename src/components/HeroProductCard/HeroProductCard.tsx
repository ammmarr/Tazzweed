import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import Back from "../back Button/Back";
const HeroProductCard = () => {
  const params = useParams();
  console.log(params);
  const { data, loading, error } = useGetData(
    `https://tazzweed.com/api/method/tazzweed.api.product_filter?name=${params.id}`
  );
  const displayData = data.data ? data.data[0] : null;
  var htmlRegex = new RegExp("/</?[a-z][sS]*>/i");
  let content = <p className={style.p}>{displayData?.description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(displayData?.description)) {
    content = (
      <p
        className={style.p}
        dangerouslySetInnerHTML={{ __html: displayData?.description }}
      ></p>
    );
  }
  console.log(displayData);
  return (
    <>
      {displayData && (
        <div className={style.container}>
          <div className={style.imageContainer}>
            <img src={`https://tazzweed.com${displayData.thumbnail}`} />
          </div>
          <div className={style.textSection}>
            <div className={style.groupAndBack}>
              <h3 className={style.h3}>{displayData.item_group}</h3>

              <Back />
            </div>

            <h1 className={style.h1}>{displayData.item_name}</h1>
            {content}
            <div className={style.buttonAndContainer}>
              <WhatsappButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroProductCard;
