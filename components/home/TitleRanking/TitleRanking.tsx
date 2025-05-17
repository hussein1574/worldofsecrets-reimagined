import Table from "@/components/common/Table/Table";
import styles from "./TitleRanking.module.scss";
import Rank1 from "@/public/assets/icons/Title Ranking/1.png";
import Rank2 from "@/public/assets/icons/Title Ranking/2.png";
import Rank3 from "@/public/assets/icons/Title Ranking/3.png";
import Rank4 from "@/public/assets/icons/Title Ranking/4.png";
import Rank5 from "@/public/assets/icons/Title Ranking/5.png";
import Rank6 from "@/public/assets/icons/Title Ranking/6.png";
import Rank7 from "@/public/assets/icons/Title Ranking/7.png";
import Rank8 from "@/public/assets/icons/Title Ranking/8.png";
import Rank9 from "@/public/assets/icons/Title Ranking/9.png";
import Rank10 from "@/public/assets/icons/Title Ranking/10.png";
import Image from "next/image";
import Card from "@/components/common/Card/Card";
import { RiRefreshLine } from "react-icons/ri";
function TitleRanking() {
  return (
    <Card size="Medium" title="ترتيب الألقاب (أول 10)">
      <div className={styles.subtitle}>
        <RiRefreshLine className={styles.icon} />
        <h3>يتم التحديث يوميا الساعة الثانية عشر صباحا</h3>
      </div>
      <Table>
        <tbody>
          <tr>
            <td>
              <Image src={Rank1} alt="1st Crown image" width={30} height={30} />
            </td>
            <td>Player 1</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank2} alt="2nd Crown image" width={30} height={30} />
            </td>
            <td>Player 2</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank3} alt="3rd Crown image" width={30} height={30} />
            </td>
            <td>Player 3</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank4} alt="4th Crown image" width={30} height={30} />
            </td>
            <td>Player 4</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank5} alt="5th Crown image" width={30} height={30} />
            </td>
            <td>Player 5</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank6} alt="6th Crown image" width={30} height={30} />
            </td>
            <td>Player 6</td>
          </tr>
          <tr>
            <td>
              <Image src={Rank7} alt="7th Crown image" width={30} height={30} />
            </td>
            <td>Player 7</td>
          </tr>
          <tr>
            <td>
              <Image
                src={Rank8}
                alt=" 8th Crown image"
                width={30}
                height={30}
              />
            </td>
            <td>Player 8</td>
          </tr>
          <tr>
            <td>
              <Image
                src={Rank9}
                alt=" 9th Crown image"
                width={30}
                height={30}
              />
            </td>
            <td>Player 9</td>
          </tr>
          <tr>
            <td>
              <Image
                src={Rank10}
                alt=" 10th Crown image"
                width={30}
                height={30}
              />
            </td>
            <td>Player 10</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default TitleRanking;
