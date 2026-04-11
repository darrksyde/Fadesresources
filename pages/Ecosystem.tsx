import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Truck, ShoppingCart, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Button, Card, Badge } from '../components/UIComponents';

type Stakeholder = 'farmers' | 'agents' | 'suppliers' | 'buyers' | 'govt';

const Ecosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Stakeholder>('farmers');

  const content = {
    farmers: {
      title: "For Farmers & Cooperatives",
      subtitle: "Verified farm identity and geo-mapping: your farm becomes real visibility.",
      points: [
        "Data-driven advice and soil insights.",
        "Direct access to buyers and input suppliers.",
        "Trusted traceability and record-keeping.",
        "Access to financial services via verified data."
      ],
      cta: "Download the App",
      color: "bg-fades-green",
      icon: <User className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1605000797499-95a053545e58?q=80&w=1000&auto=format&fit=crop"
    },
    agents: {
      title: "For Agents (CoBEAs)",
      subtitle: "Empower communities, earn while serving.",
      points: [
        "Onboard and support farmers via dashboard.",
        "Conduct digital soil testing and geo-mapping.",
        "Facilitate access to inputs and services.",
        "Build a sustainable livelihood."
      ],
      cta: "Agent Login",
      color: "bg-fades-brown",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1595839213495-2c83d1c15c54?q=80&w=1000&auto=format&fit=crop"
    },
    suppliers: {
      title: "Input Suppliers",
      subtitle: "Reach real farms. Real demand. Real impact.",
      points: [
        "Access a network of verified farmers.",
        "Provide inputs with transparency.",
        "Track product usage and impact.",
        "Expand market reach effectively."
      ],
      cta: "Partner With Us",
      color: "bg-blue-600",
      icon: <Truck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop"
    },
    buyers: {
      title: "Buyers & Off-takers",
      subtitle: "Transparent supply, verified produce, trusted partnerships.",
      points: [
        "Find credible, verified farmers and farms.",
        "Access traceable produce and aggregate yield.",
        "Ensure quality control via digital records.",
        "Build consistent supply chains."
      ],
      cta: "Get the App",
      color: "bg-purple-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1000&auto=format&fit=crop"
    },
    govt: {
      title: "Government & NGOs",
      subtitle: "Data, visibility and impact at national scale.",
      points: [
        "Leverage aggregate farm data for policy.",
        "Monitor outreach and map farmland.",
        "Identify needs and track outputs.",
        "Get actionable insights for development."
      ],
      cta: "Request Partnership",
      color: "bg-gray-700",
      icon: <Building2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1576669801775-ffdeb440e190?q=80&w=1000&auto=format&fit=crop"
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-fades-light">
      {/* Header */}
      <section className="bg-fades-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Reveal>
            <Badge variant="outline" className="border-gray-700 text-gray-300 mb-6">Our Network</Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The Ecosystem</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We connect every node in the agricultural value chain into one seamless digital circle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Interface */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {(Object.keys(content) as Stakeholder[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative group flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === key ? 'bg-white shadow-lg scale-100 ring-1 ring-black/5' : 'hover:bg-white/50 hover:pl-6'
                }`}
              >
                <div className={`p-3 rounded-lg mr-4 transition-colors ${activeTab === key ? 'bg-fades-green/10 text-fades-green' : 'bg-gray-100 text-gray-500 group-hover:bg-white'}`}>
                  {content[key].icon}
                </div>
                <div>
                  <h3 className={`font-bold transition-colors ${activeTab === key ? 'text-fades-dark' : 'text-gray-500'}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h3>
                </div>
                {activeTab === key && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 w-1.5 h-8 bg-fades-green rounded-r-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl h-full flex flex-col md:flex-row">
                  <div className="md:w-3/5 p-10 flex flex-col justify-center bg-white order-2 md:order-1">
                    <div className={`inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit ${content[activeTab].color} bg-opacity-10 text-opacity-100`}>
                      <span className={`w-2 h-2 rounded-full ${content[activeTab].color}`}></span>
                      <span className={activeTab === 'agents' ? 'text-fades-brown' : activeTab === 'farmers' ? 'text-fades-green' : 'text-gray-700'}>
                         {activeTab}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-serif font-bold text-fades-dark mb-4">
                      {content[activeTab].title}
                    </h2>
                    <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                      {content[activeTab].subtitle}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {content[activeTab].points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-fades-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className={`${content[activeTab].color} border-none`}>
                      {content[activeTab].cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Image Side */}
                  <div className="md:w-2/5 relative h-64 md:h-auto order-1 md:order-2 overflow-hidden">
                    <img 
                      src={content[activeTab].image} 
                      alt={content[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                    <div className={`absolute inset-0 opacity-20 ${content[activeTab].color} mix-blend-multiply`}></div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;