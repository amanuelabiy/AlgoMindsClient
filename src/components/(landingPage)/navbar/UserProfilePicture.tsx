import { User } from "@/context/authProvider";
import { getInitials } from "@/utils/navbar/getInitials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { GoSignOut } from "react-icons/go";
import { Cycle } from "framer-motion";

interface UserProfilePictureProps {
  user: User;
  handleLogoutClick: () => Promise<void>;
  toggleMobileNav?: Cycle;
}

function UserProfilePicture({
  user,
  handleLogoutClick,
  toggleMobileNav,
}: UserProfilePictureProps) {
  const handleSignOutClick = async () => {
    handleLogoutClick();
    if (toggleMobileNav !== undefined) {
      toggleMobileNav();
    }
  };
  return (
    <DropdownMenu>
      {/* Avatar Trigger */}
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lighterBlue text-white font-bold text-sm hover:opacity-80 transition cursor-pointer">
          {getInitials(user?.firstName, user?.lastName)}
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent className="w-64 bg-white text-gray-800 shadow-md rounded-none p-2">
        {/* User Info Section */}
        <DropdownMenuLabel className="flex flex-row justify-center gap-x-4 items-center text-sm font-medium text-gray-700">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lighterBlue text-white font-bold text-sm transition">
            {getInitials(user?.firstName, user?.lastName)}
          </div>
          <div className="flex flex-col text-gray-500 justify-center items-start">
            <p className="text-xs">{user?.email}</p>
            <p className="text-xs">{user?.username}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Sign Out Option */}
        <DropdownMenuItem
          onClick={handleSignOutClick} // Replace with actual sign out logic
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          <GoSignOut className="text-lg" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfilePicture;
