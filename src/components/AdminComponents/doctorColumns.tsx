"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LockOpen, Pencil, Trash2 } from "lucide-react";
import { Doctor } from "@/@types/doctor";

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
          {/* SHOW */}
          {/* <Button
            size="icon"
            variant="outline"
            onClick={() =>
              alert(
                `Doctor Account Details\n\nName: ${doctor.name}
                Specialization: ${doctor.specialization}
                Phone: ${doctor.phone}
                Email: ${doctor.email}
                Status: ${doctor.isActive ? "Active" : "Inactive"}
                Password: ${doctor.password}`,
              )
            }
          >
            <Eye className="h-4 w-4" />
          </Button> */}

          {/* EDIT */}
          <Button
            size="icon"
            variant={"outline"}
            onClick={() => alert(`Edit Doctor: ${doctor.name}`)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          {/* EDIT PASSWORD */}
          <Button
            size="icon"
            variant={"outline"}
            onClick={() => alert(`Edit Doctor Password: ${doctor.name}`)}
          >
            <LockOpen className="h-4 w-4" />
          </Button>

          {/* DELETE */}
          <Button
            size="icon"
            variant="destructive"
            onClick={() => alert(`Delete Doctor: ${doctor.name}`)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
