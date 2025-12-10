"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"

export type Doctor = {
  id: string
  name: string
  specialization: string
  phone: string
  loginId: string
  status: "Active" | "Blocked"
  password: string
}

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
    accessorKey: "loginId",
    header: "Login ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <span
          className={`font-medium ${
            status === "Active" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </span>
      )
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const doctor = row.original

      return (
        <div className="flex gap-2">
          {/* SHOW */}
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              alert(
                `Doctor Account Details\n\nName: ${doctor.name}
Specialization: ${doctor.specialization}
Phone: ${doctor.phone}
Login ID: ${doctor.loginId}
Status: ${doctor.status}
Password: ${doctor.password}`
              )
            }
          >
            <Eye className="h-4 w-4" />
          </Button>

          {/* EDIT */}
          <Button
            size="icon"
            onClick={() => alert(`Edit Doctor: ${doctor.name}`)}
          >
            <Pencil className="h-4 w-4" />
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
      )
    },
  },
]
