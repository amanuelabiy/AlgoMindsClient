import React from "react";

interface MessageBoxProps {
  message: string;
  isUser?: boolean;
}

function MessageBox({ message, isUser = false }: MessageBoxProps) {
  const trimmedMessage = message.trim();
  const messageArray = [...trimmedMessage];
  const singleCharacterStyle = messageArray.length === 1;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <h1
        className={`${
          isUser
            ? `bg-blue-500 text-white max-w-[80%]`
            : "bg-[#c8e1f7] max-w-[65%] text-black"
        } text-xs p-2 rounded-lg break-words ${
          singleCharacterStyle ? "pr-4" : ""
        }`}
        style={{
          minWidth: singleCharacterStyle ? "1.5rem" : "auto", // Ensures single characters don't get squished
          textAlign: "left", // Ensures text alignment remains consistent
          display: "inline-block", // Prevents text from stretching full width
          wordBreak: "break-word", // Ensures text wraps properly instead of breaking per character
        }}
      >
        {trimmedMessage}
      </h1>
    </div>
  );
}

export default MessageBox;
