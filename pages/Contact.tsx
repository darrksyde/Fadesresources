import React from 'react';
import Reveal from '../components/Reveal';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { Button, Input, Label, Textarea, Card, CardContent } from '../components/UIComponents';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-fades-light min-h-screen">
      <section className="bg-fades-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Get Started</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to Transform Your Farm? Join thousands of farmers, agents and partners building the future of agriculture in Nigeria.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 -mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              <Reveal>
                <Card className="bg-fades-green text-white border-none p-8">
                    <h2 className="text-3xl font-serif font-bold mb-6">Take the first step today.</h2>
                    <p className="text-green-50 text-lg mb-8 leading-relaxed">
                      Whether you’re a farmer, an agent, an input supplier, buyer or institution — your journey with FADES begins now.
                    </p>

                    <div className="space-y-4">
                      <button className="flex items-center justify-between w-full p-5 bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition-all group text-left">
                        <div>
                            <span className="block font-bold text-lg">Download Farmer App</span>
                            <span className="text-sm text-green-100">Get verified and start growing</span>
                        </div>
                        <div className="bg-white text-fades-green p-2 rounded-full">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                      
                      <button className="flex items-center justify-between w-full p-5 bg-fades-brown text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group text-left">
                        <div>
                            <span className="block font-bold text-lg">Agent Login Dashboard</span>
                            <span className="text-sm text-orange-100">Manage your farmers & community</span>
                        </div>
                        <div className="bg-white/20 text-white p-2 rounded-full">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                </Card>
              </Reveal>

              <Reveal delay={0.2}>
                  <Card className="p-8">
                    <h3 className="text-lg font-bold text-fades-dark uppercase tracking-wider mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-fades-light p-3 rounded-full text-fades-green">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Headquarters</p>
                                <p className="text-fades-dark font-medium">Abuja, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-fades-light p-3 rounded-full text-fades-green">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email Us</p>
                                <p className="text-fades-dark font-medium">info@fades.ng</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-fades-light p-3 rounded-full text-fades-green">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
                                <p className="text-fades-dark font-medium">+234 800 FADES NG</p>
                            </div>
                        </div>
                    </div>
                  </Card>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal delay={0.3}>
              <Card className="h-full shadow-2xl border-gray-100">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-serif font-bold text-fades-dark mb-2">Send us a message</h2>
                  <p className="text-gray-500 mb-8">We'll get back to you within 24 hours.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input type="email" placeholder="jane@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label>Stakeholder Type</Label>
                      <select className="flex h-12 w-full rounded-lg border border-gray-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fades-green disabled:cursor-not-allowed disabled:opacity-50 text-gray-700">
                        <option>Farmer</option>
                        <option>Extension Agent (CoBEA)</option>
                        <option>Input Supplier</option>
                        <option>Buyer / Off-taker</option>
                        <option>Government / NGO</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Message</Label>
                      <Textarea placeholder="How can we help you?" rows={5} className="resize-none" />
                    </div>

                    <Button className="w-full text-lg h-12">
                      Send Message
                    </Button>
                    <p className="text-xs text-gray-400 text-center">Protected by FADES Secure Gateway. Your data is safe.</p>
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;