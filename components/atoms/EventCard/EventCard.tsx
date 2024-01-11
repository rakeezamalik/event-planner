// import Image from "next/image";

import { EventProps } from "@/components/molecules/EventsList/EventsList.types";

interface EventCardProps {
  event: EventProps;
}

export default function EventCard({ event }: EventCardProps) {
  const { name, location, description, date, status } = event;

  return (
    <article className="flex flex-col justify-items-start bg-violet-600 p-5">
      <h3>{name}</h3>
      {/* <Image src="" /> */}
      <p>{description.slice(0, 100)}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{status}</p>
    </article>
  );
}
