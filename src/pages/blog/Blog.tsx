import { useParams } from "react-router-dom";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useGetData from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import BloggerCard from "../../components/bloggerCard/BloggerCard";
import Back from "../../components/back Button/Back";
import { BlogTimeInfo } from "../../components/blogtimeInfo/BlogTimeInfo";
const Blog = () => {
  const params = useParams();
  const { data, loading, error } = useGetData(
    `https://tazzweed.com/api/method/tazzweed.api.blogfilter?name=${params.id}`
  );
  const moreData = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.blog"
  )?.data.slice(0, 4);

  // const { content } = data[0];
  console.log(data);
  return (
    <>
      <Navbar />
      {data[0] ? (
        <div className={style.container}>
          <div className={style.backButtonContainer}>
            <Back />
          </div>
          <div className={style.blog}>
            <h1>{data[0].title}</h1>

            <div
              dangerouslySetInnerHTML={{ __html: data[0].content }}
              className={style.content}
            />
            <div className={style.blogTimeInfoMargin}>
              <BlogTimeInfo
                published_on={data[0].published_on}
                read_time={data[0].read_time}
              />
            </div>

            <BloggerCard data={data[0]} />
          </div>
          <div className={style.moreBlogsContainer}>
            <h3>
              More <span>Blogs!</span>
            </h3>
            {moreData?.map((item: any, i: number) => (
              <BlogPostCard data={item} key={i} />
            ))}
          </div>
        </div>
      ) : (
        "loading"
      )}
      {/* <div className={style.container}>
        <div className={style.backButtonContainer}>
          <Back />
        </div>
        <div className={style.blog}>
          <h1>{data[0].title}</h1>

          <div
            dangerouslySetInnerHTML={{ __html: data[0].content }}
            className={style.content}
          />
          <div className={style.blogTimeInfoMargin}>
            <BlogTimeInfo
              published_on={data[0].published_on}
              read_time={data[0].read_time}
            />
          </div>

          <BloggerCard data={data[0]} />
        </div>
        <div className={style.moreBlogsContainer}>
          <h3>
            More <span>Blogs!</span>
          </h3>
          {moreData?.map((item: any, i: number) => (
            <BlogPostCard data={item} key={i} />
          ))}
        </div>
      </div> */}

      <Footer />
    </>
  );
};
export default transition(Blog);
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
