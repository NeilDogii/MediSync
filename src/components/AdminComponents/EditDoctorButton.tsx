"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import Popup from "../global/Popup";
import DoctorDetailsForm from "./forms/DoctorDetailsForm";
import { Doctor } from "@/@types/doctor";

export default function EditDoctorButton({
  id,
  doctor,
}: {
  id: string;
  doctor: Doctor;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button size="icon" variant={"outline"} onClick={() => setIsOpen(true)}>
        <Pencil className="h-4 w-4" />
      </Button>
      <Popup showPopup={isOpen} onChangeShowPopup={(show) => setIsOpen(show)}>
        <DoctorDetailsForm
          id={id}
          data={doctor}
          onClose={() => setIsOpen(false)}
        />
      </Popup>
    </>
  );
}
