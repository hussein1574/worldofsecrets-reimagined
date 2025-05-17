import { ReactNode } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";
type Props = {
  children: ReactNode;
  className?: string;
  size: "Large" | "Medium" | "Small";
  title?: string;
};
function Card({ children, className, size, title }: Props) {
  return (
    <div
      className={clsx(
        styles.card,
        className,
        {
          [styles.card__large]: size === "Large",
        },
        { [styles.card__small]: size === "Small" },
        { [styles.card__medium]: size === "Medium" }
      )}
    >
      {title && <h2 className={styles.card__title}>{title}</h2>}
      {children}
    </div>
  );
}

export default Card;
