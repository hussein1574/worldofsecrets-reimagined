import styles from "./Hero.module.scss";
import { useTranslations } from "next-intl";
import NavItem from "../../common/NavItem/NavItem";
import Character1 from "@/public/assets/images/Character1.png";
import Character2 from "@/public/assets/images/Character2.png";
import Image from "next/image";

function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section className={styles.container}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{t("welcomeMessage")}</h1>
        <p className={styles.heroSubtitle}>{t("heroSubtitle")}</p>
        <NavItem href="/download" isButton>
          {t("downloadButton")}
        </NavItem>
      </div>
      <Image src={Character1} alt="character 1" className={styles.chr1} />
      <Image src={Character2} alt="character 2" className={styles.chr2} />
    </section>
  );
}

export default Hero;
