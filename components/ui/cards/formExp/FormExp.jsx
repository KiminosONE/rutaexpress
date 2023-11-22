import styles from "./formExp.module.css";
import Login from "./forms/Login";
import Registro from "./forms/Registro";

export default function FormExp({ regisro }) {
  return (
    <article className={styles.formExp}>
      <div>
        {regisro ? <img src="home/banner2.jpeg" alt="" /> : <img src="home/banner4.jpeg" alt="" />}
        
      </div>
      {regisro ? <Registro /> : <Login />}
    </article>
  );
}
