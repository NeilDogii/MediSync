"use client";

import AdminLoginForm from "@/components/AdminComponents/forms/AdminLoginForm";
import Image from "next/image";
import React from "react";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <Image
            src="/assets/logo.jpg"
            alt="Logo"
            width={150}
            height={80}
            className="h-10 mx-auto mb-2"
          />
          <h1 className="text-xl font-semibold text-gray-800">Admin Login</h1>
          <p className="text-sm text-gray-500">
            Sign in to access the admin panel
          </p>
        </div>

        {/* Form */}
        <AdminLoginForm />
        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-5">
          © 2025 Admin Panel
        </p>
      </div>
    </div>
  );
}
