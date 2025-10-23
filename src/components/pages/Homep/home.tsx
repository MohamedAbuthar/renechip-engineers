'use client';
import React, { useState } from 'react';
import { ChevronDown, Factory, Users, Wrench, Lightbulb, Rocket, Target, Shield, UserCheck, Handshake, MessageSquare, Search, CheckCircle, TrendingUp, LucideBriefcase,Cpu,Network,Scale,Award,Boxes,UsersRound, Layers, Box, Zap, Car, Cog, Printer, Building2 } from 'lucide-react';
import Navigation from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';

const ReneChipWebsite = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

const faqs = [
  {
    question: "What makes ReneChip different from traditional staffing agencies?",
    answer: "Unlike general staffing firms, we specialize in manufacturing and engineering talent with deep domain expertise. We also offer fixed-bid engineering services like BIM modelling and CAD support, providing both personnel and project delivery in one partnership."
  },
  {
    question: "Can you handle both small-scale staffing and large projects?",
    answer: "Absolutely. We scale from single specialized engineers to teams of 200+ personnel. Our hybrid model allows us to combine staffing with project services, whether it's a few CAD specialists or a complete facility upgrade with engineering support."
  },
  {
    question: "How quickly can you deploy technical personnel?",
    answer: "For engineering roles, our typical deployment timeline is 2-4 weeks depending on specialization. For operational staff, we can often mobilize teams within 1-2 weeks. Emergency staffing solutions are available for critical production needs."
  },
  {
    question: "Do you offer contract-to-hire arrangements?",
    answer: "Yes, we provide flexible engagement models including contract, contract-to-hire, direct placement, and project-based services. This allows you to evaluate talent before making permanent hiring decisio"
  },
  {
    question: "What industries do you specialize in?",
    answer: "We focus on automotive, heavy equipment, electronics manufacturing, plastics/moulding, metal fabrication, and general industrial production. Our technical team has hands-on experience in these sectors."
  },
  {
    question: "Can you handle both engineering services and staffing simultaneously?",
      answer: "Yes, this is one of our core strengths. For example, we can deliver a BIM modelling project while simultaneously providing the process engineers and technicians needed for implementation. This integrated approach ensures seamless execution."
  },
  {
    question: "What is your screening process for technical candidates?",
    answer: "All candidates undergo technical skills assessment, credential verification, domain expertise evaluation, and manufacturing safety certification review. For engineering roles, we conduct technical interviews and portfolio reviews."
  },
  {
    question: "Do you provide ongoing support after placement?",
    answer: "Yes, we offer continued support including performance monitoring, replacement guarantees, additional training coordination, and regular check-ins to ensure successful long-term engagements."
  }
];

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-white">
      {/* Hero Section - Engineering Excellence */}
      <section className="relative min-h-screen text-white overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="/ho.jpg"
      alt="Manufacturing facility"
      className="w-full h-full object-cover"
    />
    {/* Green overlay to match the emerald theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-emerald-500/85"></div>
  </div>
  
  {/* Decorative Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-64 h-64 border border-white/30 rounded transform -rotate-12"></div>
    <div className="absolute top-40 right-20 w-96 h-96 border border-white/30 rounded transform rotate-12"></div>
    <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-white/30 rounded transform rotate-45"></div>
    <div className="absolute top-1/3 right-1/3 text-9xl font-bold text-white/5">01</div>
    <div className="absolute bottom-1/4 right-1/4 text-9xl font-bold text-white/5">02</div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 py-32 max-w-6xl">
    <div className="max-w-2xl">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Engineering Excellence<br/>
        <span className="text-white/80">Delivered</span>
      </h1>
      <p className="text-xl mb-8 text-white/90 leading-relaxed">
        High-calibre technical talent and comprehensive project services for manufacturing companies. From staffing to full-spectrum engineering solutions.
      </p>
      <div className="flex gap-4">
        <Link href="#services">
        <button className="bg-white text-emerald-600 px-6 py-3 rounded font-semibold hover:bg-emerald-50 transition flex items-center gap-2">
          Explore Services
          <ChevronDown className="w-4 h-4" />
        </button>
        </Link>
        <Link href="/getin">
        <button className="bg-emerald-700 text-white px-6 py-3 rounded font-semibold hover:bg-emerald-800 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
      <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
    </div>
  </div>
</section>

      {/* About ReneChip Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">About ReneChip</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between manufacturing companies and specialized technical talent. Unlike traditional staffing firms, we combine deep industry knowledge with comprehensive project delivery capabilities, enabling our clients to access both exceptional personnel and complete engineering services.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Manufacturing Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep domain expertise in industrial and manufacturing operations
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <UsersRound className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Network of engineers, specialists, and skilled professionals
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Full-Spectrum Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                From staffing to complete project delivery services
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Technical staffing & contract engineering for manufacturing and industrial operations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Fixed-bid engineering services: BIM modeling, facility redesign, CAD/FEA support, equipment upgrades</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Operational staffing: production operators, assembly technicians, maintenance crews</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Flexible engagement models: long-term placements, contract-to-hire, project delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive solutions that combine technical expertise with practical delivery
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <LucideBriefcase className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Technical & Engineering Staffing</h3>
              <p className="text-emerald-600 font-semibold mb-4">Our Core Differentiator</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Process engineers, mechanical engineers, reliability engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">CAD/BIM specialists, structural designers, facility planners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Project managers, automation/control engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Perfect for upgrades, new lines, and facility expansion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Fixed-Bid Engineering Projects</h3>
              <p className="text-emerald-600 font-semibold mb-4">As-a-Service Solutions</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">BIM / 3D modeling of manufacturing plants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">CAD drafting, equipment layout design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Simulation, process mapping, lean manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Service-based delivery with outcome focus</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <UsersRound className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Blue-Collar Staffing</h3>
              <p className="text-emerald-600 font-semibold mb-4">Operational Support</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Machine operators, assembly technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Fabricators and maintenance fitters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">General manufacturing support staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Support during ramp-up and production phases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Hybrid Solutions</h3>
              <p className="text-emerald-600 font-semibold mb-4">Manpower + Service Combined</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">End-to-end project delivery with staffing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Layout redesign with engineering support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">BIM modeling with onsite technical teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">From planning through execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ReneChip Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose ReneChip</h2>
          <p className="text-center text-white/90 mb-12">
            More than staffing - a complete engineering and workforce partnership
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-emerald-700 rounded-lg p-8 hover:bg-emerald-800 transition">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engineering-First Mindset</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We understand manufacturing challenges from an engineering perspective, not just staffing metrics
              </p>
            </div>

            <div className="bg-emerald-700 rounded-lg p-8 hover:bg-emerald-800 transition">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project-Delivery Capability</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Outcome-oriented services like BIM, plant layout, and automation support via a fixed-bid model
              </p>
            </div>

            <div className="bg-emerald-700 rounded-lg p-8 hover:bg-emerald-800 transition">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Staffing Scale</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                From single specialists to hundreds of operators - we scale to your production needs
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-700 rounded-lg p-8 hover:bg-emerald-800 transition">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality & Fit</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Rigorous screening and domain alignment specifically for manufacturing firm contexts
              </p>
            </div>

            <div className="bg-emerald-700 rounded-lg p-8 hover:bg-emerald-800 transition">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership Focus</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Long-term relationships supporting continuous improvement and recurring project cycles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="works" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">How It Works</h2>
          <p className="text-center text-gray-600 mb-16">
            A streamlined process designed for manufacturing excellence
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We discuss your technical staffing needs, project scope, and manufacturing challenges in detail.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Talent Matching & Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team identifies the right engineers, specialists, or service approach based on your requirements.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Screening & Onboarding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rigorous vetting ensures domain expertise and manufacturing alignment before deployment.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deployment & Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless integration of personnel or project kickoff with ongoing support throughout engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12">
            Specialized expertise across diverse manufacturing sectors
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Automotive & Components</h3>
              <p className="text-gray-600 text-sm">
                Production systems and supply chain operations
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Heavy Equipment</h3>
              <p className="text-gray-600 text-sm">
                Industrial machinery manufacturing
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Electronics Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                High-precision assembly operations
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Plastics & Moulding</h3>
              <p className="text-gray-600 text-sm">
                Injection moulding and extrusion facilities
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Metal Fabrication</h3>
              <p className="text-gray-600 text-sm">
                Welding, cutting, and sheet metal operations
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Box className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Facility Upgrades</h3>
              <p className="text-gray-600 text-sm">
                Production line expansion and automation
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* FAQ Section */}
<section id="faq" className="py-20 bg-white">
  <div className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Frequently Asked Questions</h2>
    <p className="text-center text-gray-600 mb-12">
      Common questions about our technical staffing and project services
    </p>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition text-left"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openFaq === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openFaq === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
    <Footer/>
    </>
  );
};

export default ReneChipWebsite;