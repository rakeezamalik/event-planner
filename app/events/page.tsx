import { EventsList } from "@/components/molecules";

export default function EventsPage() {
  return (
    <section>
      <h2>Your Event List</h2>
      <div className="flex flex-row justify-between flex-wrap pt-5">
        <EventsList />
      </div>
    </section>
  );
}
