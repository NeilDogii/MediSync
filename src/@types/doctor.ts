import { Base } from "./_base"
import { DoctorSpecialization } from "./enum"

export interface Doctor extends Base {
    name: string
    username: string
    password: string
    specialization: DoctorSpecialization
    phone: string
    email: string
}