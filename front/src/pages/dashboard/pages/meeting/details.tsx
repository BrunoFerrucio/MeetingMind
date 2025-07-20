import { Link } from "react-router-dom";
import HomeHeader from "../../../../components/layout/header-home";

export function DashboardMeetingDetails() {
  return (
    <div>
      <HomeHeader />

      <Link to="/dashboard/meetings" className="text-blue-600 hover:underline">
        <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>➔</span> Back
      </Link>

      <h2>Meeting Details</h2>
      <p>Here you can find the details of the meeting.</p>
    </div>
  );
}