import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    return <p>Toegang geweigerd. Je bent niet ingelogd.</p>;
  }

  return (
    <div>
      <h1>Welkom, {session.user?.email}</h1>
      <p>Dit is een beveiligde pagina.</p>
    </div>
  );
}
