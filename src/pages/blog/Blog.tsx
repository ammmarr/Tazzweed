import React from "react";
import HeroBlogPost from "../../components/heroBlogPost/HeroBlogPost";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import style from "./index.module.scss";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
const Blog = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1>
          {" "}
          News<span> & </span> Blogs
        </h1>

        <HeroBlogPost />
        <div className={style.postsContainer}>
          <h2>
            Have A quick view of our latest<span> Posts !</span>
          </h2>

          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
