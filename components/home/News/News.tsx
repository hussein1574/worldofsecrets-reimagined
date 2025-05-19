import Card from "@/components/common/Card/Card";
import styles from "./News.module.scss";
import Character1 from "@/public/assets/images/Character1-Enhanced.png";
import Character2 from "@/public/assets/images/Character2-Enhanced.png";
import { useTranslations } from "next-intl";
import Section from "@/components/common/Section/Section";

function News() {
  const t = useTranslations("HomePage");
  return (
    <Section title={t("news")}>
      <Card
        style="Yellow"
        size="Small"
        className={styles.yellowHover}
        title="عنوان الخبر"
        rightCharacter={Character2}
      >
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <p className={styles.newsDesc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, est
              animi! Debitis, aliquam dolor odit consequatur labore vel iusto
              quibusdam optio placeat reiciendis.
            </p>
          </div>
        </div>
      </Card>

      <Card
        size="Small"
        className={styles.yellowHover}
        title="عنوان الخبر"
        style="Yellow"
      >
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <p className={styles.newsDesc}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, est
              animi! Debitis, aliquam dolor odit consequatur labore vel iusto
              quibusdam optio placeat reiciendis.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ut, est animi! Debitis, aliquam
              dolor odit consequatur labore vel iusto quibusdam optio placeat
              reiciendis.Lorem ipsum,
            </p>
          </div>
        </div>
      </Card>
      <Card
        style="Teal"
        size="Small"
        className={styles.tealHover}
        title="عنوان الخبر"
        leftCharacter={Character1}
      >
        <div className={styles.new}>
          <div className={styles.textContainer}>
            <p className={styles.newsDesc}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, est
              animi! Debitis, aliquam dolor odit consequatur labore vel iusto
              quibusdam optio placeat reiciendis.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export default News;
