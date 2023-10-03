import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mainRoutes } from "../../../pages/home/routes";
import style from "./index.module.scss";
const MobNav = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className={style.menuIconContainer}>
      <Hamburger toggled={open} toggle={setIsOpen} size={32} />

      <div
        className={`${style.openMobNavContainer} ${
          !open && style.closedMobNavContainer
        }`}
      >
        {mainRoutes.map((each, i) => (
          <Link to={each.href} className={style.link} key={i}>
            {each.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobNav;
