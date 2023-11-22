import SectionCont from "@/components/ui/containers/sectionCont/SectionCont";
import styles from "./loginSection.module.css";
import Link from "next/link";
import Banner from "@/components/ui/cards/banner/Banner";
import FormExp from "@/components/ui/cards/formExp/FormExp";

export default function LoginSection() {
  return (
    <SectionCont className={styles.loginSection}>
      <Banner interno title={'Inicio de sesion'}/>
      <FormExp />
    </SectionCont>
  );
}
