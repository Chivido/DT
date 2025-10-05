import { ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Petrochemical Refinery Expansion',
      location: 'Middle East',
      year: '2023-2024',
      value: '$420M',
      category: 'Refinery',
      description: 'Technical due diligence and project management for 150,000 bpd refinery capacity expansion.',
      impact: '150,000 bpd capacity',
      partner: 'National Oil Corporation',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'LNG Terminal & Tank Farm',
      location: 'Asia Pacific',
      year: '2023',
      value: '$580M',
      category: 'Energy Storage',
      description: 'Design review and commissioning support for 500,000 cubic meter LNG storage facility.',
      impact: '500,000m³ storage',
      partner: 'Asia Gas Consortium',
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Industrial Warehouse Complex',
      location: 'Europe',
      year: '2024',
      value: '$180M',
      category: 'Logistics',
      description: 'Feasibility and design for 250,000 sqm automated distribution center.',
      impact: '250,000 sqm facility',
      partner: 'European Logistics Group',
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Offshore Platform Engineering',
      location: 'North Sea',
      year: '2022-2023',
      value: '$650M',
      category: 'Oil & Gas',
      description: 'Structural integrity assessment and life extension study for production platform.',
      impact: '75,000 bpd production',
      partner: 'North Sea Energy Partners',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-slate-800 rounded-sm mb-4">
            <span className="text-slate-200 text-sm font-semibold tracking-wide uppercase">Project Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Major infrastructure and energy projects delivered across global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-1 bg-slate-800 text-xs font-semibold text-white uppercase tracking-wide">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className={`px-4 py-1 ${project.status === 'Completed' ? 'bg-green-600' : 'bg-amber-600'} text-xs font-semibold text-white uppercase tracking-wide`}>
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-sm text-slate-500 mb-1 uppercase tracking-wide">Project Value</div>
                    <div className="text-2xl font-bold text-slate-900">{project.value}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 mb-1 uppercase tracking-wide">Impact</div>
                    <div className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                      <TrendingUp size={16} className="text-green-600" />
                      {project.impact}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Client: {project.partner}</span>
                  <ArrowRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-slate-800 text-white px-10 py-4 rounded-sm hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 mx-auto border border-slate-700">
            Discuss Your Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
