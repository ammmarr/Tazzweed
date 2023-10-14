import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import useGetData from "../../hooks/useGetData";
const Blog = () => {
  const { data, loading, error } = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.blogfilter?name=test"
  );
  const moreData = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.blog"
  )?.data.slice(0, 4);
  // const { content } = data[0];

  const rawDate = new Date(data[0]?.creation);
  const year = rawDate.getDate();
  const month = rawDate.getMonth();
  const day = rawDate.getDay();
  return (
    <>
      <Navbar bgColor="black" color="white" />
      {data[0] ? (
        <div className={style.container}>
          <div className={style.blog}>
            <h1>{data[0].meta_title}</h1>

            <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
            <span>
              {data[0].read_time}{" "}
              {parseInt(data[0].read_time) > 1 ? " mins" : "min"}
            </span>
            {/* <div dangerouslySetInnerHTML={{ __html: data.content }}></div> */}
            <span>
              Published on {year}/{month}/{day}
            </span>
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
      ) : null}

      <Footer />
    </>
  );
};
export default transition(Blog);
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
