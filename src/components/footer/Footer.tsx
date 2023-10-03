import logo from "../../assets/images/logo_white.png";
import { Link } from "react-router-dom";
import { mainRoutes, socialMediaLinks } from "../../pages/home/routes";
import style from "./index.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerContent}>
          <div className={style.footerFirst}>
            <img src={logo} alt="resturants Logo" />
          </div>
          <div className={style.footerMiddle}>
            {mainRoutes.map((link, i) => (
              <Link to={link.href} key={i}>
                {link.name}
              </Link>
            ))}{" "}
          </div>
          <div className={style.footerLast}>
            {socialMediaLinks.map((link, i) => (
              <div key={i}>
                <a className={style.smLinks}>{link.icon} </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.poweredBySection}>
        <a href="https://amirrushdy.wixsite.com/tazzweed/terms">
          {" "}
          Terms of use
        </a>
        <Link to="/cookies"> Cookies</Link>
        <a href="https://amirrushdy.wixsite.com/tazzweed/privacy-policy">
          {" "}
          Privacy Policy
        </a>
      </div>
      <div className={style.poweredBySection}>
        <p>
          Powered by Jirlie Enterprise, digital business transformation solution{" "}
          <a href="https://jirlie.com/"> jirlie</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
