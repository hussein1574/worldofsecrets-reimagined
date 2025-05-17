"use client";
import { Link, usePathname } from "@/i18n/navigation";
import styles from "./LanguageSelectorButton.module.scss";
import { useLocale } from "next-intl";
function LanguageSelectorButton() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  return (
    <Link
      className={styles.button}
      href={pathname}
      locale={currentLocale === "ar" ? "en" : "ar"}
    >
      {currentLocale === "ar" ? "English" : "العربية"}
    </Link>
  );
}

export default LanguageSelectorButton;
