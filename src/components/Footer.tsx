import { Linkedin, Mail, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${theme === 'dark' ? 'bg-slate-950' : 'bg-white'} border-t ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CDC</span>
              </div>
              <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <div className="font-bold text-lg">Chisom David</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Digital Transformation</div>
              </div>
            </div>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed`}>
              Strategic IT Leader helping organizations unlock millions in value through digital strategy, AI, and innovation.
            </p>
          </div>

          <div>
            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-4`}>Quick Links</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
              <li><a href="#about" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>About</a></li>
              <li><a href="#services" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Services</a></li>
              <li><a href="#portfolio" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Portfolio</a></li>
              <li><a href="#contact" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-4`}>Connect</h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/chisom-david/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all`}>
                <Linkedin className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} hover:text-white transition-colors`} size={18} />
              </a>
              <a href="mailto:emeks14@gmail.com" className={`w-10 h-10 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all`}>
                <Mail className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} hover:text-white transition-colors`} size={18} />
              </a>
              <a href="https://www.chivido.ng" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all`}>
                <Globe className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} hover:text-white transition-colors`} size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
            © {currentYear} Chisom David Chukwuemeka. All rights reserved.
          </div>
          <div className={`flex gap-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
            <button className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Privacy Policy</button>
            <button className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
