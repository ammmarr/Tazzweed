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
          top="10%"
          left="10%"
          img={textData[0].img}
        />
      ) : null}

      <MessageComponent
        text={textData[1].text}
        top="-2%"
        right="20%"
        img={textData[1].img}
      />
      {display ? (
        <MessageComponent
          text={textData[2].text}
          bottom="30%"
          left="10%"
          img={textData[2].img}
        />
      ) : (
        <MessageComponent
          text={textData[3].text}
          bottom="15%"
          right="25%"
          img={textData[3].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[4].text}
          bottom="20%"
          right="25%"
          img={textData[4].img}
        />
      ) : (
        <MessageComponent
          text={textData[5].text}
          top="10%"
          left="40%"
          img={textData[5].img}
        />
      )}
      {display ? (
        <MessageComponent
          text={textData[6].text}
          bottom="43%"
          right="10%"
          img={textData[6].img}
        />
      ) : null}
      {display ? (
        <MessageComponent
          text={textData[7].text}
          bottom="30%"
          right="40%"
          img={textData[7].img}
        />
      ) : null}
    </div>
  );
};

export default MessagesWrapper2;
