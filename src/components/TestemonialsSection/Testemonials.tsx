import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import TestmmonialCard from "./testemonialCard/TestmmonialCard";
import useWindowSize from "../../hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../utils/sliderSettings";
const Testemonials = () => {
  const [width, height] = useWindowSize();
  console.log(width);
  let numberofSlidesToShow = 3;
  if (width < 630) {
    numberofSlidesToShow = 1;
  }
  console.log(numberofSlidesToShow);
  return (
    <div className={style.container}>
      <h2>
        Testmonials<span>!</span>
      </h2>
      <div className={style.testmonialRow}>
        <Slider
          {...settings}
          dots={false}
          //   autoplay={true}
          //   autoplaySpeed={1000}
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
