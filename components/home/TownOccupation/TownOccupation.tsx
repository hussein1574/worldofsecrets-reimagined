import Card from "@/components/common/Card/Card";
import styles from "./TownOccupation.module.scss";
import { RiRefreshLine } from "react-icons/ri";
import Image from "next/image";
import NavItem from "@/components/common/NavItem/NavItem";
import { TrophyIcon } from "@heroicons/react/24/solid";
import Table from "@/components/common/Table/Table";

function TownOccupation() {
  return (
    <Card size="Large" title="احتلال المدن">
      <div className={styles.subtitle}>
        <RiRefreshLine className={styles.icon} />
        <h3>يتم التحديث يوميا الساعة الثانية عشر صباحا</h3>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Town</th>
            <th>War level</th>
            <th>Faction</th>
            <th>Guild</th>
            <th>Guild leader</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alpen</td>
            <td>24 - 39</td>
            <td>
              <span className={styles.table__factionContainer}>
                <Image
                  src="/assets/icons/faction_icon.png"
                  alt="Faction icon"
                  width={20}
                  height={20}
                  className={styles.table__factionContainer__icon}
                />
                <span>الظلام</span>
              </span>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <NavItem href="/war" className={styles.table__button}>
                <TrophyIcon className={styles.table__button__icon} />
              </NavItem>
            </td>
          </tr>
          <tr>
            <td>Silaris</td>
            <td>40 - 59</td>
            <td>
              <span className={styles.table__factionContainer}>
                <Image
                  src="/assets/icons/faction_icon2.png"
                  alt="Faction icon"
                  width={20}
                  height={20}
                  className={styles.table__factionContainer__icon}
                />
                <span>الفوضي</span>
              </span>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <NavItem href="/war" className={styles.table__button}>
                <TrophyIcon className={styles.table__button__icon} />
              </NavItem>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default TownOccupation;
