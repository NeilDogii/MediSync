"use client";

import DoctorForm from "@/components/DoctorComponents/forms/DoctorForm";
import Image from "next/image";
import React from "react";

export default function DoctorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <Image
            src="/assets/logo.jpg"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 mx-auto mb-2"
          />
          <h1 className="text-xl font-semibold text-gray-800">Doctor Login</h1>
          <p className="text-sm text-gray-500">Access your doctor dashboard</p>
        </div>

        {/* Form */}
        <DoctorForm />

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-5">
          © 2025 Doctor Portal
        </p>
      </div>
    </div>
  );
}
