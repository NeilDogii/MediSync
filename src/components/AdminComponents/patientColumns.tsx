"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"

export type Patient = {
  id: string
  name: string
  age: number
  phone: string
  loginId: string
  status: "Active" | "Blocked"
  password: string
}

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
    accessorKey: "age",
    header: "Age",
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
      const patient = row.original

      return (
        <div className="flex gap-2">
          {/* SHOW */}
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              alert(
                `Patient Details\n\nName: ${patient.name}
Age: ${patient.age}
Phone: ${patient.phone}
Login ID: ${patient.loginId}
Status: ${patient.status}
Password: ${patient.password}`
              )
            }
          >
            <Eye className="h-4 w-4" />
          </Button>

          {/* EDIT */}
          <Button
            size="icon"
            onClick={() => alert(`Edit Patient: ${patient.name}`)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          {/* DELETE */}
          <Button
            size="icon"
            variant="destructive"
            onClick={() => alert(`Delete Patient: ${patient.name}`)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]
