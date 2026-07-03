import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeedingSchedule from "@/components/FeedingSchedule";
import SpecsComparison from "@/components/SpecsComparison";
import ProductCatalog from "@/components/ProductCatalog";
import VoucherForm from "@/components/VoucherForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeedingSchedule />
        <SpecsComparison />
        <ProductCatalog />
        <VoucherForm />
      </main>
      <Footer />
    </>
  );
}
