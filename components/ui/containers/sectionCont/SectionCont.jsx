import styles from "./sectionCont.module.css";

export default function SectionCont({ className, children }) {
  return (
    <section>
      <div className="container">
        <section className={className}>{children}</section>
      </div>
    </section>
  );
}
