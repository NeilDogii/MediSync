import DashboardBackground from "../../components/DoctorComponents/DashboardBackground";
import Sidebar from "../../components/DoctorComponents/Sidebar";
import Navbar from "../../components/UserComponents/Navbar";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <DashboardBackground />
      
    </div>
  )
}
