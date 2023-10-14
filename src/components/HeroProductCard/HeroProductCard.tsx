import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
const HeroProductCard = () => {
  const params = useParams();
  console.log(params);
  const { data, loading, error } = useGetData(
    `https://tazzweed.com/api/method/tazzweed.api.product_filter?name=${params.id}`
  );
  console.log(data[0]?.description);
  var htmlRegex = new RegExp("/</?[a-z][sS]*>/i");
  console.log();
  let content = <p className={style.p}>{data[0]?.description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(data[0]?.description)) {
    content = (
      <p
        className={style.p}
        dangerouslySetInnerHTML={{ __html: data[0]?.description }}
      ></p>
    );
  }
  return (
    <>
      {data[0] && (
        <div className={style.container}>
          <div className={style.imageContainer}>
            <img src={`https://tazzweed.com${data[0].thumbnail}`} />
          </div>
          <div className={style.textSection}>
            <h3 className={style.h3}>{data[0].item_group}</h3>
            <h1 className={style.h1}>{data[0].item_name}</h1>
            {content}
            <p className={style.p}>{data[0]?.description}</p>
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
