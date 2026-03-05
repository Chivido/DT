import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Impact from './components/Impact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Portfolio />
      <Media />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
