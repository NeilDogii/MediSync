"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-7 left-8 right-8 z-50 bg-white shadow-md rounded-2xl mx-auto my-4 px-4 md:px-8 py-3 max-w-[95%] lg:max-w-[90%]">
      <div className="flex justify-between items-center">
        {/* Logo  */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.jpg"
            alt="MediSync Logo"
            width={130}
            height={60}
            className="object-contain"
          />
        </div>
        {/* Desktop  */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="text-[#0074cc] hover:text-[#005fa3]">
            Home
          </Link>
          <Link href="/service" className="text-black hover:text-[#0074cc]">
            Service
          </Link>
          <Link href="/help" className="text-black hover:text-[#0074cc]">
            Help
          </Link>
          <Link href="/blogs" className="text-black hover:text-[#0074cc]">
            Blogs
          </Link>
          <Link href="/contact" className="text-black hover:text-[#0074cc]">
            Contact Us
          </Link>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signup"
            className="text-[#0074cc] font-semibold hover:underline"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-[#0074cc] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#005fa3]"
          >
            Log In
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0074cc] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile  Menu */}
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
            className="hover:text-[#0074cc]"
          >
            Home
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0074cc]"
          >
            Service
          </Link>
          <Link
            href="/help"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0074cc]"
          >
            Help
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0074cc]"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0074cc]"
          >
            Contact Us
          </Link>
          {/* Mobile Buttons */}
          <div className="border-t pt-5 flex flex-col space-y-3">
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="border border-[#0074cc] text-[#0074cc] text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#0074cc] hover:text-white transition-all"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-[#0074cc] text-white text-center px-6 py-2 rounded-lg font-semibold hover:bg-[#005fa3] transition-all"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}