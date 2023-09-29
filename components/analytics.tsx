import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Analytics() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Current Location</p>
        </CardContent>
        <CardContent>
          <p>Steps</p>
        </CardContent>
        <CardContent>
          <p>Calories Burned</p>
        </CardContent>
        <CardContent>
          <p>test</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
