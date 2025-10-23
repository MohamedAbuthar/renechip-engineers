import React from 'react';
import { Briefcase, TrendingUp, DollarSign, Users, MapPin, Building, Wrench } from 'lucide-react';

export default function TalentNetwork() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">ReneChip</div>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-green-200">Blog</a>
            <a href="#" className="hover:text-green-200">Case Studies</a>
            <a href="#" className="hover:text-green-200">Careers</a>
            <a href="#" className="hover:text-green-200 font-semibold">Contact Us</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Talent Network</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl">
            Engineers, specialists, and manufacturing professionals – grow your career with high-impact opportunities
          </p>
        </div>
      </header>

      {/* Why Join Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Why Join ReneChip
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16">
          Access premier opportunities in manufacturing and engineering
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Engineering Assignments</h3>
            <p className="text-sm text-gray-600">
              Long-term technical roles with leading manufacturers
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Professional Growth</h3>
            <p className="text-sm text-gray-600">
              Training support and skill development opportunities
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Competitive Compensation</h3>
            <p className="text-sm text-gray-600">
              Market-leading rates for technical expertise
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Diverse Projects</h3>
            <p className="text-sm text-gray-600">
              Work across multiple industries and technologies
            </p>
          </div>
        </div>
      </section>

      {/* We're Looking For Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="border border-gray-200 rounded-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">We're Looking For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Technical Roles */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Technical Roles</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Process & Manufacturing Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CAD/BIM Specialists & Designers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Project Managers & Program Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automation & Control Engineers</span>
                </li>
              </ul>
            </div>

            {/* Operational Roles */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Operational Roles</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Production Operators & Technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assembly & Fabrication Specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintenance Crew & Support Staff</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Quality Control Personnel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Current Opportunities
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore open positions in our talent network
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Job Card 1 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">Senior Process Engineer</h3>
              <span className="text-green-600 text-sm font-semibold">Full-time</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Lead process optimization initiatives for automotive manufacturing clients
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Multiple Locations
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Engineering
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">CAD/BIM Specialist</h3>
              <span className="text-green-600 text-sm font-semibold">Contract</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Create detailed 3D models and documentation for facility upgrades
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Hybrid
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Technical Services
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">Manufacturing Project Manager</h3>
              <span className="text-green-600 text-sm font-semibold">Full-time</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Oversee technical projects and project delivery for major manufacturers
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                On-site
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Project Management
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 4 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">Production Operators (Multiple)</h3>
              <span className="text-green-600 text-sm font-semibold">Contract</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Assembly and production roles for electronics manufacturing
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Various Sites
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Operations
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 5 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">Reliability Engineer</h3>
              <span className="text-green-600 text-sm font-semibold">Contract-to-Hire</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Implement reliability programs for heavy equipment manufacturers
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                On-site
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Engineering
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 6 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">Automation Engineer</h3>
              <span className="text-green-600 text-sm font-semibold">Full-time</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Design and implement automation solutions for production lines
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Multiple Locations
              </span>
              <span className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Engineering
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        {/* General Application */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see the right fit?</p>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
            Submit General Application
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ReneChip</h3>
              <p className="text-green-100 text-sm">
                Providing specialized workforce solutions for manufacturing companies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-green-100 hover:text-white">Home</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Services</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-green-100 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-green-100 text-sm mb-3">info@renechip.com</p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-green-700 rounded flex items-center justify-center hover:bg-green-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-500 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
            <p>© 2025 ReneChip. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}