import { Link } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
const HeroBlogPost = ({ data }: any) => {
  console.log(typeof data.blog_intro);
  ("Jirlie's transformational impact on businesses, the creative industries, and search was widely mentioned, but so was the necessity to control and oversee this type of technology.");
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <h3 className={style.h3}>Highlighted</h3>
        <h1 className={style.h1}>{data.title}</h1>
        <h4>{data.blog_category_name}</h4>
        <p>{data.blog_intro}</p>
        <div className={style.bloggerCardContainer}>
          <BloggerCard data={data} />
        </div>
        <div className={style.buttonAndContainer}>
          <Link className="button" to={`/article/${data.name}`}>
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
