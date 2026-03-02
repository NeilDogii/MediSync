"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import Popup from "../global/Popup";
import type { Patient } from "@/@types/patient";

export default function ViewPatientDetailsButton({ data }: { data: Patient }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setIsOpen(true)}>
        <Eye className="h-4 w-4" />
      </Button>

      <Popup showPopup={isOpen} onChangeShowPopup={(show) => setIsOpen(show)}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Patient Details</h2>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">Name</td>
                <td className="px-4 py-2">{data.name}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">Gender</td>
                <td className="px-4 py-2 capitalize">{data.gender || "-"}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">Email</td>
                <td className="px-4 py-2">{data.email || "-"}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">Phone</td>
                <td className="px-4 py-2">{data.phone}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">Age</td>
                <td className="px-4 py-2">{data.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Popup>
    </>
  );
}
