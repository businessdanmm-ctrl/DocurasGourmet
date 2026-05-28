import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import { Instagram } from './components/Instagram';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Testimonials />
      <Gallery />
      <Menu />
      <Instagram />
      <FinalCTA />
      <Footer />
    </div>
  );
}