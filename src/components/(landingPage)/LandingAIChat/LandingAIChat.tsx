"use client";

import { Input } from "@/components/ui/input";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";

import CustomEmojiPicker from "./CustomEmojiPicker";
import MessageBox from "./MessageBox";

interface ChatBoxProps {
  codeSnippet: string;
  onClose: () => void;
}

const chatBoxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const LandingAIChat = ({ codeSnippet, onClose }: ChatBoxProps) => {
  const [message, setMessage] = useState<string>("");
  const [thinking, setThinking] = useState<boolean>(true);
  const [aiMessages, setAiMessages] = useState<string[]>([]);
  const [userMessages, setUserMessages] = useState<string[]>([]);

  // Create a reference for the input field

  const inputRef = useRef<HTMLInputElement>(null);

  // Create a reference for the user messages

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Append user message to userMessages
    setUserMessages((prev) => [...prev, message]);
    setMessage(""); // Clear input field
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [userMessages, aiMessages]);

  useEffect(() => {
    setTimeout(() => {
      setThinking(false);
      setAiMessages((prev) => [
        ...prev,
        "I think your code is correct. Good job!",
      ]);
    }, 1000);
  }, []);

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
      className="absolute md:bottom-[-2rem] md:left-[-5rem] w-[250px] bg-white z-50 rounded-lg shadow-lg border border-gray-300"
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
              AlgoAI
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
          {thinking ? (
            <>Thinking... 🤔</>
          ) : (
            <>
              {/* AI messages */}
              {aiMessages.map((message, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faRobot}
                    className="text-[#2980B9] text-xs mt-1"
                  />
                  <MessageBox aiMessage={message} />
                </div>
              ))}

              {/*User messages */}
              {userMessages.map((message, index) => (
                <div
                  key={`user-${index}`}
                  className="flex items-end justify-end"
                >
                  <MessageBox aiMessage={message} isUser />
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
