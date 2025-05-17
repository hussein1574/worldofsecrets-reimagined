import Card from "@/components/common/Card/Card";
import styles from "./News.module.scss";
import Image from "next/image";
import Icon from "@/public/assets/images/ramadan_icon.png";
import News2 from "@/public/assets/images/news2.jpg";
import { useTranslations } from "next-intl";
import Section from "@/components/common/Section/Section";

function News() {
  const t = useTranslations("HomePage");
  return (
    <Section title={t("news")}>
      <Card size="Small" className={styles.hover}>
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <h3 className={styles.newsTitle}>عنوان الخبر</h3>
            <p className={styles.newsDesc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, est
              animi! Debitis, aliquam dolor odit consequatur labore vel iusto
              quibusdam optio placeat reiciendis.
            </p>
          </div>
          <Image
            className={styles.img}
            src={News2}
            alt="صورة الخبر"
            width={100}
            height={100}
          />
        </div>
      </Card>

      <Card size="Small" className={styles.hover}>
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <h3 className={styles.newsTitle}>عنوان الخبر</h3>
            <p className={styles.newsDesc}>الخبر</p>
          </div>
          <Image src={Icon} alt="صورة الخبر" width={100} />
        </div>
      </Card>
      <Card size="Small" className={styles.hover}>
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <h3 className={styles.newsTitle}>عنوان الخبر</h3>
            <p className={styles.newsDesc}>الخبر</p>
          </div>
          <Image src={Icon} alt="صورة الخبر" width={100} />
        </div>
      </Card>
    </Section>
  );
}

export default News;
