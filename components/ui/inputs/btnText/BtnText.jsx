'use client'

import styles from "./btnText.module.css";

export default function BtnText({
  text = "falta texto",
  colorBG,
  onClick = () => {},
}) {
  const onClickLocal = () => {
    onClick();
  };

  return (
    <button
      style={colorBG && { backgroundColor: colorBG }}
      className={styles.btnText}
      onClick={() => onClickLocal()}
    >
      {text}
    </button>
  );
}
