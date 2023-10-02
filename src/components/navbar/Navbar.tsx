import { Link, useNavigate } from "react-router-dom";
import logogreen from "../../assets/images/logo_green.png";
import logoWhite from "../../assets/images/logo_white.png";

import { mainRoutes, socialMediaLinks } from "../../pages/home/routes";
import style from "./index.module.scss";
import MobNav from "./mobnav/MobNav";

type NavBarProps = {
  bgColor?: string;
  color?: string;
};
const Navbar = (props: NavBarProps) => {
  const { bgColor, color } = props;
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className={style.logo} onClick={() => navigate("/")}>
        {bgColor == "black" ? <img src={logoWhite} /> : <img src={logogreen} />}
      </div>
      <div className={style.mainLinks}>
        {mainRoutes.map((each, i) => (
          <Link
            to={each.href}
            className={style.link}
            style={{ color: color }}
            key={i}
          >
            {each.name}
          </Link>
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
