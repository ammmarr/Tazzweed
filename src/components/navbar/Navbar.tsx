import { Link } from "react-router-dom";
import logoBlack from "../../assets/images/Logo_black.jfif";
import logoWhite from "../../assets/images/Logo_white.jfif";

import { mainRoutes, socialMediaLinks } from "../../pages/home/routes";
import style from "./index.module.scss";
import MobNav from "./mobnav/MobNav";

type NavBarProps = {
  bgColor?: string;
  color?: string;
};
const Navbar = (props: NavBarProps) => {
  const { bgColor, color } = props;
  return (
    <div
      className={style.container}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className={style.logo}>
        {bgColor == "black" ? <img src={logoWhite} /> : <img src={logoBlack} />}
      </div>
      <div className={style.mainLinks}>
        {mainRoutes.map((each, i) => (
          <>
            <Link
              to={each.href}
              className={style.link}
              style={{ color: color }}
              key={i}
            >
              {each.name}
            </Link>
          </>
        ))}
      </div>
      <div className={style.socialMediaLinks}>
        {socialMediaLinks.map((each, i) => (
          <Link
            to={each.href}
            className={`${style.link} ${style.socialMediaLink}`}
            style={{ color: color }}
            key={i}
          >
            {each.icon}
          </Link>
        ))}
      </div>
      <MobNav />
    </div>
  );
};

export default Navbar;
