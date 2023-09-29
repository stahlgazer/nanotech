import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Vitals() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Vitals</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Body Temperature</p>
        </CardContent>
        <CardContent>
          <p>Blood Type</p>
        </CardContent>
        <CardContent>
          <p>Heartbeat</p>
        </CardContent>
        <CardContent>
          <p>Blood Pressure</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
