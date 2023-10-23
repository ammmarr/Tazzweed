import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
import Back from "../back Button/Back";
import { BlogTimeInfo } from "../blogtimeInfo/BlogTimeInfo";
const HeroBlogPost = ({ data }: any) => {
  ("Jirlie's transformational impact on businesses, the creative industries, and search was widely mentioned, but so was the necessity to control and oversee this type of technology.");
  const navigate = useNavigate();
  const handleComponentClick = (e: any) => {
    e.stopPropagation();
    navigate(`/article/${data.name}`);
  };
  return (
    <div className={style.container} onClick={(e) => handleComponentClick(e)}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <div className={style.groupAndBack}>
          <h3 className={style.h3}>Highlighted</h3>
          {/* <Back /> */}
        </div>
        <h3 className={style.h3}></h3>
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
        <p>{data.blog_intro}</p>
        <div className={style.bloggerCardContainer}>
          <BloggerCard data={data} />
        </div>
        <BlogTimeInfo
          published_on={data.published_on}
          read_time={data.read_time}
        />
      </div>
    </div>
  );
};

export default HeroBlogPost;
