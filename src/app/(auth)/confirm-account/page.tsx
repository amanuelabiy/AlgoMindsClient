import React, { Suspense } from "react";
import ConfirmAccount from "./_confirmaccount";

function Page() {
  return (
    <Suspense>
      <ConfirmAccount />
    </Suspense>
  );
}

export default Page;
