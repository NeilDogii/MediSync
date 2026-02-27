"use client";

import { Doctor } from "@/@types/doctor";

export default function DoctorDetailsForm({ data }: { data?: Doctor }) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          defaultValue={data?.name || ""}
          readOnly
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          defaultValue={data?.email || ""}
          readOnly
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          defaultValue={data?.phone || ""}
          readOnly
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Specialization</label>
        <input
          type="text"
          defaultValue={data?.specialization || ""}
          readOnly
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium">License Number</label>
        <input type="text" value={data.licenseNumber} readOnly className="w-full border rounded px-3 py-2" />
    </div> */}
    </form>
  );
}
