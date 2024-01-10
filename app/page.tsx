import { EventCard } from "@/components/atoms";
import { Footer, Header } from "@/components/molecules";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between justify-items-start p-1 h-full">
        <section>
          <h2>Your Event List</h2>
          <section className="flex flex-row justify-between flex-wrap pt-5">
            <EventCard />
            <EventCard />
            <EventCard />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
