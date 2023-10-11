import { Link } from "react-router-dom";
import demo from "../../assets/images/demo1.jpg";
import style from "./index.module.scss";
const HeroBlogPost = ({ data }: any) => {
  console.log(data, "hero");
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <h3 className={style.h3}>Highlighted</h3>
        <h1 className={style.h1}>{data.name}</h1>
        <p>{data.blog_intro}</p>
        <div className={style.buttonAndContainer}>
          <Link className="button" to={`/blog/${data.name}`}>
            Read More
          </Link>
          <span>{data.published_on}</span>
          <span>Read Time: {data.read_time} mins</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBlogPost;
