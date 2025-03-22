import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function AvatarGroup() {
  const avatars = [
    { id: 1, src: "/assets/images/amanuel.jpg", fallback: "AA" },
    { id: 2, src: "/assets/images/markose.jpg", fallback: "MT" },
    { id: 3, src: "/assets/images/kyle.jpg", fallback: "KA" },
    { id: 4, src: "/assets/images/woman.jpg", fallback: "PT" },
    { id: 5, src: "/assets/images/merlin.png", fallback: "MA" },
    { id: 6, src: "/assets/images/john.jpg", fallback: "JT" },
  ];

  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.id}
          className="w-8 h-8 border-2 border-white dark:border-primaryColor rounded-full transition-transform duration-200 hover:scale-110 hover:z-10"
        >
          {avatar.src ? (
            <AvatarImage src={avatar.src} alt={`Avatar ${avatar.id}`} />
          ) : (
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          )}
        </Avatar>
      ))}
    </div>
  );
}

export default AvatarGroup;
