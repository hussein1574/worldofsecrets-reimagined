import styles from "./UpcomingWars.module.scss";
import { useTranslations } from "next-intl";
import Card from "@/components/common/Card/Card";
import { SiLighthouse } from "react-icons/si";
function UpcomingWars() {
  const t = useTranslations("HomePage");
  return (
    <Card size="Large" title={t("upcomingWars")}>
      <div className={styles.wars}>
        <div className={styles.wars__war}>
          <div className={styles.wars__war__iconContainer}>
            <SiLighthouse className={styles.wars__war__icon} />
          </div>
          <div className={styles.wars__war__textContainer}>
            <p>حرب الاحتلال</p>
            <p>الجمعة, 5/16/2025, 11:00 PM - 11:35 PM</p>
          </div>
        </div>
        <div className={styles.wars__war}>
          <div className={styles.wars__war__iconContainer}>
            <SiLighthouse className={styles.wars__war__icon} />
          </div>

          <div className={styles.wars__war__textContainer}>
            <p>حرب الاحتلال</p>
            <p>الجمعة, 5/16/2025, 11:00 PM - 11:35 PM</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UpcomingWars;
