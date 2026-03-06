'use client'

import { useState } from 'react'
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown,
  Menu,
  X,
  Bot,
  Cpu,
  Database,
  Lightbulb
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI roadmaps tailored to your business objectives and industry requirements."
    },
    {
      icon: Bot,
      title: "Custom AI Development",
      description: "Bespoke AI solutions including chatbots, automation systems, and intelligent applications."
    },
    {
      icon: Cpu,
      title: "Machine Learning Models",
      description: "Advanced ML algorithms for predictive analytics, pattern recognition, and data insights."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with our advanced analytics and AI tools."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that adapt and learn."
    },
    {
      icon: Lightbulb,
      title: "AI Innovation Lab",
      description: "Prototype and test cutting-edge AI concepts to stay ahead of the competition."
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold gradient-text">NexusAI</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Home</a>
              <a href="#services" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Services</a>
              <a href="#about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">About</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">NexusAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. We build intelligent systems that adapt, learn, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="glow-button group">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full hover:border-blue-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to revolutionize your business operations and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
                <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">NexusAI</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're not just another AI agency. We're your strategic partner in the AI revolution, 
                combining deep technical expertise with business acumen to deliver solutions that matter.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Strategic Approach</h3>
                    <p className="text-gray-400">Every solution is tailored to your specific business goals and industry challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-400">Our multidisciplinary team combines AI researchers, engineers, and business strategists.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rapid Deployment</h3>
                    <p className="text-gray-400">Fast implementation without compromising quality or security standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Discovery & Strategy</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Design & Development</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Testing & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span>Launch & Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build the <span className="gradient-text">Future</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch with our team of experts.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">hello@nexusai.agency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button type="submit" className="w-full glow-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold gradient-text">NexusAI</span>
            </div>
            
            <p className="text-gray-400">
              © 2024 NexusAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}