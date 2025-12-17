"use client";

import { ADMIN_TOKEN_KEY } from "@/constants/keys";
import { setCookie } from "@/utils/cookie";
import { adminLogin } from "@/utils/requests/auth/admin";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();
  return (
    <form
      action={async (FormData) => {
        const res = await adminLogin({
          username: FormData.get("username") as string,
          password: FormData.get("password") as string,
        });
        if (!res.success) {
          alert(res.message);
        } else if (res.token) {
          alert("Login successful!: ");
          await setCookie(ADMIN_TOKEN_KEY, res.token);
          push("/admin");
        }
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="username" className="text-sm text-gray-600">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="text-sm text-gray-600">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
          {!showPassword ? (
            <EyeIcon
              size={23}
              className=" mt-0.5 text-gray-800 absolute right-2.5 top-3 cursor-pointer"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          ) : (
            <EyeOffIcon
              size={23}
              className=" mt-0.5 text-gray-800 absolute right-2.5 top-3 cursor-pointer"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
      >
        Login
      </button>
    </form>
  );
}
