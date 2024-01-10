// import Image from "next/image";

export default function EventCard() {
  return (
    <article className="flex flex-col justify-items-start bg-violet-600 p-5">
      <h3>Name of Event</h3>
      {/* <Image src="" /> */}
      <p>Description of Event</p>
      <p>Date of Event</p>
      <p>Location of Event</p>
      <p>Accepted/Declined Status</p>
    </article>
  );
}
