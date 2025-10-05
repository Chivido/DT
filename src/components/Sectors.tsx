import { Zap, Building2, Ship, Factory } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    {
      icon: Zap,
      title: 'Energy & Power',
      subtitle: 'Critical Infrastructure',
      description: 'Oil & Gas, Refineries, Petrochemicals, Power Generation',
      projects: '45+ Projects',
      value: '$850M+',
      image: 'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building2,
      title: 'Infrastructure',
      subtitle: 'Large-Scale Development',
      description: 'Ports, Terminals, Industrial Parks, Urban Projects',
      projects: '38+ Projects',
      value: '$1.2B+',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Ship,
      title: 'Marine & Logistics',
      subtitle: 'Global Operations',
      description: 'Maritime, Shipping, Port Operations, Supply Chain',
      projects: '32+ Projects',
      value: '$420M+',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      subtitle: 'Process Engineering',
      description: 'Warehouses, Manufacturing, Storage, Distribution',
      projects: '28+ Projects',
      value: '$380M+',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-slate-800 border border-slate-700 rounded-sm mb-4">
            <span className="text-slate-300 text-sm font-semibold tracking-wide uppercase">Industry Sectors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Specialized Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep industry knowledge across critical infrastructure and energy sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 border border-slate-700 overflow-hidden cursor-pointer hover:border-slate-600 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center">
                    <sector.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {sector.title}
                </h3>
                <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  {sector.subtitle}
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {sector.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-slate-700">
                  <div>
                    <div className="text-2xl font-bold text-white">{sector.projects}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Delivered</div>
                  </div>
                  <div className="h-10 w-px bg-slate-700"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">{sector.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Total Value</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
