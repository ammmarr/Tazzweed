import React from "react";
import style from "./index.module.scss";
import getDateInCostumeFormat from "../../utils/getDateInCustomFormat";
export const BlogTimeInfo = ({ published_on, read_time }: any) => {
  const date = getDateInCostumeFormat(published_on);
  return (
    <div className={style.buttonAndContainer}>
      <span className={style.info}>{date}</span>
      <span className={style.info}>
        Read Time: {read_time} {parseInt(read_time) > 2 ? "mins" : "min"}
      </span>
    </div>
  );
};
