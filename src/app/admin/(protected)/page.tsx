import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin";
import React from "react";
import Link from "next/link";

// ✅ Sample Data (later from API)
const doctorData = [
  {
    id: "1",
    name: "Dr. Raj Malhotra",
    specialization: "Cardiologist",
    status: "Active",
  },
  {
    id: "2",
    name: "Dr. Ananya Sen",
    specialization: "Neurologist",
    status: "Active",
  },
  {
    id: "3",
    name: "Dr. Arjun Patel",
    specialization: "Orthopedic",
    status: "Blocked",
  },
  {
    id: "4",
    name: "Dr. Meera Iyer",
    specialization: "Dermatologist",
    status: "Active",
  },
];

const patientData = [
  { id: "1", name: "Rohit Verma", age: 32, status: "Active" },
  { id: "2", name: "Sneha Gupta", age: 26, status: "Active" },
  { id: "3", name: "Amit Sharma", age: 45, status: "Blocked" },
  { id: "4", name: "Priya Das", age: 29, status: "Active" },
];

// ✅ Derived Alerts
const blockedDoctors = doctorData.filter((d) => d.status === "Blocked").length;
const blockedPatients = patientData.filter(
  (p) => p.status === "Blocked"
).length;

export default function page() {
  return (
    <>
      <SidebarAdmin />

      <div className="ml-64 px-8 py-6">
        {/* ✅ HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">
            Control center for managing doctors, patients, and system access.
          </p>
        </div>

        {/* ✅ SYSTEM ALERTS (ESSENTIAL ADMIN INFO) */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-yellow-800 mb-2">System Alerts</h2>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• {blockedDoctors} doctor account(s) are currently blocked.</li>
            <li>
              • {blockedPatients} patient account(s) are currently blocked.
            </li>
            <li>• Review blocked users to restore access if needed.</li>
          </ul>
        </div>

        {/* ✅ QUICK ACTION PANEL (VERY ESSENTIAL FOR ADMIN) */}
        <div className="bg-white border rounded-lg p-4 mb-10">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/admin/doctorList"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            >
              Manage Doctors
            </Link>

            <Link
              href="/admin/patientList"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            >
              Manage Patients
            </Link>

            <Link
              href="/admin/reports"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            >
              View Reports
            </Link>
          </div>
        </div>

        {/* ✅ RECENT LISTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ✅ RECENT DOCTORS */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Recent Doctors</h2>

            <table className="w-full text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Specialization</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {doctorData.map((doc) => (
                  <tr key={doc.id}>
                    <td className="p-2 border">{doc.name}</td>
                    <td className="p-2 border">{doc.specialization}</td>
                    <td
                      className={`p-2 border font-medium ${
                        doc.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {doc.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ RECENT PATIENTS */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Recent Patients</h2>

            <table className="w-full text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Age</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((pat) => (
                  <tr key={pat.id}>
                    <td className="p-2 border">{pat.name}</td>
                    <td className="p-2 border">{pat.age}</td>
                    <td
                      className={`p-2 border font-medium ${
                        pat.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {pat.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
