import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Map, Users, TrendingUp, ShieldCheck, Download, 
  Smartphone, Sprout, BarChart3, Leaf, CreditCard, Share2, Database, 
  Cpu, Lock, Globe, Layers, Quote, ChevronLeft, ChevronRight, Star
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from '../components/UIComponents';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Scroll-triggered highlight text component
interface HighlightTextProps {
  children: React.ReactNode;
  progress: any;
  start: number;
  end: number;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.35, 1]);
  const color = useTransform(progress, [start, end], ['#9ca3af', '#1A1A1A']);
  
  return (
    <motion.span 
      style={{ opacity, color }}
      className="font-semibold transition-all"
    >
      {children}
    </motion.span>
  );
};

// Storytelling section with scroll-triggered highlights
const WhyFadesMattersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-gray-400 mb-8"
        >
          //The Challenge
        </motion.p>
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-fades-dark mb-12 leading-tight"
        >
          Farming in Nigeria faces real challenges.
        </motion.h2>
        
        {/* Narrative paragraph with highlighted phrases */}
        <div className="text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-500 font-light">
          <p className="mb-8">
            For decades, {' '}
            <HighlightText progress={scrollYProgress} start={0.15} end={0.22}>
              millions of smallholder farmers
            </HighlightText>{' '}
            have labored in obscurity, held back by a fragmented system that leaves them without {' '}
            <HighlightText progress={scrollYProgress} start={0.22} end={0.29}>
              verified identities
            </HighlightText>{' '}
            or access to formal services.
          </p>
          
          <p className="mb-8">
            They face {' '}
            <HighlightText progress={scrollYProgress} start={0.29} end={0.36}>
              disconnected markets
            </HighlightText>{' '}
            with {' '}
            <HighlightText progress={scrollYProgress} start={0.36} end={0.43}>
              unfair pricing
            </HighlightText>
            , unreliable support, and a  {' '}
            <HighlightText progress={scrollYProgress} start={0.43} end={0.50}>
              complete lack of traceability
            </HighlightText>{' '}
            that erodes trust and blocks {' '}
            <HighlightText progress={scrollYProgress} start={0.50} end={0.57}>
              financial inclusion
            </HighlightText>.
          </p>
          
          <p className="mb-12">
            This cycle of low visibility and limited opportunity has stifled growth for too long.
          </p>
          
          {/* Solution statement */}
          <motion.p 
            className="text-fades-green font-medium"
            style={{
              opacity: useTransform(scrollYProgress, [0.57, 0.65], [0.35, 1])
            }}
          >
            FADES is changing that — one farmer at a time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Hero background images
const heroImages = [
  '/images/hero 1.webp',
  '/images/hero 2.webp',
  '/images/hero 3.webp',
  '/images/hero 4.webp',
];

