import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma"; // Zorg dat Prisma via een Singleton wordt geïmporteerd

// NextAuth-configuratie
const authOptions: NextAuthOptions = {
  // Instellen van sessiebeheer
  session: {
    strategy: "jwt", // Gebruik JSON Web Tokens voor sessies
  },

  // Providers configureren (CredentialsProvider in dit geval)
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

        // Controleer of de gebruiker bestaat in de database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("Gebruiker niet gevonden.");
        }

        // Controleer het wachtwoord (gebruik bcrypt voor beveiliging)
        if (user.password !== credentials.password) {
          throw new Error("Onjuiste inloggegevens.");
        }

        // Retourneer de gebruiker
        return { id: user.id, email: user.email };
      },
    }),
  ],

  // Callbacks instellen
  callbacks: {
    async jwt({ token, user }) {
      // Voeg user-informatie toe aan het token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Voeg token-informatie toe aan de sessie
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },

  // Secret voor encryptie
  secret: process.env.NEXTAUTH_SECRET, // Zorg dat deze variabele correct is ingesteld
};

// Handler voor de Next.js API
const handler = NextAuth(authOptions);

// Exporteer de handler voor zowel GET als POST methodes
export { handler as GET, handler as POST };
