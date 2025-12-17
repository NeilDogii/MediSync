import { DOCTOR_TOKEN_KEY } from "@/constants/keys";
import { getCookie } from "@/utils/cookie";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "MediSync - Doctor Panel",
  description: "Doctor dashboard for managing appointments and patients",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminToken = await getCookie(DOCTOR_TOKEN_KEY);
  if (!adminToken) {
    redirect("/doctor/login");
  }
  return children;
}
