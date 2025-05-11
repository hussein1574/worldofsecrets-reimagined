import Hero from "@/components/home/Hero/Hero";
import News from "@/components/home/News/News";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Hero />
      <News />
    </main>
  );
}
