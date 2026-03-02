"use client";

import { updateDoctor } from "@/utils/requests/data/admin";
import { useRouter } from "next/navigation";

export default function DoctorFeesEditForm({
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
        const fees = FormData.get("fees") as string;

        if (!fees) {
          alert("Please fill in all fields.");
          return;
        }

        const response = await updateDoctor({
          id: String(id),
          data: {
            fees: Number(fees),
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
      <h5 className="text-lg font-semibold mb-3">Doctor Fees</h5>

      <div>
        <label className="block text-sm font-medium">Fees</label>
        <input
          id="fees"
          name="fees"
          type="fees"
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
