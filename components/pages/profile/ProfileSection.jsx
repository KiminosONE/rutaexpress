"use client";

import SectionCont from "@/components/ui/containers/sectionCont/SectionCont";
import styles from "./profileSection.module.css";
import BtnText from "@/components/ui/inputs/btnText/BtnText";
import Banner from "@/components/ui/cards/banner/Banner";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  actualizarUsu,
  actualizarUsuarioDB,
  cerrarSesionUsu,
  crearPedidoDB,
  listaPedidosDB,
  usuarioExcistente,
} from "@/firebase/client";
import { useRouter } from "next/navigation";
import Pedido from "@/components/ui/cards/pedido/Pedido";

export default function ProfileSection() {
  const [vistas, setVistas] = useState("perfil");
  const [user, setUser] = useState(undefined);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [inputNom, setInputNom] = useState("");
  const [inputOrigen, setInputOrigen] = useState("");
  const [inputDestino, setInputDestino] = useState("");
  const router = useRouter();

  useEffect(() => {
    usuarioExcistente(setUser);
    listaPedidosDB().then(setListaPedidos);
  }, []);

  const cambioVista = (vista) => {
    setVistas(vista);
    setInputNom(user.nombre);
  };

  const cerrarSesion = () => {
    cerrarSesionUsu();
  };

  const handleInputNom = (e) => {
    setInputNom(e.target.value);
  };

  const handleInputOrigen = (e) => {
    setInputOrigen(e.target.value);
  };
  const handleInputDestino = (e) => {
    setInputDestino(e.target.value);
  };

  const actualizar = () => {
    actualizarUsuarioDB(user.docId, inputNom);
    setVistas("perfil");
    usuarioExcistente(setUser);
  };

  const crearPedido = () => {
    crearPedidoDB({ origen: inputOrigen, destino: inputDestino });
    setVistas("perfil");
    listaPedidosDB().then(setListaPedidos);
  };

  return (
    <SectionCont className={styles.profileSection}>
      {user === null && router.push("/")}
      <Banner title={"Informacion de perfil"} interno />
      <div className={`containerAside`}>
        <aside>
          <h2>Acciones</h2>
          <ul>
            <li
              className={vistas === "perfil" && styles.liActive}
              onClick={() => cambioVista("perfil")}
            >
              Perfil
            </li>
            <Link href={"/rastreo"}>
              <li>Rastrear pedido</li>
            </Link>

            <li
              className={vistas === "actualizar" && styles.liActive}
              onClick={() => cambioVista("actualizar")}
            >
              Modificar usuario
            </li>

            {user && user.tipoUsuario === 0 && (
              <li
                className={vistas === "nuevoPedido" && styles.liActive}
                onClick={() => cambioVista("nuevoPedido")}
              >
                Nuevo pedido
              </li>
            )}
          </ul>
        </aside>
        <div>
          <h2>Perfil</h2>

          {vistas === "perfil" && (
            <>
              <article className={styles.profileCard}>
                <div>
                  <div>
                    <img src="home/banner2.jpeg" alt="" />
                  </div>
                  {user && user.nombre && (
                    <div>
                      <h3>{user.nombre}</h3>
                      <p>{user.email}</p>
                      <p>19/03/2023</p>
                    </div>
                  )}
                </div>
                <div>
                  <BtnText
                    text="Modificar usuario"
                    colorBG={"var(--color-secundario)"}
                    onClick={() => cambioVista("actualizar")}
                  />
                  <BtnText
                    text="Cerrar sesion"
                    onClick={cerrarSesion}
                    colorBG={"#cb3838"}
                  />
                </div>
              </article>

              {user && user.tipoUsuario === 0 && (
                <article className={styles.listaPedidos}>
                  <h2>Lista de pedidos</h2>
                  <div>
                    {listaPedidos.map((data, i) => (
                      <Pedido key={i} data={data} />
                    ))}
                  </div>
                </article>
              )}
            </>
          )}

          {vistas === "actualizar" && (
            <article className={styles.actulizarCard}>
              <h3>Actualiza tu Informacion</h3>

              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={inputNom}
                  onChange={handleInputNom}
                />
              </div>

              <BtnText text="Actualizar" onClick={actualizar} />
            </article>
          )}

          {vistas === "nuevoPedido" && (
            <article className={styles.actulizarCard}>
              <h3>Nuevo pedido</h3>

              <div>
                <input
                  type="text"
                  placeholder="Origen"
                  onChange={handleInputOrigen}
                />
                <input
                  type="text"
                  placeholder="Destino"
                  onChange={handleInputDestino}
                />
              </div>

              <BtnText text="crear pedido" onClick={crearPedido} />
            </article>
          )}
        </div>
      </div>
    </SectionCont>
  );
}
