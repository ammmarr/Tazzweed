import { FC, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
import { BlogTimeInfo } from "../blogtimeInfo/BlogTimeInfo";
const BlogPostCard: FC<any> = ({ data }) => {
  const blog = 1;
  const navigate = useNavigate();
  const handleContainerClick = (e: any) => {
    e.stopPropagation();
    navigate(`/article/${data.name}`);
  };
  return (
    <div className={style.container} onClick={(e) => handleContainerClick(e)}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <h1 className={style.h1}>{data.title}</h1>
        <h4
          onClick={() =>
            navigate(
              `/blogs/category/blog_category_name=${data.blog_category_name}`
            )
          }
        >
          {data.blog_category_name}
        </h4>
        <p className={style.p}>{data.meta_description}</p>
        <BloggerCard data={data} />
        <BlogTimeInfo
          read_time={data.read_time}
          published_on={data.published_on}
        />
      </div>
    </div>
  );
};

export default BlogPostCard;
