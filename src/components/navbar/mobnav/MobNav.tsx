import React, { useState } from "react";
import style from "./index.module.scss";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { mainRoutes } from "../../../pages/home/routes";
const MobNav = () => {
  const [open, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setDropDown((prev) => !prev);
  };
  console.log(open);
  return (
    <div className={style.menuIconContainer}>
      <Hamburger toggled={open} toggle={setIsOpen} size={32} />

      <div
        className={`${style.openMobNavContainer} ${
          !open && style.closedMobNavContainer
        }`}
      >
        {mainRoutes.map((each, i) => (
          <>
            <Link
              to={each.href}
              className={style.link}
              key={i}
              onClick={handleOpenDropDown}
            >
              {each.name}
              {/* {each.nested && (
                <div
                  className={`${style.dropDownContainer} ${
                    dropDown
                      ? `${style.dropDownOpen}`
                      : `${style.dropDownClosed}`
                  } `}
                >
                  {each.nested.map((each, i) => (
                    <Link className={style.dropDownLink} to={each.href}>
                      {each.name}
                    </Link>
                  ))}
                </div>
              )} */}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default MobNav;
