"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Popup from "../global/Popup";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { GOOGLE_CLIENT_ID } from "@/constants/environment/variables";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState<"LOGIN" | "REGISTER" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const pathname = usePathname();

  // Function to generate link classes dynamically
  const getLinkClass = (href: string) =>
    pathname === href
      ? "text-[#0074cc] font-bold"
      : "text-black hover:text-[#0074cc]";

  return (
    <nav className="fixed top-7 left-8 right-8 z-50 bg-white shadow-md rounded-2xl mx-auto my-4 px-4 md:px-8 py-3 max-w-[95%] lg:max-w-[90%]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.jpg"
            alt="MediSync Logo"
            width={130}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/book" className={getLinkClass("/book")}>
            Book Now
          </Link>
          <Link href="/help" className={getLinkClass("/help")}>
            Help
          </Link>
          <Link href="/blogs" className={getLinkClass("/blogs")}>
            Blogs
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            // href="/signup"
            className="text-[#0074cc] font-semibold hover:underline cursor-pointer"
            onClick={() => setShowPopup("REGISTER")}
          >
            Sign Up
          </div>
          <div
            // href="/login"
            className="bg-[#0074cc] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#005fa3] cursor-pointer"
            onClick={() => setShowPopup("LOGIN")}
          >
            Log In
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0074cc] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-end items-center px-6 py-4 border-b">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#0074cc] focus:outline-none"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-6 space-y-6 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={getLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className={getLinkClass("/book")}
          >
            Book Now
          </Link>
          <Link
            href="/help"
            onClick={() => setIsOpen(false)}
            className={getLinkClass("/help")}
          >
            Help
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className={getLinkClass("/blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={getLinkClass("/contact")}
          >
            Contact Us
          </Link>

          {/* Mobile Buttons */}
          <div className="border-t pt-5 flex flex-col space-y-3">
            <div
              // href="/signup"
              onClick={() => setIsOpen(false)}
              className="border border-[#0074cc] text-[#0074cc] text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#0074cc] hover:text-white transition-all"
            >
              Sign Up
            </div>
            <div
              // href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-[#0074cc] text-white text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#005fa3] transition-all"
            >
              Log In
            </div>
          </div>
        </div>
      </div>
      <Popup
        showPopup={showPopup != null}
        onChangeShowPopup={(set) => {
          if (!set) setShowPopup(null);
        }}
      >
        {showPopup === "LOGIN" && (
          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <Image
                src="/assets/logo.jpg"
                alt="Logo"
                width={150}
                height={80}
                className="h-10 mx-auto mb-2"
              />
              <h1 className="text-xl font-semibold text-gray-800">
                Login to Continue
              </h1>
              <p className="text-sm text-gray-500">
                Sign in with email or phone
              </p>
            </div>
            {/* Form */}
            <form className="space-y-4">
              {/* Email / Phone */}
              <div>
                <label
                  htmlFor="emailOrPhone"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email / Phone
                </label>
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  placeholder="example@email.com or 9876543210"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10
                           focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-2 mt-2 bg-indigo-700 text-white rounded-lg
                       font-medium hover:bg-indigo-600 transition cursor-pointer"
              >
                Login
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="px-3 text-xs text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            {/* Google Login */}
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <GoogleLoginBtn />
            </GoogleOAuthProvider>
            {/* Footer */}
            <p className="text-xs text-center text-gray-400 mt-5">
              © 2025 Patient Login
            </p>
          </div>
        )}
        {showPopup === "REGISTER" && (
          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <Image
                src="/assets/logo.jpg"
                alt="Logo"
                width={150}
                height={80}
                className="h-10 mx-auto mb-2"
              />
              <h1 className="text-xl font-semibold text-gray-800">
                Login to Continue
              </h1>
              <p className="text-sm text-gray-500">
                Sign in with email or phone
              </p>
            </div>
            {/* Form */}
            <form className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="example@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="0931XXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10
                           focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-2 mt-2 bg-indigo-700 text-white rounded-lg
                       font-medium hover:bg-indigo-600 transition cursor-pointer"
              >
                Login
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="px-3 text-xs text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            {/* Google Login */}
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <GoogleLoginBtn />
            </GoogleOAuthProvider>
            {/* Footer */}
            <p className="text-xs text-center text-gray-400 mt-5">
              © 2025 Patient Login
            </p>
          </div>
        )}
      </Popup>
    </nav>
  );
}
