"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Popup from "../global/Popup";
import UserLoginForm from "./forms/UserLoginForm";
import UserRegisterForm from "./forms/UserRegisterForm";
import { deleteCookie } from "@/utils/cookie";
import { PATIENT_TOKEN_KEY } from "@/constants/keys";

export default function Navbar({
  isLoggedIn = false,
}: {
  isLoggedIn?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState<"LOGIN" | "REGISTER" | null>(null);
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
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#0074cc] rounded-full flex items-center justify-center text-white font-semibold">
                  U
                </div>
                {/* <span className="text-xs text-gray-600 mt-1">User</span> */}
              </div>
              <button
                onClick={async () => {
                  await deleteCookie(PATIENT_TOKEN_KEY);
                  window.location.reload();
                }}
                className="text-red-500 cursor-pointer rounded-lg font-semibold transition-all"
              >
                <LogOut />
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
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
            {isLoggedIn ? (
              <button
                onClick={async () => {
                  await deleteCookie(PATIENT_TOKEN_KEY);
                  window.location.reload();
                }}
                className="flex items-center space-x-2 text-red-500 cursor-pointer rounded-lg font-semibold transition-all"
              >
                <LogOut />
                <span>Logout</span>
              </button>
            ) : (
              <>
                <div
                  // href="/signup"
                  onClick={() => {
                    setIsOpen(false);
                    setShowPopup("REGISTER");
                  }}
                  className="border border-[#0074cc] text-[#0074cc] text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#0074cc] hover:text-white transition-all"
                >
                  Sign Up
                </div>
                <div
                  // href="/login"
                  onClick={() => {
                    setIsOpen(false);
                    setShowPopup("LOGIN");
                  }}
                  className="bg-[#0074cc] text-white text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#005fa3] transition-all"
                >
                  Log In
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Popup
        showPopup={showPopup != null}
        onChangeShowPopup={(set) => {
          if (!set) setShowPopup(null);
        }}
      >
        {showPopup === "LOGIN" && <UserLoginForm />}
        {showPopup === "REGISTER" && <UserRegisterForm />}
      </Popup>
    </nav>
  );
}
