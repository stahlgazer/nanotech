import SkeletonTests from "@/components/skeleton-tests";
import Welcome from "@/components/welcome";

export default function Dashboard() {
  return (
    <section>
      <div>
        <Welcome />
        <SkeletonTests />
      </div>
    </section>
  );
}
