"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "@/utils/cookie";
import { ADMIN_TOKEN_KEY } from "@/constants/keys";
import Image from "next/image";
import {
  AmbulanceIcon,
  BellIcon,
  BlocksIcon,
  ChartSplineIcon,
  ClipboardClock,
  UserIcon,
} from "lucide-react";

const SidebarAdmin: React.FC = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "block py-2 px-3 rounded-lg bg-gray-100"
      : "block py-2 px-3 rounded-lg hover:bg-gray-100";
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden py-16 text-center">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-2xs hover:bg-gray-950"
        >
          Open
        </button>
      </div>

      {/* Sidebar */}
      <div className="lg:block w-64 fixed top-0 start-0 bottom-0 z-50 bg-white border-e border-gray-200">
        <div className="relative flex flex-col h-full">
          <header className="p-4 flex justify-between items-center">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={150}
              height={40}
              className="h-10 mx-auto mb-2"
            />
          </header>

          {/* Sidebar Menu */}
          <nav className="h-full overflow-y-auto px-2">
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/admin" className={getLinkClass("/admin")}>
                  <div className="flex items-center">
                    <BlocksIcon className="h-4 w-4 me-2" />
                    Dashboard
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/doctorList"
                  className={getLinkClass("/admin/doctorList")}
                >
                  <div className="flex items-center">
                    <AmbulanceIcon className="h-4 w-4 me-2" />
                    Doctor
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/patientList"
                  className={getLinkClass("/admin/patientList")}
                >
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 me-2" />
                    Patient
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/reports"
                  className={getLinkClass("/admin/reports")}
                >
                  <div className="flex items-center">
                    <ClipboardClock className="h-4 w-4 me-2" />
                    Reports
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/notifications"
                  className={getLinkClass("/notifications")}
                >
                  <div className="flex items-center">
                    <BellIcon className="h-4 w-4 me-2" />
                    Notifications
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/analytics" className={getLinkClass("/analytics")}>
                  <div className="flex items-center">
                    <ChartSplineIcon className="h-4 w-4 me-2" />
                    Analytics
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <footer className="mt-auto p-3 border-t">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full"
                  alt="User"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium text-gray-800">
                    Mia Hudson
                  </span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
              </div>

              <button
                onClick={async () => {
                  await deleteCookie(ADMIN_TOKEN_KEY);
                  push("/admin/login");
                }}
                className="text-xs text-red-600 font-medium hover:underline"
              >
                Sign Out
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
