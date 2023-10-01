// import React from "react";
// import style from "./index.module.scss";
// import { mainRoutes } from "../../pages/home/routes";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/tazzweed_logo (1).png";
// const Footer = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.dividor} />
//       <div className={style.mainLinks}>
//         {mainRoutes.map((link) => (
//           <Link className={style.link} to={link.href}>
//             {link.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import logo from "@images/logo-gold.png";
import { Link } from "react-router-dom";
import { mainRoutes, socialMediaLinks } from "../../pages/home/routes";
import style from "./index.module.scss";

const Footer = () => {
  return (
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
  );
};

export default Footer;
