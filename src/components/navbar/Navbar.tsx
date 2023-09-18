import { Link } from "react-router-dom";
import logo from "../../assets/images/tazzweed_logo (1).png";
import { mainRoutes, socialMediaLinks } from "../../pages/home/routes";
import style from "./index.module.scss";
import MobNav from "./mobnav/MobNav";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} />
      </div>
      <div className={style.mainLinks}>
        {mainRoutes.map((each, i) => (
          <>
            <Link to={each.href} className={style.link} key={i}>
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
