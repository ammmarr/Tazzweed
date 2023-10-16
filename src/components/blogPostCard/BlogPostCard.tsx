import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
const BlogPostCard: FC<any> = ({ data }) => {
  const blog = 1;
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <h1 className={style.h1}>{data.title}</h1>
        <span>{data.blog_category_name}</span>
        <p className={style.p}>{data.meta_description}</p>
        <BloggerCard data={data} />
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

export default BlogPostCard;
