import React, { useEffect, useState } from "react";
import { IChatBotCompProps, messageType } from "../types";
import { IconStyles } from "./styles";
import { generateIconPos, generateContainerPos, AddMessage } from "../utils";
import "../styles/index.css";

const ChatBot: React.FC<IChatBotCompProps> = (props) => {
  const {
    position,
    containerClassName,
    containerStyle,
    iconScale,
    inputClassName,
    inputStyle,
    recivedMessagesClassName,
    recivedMessagesStyle,
    senderMessagesClassName,
    senderMessagesStyle,
    messagesClassName,
    messagesStyle,
    sendBtnIcon,
    containerHeaderClassName,
    containerHeaderStyle,
    Icon,
    messagesContainerClassName,
    messagesContainerStyle,
    exitIcon,
    exitBtnClassName,
    exitBtnStyle,
    iconBtnClassName,
    iconBtnStyle,
    inputContainerClassName,
    inputContainerStyle,
  } = props;

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const iconPos = generateIconPos(position);
  const conatinerPos = generateContainerPos(position);

  const [botState, setBotState] = useState<"typing..." | "online" | "offline">(
    "online"
  );

  const [messages, setMessages] = useState<messageType[]>([]);
  const [message, setMessage] = useState<string>();

  const onSend = () => {
    if (message && message.trim().length > 0) {
      AddMessage(
        {
          me: true,
          text: message,
        },
        setMessages
      );
      setMessage("");
    }
  };

  const greetingMSG = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            AddMessage(
              {
                me: false,
                text: "Greeting",
              },
              setMessages
            )
          ),
        2000
      );
    });
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setBotState("typing...");
      greetingMSG()
        .then(() => setBotState("online"))
        .finally(() => setTimeout(() => setBotState("offline"), 3500));
    }
  }, [open]);

  return (
    <div style={{ ...IconStyles, ...iconPos }}>
      {open && (
        <div
          className={`container ${containerClassName}`}
          style={{ ...containerStyle, ...conatinerPos }}
        >
          <div
            style={containerHeaderStyle}
            className={`container-header ${containerHeaderClassName}`}
          >
            <button
              onClick={handleOpen}
              style={exitBtnStyle}
              className={`exit-btn ${exitBtnClassName}`}
            >
              {exitIcon ? exitIcon : "X"}
            </button>
            <p>{botState}</p>
          </div>
          <div
            style={messagesContainerStyle}
            className={`messages-container ${messagesContainerClassName}`}
          >
            {messages.map((msg, i) => (
              <div
                key={msg.text[0] + i}
                className={`messages-default ${messagesClassName} ${
                  msg.me
                    ? `sender-msg ${senderMessagesClassName}`
                    : `recived-msg ${recivedMessagesClassName}`
                }`}
                style={
                  msg.me
                    ? { ...messagesStyle, ...senderMessagesStyle }
                    : { ...messagesStyle, ...recivedMessagesStyle }
                }
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div
            style={{ ...inputContainerStyle }}
            className={`input-container ${inputContainerClassName}`}
          >
            <input
              type="text"
              value={message}
              style={{ ...inputStyle }}
              className={`input ${inputClassName}`}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={onSend}>
              {sendBtnIcon ? sendBtnIcon : "send"}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleOpen}
        className={`icon-btn ${iconBtnClassName}`}
        style={{ ...iconBtnStyle, scale: iconScale }}
      >
        {Icon ? Icon : "icon"}
      </button>
    </div>
  );
};

export default ChatBot;
