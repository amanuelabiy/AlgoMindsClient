"use client";

import { Input } from "@/components/ui/input";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";

import CustomEmojiPicker from "./CustomEmojiPicker";
import MessageBox from "./MessageBox";
import { useMutation } from "@tanstack/react-query";
import { getChatResponseForLandingPage } from "@/lib/openai/api";
import { ChatMessages } from "../landingEditor/LandingPageCodeEditor";
import { getRandomErrorMessage } from "@/utils/landingChat/errorMessage";

interface ChatBoxProps {
  onClose: () => void;
  isPending: boolean;
  chatMessages: ChatMessages[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>;
}

const chatBoxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const LandingAIChat = ({
  onClose,
  chatMessages,
  setChatMessages,
  isPending,
}: ChatBoxProps) => {
  const [message, setMessage] = useState<string>("");

  // Create a reference for the input field

  const inputRef = useRef<HTMLInputElement>(null);

  // Create a reference for the user messages

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // User sends a message

  const { mutate: sendUserMessage, isPending: isUserMessagePending } =
    useMutation({
      mutationFn: getChatResponseForLandingPage,
    });

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Append user message to userMessages
    setChatMessages((prev) => [...prev, { sender: "user", text: message }]);
    setMessage(""); // Clear input field
    sendUserMessage(message, {
      onSuccess: (response) => {
        const aiMessage = response.data.message;
        setChatMessages((prev) => [...prev, { sender: "ai", text: aiMessage }]);
      },
      onError: () => {
        setChatMessages((prev) => [
          ...prev,
          { sender: "ai", text: getRandomErrorMessage() },
        ]);
      },
    });
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages]); // Scroll to the bottom of the chat container when a new message is added

  useEffect(() => {
    // Focus on the input field when the chat box loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={chatBoxVariants}
      className="absolute md:bottom-[0rem] md:left-[4rem] w-[250px] bg-white z-50 rounded-lg shadow-lg border border-gray-300"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center border-b border-[rgba(44,62,80,0.10)] p-4">
          <div className="flex flex-row justify-center items-center relative">
            <p className="bg-secondaryColor text-white w-6 h-6 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faRobot}
                className="text-white text-xs mb-[1px]"
              />
            </p>
            <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full"></div>
            <h1 className="text-sm font-semibold text-gray-700 text-center ml-2">
              AlgoMinds
            </h1>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <div
          ref={chatContainerRef}
          className="text-sm text-gray-800 overflow-y-auto h-[200px] max-w-[250px] break-all px-4 py-1 flex flex-col gap-2"
        >
          {isPending ? (
            <>Thinking... 🤔</>
          ) : (
            <>
              {/* AI messages */}
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "items-start gap-2"
                  }`}
                >
                  {message.sender === "ai" ? (
                    <>
                      {" "}
                      <FontAwesomeIcon
                        icon={faRobot}
                        className="text-secondaryColor text-xs mt-1"
                      />
                      <MessageBox message={message.text} isUser={false} />
                    </>
                  ) : (
                    <MessageBox message={message.text} isUser />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="border-t border-[rgba(44,62,80,0.10)] h-[50px] relative">
          <Input
            ref={inputRef}
            className="h-full rounded-none pr-16"
            placeholder="Enter your message here"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />

          <CustomEmojiPicker setMessage={setMessage} />
          <LuSendHorizontal
            onClick={handleSendMessage}
            className="text-sm absolute right-2 top-1/2 transform -translate-y-1/2 text-secondaryColor cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LandingAIChat;
