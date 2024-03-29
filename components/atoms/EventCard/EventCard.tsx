// import Image from "next/image";

import { EventProps } from "@/components/molecules/EventsList/EventsList.types";
import Link from "next/link";

interface EventCardProps {
  event: EventProps;
}

export default function EventCard({ event }: EventCardProps) {
  const { id, name, location, description, date, status } = event;

  return (
    <Link href={`/events/${id}`}>
      <article className="flex flex-col justify-items-start bg-violet-600 p-5">
        <h3>{name}</h3>
        {/* <Image src="" /> */}
        <p>{description.slice(0, 100)}</p>
        <p>{date}</p>
        <p>{location}</p>
        <p>{status}</p>
      </article>
    </Link>
  );
}
