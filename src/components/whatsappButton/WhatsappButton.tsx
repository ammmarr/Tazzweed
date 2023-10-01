import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./index.module.scss";
const WhatsappButton = () => {
  return (
    <button className={style.container}>
      <WhatsAppIcon />
      <span> Talk to us on Whatsapp!</span>
    </button>
  );
};

export default WhatsappButton;
