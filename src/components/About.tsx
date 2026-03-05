import { Briefcase, GraduationCap, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const timeline = [
    { year: '2022-Present', role: 'Senior Digital Technology Analyst', company: 'Nigeria LNG Limited', icon: Briefcase },
    { year: '2020-2022', role: 'Senior Technical Support Engineer', company: 'Microsoft', icon: Award },
    { year: '2018-2020', role: 'IT Support Analyst', company: 'FIRST E&P', icon: Zap },
    { year: '2023-2025', role: 'MBA in AI & Automation', company: 'Nexford University', icon: GraduationCap },
  ];

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">About Me</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>
            Strategic IT Leader & Innovation Architect
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
              With over <span className="text-blue-400 font-semibold">10+ years</span> of experience in enterprise digital transformation, I specialize in turning complex technology initiatives into measurable business value.
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
              At <span className="text-purple-400 font-semibold">Nigeria LNG Limited</span>, I lead digital strategy initiatives that have delivered <span className="text-pink-400 font-semibold">$38.8M+</span> in cost savings and trained <span className="text-pink-400 font-semibold">2,500+</span> employees in digital capabilities.
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
              I designed and launched NLNG's first <span className="text-blue-400 font-semibold">Innovation Hub (Catalyst Cove)</span>, yielding over <span className="text-purple-400 font-semibold">$2.25M</span> in annual cost avoidance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-4 rounded-lg border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <Users className="text-blue-400 mb-2" size={24} />
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2,500+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Employees Trained</div>
              </div>
              <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-4 rounded-lg border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <TrendingUp className="text-purple-400 mb-2" size={24} />
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>$38.8M+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Value Delivered</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>Career Journey</h3>
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`flex gap-4 p-4 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm rounded-lg border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition-all duration-300`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 font-semibold">{item.year}</div>
                    <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold`}>{item.role}</div>
                    <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm`}>{item.company}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
