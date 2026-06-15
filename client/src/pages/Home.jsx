import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import EmployeeSpotlight from "./employeeofmonth/EmployeeOfMonth";
import EventsPreview from "./EventsPreview";
import MeetFounder from "./MeetFounder";
import TeamHierarchy from "./OurTeam";
import Services from "./Services";

export default function Home()
{
  return (
    <div>
      <Hero />
      <EmployeeSpotlight />
      <EventsPreview />
      <TeamHierarchy />
      {/* <Services /> */}
      <NewsUpdates />
    </div>
  );
}
