import { EventsList, Footer, Header } from "@/components/molecules";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between justify-items-start p-1 h-full">
        <section>
          <h2>Your Event List</h2>
          <div className="flex flex-row justify-between flex-wrap pt-5">
            <EventsList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
