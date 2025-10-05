import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Sectors />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
