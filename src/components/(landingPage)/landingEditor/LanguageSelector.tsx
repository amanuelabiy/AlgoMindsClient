"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language, LANGUAGE_VERSIONS } from "@/utils/app/constants";
import { getCorrectLanguageFormat } from "@/utils/codeEditor/getCorrectLanguageFormat";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface LanguageSelectorProps {
  currentLanguage: string;
  onSelect: (language: Language) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

function LanguageSelector({
  currentLanguage,
  onSelect,
}: LanguageSelectorProps) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const spaceBetweenChevron =
    currentLanguage === "javascript" || currentLanguage === "typescript";

  return (
    <div className="my-2">
      <DropdownMenu onOpenChange={(open) => setOpenDropdown(open)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`flex flex-row w-28 h-6 p-4 ${
              spaceBetweenChevron ? "justify-between" : "justify-center"
            } items-center gap-[10px] flex-shrink-0 rounded-[2px] bg-[#ECF0F1] 
    text-[rgba(44,62,80,0.70)] text-sm font-medium leading-normal text-center`}
          >
            {getCorrectLanguageFormat(currentLanguage)}

            <ChevronDown
              className={`text-[1px] transition-transform duration-200 ${
                openDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-24">
          {languages.map(([language, version], index) => (
            <DropdownMenuCheckboxItem
              checked={currentLanguage === language}
              key={version}
              onCheckedChange={() => onSelect(language as Language)}
              className={`data-[highlighted]:cursor-pointer ${
                index % 2 === 0
                  ? "text-secondaryColor data-[highlighted]:text-secondaryColor"
                  : "text-[#FFA500]  data-[highlighted]:text-[#FFA500]"
              }`}
            >
              {getCorrectLanguageFormat(language)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageSelector;
{
  /* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>

        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu> */
}
