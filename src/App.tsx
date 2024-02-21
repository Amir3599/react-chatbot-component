import React from "react";
import ChatBot from "./components/chatbot";

function App() {
  return (
    <div>
      <ChatBot
        greetingMessage="Greeting"
        position="bottom-right"
        Icon={<div>123</div>}
      />
    </div>
  );
}

export default App;
