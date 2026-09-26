import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Methodology } from "@/components/sections/Methodology";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <About />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
