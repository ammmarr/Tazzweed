import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useWindowSize from "../../hooks/useWindowSize";
import settings from "../../utils/sliderSettings";
import style from "./index.module.scss";
import TestmmonialCard from "./testemonialCard/TestmmonialCard";
const Testemonials = () => {
  const [width, height] = useWindowSize();
  let numberofSlidesToShow = 3;
  if (width < 630) {
    numberofSlidesToShow = 1;
  }
  return (
    <div className={style.container}>
      <h2>
        Testmonials<span>!</span>
      </h2>
      <div className={style.testmonialRow}>
        <Slider
          {...settings}
          dots={false}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
          slidesToShow={numberofSlidesToShow}
          className={style.slider}
        >
          <TestmmonialCard />
          <TestmmonialCard />
          <TestmmonialCard />
          <TestmmonialCard />
        </Slider>
      </div>
    </div>
  );
};

export default Testemonials;
