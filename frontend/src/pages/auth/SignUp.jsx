import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

const SignUp = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black px-4 py-10 sm:px-6 lg:px-8 text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-orange-600/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">
        <ClerkSignUp routing="path" path="/signup" signInUrl="/login" fallbackRedirectUrl="/onboarding" forceRedirectUrl="/onboarding" />
      </div>
    </div>
  );
};

export default SignUp;
