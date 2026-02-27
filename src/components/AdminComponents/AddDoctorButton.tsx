"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import Popup from "../global/Popup";
import DoctorDetailsForm from "./forms/DoctorDetailsForm";

export default function AddDoctorButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          setIsOpen(true);
        }}
        className="ml-auto -mt-2 cursor-pointer"
      >
        <PlusIcon className="h-4 w-4 mr-1" />
        Add Doctor
      </Button>

      <Popup showPopup={isOpen} onChangeShowPopup={(show) => setIsOpen(show)}>
        <DoctorDetailsForm />
      </Popup>
    </>
  );
}
