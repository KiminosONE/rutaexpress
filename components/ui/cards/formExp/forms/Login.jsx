"use client";

import BtnText from "@/components/ui/inputs/btnText/BtnText";
import { loginUsuario } from "@/firebase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  const router = useRouter();

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPass = (e) => {
    setInputPass(e.target.value);
  };

  const handleButtonClick = () => {
    loginUsuario({
      email: inputEmail,
      pass: inputPass,
    }).then((user) => {
      user && router.push("/profile");
    });
  };

  return (
    <div>
      <h2>Inicio de sesion</h2>
      <input
        type="email"
        placeholder="Email"
        required
        onChange={handleInputEmail}
      />
      <input
        type="password"
        placeholder="Contraseña"
        required
        onChange={handleInputPass}
      />
      <div>
        <p>
          No tienes perfil? <Link href={"/register"}>Registrate</Link>
        </p>
        <BtnText text="INGRESAR" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
