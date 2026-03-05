import { DollarSign, Users, Award, Rocket, TrendingUp, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Impact = () => {
  const { theme } = useTheme();
  const [counts, setCounts] = useState({ value: 0, trained: 0, years: 0, projects: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { value: 38.8, trained: 2500, years: 8, projects: 150 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        value: Math.floor(targets.value * progress * 10) / 10,
        trained: Math.floor(targets.trained * progress),
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  const metrics = [
    { icon: DollarSign, value: `$${counts.value}M+`, label: 'Value Delivered', gradient: 'from-green-500 to-emerald-500' },
    { icon: Users, value: `${counts.trained.toLocaleString()}+`, label: 'Employees Trained', gradient: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: `${counts.years}+`, label: 'Years Experience', gradient: 'from-purple-500 to-pink-500' },
    { icon: Rocket, value: `${counts.projects}+`, label: 'Projects Delivered', gradient: 'from-orange-500 to-red-500' },
  ];

  const achievements = [
    { icon: Award, title: 'Innovation Hub Launch', description: 'Catalyst Cove - $2.25M annual savings', color: 'blue' },
    { icon: Globe, title: 'Digital Strategy', description: 'NLNG Digital & AI Strategy Contributor', color: 'purple' },
    { icon: TrendingUp, title: 'Value Realization', description: 'Designed framework for $38M+ savings', color: 'pink' },
    { icon: Users, title: 'Capability Building', description: '2,500+ employees trained in digital skills', color: 'cyan' },
  ];

  return (
    <section ref={sectionRef} id="impact" className={`py-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Impact & Results</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>
            Measurable Business Value
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Proven track record of delivering transformative results across enterprise organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-8 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} text-center hover:border-blue-500/50 transition-all duration-300`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${metric.gradient} mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-2`}>{metric.value}</div>
                <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-6 rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-${achievement.color}-600 to-${achievement.color}-500 rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-2`}>{achievement.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
