import { ExternalLink, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Portfolio = () => {
  const { theme } = useTheme();
  const projects = [
    {
      title: 'Digital Value Realization Framework',
      description: 'Designed comprehensive framework delivering $38.8M in cost savings/avoidance through structured benefit tracking.',
      impact: '$38.8M Value',
      tech: ['Strategy', 'PMO', 'Governance'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Innovation Hub - Catalyst Cove',
      description: 'Launched NLNG first Innovation Hub, yielding $2.25M+ annual cost avoidance through structured innovation programs.',
      impact: '$2.25M/Year',
      tech: ['Innovation', 'Design Thinking', 'Ideation'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Digital Capability Program',
      description: 'Led enterprise-wide digital literacy program training 2,500+ employees in AI, automation, and digital skills.',
      impact: '2,500+ Trained',
      tech: ['Training', 'Change Management', 'Digital Literacy'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: 'AI Strategy Development',
      description: 'Contributed to NLNG AI Strategy and Digital Maturity Assessment, defining roadmap for AI adoption.',
      impact: 'Strategic Impact',
      tech: ['AI Strategy', 'Assessment', 'Roadmap'],
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'Augmented Worker Program',
      description: 'Project managed deployment of Smart Mobile Worker Program integrating AR/VR technologies for field operations.',
      impact: 'Operational Excellence',
      tech: ['AR/VR', 'Mobile', 'Field Tech'],
      gradient: 'from-orange-600 to-amber-600',
    },
    {
      title: 'Enterprise Portfolio Governance',
      description: 'Established IT portfolio management framework ensuring alignment with corporate strategy and value delivery.',
      impact: 'Governance Framework',
      tech: ['PMO', 'Governance', 'Business Cases'],
      gradient: 'from-indigo-600 to-violet-600',
    },
  ];

  return (
    <section id="portfolio" className={`py-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-6`}>
            Key Projects & Initiatives
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Transformative digital initiatives delivering measurable business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'} backdrop-blur-sm p-6 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'} hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>

              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-3`}>
                {project.title}
              </h3>

              <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mb-4 leading-relaxed`}>
                {project.description}
              </p>

              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}>
                <Award className="text-white" size={16} />
                <span className="text-white text-sm font-semibold">{project.impact}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'} border rounded-full text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
