"use server";

import { Doctor } from "@/@types/doctor";
import { API } from "@/constants/environment/variables";
import { revalidateTag } from "next/cache";

export async function fetchDoctors(): Promise<Doctor[]> {
  const response = await fetch(`${API}/admin/doctors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["cache", "doctors"], revalidate: 60 * 5 },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch doctors.");
  }

  const data = await response.json();
  return data;
}

export async function createDoctor({
  data,
}: {
  data: Omit<Partial<Doctor>, "id" | "isActive">;
}) {
  const response = await fetch(`${API}/admin/doctors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(errorData.message || "Failed to create doctor.");
    return {
      success: false,
      message: errorData.message || "Failed to create doctor.",
    };
  }
  const result = await response.json();
  revalidateTag("doctors");
  return {
    success: true,
    data: result,
  };
}

export async function updateDoctor({
  id,
  data,
}: {
  id: string;
  data: Omit<Partial<Doctor>, "id" | "isActive">;
}) {
  const response = await fetch(`${API}/admin/doctors/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(errorData.message || "Failed to update doctor.");
    return {
      success: false,
      message: errorData.message || "Failed to update doctor.",
    };
  }
  revalidateTag("doctors");
  const result = await response.json();
  return {
    success: true,
    data: result,
  };
}

export async function deleteDoctor({ id }: { id: string }) {
  const response = await fetch(`${API}/admin/doctors/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(errorData.message || "Failed to delete doctor.");
    return {
      success: false,
      message: errorData.message || "Failed to delete doctor.",
    };
  }
  revalidateTag("doctors");
  const result = await response.json();
  return {
    success: true,
    data: result,
  };
}
