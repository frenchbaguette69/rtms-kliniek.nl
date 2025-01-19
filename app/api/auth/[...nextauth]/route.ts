import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Gebruik JSON Web Tokens
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

        // Controleer of de gebruiker in de database bestaat
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || user.password !== credentials.password) {
          throw new Error("Onjuiste inloggegevens.");
        }

        return { id: user.id, email: user.email }; // Retourneer de gebruiker
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Zorg dat deze variabele is ingesteld
};

// Maak de NextAuth-handler aan
const handler = NextAuth(authOptions);

// Exporteer de handler voor GET en POST-methodes
export { handler as GET, handler as POST };
