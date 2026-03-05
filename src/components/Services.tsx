import { Brain, Lightbulb, BarChart3, Bot, GraduationCap, Rocket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { theme } = useTheme();
  const services = [
    {
      icon: Brain,
      title: 'Digital Transformation Strategy',
      description: 'Modernize technology ecosystems and align IT with business value through comprehensive digital strategy.',
      features: ['Technology Roadmaps', 'Digital Maturity Assessment', 'Change Management', 'Value Realization'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Programs & Labs',
      description: 'Design and launch innovation hubs, hackathons, and ideation programs that drive measurable business outcomes.',
      features: ['Innovation Hub Setup', 'Hackathons', 'Idea Management', 'POC Development'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: BarChart3,
      title: 'Technology Portfolio Governance',
      description: 'Manage digital investments, IT portfolios, and technology initiatives with structured governance frameworks.',
      features: ['Portfolio Management', 'Business Case Development', 'ROI Tracking', 'Risk Management'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Bot,
      title: 'AI & Automation Advisory',
      description: 'Guide businesses on implementing AI, analytics, and automation solutions for operational excellence.',
      features: ['AI Strategy', 'Process Automation', 'Analytics Implementation', 'Smart Technologies'],
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      icon: GraduationCap,
      title: 'Digital Capability Development',
      description: 'Train teams in digital literacy, AI adoption, and future-of-work capabilities at enterprise scale.',
      features: ['Training Programs', 'Digital Literacy', 'Change Enablement', 'Capability Assessment'],
      gradient: 'from-orange-600 to-amber-600',
    },
    {
      icon: Rocket,
      title: 'Enterprise System Implementation',
      description: 'Deploy and optimize enterprise applications like SAP, Dynamics 365, and cloud-based solutions.',
      features: ['SAP Support', 'Microsoft 365', 'System Integration', 'Cloud Migration'],
      gradient: 'from-indigo-600 to-violet-600',
    },
  ];

  return (
    <section id="services" className={`py-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">What I Offer</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>
            Consulting Services
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            End-to-end digital transformation solutions tailored for enterprise organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-8 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-4`}>
                  {service.title}
                </h3>

                <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mb-6 leading-relaxed`}>
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
