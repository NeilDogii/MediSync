"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { LockOpen } from "lucide-react";
import Popup from "../global/Popup";
import DoctorPasswordEditForm from "./forms/DoctorPasswordForm";

export default function EditDoctorPasswordButton({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button size="icon" variant={"outline"} onClick={() => setIsOpen(true)}>
        <LockOpen className="h-4 w-4" />
      </Button>

      <Popup showPopup={isOpen} onChangeShowPopup={(show) => setIsOpen(show)}>
        <DoctorPasswordEditForm id={id} onClose={() => setIsOpen(false)} />
      </Popup>
    </>
  );
}
