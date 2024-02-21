export type messageType = {
  text: string;
  me: boolean;
};

export type PositionType =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type IChatBotCompProps = {
  position: PositionType;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  iconScale?: number;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  Icon?: React.ReactNode;
  sendBtnIcon?: React.ReactNode;
  exitIcon?: React.ReactNode;
  senderMessagesClassName?: string;
  senderMessagesStyle?: React.CSSProperties;
  recivedMessagesClassName?: string;
  recivedMessagesStyle?: React.CSSProperties;
  messagesClassName?: string;
  messagesStyle?: React.CSSProperties;
  containerHeaderClassName?: string;
  containerHeaderStyle?: React.CSSProperties;
  messagesContainerClassName?: string;
  messagesContainerStyle?: React.CSSProperties;
  exitBtnStyle?: React.CSSProperties;
  exitBtnClassName?: string;
  iconBtnClassName?: string;
  iconBtnStyle?: React.CSSProperties;
  inputContainerStyle?: React.CSSProperties;
  inputContainerClassName?: string;
};
