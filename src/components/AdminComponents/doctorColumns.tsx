"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Doctor } from "@/@types/doctor";
import EditDoctorButton from "./EditDoctorButton";
import DeleteDoctorButton from "./DeleteDoctorButton";
import EditDoctorPasswordButton from "./EditDoctorPasswordButton";

export const doctorColumns: ColumnDef<Doctor>[] = [
  {
    header: "S. No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Doctor Name",
  },
  {
    accessorKey: "specialization",
    header: "Specialization",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.isActive;
      return (
        <span
          className={`font-medium ${
            status ? "text-green-600" : "text-red-600"
          }`}
        >
          {status ? "Active" : "Inactive"}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const doctor = row.original;

      return (
        <div className="flex gap-2">
          {/* EDIT */}
          <EditDoctorButton id={String(doctor.id)} doctor={doctor} />

          {/* EDIT PASSWORD */}
          <EditDoctorPasswordButton id={String(doctor.id)} />

          {/* DELETE */}
          <DeleteDoctorButton id={String(doctor.id)} />
        </div>
      );
    },
  },
];
