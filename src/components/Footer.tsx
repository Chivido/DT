import { Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DTS</span>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">DTS Netherlands</div>
                <div className="text-xs text-slate-400">B.V.</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4 max-w-md leading-relaxed">
              Global engineering and project management for major industrial infrastructure, refineries, energy facilities, and large-scale developments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group border border-slate-700">
                <Linkedin className="text-slate-400 group-hover:text-white transition-colors" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group border border-slate-700">
                <Youtube className="text-slate-400 group-hover:text-white transition-colors" size={18} />
              </a>
              <a href="mailto:info@stratedgeconsulting.com" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group border border-slate-700">
                <Mail className="text-slate-400 group-hover:text-white transition-colors" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Sectors', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Project Feasibility</li>
              <li>Technical Advisory</li>
              <li>Investment Structuring</li>
              <li>Energy Transition</li>
              <li>Infrastructure Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} DTS Netherlands B.V. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
          <div className="text-slate-500 text-xs text-center md:text-left mt-4">
            VAT: NL123456789B01 | KvK: 12345678 | Registered in Rotterdam, Netherlands
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
