"use client";

import type { Doctor } from "@/@types/doctor";
import { createDoctor, updateDoctor } from "@/utils/requests/data/admin";
import { useRouter } from "next/navigation";

export default function DoctorDetailsForm({
  id,
  data,
  onClose,
}: {
  id?: string;
  data?: Doctor;
  onClose?: () => void;
}) {
  const { refresh } = useRouter();
  return (
    <form
      className="space-y-4 px-2"
      action={async (FormData) => {
        const name = FormData.get("name") as string;
        const username = FormData.get("username") as string;
        const email = FormData.get("email") as string;
        const phone = FormData.get("phone") as string;
        const specialization = FormData.get("specialization") as string;

        if (!name || !username || !email || !phone || !specialization) {
          alert("Please fill in all fields.");
          return;
        }

        if (data || id) {
          const response = await updateDoctor({
            id: String(id),
            data: {
              name,
              username,
              email,
              phone,
              specialization:
                specialization as never as Doctor["specialization"],
            },
          });
          if (response && response.success) {
            alert("Doctor updated successfully!");
            refresh();
            if (onClose) onClose();
          } else {
            alert(response.message || "Failed to update doctor.");
          }
        } else {
          const response = await createDoctor({
            data: {
              name,
              username,
              email,
              phone,
              password: FormData.get("password") as string,
              specialization:
                specialization as never as Doctor["specialization"],
            },
          });
          if (response && response.success) {
            alert("Doctor created successfully!");
            refresh();
            if (onClose) onClose();
          } else {
            alert(response.message || "Failed to create doctor.");
          }
        }
      }}
    >
      <h5 className="text-lg font-semibold mb-3">Doctor Details</h5>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={data?.name || ""}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          defaultValue={data?.username || ""}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {!data && (
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={data?.email || ""}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          defaultValue={data?.phone || ""}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Specialization</label>
        <select
          id="specialization"
          name="specialization"
          defaultValue={data?.specialization || ""}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="" disabled selected>
            Select Specialization
          </option>
          <option value="CARDIOLOGY">Cardiology</option>
          <option value="DERMATOLOGY">Dermatology</option>
          <option value="NEUROLOGY">Neurology</option>
          <option value="PEDIATRICS">Pediatrics</option>
          <option value="RADIOLOGY">Radiology</option>
          <option value="ONCOLOGY">Oncology</option>
          <option value="ORTHOPEDICS">Orthopedics</option>
          <option value="GYNECOLOGY">Gynecology</option>
          <option value="PSYCHIATRY">Psychiatry</option>
          <option value="GENERAL_MEDICINE">General Medicine</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="hover:underline text-gray-700 px-4 py-2 rounded  mr-2 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          {data ? "Update Doctor" : "Add Doctor"}
        </button>
      </div>
    </form>
  );
}
