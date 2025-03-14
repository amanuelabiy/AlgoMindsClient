"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { FaCode } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, Language } from "@/utils/app/constants";

function LandingPageCodeEditor() {
  const [value, setValue] = useState<string>("// some comment");
  const [language, setLanguage] = useState<Language>("javascript");

  const onSelect = (language: Language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full border-8 rounded-[12px] border-gray-200 bg-white p-2">
      <div className="flex flex-row justify-between items-center mr-auto px-6">
        <h1 className="flex flex-row items-center gap-2 text-[rgba(44,62,80,0.70)] text-md font-medium leading-normal">
          <span className="text-secondaryColor">
            <FaCode />
          </span>
          Code
        </h1>
      </div>
      <div>
        <LanguageSelector currentLanguage={language} onSelect={onSelect} />
      </div>
      <Editor
        height="55vh"
        width="100%"
        theme="vs-light"
        defaultLanguage="javascript"
        language={language}
        value={value}
        onChange={(value) => setValue(value || "")}
        options={{
          scrollbar: {
            vertical: "hidden", // Hide vertical scrollbar
            horizontal: "hidden", // Hide horizontal scrollbar
          },
          minimap: { enabled: false }, // Optional: Disable minimap
          wordWrap: "on", // Prevents horizontal scrolling
          overviewRulerLanes: 0, // Hides the vertical overview ruler
          scrollBeyondLastLine: false, // Prevents scrolling beyond last line
        }}
      />
    </div>
  );
}

export default LandingPageCodeEditor;
