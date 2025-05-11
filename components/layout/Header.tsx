import Image from "next/image";
import Logo from "@/public/assets/icons/game-logo.png";
import styles from "./Header.module.scss";
import NavItem from "../common/NavItem/NavItem";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <NavItem isButton={true} href="/account/auth">
        {t("login")}
      </NavItem>

      <nav className={styles.nav}>
        <NavItem href="/discord">{t("discord")}</NavItem>
        <NavItem href="/leaderboard">{t("leaderboard")}</NavItem>
        <NavItem href="/recharge">{t("recharge")}</NavItem>
        <NavItem href="/shop">{t("shop")}</NavItem>
      </nav>
      <Image height={100} src={Logo} alt="World Of Secrets" />
    </header>
  );
}

export default Header;
