import { Base } from "./_base";

export interface Patient extends Base {
    name: string
    age?: number
    gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY"
    email: string
    phone: string
    password?: string
}