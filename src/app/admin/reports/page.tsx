import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin"
import React from "react"

export default function ReportsPage() {
  return (
    <>
      <SidebarAdmin />

      <div className="ml-64 px-8 py-6">

        {/*  HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">System Reports</h1>
          <p className="text-sm text-gray-600 mt-1">
            View and analyze doctor, patient, and system activity reports.
          </p>
        </div>

        {/*  REPORT OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border rounded-lg p-5">
            <p className="text-sm text-gray-500">Total Doctors</p>
            <p className="text-2xl font-semibold mt-1">4</p>
            <p className="text-xs text-gray-400 mt-1">Registered in system</p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <p className="text-sm text-gray-500">Total Patients</p>
            <p className="text-2xl font-semibold mt-1">4</p>
            <p className="text-xs text-gray-400 mt-1">Active & blocked combined</p>
          </div>

          <div className="bg-white border rounded-lg p-5">
            <p className="text-sm text-gray-500">Blocked Accounts</p>
            <p className="text-2xl font-semibold mt-1 text-red-600">2</p>
            <p className="text-xs text-gray-400 mt-1">Doctors + Patients</p>
          </div>
        </div>

        {/*  MONTHLY ACTIVITY */}
        <div className="bg-white border rounded-lg p-5 mb-10">
          <h2 className="text-lg font-semibold mb-4">Monthly Activity Summary</h2>

          <table className="w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 border">Month</th>
                <th className="p-2 border">New Doctors</th>
                <th className="p-2 border">New Patients</th>
                <th className="p-2 border">Blocked Accounts</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: "January", doctors: 1, patients: 2, blocked: 0 },
                { month: "February", doctors: 2, patients: 3, blocked: 1 },
                { month: "March", doctors: 1, patients: 1, blocked: 1 },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="p-2 border">{row.month}</td>
                  <td className="p-2 border">{row.doctors}</td>
                  <td className="p-2 border">{row.patients}</td>
                  <td className="p-2 border">{row.blocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*  REPORT DOWNLOAD SECTION */}
        <div className="bg-white border rounded-lg p-5">
          <h2 className="text-lg font-semibold mb-4">Download Reports</h2>

          <div className="flex flex-wrap gap-4 text-sm">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
              Download Doctor Report
            </button>

            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
              Download Patient Report
            </button>

            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
              Download Full System Report
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
