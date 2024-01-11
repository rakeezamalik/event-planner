export interface EventProps {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  status: "accepted" | "declined";
}
