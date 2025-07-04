import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Amenities from "@/components/Home/Amenities";
import Location from "@/components/Home/Location";
import Contact from "@/components/Home/Contact";
export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}
