import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
