import { FC } from "react";
import style from "./index.module.scss";

interface TestmmonialCardProps {
  name: string;
  photo: any;
  testmonial: string;
  position: string;
}
const TestmonialCard: FC<any> = ({
  person,
  blogger_photo_link,
  blogger_bio,
  content,
  key,
}) => {
  // const TestmonialCard: FC<any> = ({ name, img, testmonial, position }) => {
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(content, "text/html");
  // const divElement = doc.body.firstChild;
  // console.log(divElement);
  // const contentParsed = replaceClassWithClassName(content);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageContainer}>
          <div className={style.imageWrapper}>
            <img src={`https://tazzweed.com${blogger_photo_link}`} />
          </div>
        </div>
        <h3>{person}</h3>
        {key}
        <h4>{blogger_bio}</h4>
        {/* <>{divElement}</>  */}
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        {/* <>{contentParsed}</> */}
      </div>
    </div>
    // <div className={style.container}>
    //   <div className={style.wrapper}>
    //     <div className={style.imageContainer}>
    //       <div className={style.imageWrapper}>
    //         <img src={img} />
    //       </div>
    //     </div>
    //     <h3>{name}</h3>
    //     <h4>{testmonial}</h4>
    //     {/* <>{divElement}</> */}
    //     {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}
    //     {/* <>{contentParsed}</> */}
    //   </div>
    // </div>
  );
};

export default TestmonialCard;
