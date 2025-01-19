"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

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
    <div>
      <h1>Inloggen</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Inloggen</button>
    </div>
  );
}
