import styles from "./Rates.module.scss";
import { useTranslations } from "next-intl";
import Card from "@/components/common/Card/Card";
import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/solid";

function Rates() {
  const t = useTranslations("HomePage");
  return (
    <Card size="Large" title={t("rates")}>
      <div className={styles.rates}>
        <div className={styles.rates__rateContainer}>
          <div className={styles.rates__rateContainer__textContainer}>
            <StarIcon
              className={styles.rates__rateContainer__textContainer__icon}
            />
            <p>الخبرة</p>
          </div>
          <p className={styles.rates__rateContainer__rate}>x1</p>
        </div>
        <div className={styles.rates__rateContainer}>
          <div className={styles.rates__rateContainer__textContainer}>
            <CurrencyDollarIcon
              className={styles.rates__rateContainer__textContainer__icon}
            />
            <p>السقوط</p>
          </div>
          <p className={styles.rates__rateContainer__rate}>x1</p>
        </div>
      </div>
    </Card>
  );
}

export default Rates;
