"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "@/utils/cookie";
import { DOCTOR_TOKEN_KEY } from "@/constants/keys";
import Image from "next/image";

const SidebarDoctor: React.FC = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "block py-2 px-3 rounded-lg bg-gray-100 font-medium"
      : "block py-2 px-3 rounded-lg hover:bg-gray-100";
  };

  if (!pathname.startsWith("/doctor")) {
    return null;
  }

  return (
    <>
      {/* Sidebar */}
      <div className="lg:block w-64 fixed top-0 start-0 bottom-0 z-50 bg-white border-e border-gray-200">
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <header className="p-4 flex items-center gap-2">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={150}
              height={40}
              className="h-10 mx-auto mb-2"
            />
          </header>

          {/* Menu */}
          <nav className="h-full overflow-y-auto px-2">
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/doctor" className={getLinkClass("/doctor")}>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor/appointments"
                  className={getLinkClass("/doctor/appointments")}
                >
                  My Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor/myPatients"
                  className={getLinkClass("/doctor/myPatients")}
                >
                  My Patients
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor/reportsDoctor"
                  className={getLinkClass("/doctor/reportsDoctor")}
                >
                  Reports
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor/notifications"
                  className={getLinkClass("/doctor/notifications")}
                >
                  Notifications
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor/settings"
                  className={getLinkClass("/doctor/settings")}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <footer className="mt-auto p-3 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full"
                  alt="Doctor Image"
                />
                <div className="leading-tight">
                  <span className="text-sm font-medium text-gray-800">
                    Dr. John Doe
                  </span>{" "}
                  <br />
                  <span className="text-xs text-gray-500">Doctor</span>
                </div>
              </div>

              <button
                onClick={async () => {
                  await deleteCookie(DOCTOR_TOKEN_KEY);
                  push("/doctor/login");
                }}
                className="text-xs text-red-600 font-bold hover:underline"
              >
                Logout
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SidebarDoctor;
