import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/sidebar";

export default function DashboardIndex() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="p-4 w-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}