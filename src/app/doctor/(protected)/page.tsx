import SidebarDoctor from "@/components/DoctorComponents/SidebarDoctor";
import DashboardBackground from "../../../components/DoctorComponents/DashboardBackground";
// import Sidebar from "../../components/DoctorComponents/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar/> */}
      <SidebarDoctor />
      <DashboardBackground />
    </div>
  );
}
