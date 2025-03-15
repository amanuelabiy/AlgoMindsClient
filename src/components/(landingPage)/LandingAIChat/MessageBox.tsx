import React from "react";

interface MessageBoxProps {
  aiMessage: string;
  isUser?: boolean;
}

function MessageBox({ aiMessage, isUser = false }: MessageBoxProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <h1
        className={`${
          isUser
            ? "bg-blue-500 text-white max-w-[80%]"
            : "bg-[#c8e1f7] max-w-[65%] text-black"
        } text-xs p-2 rounded-lg whitespace-normal`}
      >
        {aiMessage}
      </h1>
    </div>
  );
}

export default MessageBox;
