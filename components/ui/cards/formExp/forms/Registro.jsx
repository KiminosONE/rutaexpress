"use client";

import BtnText from "@/components/ui/inputs/btnText/BtnText";
import { registroUsuario } from "@/firebase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registro() {
  const [inputNom, setInputNom] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  const router = useRouter()

  const handleInputNom = (e) => {
    setInputNom(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPass = (e) => {
    setInputPass(e.target.value);
  };

  const handleButtonClick = () => {
    registroUsuario({
      nombre: inputNom,
      email: inputEmail,
      pass: inputPass,
    }).then((user) => {
      user && router.push('/profile')
    });
  };

  return (
    <div>
      <h2>Registro de usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        onChange={handleInputNom}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleInputEmail}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={handleInputPass}
        required
      />
      <div>
        <p>
          Ya tienes un perfil? <Link href={"/login"}>Inicia sesion</Link>
        </p>
        <BtnText text="REGISTRARSE" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
