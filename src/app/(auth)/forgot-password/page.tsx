import React, { Suspense } from "react";
import ForgotPassword from "./_forgotpasword";

function Page() {
  return (
    <Suspense>
      <ForgotPassword />
    </Suspense>
  );
}

export default Page;
