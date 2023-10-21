import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useDataFetch from "../../hooks/useGetData";
import style from "./index.module.scss";
const Terms = () => {
  const { data, loading, error } = useDataFetch(
    "https://tazzweed.com/api/method/tazzweed.api.terms"
  );
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
