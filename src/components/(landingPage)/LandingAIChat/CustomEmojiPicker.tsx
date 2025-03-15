import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { emojiOptions } from "@/utils/codeEditor/constants";

interface CustomEmojiPickerProps {
  setMessage: (message: string | ((prev: string) => string)) => void;
}

function CustomEmojiPicker({ setMessage }: CustomEmojiPickerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MdOutlineEmojiEmotions className="absolute right-8 top-1/2 transform -translate-y-1/2 text-primaryColor hover:text-secondaryColor cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 flex flex-row justify-center items-center gap-1 p-2">
        {emojiOptions.map((emoji) => (
          <p
            key={emoji}
            onClick={() => setMessage((prev: string) => prev + emoji)}
            className="cursor-pointer text-lg hover:bg-gray-100"
          >
            {emoji}
          </p>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomEmojiPicker;
