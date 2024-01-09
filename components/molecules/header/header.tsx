export default function Header() {
  return (
    <header>
        <nav className="flex flex-wrap justify-between items-end w-screen px-10">
          <h1>Event Planner</h1>
          <ul className="flex justify-between gap-5">
            <li className="flex-1">
              <a>Settings</a>
            </li>
            <li className="flex-1">
              <a>Search</a>
            </li>
          </ul>
        </nav>
    </header>
  );
}
