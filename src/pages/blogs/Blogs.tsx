import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import HeroBlogPost from "../../components/heroBlogPost/HeroBlogPost";
import Navbar from "../../components/navbar/Navbar";
import useDataFetch from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import BlogsFilter from "./blogsFilterUI/BlogsFilter";
import style from "./index.module.scss";
const Blogs = () => {
  const { data, loading, error } = useDataFetch(
    "https://tazzweed.com/api/method/tazzweed.api.blog"
  );

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
      {/* <BlogsFilter /> */}
      <Footer />
    </>
  );
};

export default transition(Blogs);
