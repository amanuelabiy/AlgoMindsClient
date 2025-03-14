import React from "react";
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

interface LanguageSelectorProps {
  currentLanguage: string;
  onSelect: (language: Language) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

function LanguageSelector({
  currentLanguage,
  onSelect,
}: LanguageSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentLanguage}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {languages.map(([language, version]) => (
          <DropdownMenuCheckboxItem
            checked={currentLanguage === language}
            key={version}
            onCheckedChange={() => onSelect(language as Language)}
          >
            {language} &nbsp;<p className="text-gray-600 text-sm">{version}</p>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
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
