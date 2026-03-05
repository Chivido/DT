import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Outstanding performance and dedication to digital transformation excellence.",
      author: "Senior Leadership",
      role: "Nigeria LNG Limited",
      rating: 5,
    },
    {
      quote: "Recognized 8 times as Performer of the Month for exceptional technical support and innovation.",
      author: "Microsoft Team",
      role: "Microsoft Dynamics 365",
      rating: 5,
    },
    {
      quote: "Instrumental in driving digital capability and innovation across the organization.",
      author: "Digital Transformation Team",
      role: "NLNG Digital & Innovation",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recognized Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Quote className="text-blue-400 mb-4" size={32} />
              <p className="text-slate-300 mb-6 leading-relaxed italic">{testimonial.quote}</p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-slate-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
