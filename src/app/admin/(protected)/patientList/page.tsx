import { DataTable } from "@/components/AdminComponents/data-table";
import { patientColumns } from "@/components/AdminComponents/patientColumns";
import SidebarAdmin from "@/components/AdminComponents/SidebarAdmin";
import { fetchPatients } from "@/utils/requests/data/admin";

export default async function PatientListPage() {
  const patientData = await fetchPatients();
  const totalPatients = patientData.length;
  const activePatients = patientData.filter((p) => p.isActive).length;
  const blockedPatients = patientData.filter((p) => !p.isActive).length;
  return (
    <>
      <SidebarAdmin />

      <div className="ml-64 px-8 py-6">
        {/*  Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Patient Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            View and manage all registered patients and their account access.
          </p>
        </div>

        {/*  Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Patients</p>
            <p className="text-2xl font-semibold">{totalPatients}</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Active Patients</p>
            <p className="text-2xl font-semibold text-green-600">
              {activePatients}
            </p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-sm text-gray-500">Blocked Patients</p>
            <p className="text-2xl font-semibold text-red-600">
              {blockedPatients}
            </p>
          </div>
        </div>

        {/*  Table */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Patient List</h2>

          <div className="overflow-x-auto">
            <DataTable columns={patientColumns} data={patientData} />
          </div>
        </div>
      </div>
    </>
  );
}
