import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import "./style.css";
import settings from "../../utils/sliderSettings";
import useWindowSize from "../../hooks/useWindowSize";
import meeting1 from "../../assets/images/meeting1.jpg";
import meeting2 from "../../assets/images/meeting2.jpg";
import meeting3 from "../../assets/images/meeting3.jpg";
import doodle from "../../assets/images/doodle.png";
const ColloaboratedBrandsSection = () => {
  const [width, height] = useWindowSize();
  let numberofSlidesToShow = 3;
  if (width < 630) {
    numberofSlidesToShow = 1;
  }
  return (
    <div className={style.container}>
      <img src={doodle} className="doodleBG" />
      <div className={style.howItWorksContainer}>
        <div className={style.howItWorksWrapper}>
          <div className={style.slider}>
            <Slider {...settings} className={style.testt}>
              <div>
                <img className={style.imgContainer} src={meeting1} />
              </div>
              <div>
                <img src={meeting2} className={style.imgContainer} />
              </div>
              <div>
                <div>
                  <img src={meeting3} className={style.imgContainer} />
                </div>
              </div>
            </Slider>
          </div>
          <div className={style.textSection}>
            <h1>How it works</h1>
            <p>
              {" "}
              Seek our services by simply starting a WhatsApp conversation with
              Tazzweed. After that, we are fingertip away.
            </p>
            <div className={style.buttonContainer}>
              <WhatsappButton />
            </div>
          </div>
        </div>
      </div>
      <div className={style.mainTextSection}>
        <h1>
          Trusted by <br></br>a variety of brands
        </h1>
        <Slider
          {...settings}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          slidesToShow={numberofSlidesToShow}
          className={style.collaboratedBrandSlider}
        >
          <div className={style.sliderItemContainer}>
            <h3>1</h3>
          </div>
          <div className={style.sliderItemContainer}>
            <h3>2</h3>
          </div>
          <div className={style.sliderItemContainer}>
            <h3>3</h3>
          </div>
          <div className={style.sliderItemContainer}>
            <h3>4</h3>
          </div>
          <div className={style.sliderItemContainer}>
            <h3>5</h3>
          </div>
          <div className={style.sliderItemContainer}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ColloaboratedBrandsSection;
