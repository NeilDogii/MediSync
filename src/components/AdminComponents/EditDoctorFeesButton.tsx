"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { IndianRupeeIcon } from "lucide-react";
import Popup from "../global/Popup";
import DoctorPasswordEditForm from "./forms/DoctorPasswordForm";

export default function EditDoctorFeesButton({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button size="icon" variant={"outline"} onClick={() => setIsOpen(true)}>
        <IndianRupeeIcon className="h-4 w-4" />
      </Button>

      <Popup showPopup={isOpen} onChangeShowPopup={(show) => setIsOpen(show)}>
        <DoctorPasswordEditForm id={id} onClose={() => setIsOpen(false)} />
      </Popup>
    </>
  );
}
