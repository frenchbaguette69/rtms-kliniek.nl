"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Background from "@/public/hero.jpg"; // Zorg dat de afbeelding in de public-map staat
import Logo from "@/public/rTMSkliniek.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Invoer email:", email);
    console.log("Invoer wachtwoord:", password);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("Sign-in response:", res);

    if (!res?.ok) {
      alert("Inloggen mislukt. Controleer je gegevens.");
    } else {
      window.location.href = "/admin"; // Redirect na succesvolle login
    }
  };

  return (
    <div className="flex h-screen">
      {/* Linker helft: Inloggen formulier */}
      <div className="flex flex-col justify-center px-10 w-full md:w-1/2 bg-white">
      <div className="container">
       <div className="flex gap-4 justify-between items-center mb-5"> <h1 className="text-3xl font-bold">Aanmelden</h1> <Image src={Logo} alt="logo" width={200} height={100} /></div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold"
        >
          Sign in
        </button>
      </div>
      </div>

      {/* Rechter helft: Afbeelding */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={Background}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          priority // Zorg dat de afbeelding sneller laadt
        />
      </div>
    </div>
  );
}
