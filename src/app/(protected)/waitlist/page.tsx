import AvatarGroup from "@/components/(protected)/waitlist/AvatarGroup";
import BetaCodeInput from "@/components/(protected)/waitlist/BetaCodeInput";
import BottomWaitlistText from "@/components/(protected)/waitlist/BottomWaitlistText";
import ComingSoon from "@/components/(protected)/waitlist/ComingSoon";
import Welcome from "@/components/(protected)/waitlist/Welcome";
import React from "react";

async function WaitListPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 pt-8">
      <ComingSoon />
      <Welcome />
      <BetaCodeInput />
      <AvatarGroup />
      <BottomWaitlistText />
    </div>
  );
}

export default WaitListPage;
