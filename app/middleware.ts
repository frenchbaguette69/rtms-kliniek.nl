import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect naar de loginpagina als de gebruiker niet is ingelogd
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Bescherm alle routes die beginnen met /admin
};
