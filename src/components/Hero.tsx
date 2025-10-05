import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial refinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-sm">
            <span className="text-slate-200 text-sm font-semibold tracking-wide uppercase">Engineering Excellence Since 2009</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Industrial Infrastructure<br />
            <span className="text-slate-300">
              Built for the Future
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Global engineering consultancy delivering large-scale energy, refinery, and infrastructure projects.
            Technical excellence meets operational reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-slate-800 text-white px-10 py-4 rounded-sm hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 border border-slate-600"
            >
              Our Capabilities
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-transparent text-white px-10 py-4 rounded-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2 border border-slate-400"
            >
              <PlayCircle size={20} />
              Case Studies
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '$2.5B+', label: 'Infrastructure Value' },
            { value: '25+', label: 'Global Markets' },
            { value: '15+', label: 'Years of Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
