import { ReactNode } from "react";
import styles from "./Table.module.scss";
type TProps = {
  children?: ReactNode;
};
function Table({ children }: TProps) {
  return <table className={styles.table}>{children}</table>;
}

export default Table;
