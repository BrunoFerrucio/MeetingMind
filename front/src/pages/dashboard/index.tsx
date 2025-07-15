import Header from "../../components/ui/header-dashboard";
import Sidebar from "../../components/ui/sidebar";

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