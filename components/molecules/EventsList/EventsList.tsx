import { EventCard } from "@/components/atoms";
import { EventProps } from "./EventsList.types";

const getEvents = async () => {
  const res = await fetch("http://localhost:4000/events", {
    next: {
      revalidate: 30,
      // revalidate: 0 // no cache
    },
  });

  return res.json();
};

export default async function EventList() {
  const events = await getEvents();

  return (
    <div>
      {events.map((event: EventProps) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
