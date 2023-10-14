import style from "./index.module.scss";
import p1 from "../../assets/images/p1.jfif";
const BloggerCard = ({ data }: any) => {
  console.log(data, "card");
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={data.blogger_photo} />
      </div>
      <div className={style.textSection}>
        <h4>{data.blogger}</h4>
        <p dangerouslySetInnerHTML={{ __html: data.blogger_bio }}></p>
      </div>
    </div>
  );
};

export default BloggerCard;
