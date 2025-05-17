import Hero from "@/components/home/Hero/Hero";
import News from "@/components/home/News/News";
import styles from "./page.module.scss";
import Rates from "@/components/home/Rates/Rates";
import UpcomingWars from "@/components/home/UpcomingWars/UpcomingWars";
import Section from "@/components/common/Section/Section";
import TownOccupation from "@/components/home/TownOccupation/TownOccupation";
import TitleRanking from "@/components/home/TitleRanking/TitleRanking";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Hero />
      <News />
      <Section>
        <Rates />
        <UpcomingWars />
      </Section>
      <Section>
        <TownOccupation />
        <TitleRanking />
      </Section>
    </main>
  );
}