// Testimonials data
const testimonials = [
  { quote: "FADES helped me map my farm and connect to better buyers. My income finally grew after years of struggle. The support has been incredible.", author: "Amina Yusuf", profession: "Small-Scale Farmer", rating: 5 },
  { quote: "With my FINcard, I can now access inputs and programs without stress. It's changed how I do business completely.", author: "Musa Ibrahim", profession: "Large-Scale Farmer", rating: 5 },
  { quote: "As an agent, I support hundreds of farmers. The dashboard makes everything easier and my community trusts the system.", author: "Chinedu Okafor", profession: "CoBEA Agent", rating: 5 },
  { quote: "The geo-mapping feature helped me understand my land better. Now I know exactly what crops work best for my soil.", author: "Fatima Bello", profession: "Commercial Farmer", rating: 5 },
  { quote: "Before FADES, I had no way to prove my farming history. Now buyers trust me and I get better prices for my produce.", author: "Emeka Nwankwo", profession: "Subsistence Farmer", rating: 5 },
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-advance hero images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial navigation
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  return (
    <div className="w-full overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-fades-dark">
        {/* Background Images with Crossfade Transition */}
        {heroImages.map((src, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url("${src}")`,
            }}
          />
        ))}
        
        {/* Image Preloader (hidden) */}
        <div className="hidden">
          {heroImages.map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
        </div>
        
        {/* Cinematic Overlay - lighter and more stylish */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-fades-dark/80 via-fades-dark/40 to-transparent"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-fades-dark/90 via-transparent to-fades-dark/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="max-w-3xl">
              <Reveal delay={0.1}>
                <Badge variant="default" className="mb-6 py-1.5 px-4 text-sm bg-fades-green text-white border-none shadow-[0_0_20px_rgba(41,135,92,0.5)]">
                  Farmers Digital Ecosystem
                </Badge>
              </Reveal>
              
              <Reveal delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tight">
                  Empowering <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fades-green to-emerald-300">Nigeria’s Farmers.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-lg">
                  One unified ecosystem connecting smallholders, agents, and markets to drive sustainable prosperity.
                </p>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full text-base font-bold h-14 px-8 shadow-[0_0_30px_rgba(41,135,92,0.4)] hover:shadow-[0_0_40px_rgba(41,135,92,0.6)]">
                    <Download className="w-5 h-5 mr-2" />
                    Download the App
                  </Button>
                  <a href="https://agent.fadesresources.org/onboarding" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="rounded-full text-base font-bold h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white hover:text-fades-dark backdrop-blur-sm">
                      <Users className="w-5 h-5 mr-2" />
                      Become an Agent
                    </Button>
                  </a>
                </div>
              </Reveal>
            </div>
        </div>
            
        {/* Animated Abstract UI Elements - Grouped Bottom Right */}
        <div className="hidden lg:flex absolute bottom-24 right-8 z-10">
               {/* Soft glow behind cards */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-fades-green/10 rounded-full blur-[60px]"></div>
               
               {/* Cards Container - Stacked Rows */}
               <div className="relative flex flex-col gap-[30px]">
                 {/* Row 1: Mobile First + Geo-Mapping */}
                 <Reveal direction="right" delay={0.6}>
                   <div className="flex gap-[30px]">
                     <Card className="bg-transparent border border-white/20 text-white p-4 backdrop-blur-xl w-40 hover:border-white/30 hover:bg-white/5 transition-all shadow-lg shadow-black/10">
                       <Smartphone className="w-6 h-6 text-fades-green mb-2" />
                       <h3 className="text-sm font-semibold">Mobile First</h3>
                       <p className="text-xs text-gray-300">Any device</p>
                     </Card>
                     <Card className="bg-transparent border border-white/20 text-white p-4 backdrop-blur-xl w-40 hover:border-white/30 hover:bg-white/5 transition-all shadow-lg shadow-black/10">
                       <Map className="w-6 h-6 text-fades-brown mb-2" />
                       <h3 className="text-sm font-semibold">Geo-Mapping</h3>
                       <p className="text-xs text-gray-300">Precise data</p>
                     </Card>
                   </div>
                 </Reveal>
                 
                 {/* Row 2: Advisory + Impact */}
                 <Reveal direction="right" delay={0.8}>
                   <div className="flex gap-[30px]">
                     <Card className="bg-transparent border border-white/20 text-white p-4 backdrop-blur-xl w-40 hover:border-white/30 hover:bg-white/5 transition-all shadow-lg shadow-black/10">
                       <Sprout className="w-5 h-5 text-emerald-400 mb-1.5" />
                       <h3 className="text-sm font-semibold">Advisory</h3>
                       <p className="text-xs text-gray-300">Smart insights</p>
                     </Card>
                     <Card className="bg-transparent border border-white/20 text-white p-4 backdrop-blur-xl w-40 hover:border-white/30 hover:bg-white/5 transition-all shadow-lg shadow-black/10">
                       <div className="flex items-center justify-between mb-2">
                         <h3 className="text-sm font-semibold">Impact</h3>
                         <Badge className="bg-green-500/20 text-green-300 border-none text-[10px] px-1.5 py-0">Live</Badge>
                       </div>
                       <div className="space-y-1.5">
                         <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-fades-green w-[75%]"></div>
                         </div>
                         <div className="flex justify-between text-[10px] text-gray-300">
                           <span>Farmers</span>
                           <span>75%</span>
                         </div>
                       </div>
                     </Card>
                   </div>
                 </Reveal>
               </div>
        </div>
        
        {/* Image Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-fades-green w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* --- SECTION 1: WHY FADES MATTERS --- */}
      <WhyFadesMattersSection />

      {/* --- SECTION 2: THE JOURNEY (Timeline) --- */}
      <section className="py-24 bg-fades-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <Badge className="mb-4">The Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-fades-dark mb-4">
                Your journey with FADES
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Every farmer deserves visibility, support and growth. See how it all comes together.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0"></div>

            {[
              { title: "Before FADES", desc: "Farming feels uncertain. Markets are unpredictable. Inputs are hard to access.", icon: <Leaf /> },
              { title: "Onboarding", desc: "Download the app or meet a CoBEA. Verify your identity. Receive your FINcard.", icon: <Smartphone /> },
              { title: "Farm Mapping", desc: "Your land is digitally mapped. Your data becomes your power.", icon: <Map /> },
              { title: "Support & Advisory", desc: "Receive soil insights, crop guidance and community support that truly understands your realities.", icon: <Sprout /> },
              { title: "Market Access", desc: "Buyers and cooperatives now see you. You gain visibility and fair value.", icon: <TrendingUp /> },
              { title: "Growth", desc: "You farm smarter. Earn more. Build a resilient future.", icon: <BarChart3 /> }
            ].map((step, idx) => (
              <Reveal key={idx} width="100%">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                  <div className="flex-1 md:text-right">
                    {idx % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-2xl font-bold text-fades-dark mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    )}
                    {/* Mobile View */}
                    <div className="md:hidden pl-12 text-left">
                       <h3 className="text-xl font-bold text-fades-dark mb-1">{step.title}</h3>
                       <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-fades-light shadow-xl text-fades-green shrink-0 absolute left-0 md:static">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-5 h-5 md:w-7 md:h-7" })}
                  </div>

                  <div className="flex-1">
                     {idx % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-2xl font-bold text-fades-dark mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: OUR SOLUTION --- */}
      <section className="py-24 bg-fades-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-widest text-fades-green mb-4">| Features</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-fades-dark leading-tight">
                Powerful features to simplify your<br className="hidden md:block" /> farming experience
              </h2>
            </Reveal>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Large: FINcard & Mapping */}
            <Reveal>
              <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Illustration Area */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB2NDBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIweiIgZmlsbD0iI2YwZjBmMCIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
                  {/* Card Visual */}
                  <div className="relative z-10 w-full max-w-xs">
                    <div className="bg-gradient-to-br from-fades-green to-emerald-700 rounded-xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-6">
                        <Sprout className="w-6 h-6 text-white" />
                        <span className="text-white/80 text-xs font-medium">FINcard</span>
                      </div>
                      <div className="w-10 h-6 bg-yellow-400/80 rounded mb-4"></div>
                      <div className="h-1.5 w-3/4 bg-white/30 rounded mb-1"></div>
                      <div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
                    </div>
                    <div className="absolute -bottom-2 -right-4 bg-white rounded-lg shadow-md p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-fades-green rounded-full flex items-center justify-center">
                        <Map className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Mapped ✓</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-fades-dark mb-2">FINcard & Geo-Mapping</h3>
                <p className="text-gray-500 leading-relaxed">Your identity and your land, digitally secured and verified. Get recognized everywhere with accurate farm coordinates and verified credentials.</p>
              </div>
            </Reveal>

            {/* Card 2 - Large: Advisory & Support */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Illustration Area */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                  {/* Template/Dashboard Visual */}
                  <div className="relative z-10 w-full max-w-xs">
                    <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
                      <div className="flex gap-1 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                        <div className="flex gap-2 mt-3">
                          <div className="h-8 flex-1 bg-fades-green/10 rounded flex items-center justify-center">
                            <Sprout className="w-4 h-4 text-fades-green" />
                          </div>
                          <div className="h-8 flex-1 bg-fades-brown/10 rounded flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-fades-brown" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-2 bg-fades-green text-white text-xs px-2 py-1 rounded-full shadow-md">
                      ✨ Insights
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-fades-dark mb-2">Smart Advisory & Support</h3>
                <p className="text-gray-500 leading-relaxed">Get personalized recommendations with AI-powered tools. Soil data, crop guidance, and expert support helping you farm smarter and make more use of your farm.</p>
              </div>
            </Reveal>
          </div>

          {/* Second Row - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Card 3: Inputs & Services */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-5 h-36 flex items-center justify-center relative overflow-hidden">
                  {/* Chart Visual */}
                  <div className="relative z-10 w-full">
                    <div className="flex items-end justify-center gap-1.5 h-20">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-4 bg-gradient-to-t from-fades-green to-emerald-400 rounded-t-sm transition-all hover:from-fades-green hover:to-fades-green"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[8px] text-gray-400">
                      <span>Jan</span>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 text-[10px] text-fades-green font-medium shadow-sm">
                    ↗ 25%
                  </div>
                </div>
                <h3 className="text-lg font-bold text-fades-dark mb-1.5">Inputs & Services</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Quality seeds, fertilizers, and mechanization connected seamlessly.</p>
              </div>
            </Reveal>

            {/* Card 4: Market Linkages */}
            <Reveal delay={0.3}>
              <div className="bg-white rounded-3xl p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-5 h-36 flex items-center justify-center relative overflow-hidden">
                  {/* Integration Icons Visual */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-fades-green rounded-full flex items-center justify-center shadow-lg">
                      <Share2 className="w-6 h-6 text-white" />
                    </div>
                    {/* Orbiting icons */}
                    <div className="absolute -top-3 -right-8 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Users className="w-4 h-4 text-fades-brown" />
                    </div>
                    <div className="absolute -bottom-2 -right-6 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-fades-green" />
                    </div>
                    <div className="absolute top-2 -left-8 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Database className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Globe className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-fades-dark mb-1.5">Market Linkages</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Connect with buyers and cooperatives. Sell transparently, earn better.</p>
              </div>
            </Reveal>

            {/* Card 5: Traceability */}
            <Reveal delay={0.4}>
              <div className="bg-white rounded-3xl p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-5 h-36 flex items-center justify-center relative overflow-hidden">
                  {/* Mobile/Responsive Visual */}
                  <div className="relative z-10 flex items-center gap-2">
                    {/* Phone mockup */}
                    <div className="w-16 h-28 bg-white rounded-xl shadow-lg border-2 border-gray-200 p-1.5 transform -rotate-3">
                      <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden">
                        <div className="h-2 bg-fades-green/20 mb-1"></div>
                        <div className="px-1 space-y-1">
                          <div className="h-1 w-full bg-gray-200 rounded"></div>
                          <div className="h-1 w-2/3 bg-gray-200 rounded"></div>
                          <div className="flex gap-1 mt-1">
                            <div className="h-3 flex-1 bg-fades-green/10 rounded"></div>
                            <div className="h-3 flex-1 bg-fades-brown/10 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tablet mockup */}
                    <div className="w-24 h-20 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-1.5 transform rotate-2">
                      <div className="w-full h-full bg-gray-50 rounded overflow-hidden">
                        <div className="h-1.5 bg-fades-green/20 mb-1"></div>
                        <div className="px-1 space-y-1">
                          <div className="h-1 w-full bg-gray-200 rounded"></div>
                          <div className="h-1 w-2/3 bg-gray-200 rounded"></div>
                          <div className="flex gap-1 mt-1">
                            <div className="h-3 flex-1 bg-fades-green/10 rounded"></div>
                            <div className="h-3 flex-1 bg-fades-brown/10 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-fades-dark mb-1.5">Full Traceability</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Build trust with transparent records and data-backed reporting.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE FINCARD ADVANTAGE --- */}
      <section className="py-24 bg-fades-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-fades-green/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative group perspective-1000">
                {/* CSS Credit Card visual */}
                <div className="w-full max-w-md aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-fades-green to-emerald-800 shadow-2xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <div className="flex justify-between items-start z-10">
                     <Sprout className="w-10 h-10 text-white" />
                     <span className="font-serif font-bold text-xl italic tracking-wider">FINcard</span>
                  </div>
                  
                  <div className="z-10 space-y-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-8 bg-yellow-500/80 rounded-md"></div> {/* Chip */}
                        <div className="flex-1 space-y-2">
                             <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                             <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                        </div>
                    </div>
                    <div className="font-mono text-lg tracking-widest text-white/90 shadow-black drop-shadow-md">
                        XXXX 4921 8291 XXXX
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] uppercase text-white/60">Farmer Name</p>
                            <p className="font-medium tracking-wide">AMINA YUSUF</p>
                        </div>
                        <p className="text-xs text-white/80">VERIFIED</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Badge variant="outline" className="text-fades-green border-fades-green mb-6">Digital Identity</Badge>
              <h2 className="text-4xl font-serif font-bold mb-6">Your digital identity for agriculture.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Your FINcard is more than just an ID. It’s proof. It’s access. It’s opportunity. The FINcard verifies your farm, your coordinates, your crops and your identity — unlocking a world of services designed around you.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Verified digital identity & accurate geo-mapping",
                  "Soil and farm data stored securely",
                  "Access to government & private-sector programs",
                  "Immediate credibility with buyers and cooperatives"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-fades-green shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="https://web.fadesresources.org/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8">
                  Get your FINcard today
                </Button>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: COMMUNITY AGENTS (CoBEAs) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <Reveal>
                <h2 className="text-4xl font-serif font-bold text-fades-dark mb-6">
                  Built on community. <br/>Powered by people.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  FADES thrives because of trained Community-Based Extension Agents (CoBEAs) who bring technology to the farm gate. They onboard farmers, map farms, collect soil data, and support day-to-day activities.
                </p>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Local Trust", desc: "Agents are trusted members of their communities." },
                    { title: "Digital Tools", desc: "Equipped with the FADES Agent Dashboard." },
                    { title: "Empowerment", desc: "Helping farmers bridge the digital divide." },
                    { title: "Last Mile", desc: "Reaching the most remote villages." }
                  ].map((feature, i) => (
                    <div key={i} className="border-l-2 border-fades-brown pl-4">
                      <h4 className="font-bold text-fades-dark">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                   <a href="https://agent.fadesresources.org/onboarding" target="_blank" rel="noopener noreferrer">
                     <Button variant="secondary" className="rounded-full">
                        Become an Agent
                     </Button>
                   </a>
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    alt="Community Agent"
                    className="w-full h-[500px] object-cover"
                    src="/images/Community Agent.webp"
                    width={1000}
                    height={1200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-serif italic text-xl">"As an agent, I bring the market to my village."</p>
                      <p className="text-sm text-gray-300 mt-2">— Chinedu, CoBEA</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: VALUE-CHAIN CONNECTIVITY MAP --- */}
      <section className="py-16 md:py-24 bg-fades-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-fades-dark mb-4">
              Everyone in agriculture. <br/> Connected in one ecosystem.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
              FADES brings together farmers, cooperatives, input suppliers, buyers, processors, agents, and institutions.
            </p>
          </Reveal>

          {/* Orbital Connectivity Visual */}
          <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="z-20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-fades-green rounded-full flex items-center justify-center shadow-xl border-2 md:border-4 border-white"
                >
                  <span className="font-serif font-bold text-white text-sm sm:text-base md:text-xl">FADES</span>
                </motion.div>

                {/* Orbiting Ring Container */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[
                    { label: "Farmers", icon: <UserIcon />, angle: 0 },
                    { label: "Govt", icon: <BuildingIcon />, angle: 60 },
                    { label: "Agents", icon: <UsersIcon />, angle: 120 },
                    { label: "NGOs", icon: <HeartIcon />, angle: 180 },
                    { label: "Suppliers", icon: <TruckIcon />, angle: 240 },
                    { label: "Buyers", icon: <CartIcon />, angle: 300 },
                  ].map((node, i) => {
                    const radius = 42; // percentage from center
                    const angleRad = (node.angle * Math.PI) / 180;
                    const x = 50 + radius * Math.sin(angleRad);
                    const y = 50 - radius * Math.cos(angleRad);
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center animate-counter-spin"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-fades-dark hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                           {node.icon}
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-bold text-fades-dark mt-1 bg-white/70 backdrop-blur px-1.5 md:px-2 rounded whitespace-nowrap">{node.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Decorative Orbit Circles */}
                <div className="absolute inset-[15%] sm:inset-[12%] md:inset-[10%] border border-dashed border-gray-300 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute inset-[5%] sm:inset-[4%] md:inset-[2%] border border-gray-200 rounded-full opacity-30"></div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: OUR TECHNOLOGY --- */}
      <section className="py-24 bg-fades-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
              <Reveal>
                 <Badge variant="outline" className="text-white border-blue-300 mb-6">Tech Stack</Badge>
                 <h2 className="text-4xl font-serif font-bold mb-6">The engine that powers the future of farming.</h2>
                 <p className="text-gray-400 text-lg mb-8">
                    Under the hood, FADES combines advanced mapping, identity verification, analytics, and value-chain tools — wrapped in an interface simple enough for every farmer to use.
                 </p>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xl font-medium text-white">Simple for farmers. <br/>Powerful for partners. <br/>Scalable for Nigeria.</p>
                 </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                    { icon: <Globe />, title: "Geo-mapping", desc: "Spatial analytics & land boundaries." },
                    { icon: <Lock />, title: "Secure Identity", desc: "Biometric & verified FINcard data." },
                    { icon: <Cpu />, title: "Data-Driven", desc: "Real-time advisory & insights engine." },
                    { icon: <Layers />, title: "Open API", desc: "Ecosystem integration for partners." },
                 ].map((tech, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                       <Card className="bg-transparent border-gray-700 text-white hover:bg-white/5 transition-colors">
                          <CardContent className="pt-6">
                             <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-blue-300 mb-4">
                                {tech.icon}
                             </div>
                             <h4 className="font-bold text-lg mb-2">{tech.title}</h4>
                             <p className="text-gray-400 text-sm">{tech.desc}</p>
                          </CardContent>
                       </Card>
                    </Reveal>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 8 & 9: TRUST, PARTNERS & TESTIMONIALS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Partners */}
          <div className="mb-32 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">Trusted by communities & supported by partners</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {/* Placeholder Logos */}
               {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
               ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Thousands Trust FADES</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-fades-dark mb-4">
                Don't take our word for it,<br/>see what our farmers say
              </h2>
              <p className="text-gray-500 max-w-xl mb-12">
                We're honored by the feedback, and it fuels our commitment to delivering exceptional agricultural services. Read the reviews to hear firsthand how FADES is making a positive impact on farmers' lives.
              </p>
            </Reveal>
            
            {/* Testimonial Cards Carousel */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialIndex * (100 / 3)}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div 
                    key={i} 
                    className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* Star Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, idx) => (
                        <div key={idx} className="w-6 h-6 bg-fades-green flex items-center justify-center">
                          <Star className="w-4 h-4 text-white fill-white" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                      {t.quote}
                    </p>
                    
                    {/* Author */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-bold text-fades-dark">{t.author}</p>
                      <p className="text-xs text-gray-500">{t.profession}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Bar: Rating Summary & Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 gap-6">
              {/* Rating Summary */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Sprout className="w-6 h-6 text-fades-green" />
                  <span className="font-bold text-fades-dark">FADES</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-5 h-5 bg-fades-green flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <span className="font-semibold text-fades-dark">Excellent</span>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-fades-dark hover:text-white hover:border-fades-dark transition-all"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-fades-dark hover:text-white hover:border-fades-dark transition-all"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: FINAL CTA --- */}
      <section className="py-24">
         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-fades-green text-white relative overflow-hidden rounded-3xl py-16 px-8">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="max-w-4xl mx-auto text-center relative z-10">
                <Reveal>
                   <h2 className="text-5xl font-serif font-bold mb-6">Start your journey with FADES today</h2>
                   <p className="text-xl text-green-100 mb-10">One app. One ecosystem. Endless possibilities.</p>
                   <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <Button size="lg" className="bg-white !text-fades-green hover:bg-gray-100 h-14 px-10 rounded-full font-bold">
                         Download Farmer App
                      </Button>
                      <a href="https://agent.fadesresources.org/onboarding" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-14 px-10 rounded-full font-bold bg-transparent">
                           Become an Agent
                        </Button>
                      </a>
                   </div>
                </Reveal>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

// Helper components for the map icons
const UserIcon = () => <Users className="w-6 h-6" />;
const CartIcon = () => <div className="w-6 h-6 flex items-center justify-center font-bold">$</div>;
const UsersIcon = () => <Users className="w-6 h-6" />;
const TruckIcon = () => <div className="w-6 h-6 flex items-center justify-center font-bold">T</div>;
const BuildingIcon = () => <div className="w-6 h-6 flex items-center justify-center font-bold">G</div>;
const HeartIcon = () => <div className="w-6 h-6 flex items-center justify-center font-bold">N</div>;

export default Home;
