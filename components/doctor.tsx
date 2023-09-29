import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Doctor() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://headshots-inc.com/wp-content/uploads/2021/01/Professional-Headshot-Examples-31-1.jpg" />
        <AvatarFallback>Doc</AvatarFallback>
      </Avatar>
    </div>
  );
}
