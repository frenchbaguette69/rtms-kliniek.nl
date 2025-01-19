import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

// Prisma Singleton Configuratie
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Gebruik JSON Web Tokens voor sessiebeheer
  },
  providers: [
    CredentialsProvider({
      name: "Email en Wachtwoord",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
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

        // Controleer wachtwoord (voor platte tekst, gebruik bcrypt voor hashing)
        if (user.password !== credentials.password) {
          throw new Error("Onjuiste inloggegevens.");
        }

        // Retourneer de gebruiker
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Voeg extra gegevens toe aan het token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Voeg token-gegevens toe aan de sessie
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Zorg dat deze variabele correct is ingesteld
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
