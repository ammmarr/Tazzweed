import textData from "../../../assets/textData";
import MessageComponent from "../MessageComponent";
import style from "./index.module.scss";
const MessagesWrapper2 = () => {
  let display = false;

  if (window.innerWidth > 1062) display = true;
  return (
    <div className={style.messagesWrapperContainer}>
      {display ? (
        <MessageComponent
          text={textData[0].text}
          top="5%"
          right="10%"
          img={textData[0].img}
        />
      ) : null}

      <MessageComponent
        text={textData[1].text}
        top="-2%"
        left="5%"
        img={textData[1].img}
      />
      {display ? (
        <MessageComponent
          text={textData[2].text}
          bottom="35%"
          left="10%"
          img={textData[2].img}
        />
      ) : (
        <MessageComponent
          text={textData[2].text}
          bottom="10%"
          right="25%"
          img={textData[2].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[3].text}
          bottom="20%"
          right="10%"
          img={textData[3].img}
        />
      ) : (
        <MessageComponent
          text={textData[3].text}
          top="10%"
          right="2%"
          img={textData[3].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[4].text}
          bottom="43%"
          right="10%"
          img={textData[4].img}
        />
      ) : null}
      {display ? (
        <MessageComponent
          text={textData[5].text}
          bottom="30%"
          right="40%"
          img={textData[5].img}
        />
      ) : null}
    </div>
  );
};

export default MessagesWrapper2;
