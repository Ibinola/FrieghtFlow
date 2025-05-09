import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import Partners from "../components/Partners"
import Worldwide from "../components/Worldwide"
import TrackShipments from "@/components/TrackShipments";
import HomepageHero from "@/components/HomepageHero";
import HomepageHero2 from "@/components/HomepageHero2";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
         <HomepageHero />
        <HomepageHero2 />
      <Services />
        <Partners />
        <Worldwide />
        <Testimonials />
        <TrackShipments />
    <Pricing />
    <FAQ />
      </main>
    </div>
    )
}