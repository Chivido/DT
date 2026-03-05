import { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Users, TrendingUp } from 'lucide-react';
import profileImage1 from '../assets/Chivido_pic.png';
import profileImage2 from '../assets/Chivido55.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [profileImage1, profileImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Strategic IT Leader</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Chisom David
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Chukwuemeka
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Digital Transformation Consultant | Innovation Architect
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                Helping organizations unlock millions in value through digital strategy, AI, and innovation.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-blue-400">$38M+</div>
                <div className="text-sm text-slate-400">Value Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-purple-400">2,500+</div>
                <div className="text-sm text-slate-400">Trained</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-pink-400">8+</div>
                <div className="text-sm text-slate-400">Years Exp</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                Work With Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 font-semibold"
              >
                <Play size={20} />
                View Portfolio
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Award className="text-blue-400" size={20} />
                <span>Microsoft Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-purple-400" size={20} />
                <span>NLNG Digital Leader</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-pink-400" size={20} />
                <span>MBA in AI</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-purple-500/30 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-pink-500/30 rounded-full"></div>
              </div>

              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                        <img
                          src={img}
                          alt="Chisom David Chukwuemeka"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl animate-float">
                <Award className="text-white" size={32} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl shadow-2xl animate-float delay-500">
                <TrendingUp className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
