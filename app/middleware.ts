import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Verwijs niet-ingelogde gebruikers naar de loginpagina
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Bescherm alleen specifieke routes, niet /api/auth
};
