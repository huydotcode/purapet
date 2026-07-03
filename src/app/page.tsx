import FeedingSchedule from "@/components/FeedingSchedule";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeedingSchedule />
      </main>
    </>
  );
}
