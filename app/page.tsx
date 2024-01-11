import { EventsList, Footer, Header } from "@/components/molecules";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between justify-items-start p-1 h-full">
      <h2>Welcome</h2>
      <h2>
        <button>
          <Link href="/events">Events</Link>
        </button>
      </h2>
    </main>
  );
}
