"use client";

import { updateDoctor } from "@/utils/requests/data/admin";
import { useRouter } from "next/navigation";

export default function DoctorPasswordEditForm({
  id,
  onClose,
}: {
  id: string;
  onClose?: () => void;
}) {
  const { refresh } = useRouter();
  return (
    <form
      className="space-y-4 px-2"
      action={async (FormData) => {
        const password = FormData.get("password") as string;
        const confirmPassword = FormData.get("confirmPassword") as string;

        if (!password || !confirmPassword) {
          alert("Please fill in all fields.");
          return;
        }
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }

        const response = await updateDoctor({
          id: String(id),
          data: {
            password,
          },
        });
        if (response && response.success) {
          alert("Doctor updated successfully!");
          refresh();
          if (onClose) onClose();
        } else {
          alert(response.message || "Failed to update doctor.");
        }
      }}
    >
      <h5 className="text-lg font-semibold mb-3">Doctor Password</h5>

      <div>
        <label className="block text-sm font-medium">New Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="w-full border rounded px-3 py-2"
          required
        />
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
          Update Doctor Password
        </button>
      </div>
    </form>
  );
}
