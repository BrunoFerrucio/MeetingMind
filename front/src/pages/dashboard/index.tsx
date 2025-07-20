import Sidebar from "../../components/layout/sidebar";
import DashboardHome from "./home";

export default function DashboardIndex() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="p-4">
        <DashboardHome />
      </div>
    </div>
  )
}