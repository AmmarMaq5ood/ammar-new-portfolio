import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Work />
      </main>
      <Footer />
    </>
  );
}
