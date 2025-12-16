'use client'

import React from "react";

export default function DoctorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="h-10 mx-auto mb-2"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            Doctor Login
          </h1>
          <p className="text-sm text-gray-500">
            Access your doctor dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-5">
          © 2025 Doctor Portal
        </p>

      </div>
    </div>
  );
}
