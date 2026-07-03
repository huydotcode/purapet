import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeedingSchedule from "@/components/FeedingSchedule";
import SpecsComparison from "@/components/SpecsComparison";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeedingSchedule />
        <SpecsComparison />
        <ProductCatalog />
      </main>
    </>
  );
}
