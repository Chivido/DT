import { Play, Youtube, Video } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Media = () => {
  const { theme } = useTheme();
  return (
    <section id="media" className={`py-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Media & Content</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>
            Talks & Presentations
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Insights on digital transformation, AI strategy, and innovation
          </p>
        </div>

        <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-8 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} text-center`}>
          <Video className="mx-auto text-blue-400 mb-4" size={64} />
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-4`}>Coming Soon</h3>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mb-6`}>Video content showcasing talks, presentations, and thought leadership</p>
          <a 
            href="https://www.linkedin.com/in/chisom-david/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Youtube size={20} />
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;
