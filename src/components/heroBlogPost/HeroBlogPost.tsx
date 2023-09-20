import { Link } from "react-router-dom";
import demo from "../../assets/images/demo1.jpg";
import style from "./index.module.scss";
const HeroBlogPost = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={demo} />
      </div>
      <div className={style.textSection}>
        <h3 className={style.h3}>Highlighted</h3>
        <h1 className={style.h1}>lorem as sda d asdalkasd ald f alsdf</h1>
        <p className={style.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          delectus sint veritatis eum amet expedita ullam optio praesentium. Quo
          recusandae nostrum quaerat quod cumque tenetur, facere eius alias
          repellendus rerum.
        </p>
        <div className={style.buttonAndContainer}>
          <Link className="button" to={""}>
            Read More
          </Link>
          <span>july 17 3 min read</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBlogPost;
