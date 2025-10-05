import { FileSearch, Settings, DollarSign, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: 'Project Feasibility & Design',
      description: 'Comprehensive technical and financial assessments to validate project viability from concept to execution.',
      features: ['Market Analysis', 'Risk Assessment', 'Technical Design', 'Financial Modeling'],
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Settings,
      title: 'Technical Advisory & Inspections',
      description: 'Expert engineering consultation and on-site inspections ensuring projects meet international standards.',
      features: ['Quality Assurance', 'Compliance Review', 'Technical Due Diligence', 'Performance Monitoring'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: DollarSign,
      title: 'Investment Structuring & Due Diligence',
      description: 'Strategic financial structuring and comprehensive due diligence to prepare projects for investment.',
      features: ['Capital Structure', 'Investor Relations', 'Legal Framework', 'Exit Strategy'],
      image: 'https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Energy Transition & Infrastructure',
      description: 'Specialized consulting for renewable energy, smart infrastructure, and sustainable development projects.',
      features: ['Renewables Integration', 'Smart Cities', 'Grid Modernization', 'Sustainability Planning'],
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-slate-800 rounded-sm mb-4">
            <span className="text-slate-200 text-sm font-semibold tracking-wide uppercase">Engineering Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end technical and commercial support for complex industrial projects worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-slate-800"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
