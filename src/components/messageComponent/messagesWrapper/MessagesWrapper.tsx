import textData from "../../../assets/textData";
import MessageComponent from "../MessageComponent";
import style from "./index.module.scss";
const MessagesWrapper = () => {
  let display = false;

  if (window.innerWidth > 1062) display = true;
  return (
    <div className={style.messagesWrapperContainer}>
      {display ? (
        <MessageComponent
          text={textData[11].text}
          top="10%"
          left="10%"
          img={textData[11].img}
        />
      ) : null}

      <MessageComponent
        text={textData[10].text}
        top="5%"
        right="30%"
        img={textData[10].img}
      />
      {display ? (
        <MessageComponent
          text={textData[9].text}
          bottom="0%"
          left="20%"
          img={textData[9].img}
        />
      ) : (
        <MessageComponent
          text={textData[9].text}
          bottom="20%"
          right="25%"
          img={textData[9].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[8].text}
          bottom="20%"
          right="25%"
          img={textData[8].img}
        />
      ) : (
        <MessageComponent
          text={textData[8].text}
          bottom="0%"
          left="40%"
          img={textData[8].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[7].text}
          bottom="43%"
          right="10%"
          img={textData[7].img}
        />
      ) : null}
      {display ? (
        <MessageComponent
          text={textData[7].text}
          bottom="-10%"
          right="40%"
          img={textData[7].img}
        />
      ) : null}
    </div>
  );
};

export default MessagesWrapper;
