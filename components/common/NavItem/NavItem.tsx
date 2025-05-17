import { Link } from "@/i18n/navigation";
import styles from "./NavItem.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

type TProps = {
  children: ReactNode;
  href: string;
  isButton?: boolean;
  className?: string;
};

function NavItem({ children, href, isButton, className }: TProps) {
  return (
    <Link
      className={clsx(styles.link, { [styles.button]: isButton }, className)}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavItem;
