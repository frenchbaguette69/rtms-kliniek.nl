import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Gebruik JWT voor sessies
  },
  providers: [
    CredentialsProvider({
      name: "Email en Wachtwoord",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Wachtwoord", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email en wachtwoord zijn verplicht.");
        }

        // Zoek de gebruiker in de database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("Gebruiker niet gevonden.");
        }

        // Vergelijk wachtwoorden (in dit voorbeeld geen hashing gebruikt)
        if (user.password !== credentials.password) {
          throw new Error("Onjuist wachtwoord.");
        }

        // Retourneer de gebruiker als de login succesvol is
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Voeg user-info toe aan het token bij inloggen
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Voeg token-info toe aan de sessie
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Zorg voor een veilige NEXTAUTH_SECRET in .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
