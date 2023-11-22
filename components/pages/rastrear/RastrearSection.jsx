"use client";

import SectionCont from "@/components/ui/containers/sectionCont/SectionCont";
import styles from "./rastrearSection.module.css";
import Banner from "@/components/ui/cards/banner/Banner";
import BtnText from "@/components/ui/inputs/btnText/BtnText";
import LineaRastreo from "./cards/lineaRastreo/LineaRastreo";
import { useState } from "react";
import { leerPedidoDB } from "@/firebase/client";

export default function RastrearSection() {
  const [inputIdPedido, setInputIdPedido] = useState();
  const [dataPedido, setDataPedido] = useState(null);

  const handleInputIdPedido = (e) => {
    setInputIdPedido(e.target.value);
  };

  const buscarPedido = () => {
    leerPedidoDB(inputIdPedido, setDataPedido);
  };

  return (
    <SectionCont>
      <Banner interno title={"Rastrear pedido"} />
      <div className={`containerAside`}>
        <aside className={styles.inputAside}>
          <div>
            <img src="home/banner2.jpeg" alt="" />
          </div>

          <input
            type="text"
            placeholder="Codigo de envio"
            onChange={handleInputIdPedido}
          />

          <BtnText text="Rastrear pedido" onClick={buscarPedido} />
        </aside>
        <div>
          {dataPedido != null && (
            <>
              <article className={styles.cardRastreo}>
                <h2>Pedido {dataPedido.id}</h2>
                <div className={styles.infoPedido}>
                  <div>
                    <div>
                      <h3>Fecha de envio</h3>
                      <p>08/10/2023</p>
                    </div>
                    <div>
                      <h3>Fecha de entrega estimada</h3>
                      <p>08/10/2023</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3>Origen</h3>
                      <p>{dataPedido.origen}</p>
                    </div>
                    <div>
                      <h3>Destino</h3>
                      <p>{dataPedido.destino}</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className={styles.cardRastreo}>
                <h2>Moviminetos</h2>

                <LineaRastreo estado={dataPedido.estado}/>
              </article>
            </>
          )}
        </div>
      </div>
    </SectionCont>
  );
}
