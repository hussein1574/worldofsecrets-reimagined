import styles from "./Hero.module.scss";
import { useTranslations } from "next-intl";
import NavItem from "../../common/NavItem/NavItem";
import Character1 from "@/public/assets/images/Character1-Enhanced.png";
import Character2 from "@/public/assets/images/Character2-Enhanced.png";
import Image from "next/image";

function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__content__title}>{t("welcomeMessage")}</h1>
        <p className={styles.hero__content__subtitle}>{t("heroSubtitle")}</p>
        <NavItem href="/download" isButton>
          {t("downloadButton")}
        </NavItem>
      </div>
      <Image
        src={Character1}
        alt="character 1"
        width={400}
        className={styles.hero__chr1}
      />
      <Image
        src={Character2}
        alt="character 2"
        className={styles.hero__chr2}
        width={400}
      />
    </section>
  );
}

export default Hero;
