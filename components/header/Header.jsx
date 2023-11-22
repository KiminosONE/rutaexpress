"use client";

import Link from "next/link";
import IconText from "../ui/labels/iconText/IconText";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { usuarioExcistente } from "@/firebase/client";

export default function Header() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    usuarioExcistente(setUser);
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInterior}>
          <div className={styles.headerLeft}>
            <Link href={"/"}>
              <IconText />
            </Link>

            <nav>
              <ul>
                <Link href={'/rastreo'}>
                  <li>Rastrear</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className={styles.headerRight}>
            {user === null && (
              <ul>
                <li>
                  <Link href={"/register"}>Registrarse</Link>
                </li>
                <li>
                  <Link href={"/login"}>Iniciar sesion</Link>
                </li>
              </ul>
            )}

            {user && user.nombre && (
              <Link href={"/profile"}>
                <div className={styles.avatarLabel}>
                  <div>
                    <img src="home/banner2.jpeg" alt="" />
                  </div>
                  <div>
                    <p>{user.nombre}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
