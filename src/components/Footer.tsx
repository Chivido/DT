import { Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CDC</span>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">Chisom David</div>
                <div className="text-xs text-slate-400">Digital Transformation</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Strategic IT Leader helping organizations unlock millions in value through digital strategy, AI, and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/chisom-david/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="text-slate-400 hover:text-white transition-colors" size={18} />
              </a>
              <a href="mailto:emeks14@gmail.com" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all">
                <Mail className="text-slate-400 hover:text-white transition-colors" size={18} />
              </a>
              <a href="https://www.chivido.ng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all">
                <Globe className="text-slate-400 hover:text-white transition-colors" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Chisom David Chukwuemeka. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-400 text-sm">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
