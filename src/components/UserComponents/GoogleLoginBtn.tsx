"use client";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import React from "react";

export default function GoogleLoginBtn() {
  const initiateGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Login Failed"),
  });
  return (
    <button
      type="button"
      onClick={() => initiateGoogleLogin()}
      className="w-full flex items-center justify-center gap-3 py-2
                     border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer"
    >
      <Image
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        width={20}
        height={20}
        className="h-5 w-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Continue with Google
      </span>
    </button>
  );
}
