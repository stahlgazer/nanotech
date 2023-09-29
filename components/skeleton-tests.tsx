import { Skeleton } from "./ui/skeleton";

export default function SkeletonTests() {
  return (
    <div>
      <p>Awaiting recent test results...</p>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-8  rounded-full border-b border-primary" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] rounded-full border-b-2 border-primary" />
          <Skeleton className="h-4 w-[250px] rounded-full border-b-2 border-primary" />
          <Skeleton className="h-4 w-[200px] rounded-full border-b-2 border-primary" />
        </div>
      </div>
    </div>
  );
}
