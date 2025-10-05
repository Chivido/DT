import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-slate-800 border border-slate-700 rounded-sm mb-4">
            <span className="text-slate-300 text-sm font-semibold tracking-wide uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Project
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discuss your requirements with our engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-slate-800 border border-slate-700 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <div className="text-silver-300 text-sm mb-1">Address</div>
                    <div className="text-white font-medium">Rotterdam, Netherlands</div>
                    <div className="text-silver-300 text-sm">3011 AD</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <div className="text-silver-300 text-sm mb-1">Email</div>
                    <a href="mailto:info@stratedgeconsulting.com" className="text-white font-medium hover:text-slate-400 transition-colors">
                      info@stratedgeconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <div className="text-silver-300 text-sm mb-1">Phone</div>
                    <a href="tel:+31101234567" className="text-white font-medium hover:text-slate-400 transition-colors">
                      +31 (0)10 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
                  <Linkedin className="text-slate-400" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
                  <Youtube className="text-slate-400" size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 border border-slate-700 p-6">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <div className="text-silver-200 text-sm space-y-1">
                <div>Monday - Friday: 9:00 - 18:00 CET</div>
                <div>Saturday - Sunday: Closed</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-8 py-4 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold border border-slate-700"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 border border-slate-700 p-6 overflow-hidden">
          <div className="aspect-video bg-slate-900 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin size={48} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">Rotterdam, Netherlands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
