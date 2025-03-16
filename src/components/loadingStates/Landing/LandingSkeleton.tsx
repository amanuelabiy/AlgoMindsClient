import React from "react";

function LandingSkeleton() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(246,251,255,1) 19%, rgba(243,250,255,1) 28%, rgba(240,249,255,1) 39%, rgba(225,243,255,1) 81%, rgba(218,240,255,1) 90%, rgba(175,224,255,1) 100%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
}

export default LandingSkeleton;
