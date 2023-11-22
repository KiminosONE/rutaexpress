"use client";
import styles from "./pedido.module.css";

import { actualizarPedidoDB, leerPedidoDB } from "@/firebase/client";
import BtnText from "../../inputs/btnText/BtnText";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";

export default function Pedido({ data }) {
  const [dataPedido, setDataPedido] = useState({});

  useEffect(() => {
    leerPedidoDB(data.id, setDataPedido);
  }, []);

  const actualizarEstado = (estado) => {
    actualizarPedidoDB(data.id, estado);
    leerPedidoDB(data.id, setDataPedido);
  };

  const estadoLetra = (estado) => {
    if (estado == 1) {
      return "Recibido";
    } else if (estado == 2) {
      return "Despachado";
    } else if (estado == 3) {
      return "En camino";
    } else if (estado == 4) {
      return "Entregado";
    }
  };

  return (
    <div className={styles.pedido}>
      <h3>ID: {data.id}</h3>

      <div>
        <p>Estado: {estadoLetra(dataPedido.estado)}</p>
        <p>Origen: {dataPedido.origen}</p>
        <p>Destino: {dataPedido.destino}</p>
      </div>

      <div>
        <BtnText text="Recibido" onClick={() => actualizarEstado(1)} />
        <BtnText text="Despachado" onClick={() => actualizarEstado(2)} />
        <BtnText text="En camino" onClick={() => actualizarEstado(3)} />
        <BtnText text="Entregado" onClick={() => actualizarEstado(4)} />
      </div>
    </div>
  );
}
