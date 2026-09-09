import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Music from "../components/Music";
import Mission from "../components/Mission";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Mission />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}