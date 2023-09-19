import style from "./index.module.scss";
import Map from "../../components/MapComponent/Map";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  const handleSubmit = async (data: any) => {
    try {
      await axios.post("/api/private/contact", data);
    } catch (er) {
      console.log(er);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      company: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit(values);
      resetForm();
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(1, "Name is too short")
        .max(20, "Name is too long"),
      email: yup.string().email(),
      message: yup.string(),
      company: yup.string(),
      phoneNumber: yup.string(),
    }),
  });

  return (
    <>
      <Navbar bgColor={"black"} color="white" />

      <div className={style.container}>
        <h1>
          Send Us a Message<span className={style.contrastingColor}>!</span>
        </h1>
        <div className={style.formAndMapsWrapper}>
          <form className={style.form}>
            <div className={style.formRow}>
              <div className={style.inputContainer}>
                <label>
                  Name{" "}
                  {formik.errors.name && formik.touched.name ? (
                    <span className={style.errorMessage}>
                      {formik.errors.name}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="name"
                  name="name"
                  id="name"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className={style.inputContainer}>
                <label>
                  Email{" "}
                  {formik.errors.email && formik.touched.email ? (
                    <span className={style.errorMessage}>
                      {formik.errors.email}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.inputContainer}>
                <label>
                  Phone{" "}
                  {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                    <span className={style.errorMessage}>
                      {formik.errors.phoneNumber}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="EnterYour Phone"
                  name="phoneNumber"
                  id="phoneNumber"
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
              </div>

              <div className={style.inputContainer}>
                <label>
                  Company{" "}
                  {formik.errors.company && formik.touched.company ? (
                    <span className={style.errorMessage}>
                      {formik.errors.company}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your company's name"
                  name="company"
                  id="company"
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={style.textAreaWrapper}>
              <label>
                Message{" "}
                {formik.errors.message && formik.touched.message ? (
                  <span className={style.errorMessage}>
                    {formik.errors.message}
                  </span>
                ) : null}
              </label>
              <textarea
                placeholder="Enter your message"
                name="message"
                id="message"
                onBlur={formik.handleBlur}
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <div className={style.buttonContainer}>
              <button> Submit</button>
            </div>
          </form>
          <div className={style.mapsWrapper}>
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
