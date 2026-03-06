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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-gray-700" />
              <span className="text-xl font-bold text-gray-900">NexusAI</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
                <a href="#industries" className="text-gray-700 hover:text-gray-900 transition-colors">Industries</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
                <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
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
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Services</a>
              <a href="#industries" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Industries</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">About</a>
              <a href="#faq" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-900">NexusAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. We build intelligent systems that adapt, learn, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://calendly.com/nexusai-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-lg group inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 border border-gray-400 text-gray-700 rounded-full hover:border-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </a>
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
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="text-gray-700">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to revolutionize your business operations and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                <service.icon className="w-12 h-12 text-gray-700 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-gray-700">NexusAI</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just another AI agency. We're your strategic partner in the AI revolution, 
                combining deep technical expertise with business acumen to deliver solutions that matter.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Strategic Approach</h3>
                    <p className="text-gray-600">Every solution is tailored to your specific business goals and industry challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Our multidisciplinary team combines AI researchers, engineers, and business strategists.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Rapid Deployment</h3>
                    <p className="text-gray-600">Fast implementation without compromising quality or security standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">Discovery & Strategy</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-700">Design & Development</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-700">Testing & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span className="text-gray-700">Launch & Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industries" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="text-gray-700">Industry</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions for your specific business needs. See how we help businesses like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💇‍♀️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Beauty & Salons</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Automated appointment booking & reminders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Customer follow-ups & loyalty programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Inventory tracking for products & supplies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Social media content automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🦷</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dental Practices</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Insurance verification & claims processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Appointment scheduling & confirmations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Patient record management & HIPAA compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Recall notices & treatment reminders</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Auto Repair</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Service appointment booking & management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Parts inventory tracking & ordering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Customer communication & updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">•</span>
                  <span>Maintenance reminder notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Simple, Transparent <span className="text-gray-700">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business size. All plans include setup, training, and 24/7 support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$399</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <a 
                  href="https://calendly.com/nexusai-consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-200 inline-block"
                >
                  Get Started
                </a>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Automated appointment booking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Customer reminders & follow-ups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Basic inventory tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Email & SMS automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">2-hour setup & training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Business hours support</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan (Most Popular) */}
            <div className="bg-gray-900 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-300 mb-6">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$699</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <a 
                  href="https://calendly.com/nexusai-consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100 inline-block"
                >
                  Get Started
                </a>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Everything in Starter, plus:</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Advanced customer segmentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Loyalty program automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Social media content automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Integration with existing systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Priority 24/7 support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For established businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,299</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <a 
                  href="https://calendly.com/nexusai-consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-200 inline-block"
                >
                  Get Started
                </a>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Custom AI workflow development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Multi-location management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Advanced security & compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">White-label options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Custom integrations & API access</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include free setup, training, and can be cancelled anytime.
            </p>
            <p className="text-sm text-gray-500">
              Need something custom? <a href="mailto:hello@nexusai.agency" className="text-gray-700 hover:text-gray-900 underline">Contact us</a> for a tailored solution.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="text-gray-700">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our AI solutions.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does setup take?</h3>
              <p className="text-gray-600">
                Most implementations are completed within 2 hours. Simple solutions like appointment booking can be live in under 1 hour, while complex integrations may take up to 4 hours.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do I need technical knowledge?</h3>
              <p className="text-gray-600">
                Not at all. We handle all the technical setup and provide simple training. Our systems are designed to be user-friendly for business owners, not developers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What if something breaks?</h3>
              <p className="text-gray-600">
                We provide 24/7 monitoring and support. If any issues arise, our team is alerted immediately and will resolve them quickly. We also provide a backup system for critical functions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How much does it cost?</h3>
              <p className="text-gray-600">
                Pricing varies based on your specific needs. Most small businesses start around $399/month. We offer a free consultation to provide an accurate quote based on your requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can I integrate with my existing systems?</h3>
              <p className="text-gray-600">
                Yes! We specialize in integrating with popular business tools like QuickBooks, scheduling software, POS systems, and CRM platforms. We'll assess your current setup during our consultation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is my data secure?</h3>
              <p className="text-gray-600">
                Absolutely. We use enterprise-grade security, encrypted data transmission, and comply with industry standards including HIPAA for medical practices. Your data never leaves secure servers.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://calendly.com/nexusai-consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-lg inline-flex items-center"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Let's Build the <span className="text-gray-700">Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch with our team of experts.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@nexusai.agency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors text-gray-900"
                />
                
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors text-gray-900"
                />
                
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors resize-none text-gray-900"
                ></textarea>
                
                <button type="submit" className="w-full bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-gray-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-gray-700" />
              <span className="text-xl font-bold text-gray-900">NexusAI</span>
            </div>
            
            <p className="text-gray-600">
              © 2024 NexusAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}