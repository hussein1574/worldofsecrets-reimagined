import { ReactNode } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Props = {
  children: ReactNode;
  className?: string;
  size: "Large" | "Medium" | "Small";
  title: string;
  rightCharacter?: StaticImageData;
  leftCharacter?: StaticImageData;
  style: "Teal" | "Yellow";
};
function Card({
  children,
  className,
  size,
  title,
  rightCharacter,
  leftCharacter,
  style,
}: Props) {
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
      <div
        className={clsx(styles.card__upper, {
          [styles.card__yellow]: style == "Yellow",
          [styles.card__teal]: style == "Teal",
        })}
      >
        <h2
          className={clsx(styles.card__upper__title, {
            [styles.card__upper__title__left]: rightCharacter,
            [styles.card__upper__title__center]:
              !rightCharacter && !leftCharacter,
          })}
        >
          {title}
        </h2>
      </div>
      <div
        className={clsx(styles.card__lower, {
          [styles.card__yellowBackground]: style == "Yellow",
          [styles.card__tealBackground]: style == "Teal",
        })}
      >
        {!rightCharacter && !leftCharacter && (
          <div className={styles.card__normalContainer}>{children}</div>
        )}
        {(rightCharacter || leftCharacter) && (
          <>
            {rightCharacter && (
              <div className={styles.card__lower__characterContainer}>
                <Image
                  src={rightCharacter}
                  alt="character 1"
                  className={
                    styles.card__lower__characterContainer__rightCharacter
                  }
                />
              </div>
            )}
            <div
              className={clsx(
                styles.card__lower__content,
                {
                  [styles.card__lower__content__left]: rightCharacter,
                },
                {
                  [styles.card__lower__content__right]: leftCharacter,
                }
              )}
            >
              {children}
            </div>
            {leftCharacter && (
              <div className={styles.card__lower__characterContainer}>
                <Image
                  src={leftCharacter}
                  alt="character 1"
                  className={
                    styles.card__lower__characterContainer__leftCharacter
                  }
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
