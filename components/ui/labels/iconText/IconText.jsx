import styles from "./iconText.module.css";

export default function IconText({ size = "20px" }) {
  return (
    <div className={styles.iconText} style={{ fontSize: size }}>
      <span>RUTA</span>
      <span>EXPRESS</span>
    </div>
  );
}
