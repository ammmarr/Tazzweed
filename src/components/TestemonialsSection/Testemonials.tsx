import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import testmonialsData from "../../assets/testmonialsData";
import useGetData from "../../hooks/useGetData";
import useWindowSize from "../../hooks/useWindowSize";
import settings from "../../utils/sliderSettings";
import style from "./index.module.scss";
import TestmmonialCard from "./testemonialCard/TestmmonialCard";
const Testemonials = () => {
  const [width, height] = useWindowSize();
  const { data, loading, error } = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.testi"
  );

  let numberofSlidesToShow = 2;
  if (data.length >= 3) {
    numberofSlidesToShow = 3;
  }
  if (width < 630) {
    numberofSlidesToShow = 1;
  }

  return (
    <>
      {data.length > 0 && (
        <div className={style.container}>
          <h2>
            Testmonials<span>!</span>
          </h2>

          <div className={style.testmonialRow}>
            {/* <Slider
              {...settings}
              dots={false}
              // autoplay={true}
              // autoplaySpeed={2000}
              arrows={false}
              slidesToShow={numberofSlidesToShow}
              className={style.slider}
            >
              {testmonialsData.map((item: any, i) => (
               
                // <TestmmonialCard {...item} key={i} />
              ))}
            </Slider> */}
            <Slider
              {...settings}
              dots={false}
              autoplay={true}
              autoplaySpeed={2000}
              arrows={false}
              slidesToShow={numberofSlidesToShow}
              className={style.slider}
            >
              {data.map((item: any, i: number) => (
                <TestmmonialCard {...item} key={i} />
              ))}
            </Slider>
            {/* <Slider
              {...settings}
              autoplay={true}
              autoplaySpeed={3000}
              arrows={false}
              slidesToShow={numberofSlidesToShow}
              className={style.collaboratedBrandSlider}
            >
              {testmonialsData.map((item, i) => {
                return (
                  <div className={style.sliderItemContainer} key={i}>
                    {i}
                  </div>
                );
              })}
            </Slider> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Testemonials;
