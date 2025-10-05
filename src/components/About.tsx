import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every technical assessment and financial model.',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'Unwavering commitment to transparency and ethical business practices.',
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'Building lasting partnerships with stakeholders, investors, and communities.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Assessment',
      description: 'Comprehensive evaluation of technical feasibility, market conditions, and financial viability.',
    },
    {
      number: '02',
      title: 'Validation',
      description: 'Rigorous testing of assumptions, risk analysis, and stakeholder alignment.',
    },
    {
      number: '03',
      title: 'Structuring',
      description: 'Optimal project design, investment framework, and execution roadmap development.',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Implementation support, performance monitoring, and continuous optimization.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block px-6 py-2 bg-slate-800 rounded-sm mb-4">
              <span className="text-slate-200 text-sm font-semibold tracking-wide uppercase">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Engineering Excellence Since 2009
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              DTS Netherlands B.V. delivers comprehensive engineering and project management services for major industrial and infrastructure developments worldwide.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With 15+ years of proven experience across 25+ countries, we provide technical assurance and strategic oversight for refineries, energy facilities, warehouses, and large-scale infrastructure projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-white" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Mission</div>
                  <div className="text-slate-600">Deliver technically sound, commercially viable solutions for complex industrial projects.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="text-white" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Vision</div>
                  <div className="text-slate-600">Global recognition as trusted advisors for critical infrastructure development.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Delivery Methodology
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Systematic approach ensuring project success from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-800 p-8 text-white h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-700">
                  <div className="text-6xl font-bold text-slate-600 mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-slate-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
