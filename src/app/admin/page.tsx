import DashboardBackground from "../AdminComponents/DashboardBackground";
import Sidebar from "../AdminComponents/Sidebar";
import Navbar from "../Components/Navbar";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <DashboardBackground />
      
    </div>
  )
}
