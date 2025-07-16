import Header from "../../components/layout/header-dashboard";
import Sidebar from "../../components/layout/sidebar";
import DashboardHome from "./home";

export default function DashboardIndex() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="h-screen flex flex-row">
        <Sidebar />
        <div className="p-4">
          
        </div>
      </div>
    </div>
  )
}