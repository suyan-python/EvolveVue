import Hero from "../components/Hero";
import NewsUpdates from "../components/NewsUpdates";
import MeetFounder from "./MeetFounder";
import TeamHierarchy from "./OurTeam";
import Services from "./Services";

export default function Home()
{
  return (
    <div>
      <Hero />
      <TeamHierarchy />
      <Services />
      <MeetFounder />
      <NewsUpdates />
    </div>
  );
}
