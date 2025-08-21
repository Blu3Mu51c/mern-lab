import NavBar from "../../components/NavBar/NavBar";

export default function HootFeedPage({ user, setUser }) {

  return (
    <main>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>
    </main>
  );
}
