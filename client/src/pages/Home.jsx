import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import EmployeeSpotlight from "./employeeofmonth/EmployeeOfMonth";
import MeetFounder from "./MeetFounder";
import TeamHierarchy from "./OurTeam";
import Services from "./Services";

export default function Home()
{
  return (
    <div>
      <Hero />
      <EmployeeSpotlight />
      <TeamHierarchy />
      {/* <Services /> */}
      <NewsUpdates />
    </div>
  );
}
