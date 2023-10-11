import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
const WhatsappButton = () => {
  return (
    <Link
      className={style.container}
      to={"https://wa.me/+16466042719"}
      target="_blank"
    >
      <WhatsAppIcon />
      <span> Talk to us on Whatsapp!</span>
    </Link>
  );
};

export default WhatsappButton;
