import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import HeroBlogPost from "../../components/heroBlogPost/HeroBlogPost";
import Navbar from "../../components/navbar/Navbar";
import style from "./index.module.scss";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import axios from "axios";
import { useState, useEffect } from "react";
import useDataFetch from "../../hooks/useGetData";
const Blogs = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  const { data, loading, error } = useDataFetch(
    "https://tazzweed.com/api/method/tazzweed.api.blog"
  );

  console.log(data[0], "blogs");
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1>
          {" "}
          News<span> & </span> Blogs
        </h1>
        {data[0] && <HeroBlogPost data={data[0]} />}
        <div className={style.postsContainer}>
          <h2>
            Have A quick view of our latest<span> Posts !</span>
          </h2>
          {data && (
            <>
              {data.length > 0 ? (
                data.map((item: any, i: number) => (
                  <BlogPostCard data={item} key={i} />
                ))
              ) : (
                <div> No Data</div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Blogs);
