import styles from "./lineaRastreo.module.css";

export default function LineaRastreo({ estado }) {
  const reci = estado > 0;
  const desp = estado > 1;
  const cami = estado > 2;
  const entr = estado > 3;
  return (
    <div className={styles.lineaRastreo}>
      <ul className={styles.lineaTemporar}>
        <li
          className={styles.punto}
          style={reci && { backgroundColor: "var(--color-secundario)" }}
        >
          <h3>Recibido</h3>
        </li>
        <LineaPunto title="Despachado" estado={desp} />
        <LineaPunto title="En camino" estado={cami} />
        <LineaPunto title="Entregado" estado={entr} />
      </ul>
    </div>
  );
}

const LineaPunto = ({ estado = false, title = "sin titulo" }) => {
  return (
    <>
      {estado ? (
        <li
          className={styles.lineaPunto}
          style={{ backgroundColor: "var(--color-secundario)" }}
        >
          <div
            className={styles.punto}
            style={{ backgroundColor: "var(--color-secundario)" }}
          >
            <h3>{title}</h3>
          </div>
        </li>
      ) : (
        <li className={styles.lineaPunto}>
          <div className={styles.punto}>
            <h3>{title}</h3>
          </div>
        </li>
      )}
    </>
  );
};
