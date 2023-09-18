import React from "react";
import style from "./index.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const WhatsappButton = () => {
  return (
    <button className={style.container}>
      <WhatsAppIcon />
      <span> Begin on Whatsapp</span>
    </button>
  );
};

export default WhatsappButton;
