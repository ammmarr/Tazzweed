import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import transition from "../../utils/transitions/transitions";
import style from "./index.module.scss";
const Blog = () => {
  return (
    <>
      <Navbar bgColor="black" color="white" />
      <div className={style.container}>
        <div className={style.blog}>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ex
          </h1>

          <p>
            Entrepreneurship is risky yet possibly lucrative endeavour. Very few
            startups are able to remain in business. Here, we features the
            success of Tazzweed, which are enrolled in Jirlie Innovation Portal
          </p>
          <span>September 19, 2023 . 2 min</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            veritatis inventore assumenda natus quisquam ducimus dolores sunt
            possimus distinctio laudantium labore in nulla soluta voluptate
            magnam eveniet nisi, quas magni? Facere, natus sit quaerat
            laboriosam sapiente eum eos aliquam quae quidem ea libero
            asperiores? Numquam aliquam harum obcaecati molestias, itaque,
            blanditiis illum vitae eos dicta eius, enim in tenetur placeat.
            Recusandae tempora explicabo porro deserunt, quibusdam vitae
            consectetur beatae rem eveniet rerum sunt molestiae voluptatum eius
            tempore suscipit maiores, totam pariatur necessitatibus, iure quasi
            repellendus exercitationem? Dolore sequi quis dolorem! Similique
            ipsam quam culpa ea. Esse similique maxime adipisci unde ullam sint
            illum eius, soluta, molestias nulla reprehenderit inventore magnam,
            accusamus est assumenda. Cum voluptatibus odio temporibus eos minima
            provident.
          </p>
          <span>Published on September 19, 2023</span>
        </div>
        <div className={style.moreBlogsContainer}>
          <h3>
            More <span>Blogs!</span>
          </h3>
          <BlogPostCard />
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
export default transition(Blog);
