import React from 'react';
import Reveal from '../components/Reveal';
import { Badge } from '../components/UIComponents';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-fades-green text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal>
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 mb-6">About Us</Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Our Mission</h1>
            <p className="text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed opacity-90">
              Transforming Agriculture with Identity, Data & Community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-serif font-bold text-fades-dark mb-8">The FADES Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We believe that every farm, every farmer, every community matters. FADES was born to bring unity to Nigeria’s fragmented agriculture landscape. We saw how millions of smallholder farmers worked hard — yet lacked visibility, access and opportunities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We envisioned a future where technology, community and identity unify to create fairness, growth and sustainability. Today, FADES connects farms — digitally and socially — empowering farmers, cooperatives, agents and partners to build a thriving agriculture ecosystem.
              </p>
              <div className="bg-fades-light p-8 rounded-2xl border-l-4 border-fades-brown my-12">
                <p className="italic text-2xl text-fades-dark font-serif mb-4">"People. Process. Technology."</p>
                <p className="text-gray-600 font-medium">The tripod structure designed to drive productivity and inclusion.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-5xl font-serif font-bold text-fades-dark">Core Values</h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Honesty", desc: "We act with truth and transparency in all dealings." },
              { title: "Service", desc: "We are dedicated to our clients and communities." },
              { title: "Excellence", desc: "We pursue the highest standards of quality." },
              { title: "Teamwork", desc: "We work together to achieve outstanding results." },
              { title: "Integrity", desc: "We uphold strong ethical principles." },
              { title: "Innovation", desc: "We embrace new ideas and technologies." }
            ].map((value, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all h-full">
                  <h3 className="text-xl font-bold text-fades-dark mb-3">{value.title}</h3>
                  <p className="text-gray-500">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-serif font-bold text-fades-dark text-center mb-20">How We Work</h2>
          </Reveal>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Register", desc: "Farmers download app. Agents verify identity & issue FINcard." },
                { step: "02", title: "Map", desc: "Farms are geo-mapped and soil-tested for accuracy." },
                { step: "03", title: "Access", desc: "Advisory, inputs, and cooperatives become available." },
                { step: "04", title: "Connect", desc: "Gain visibility to buyers, off-takers, and agro-suppliers." },
                { step: "05", title: "Grow", desc: "Use analytics to track yield and improve livelihoods." }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.2}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center relative group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                    <div className="w-14 h-14 mx-auto bg-fades-dark text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-lg group-hover:bg-fades-green transition-colors rotate-3 group-hover:rotate-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-fades-dark mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;