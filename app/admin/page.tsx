import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";  

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

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
