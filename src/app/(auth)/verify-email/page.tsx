import React, { Suspense } from "react";
import VerifyEmail from "./_verifyemail";
function Page() {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
}

export default Page;
