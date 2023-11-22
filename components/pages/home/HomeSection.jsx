import IconText from "@/components/ui/labels/iconText/IconText";
import styles from "./homeSection.module.css";
import SectionCont from "@/components/ui/containers/sectionCont/SectionCont";
import Banner from "@/components/ui/cards/banner/Banner";
export default function HomeSection() {
  return (
    <SectionCont className={styles.homeSection}>
      <Banner />
      <article className={styles.cardHome}>
        <div>
          <img src="home/banner2.jpeg" alt="" />
        </div>
        <div>
          <h3>Quiénes Somos</h3>
          <p>
            En Ruta Express, estamos comprometidos con la seguridad, la
            confianza y la tranquilidad de nuestros clientes. Hemos liderado la
            industria del rastreo con innovación y tecnología de vanguardia.
          </p>
        </div>
      </article>
      <article
        className={styles.cardHome}
        style={{ flexDirection: "row-reverse" }}
      >
        <div>
          <img src="home/banner3.jpeg" alt="" />
        </div>
        <div>
          <h3>Nuestra Misión</h3>
          <p>
            Nuestra misión es proporcionar soluciones de rastreo precisas,
            confiables y eficientes para satisfacer las necesidades cambiantes
            de individuos y empresas. Nos esforzamos por ofrecer tranquilidad y
            seguridad a través de nuestros servicios y productos de alta
            calidad.
          </p>
        </div>
      </article>
      <article className={styles.cardHome}>
        <div>
          <img src="home/banner4.jpeg" alt="" />
        </div>
        <div>
          <h3>Nuestro Enfoque</h3>
          <p>
            En Ruta Express, nos enorgullecemos de nuestro enfoque centrado en
            el cliente. Entendemos las preocupaciones y desafíos asociados con
            la seguridad y la gestión logística, por lo que nos comprometemos a
            ofrecer soluciones personalizadas que se adapten a las necesidades
            específicas de cada cliente.
          </p>
        </div>
      </article>
    </SectionCont>
  );
}
