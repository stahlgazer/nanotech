import Analytics from "@/components/analytics";
import Doctor from "@/components/doctor";
import HealthRisks from "@/components/health-risks";
import Schedule from "@/components/schedule";
import SleepTracker from "@/components/sleeptracker";
import UpcomingTests from "@/components/upcoming-tests";
import Vitals from "@/components/vitals";
import Welcome from "@/components/welcome";

export default function Dashboard() {
  return (
    <main className="">
      <Welcome />
      <Vitals />
      <SleepTracker />
      <Analytics />
      <UpcomingTests />
      <HealthRisks />
      <Doctor />
      <Schedule />
    </main>
  );
}
