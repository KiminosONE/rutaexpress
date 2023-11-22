import IconText from "../../labels/iconText/IconText";
import styles from "./banner.module.css";

export default function Banner({ interno, title }) {
  return (
    <div className={styles.banner} style={interno && { height: "23vh" }}>
      <div>
        <img src="home/banner3.jpeg" alt="" />
      </div>

      <div>
        <IconText size={interno ? "5vh" : "7vh"} />
        {interno && <h1>{title}</h1>}
      </div>
    </div>
  );
}
