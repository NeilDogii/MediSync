"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "@/@types/patient";
import ViewPatientDetailsButton from "./ViewPatientDetailsButton";

export const patientColumns: ColumnDef<Patient>[] = [
  {
    header: "S. No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Patient Name",
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
      const status = row.original.isActive ? "Active" : "Inactive";
      return (
        <span
          className={`font-medium ${
            status === "Active" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex gap-2">
          {/* SHOW */}
          <ViewPatientDetailsButton data={patient} />
        </div>
      );
    },
  },
];
