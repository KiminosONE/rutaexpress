import SectionCont from "@/components/ui/containers/sectionCont/SectionCont";
import styles from "./registerSection.module.css";
import Banner from "@/components/ui/cards/banner/Banner";
import FormExp from "@/components/ui/cards/formExp/FormExp";

export default function RegisterSection() {
  return (
    <SectionCont>
      <Banner interno title={"Registrarse"} />
      <FormExp regisro />
    </SectionCont>
  );
}
