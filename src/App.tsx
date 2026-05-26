import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Methodology } from "@/components/sections/Methodology";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Methodology />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
