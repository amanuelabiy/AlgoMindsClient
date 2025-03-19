"use client";

import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaCode } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { Language } from "@/utils/app/constants";
import loader from "@monaco-editor/loader";
import { CODE_SNIPPETS } from "@/utils/codeEditor/constants";
import { CODE_EDITOR_ICONS } from "@/utils/codeEditor/icons";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import LandingCodeEditorSkeleton from "@/components/loadingStates/Landing/LandingCodeEditorSkeleton";
import { AnimatePresence } from "framer-motion";
import LandingAIChat from "../LandingAIChat/LandingAIChat";
import { useMutation } from "@tanstack/react-query";
import { getChatResponseForLandingPage } from "@/lib/openai/api";
import { getRandomErrorMessage } from "@/utils/landingChat/errorMessage";
import { motion } from "framer-motion";

export interface ChatMessages {
  sender: "user" | "ai";
  text: string;
}

function LandingPageCodeEditor() {
  const [language, setLanguage] = useState<Language>("javascript");
  const [value, setValue] = useState<string>(CODE_SNIPPETS[language]);

  const [showChat, setShowChat] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessages[]>([]);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: getChatResponseForLandingPage,
  });

  const handleRunClick = () => {
    setShowChat(true);

    sendMessage(value, {
      onSuccess: (response) => {
        const message = response.data.message;
        setChatMessages((prev) => [...prev, { sender: "ai", text: message }]);
      },
      onError: () => {
        setChatMessages((prev) => [
          ...prev,
          { sender: "ai", text: getRandomErrorMessage() },
        ]);
      },
    });
  };

  const handleCloseClick = () => {
    setShowChat(false);
    setChatMessages([]);
  };

  useEffect(() => {
    loader
      .init()
      .then((monaco) => {
        monaco.editor.defineTheme("orangeBlueLightTheme", {
          base: "vs",
          inherit: true,
          rules: [
            { token: "comment", foreground: "FFA500" },
            { token: "keyword", foreground: "2980B9" },
            { token: "string", foreground: "FFA500" },
            { token: "number", foreground: "2980B9" },
            { token: "type", foreground: "FFA500" },
            { token: "function", foreground: "2980B9" },
          ],
          colors: {
            "editor.foreground": "#000000",
            "editor.background": "#FFFFFF",
            "editorCursor.foreground": "#FFA500",
            "editor.lineHighlightBackground": "#F5F5F5",
            "editor.selectionBackground": "#2980B920",
            "editor.selectionHighlightBackground": "#FFA50020",
            "editor.lineNumber.foreground": "#888888",
            "editorGutter.background": "#FFFFFF",
          },
        });

        monaco.editor.setTheme("orangeBlueLightTheme");
      })
      .catch((error) => {
        console.error("Monaco loader error:", error);
      });
  }, []);

  const onSelect = (language: Language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="flex flex-col justify-center mt-[14rem] mb-[18rem] gap-2 items-center w-[90%] max-h-[30rem] h-[30rem] flex-shrink-0 rounded-[12px] bg-white py-4 px-0 shadow-[0px_4px_7px_4px_rgba(0,0,0,0.25)]"
    >
      {/* Header with Full-Width Border & Language Selector Inside Flow */}
      <div className="flex flex-col w-full h-[10rem]">
        <div className="flex flex-row justify-between items-center px-6 border-b border-[rgba(44,62,80,0.10)]">
          <h1 className="flex flex-row items-center gap-2 text-[rgba(44,62,80,0.70)] text-md font-medium leading-normal mb-2">
            <span className="text-secondaryColor">
              <FaCode />
            </span>
            Code
          </h1>
        </div>

        {/* Language Selector stays in the normal flow */}
        <div className="flex flex-row justify-between items-center px-6 border-b border-[rgba(44,62,80,0.10)]">
          <LanguageSelector currentLanguage={language} onSelect={onSelect} />
          <div className="flex flex-row gap-4 justify-center items-center">
            {CODE_EDITOR_ICONS.map((icon, index) => (
              <p
                className={`text-black ${
                  icon.name === "RESET"
                    ? "text-opacity-100 hover:cursor-pointer"
                    : "text-opacity-20 hover:cursor-not-allowed"
                }`}
                key={index}
                onClick={() =>
                  icon.name === "RESET"
                    ? setValue(CODE_SNIPPETS[language])
                    : null
                }
              >
                {icon.icon}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Editor
        height="25rem"
        width="100%"
        theme="orangeBlueLightTheme"
        defaultLanguage="javascript"
        language={language}
        value={value}
        onChange={(value) => setValue(value || "")}
        options={{
          scrollbar: {
            vertical: "auto", // Hide vertical scrollbar
            horizontal: "hidden", // Hide horizontal scrollbar
          },
          fontFamily: "Chakra Petch, sans-serif", // Set font family
          fontSize: 12, // Set font size
          lineHeight: 20, // Set line height
          minimap: { enabled: false }, // Optional: Disable minimap
          wordWrap: "on", // Prevents horizontal scrolling
          overviewRulerLanes: 0, // Hides the vertical overview ruler
          scrollBeyondLastLine: false, // Prevents scrolling beyond last line
          accessibilitySupport: "off", // Disables screen reader support
        }}
        loading={<LandingCodeEditorSkeleton />}
      />

      {/* Chat Box (Animated) */}
      <AnimatePresence>
        {showChat && (
          <LandingAIChat
            onClose={handleCloseClick}
            isPending={isPending}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-row justify-between items-center w-full border-t border-[rgba(44,62,80,0.10)]">
        <div className="flex flex-row justify-center items-center mt-5 px-6 py-2 animate-sway-right">
          <h1 className="text-sm text-opacity-40 font-medium leading-normal">
            🚀Hit Run & Let <span className="text-lighterBlue">AlgoMind</span>{" "}
            Analyze Your Code
          </h1>{" "}
          <p className="ml-1">
            <FaLongArrowAltRight className="text-lighterBlue text-2xl mr-4" />
          </p>
        </div>

        <Button
          className="w-24 bg-lighterBlue mt-6 mr-6 text-white px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
          onClick={handleRunClick}
          disabled={value.length === 0 || showChat}
        >
          Run <FaAngleDoubleRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default LandingPageCodeEditor;
