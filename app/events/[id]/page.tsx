import { EventProps } from "@/components/molecules/EventsList/EventsList.types";
import { notFound } from "next/navigation";

interface ParamsProps {
  id: string;
}

interface EventPageProps {
  params: ParamsProps;
}

export const dynamicParams = false;

// Able to make the routes ahead of time now as it statically gets the id
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/events");

  const events = await res.json();

  return events.map((event: EventProps) => ({
    id: event.id,
  }));
}

async function getEvent(id: string) {
  const res = await fetch("http://localhost:4000/events/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function EventPage({ params }: EventPageProps) {
  // This component will essentially be the Event Modal

  const { id } = params;

  const event = await getEvent(params.id);

  return (
    <div>
      <h1>Your Event</h1>
      {id}
    </div>
  );
}
