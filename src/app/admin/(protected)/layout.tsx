import { ADMIN_TOKEN_KEY } from "@/constants/keys";
import { getCookie } from "@/utils/cookie";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "MediSync - Admin Panel",
  description: "Admin dashboard for managing doctors and patients",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminToken = await getCookie(ADMIN_TOKEN_KEY);
  if (!adminToken) {
    redirect("/admin/login");
  }
  return children;
}
