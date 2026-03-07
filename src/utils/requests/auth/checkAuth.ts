"use server";

import { getCookie } from "@/utils/cookie";
import { PATIENT_TOKEN_KEY } from "@/constants/keys";

export async function checkPatientAuth(): Promise<boolean> {
  const token = await getCookie(PATIENT_TOKEN_KEY);
  return !!token;
}
