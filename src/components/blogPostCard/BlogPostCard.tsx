import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
const BlogPostCard: FC<any> = ({ data }) => {
  const blog = 1;
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <h3 className={style.h3}>{data.name}</h3>
        <h1 className={style.h1}>{data.blog_intro}</h1>
        <p className={style.p}>{data.meta_description}</p>
        <div className={style.buttonAndContainer}>
          <Link className="button" to={`/blog/${data.name}`}>
            Read More ...
          </Link>
          <span>Published on : {data.published_on}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
