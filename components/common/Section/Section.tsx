import { ReactNode } from "react";
import styles from "./Section.module.scss";

type TProps = {
  children: ReactNode;
  title?: string;
};
function Section({ children, title }: TProps) {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      <div className={styles.section__container}>{children}</div>
    </section>
  );
}

export default Section;
