import React from "react";
import Navbar from "../../components/navbar/Navbar";
import style from "./index.module.scss";
import useDataFetch from "../../hooks/useGetData";
import Footer from "../../components/footer/Footer";
const Terms = () => {
  const { data, loading, error } = useDataFetch(
    "https://tazzweed.com/api/method/tazzweed.api.terms"
  );
  console.log(data[0], "datatat");
  return (
    <div className={style.container}>
      <Navbar />
      <h1>Terms & Conditions</h1>
      <div className={style.textContainer}>
        <div
          dangerouslySetInnerHTML={{ __html: data[0]?.main_section_md }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
