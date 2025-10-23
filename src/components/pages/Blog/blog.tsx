'use client';
import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Menu, X } from 'lucide-react';
import Navigation from '@/components/Layout/Header';

const IndustryInsightsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(6);

  const articles = [
    {
      category: "Industry Insights",
      title: "5 Key Trends in Manufacturing Staffing for 2025",
      description: "Explore the latest trends shaping technical staffing in the manufacturing sector, from automation integration to hybrid workforce...",
      author: "ReneChip Team",
      date: "March 18, 2025",
      readTime: "5 min read",
      categoryColor: "bg-emerald-100 text-emerald-700"
    },
    {
      category: "Technical Services",
      title: "How BIM Modeling Transforms Facility Planning",
      description: "Discover how Building Information Modeling revolutionizes manufacturing facility design and operational efficiency.",
      author: "Engineering Team",
      date: "March 18, 2025",
      readTime: "7 min read",
      categoryColor: "bg-teal-100 text-teal-700"
    },
    {
      category: "Staffing Solutions",
      title: "Scaling Production: A Guide to Rapid Workforce Deployment",
      description: "Learn proven strategies for quickly scaling your manufacturing operations with the right technical and operational talent.",
      author: "Staffing Experts",
      date: "March 8, 2025",
      readTime: "6 min read",
      categoryColor: "bg-green-100 text-green-700"
    },
    {
      category: "Project Management",
      title: "Engineering Excellence: Best Practices in Project Delivery",
      description: "Insights into delivering complex engineering projects on time and within budget for manufacturing companies.",
      author: "Project Management",
      date: "February 28, 2025",
      readTime: "8 min read",
      categoryColor: "bg-blue-100 text-blue-700"
    },
    {
      category: "Industry Insights",
      title: "The Future of Manufacturing: Automation and Skilled...",
      description: "Balancing automation initiatives with skilled technical personnel for optimal production outcomes.",
      author: "ReneChip Team",
      date: "February 20, 2025",
      readTime: "6 min read",
      categoryColor: "bg-emerald-100 text-emerald-700"
    },
    {
      category: "Technical Services",
      title: "CAD to Reality: Streamlining Equipment Layout Design",
      description: "How modern CAD services accelerate facility upgrades and production line optimization.",
      author: "Design Team",
      date: "February 15, 2025",
      readTime: "5 min read",
      categoryColor: "bg-teal-100 text-teal-700"
    }
  ];

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 3);
  };

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-emerald-600 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Industry Insights &<br />Resources
          </h1>
          <p className="text-base sm:text-lg max-w-2xl text-emerald-50">
            Expert perspectives on manufacturing staffing, engineering services, and industry trends
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor} mb-4`}>
                  {article.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <button className="flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleArticles < articles.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreArticles}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded font-medium hover:border-emerald-600 hover:text-emerald-600 transition"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-emerald-50">
            Get in touch to discuss your technical staffing and project delivery needs
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded font-medium hover:bg-emerald-50 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white px-4 sm:px-6 lg:px-8 py-12 border-t border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ReneChip</h3>
              <p className="text-emerald-100 text-sm">
                Engineering excellence and workforce solutions for manufacturing companies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <div className="space-y-3">
                <a href="mailto:info@renechip.com" className="flex items-center gap-2 text-emerald-100 hover:text-white transition text-sm">
                  <span>✉</span>
                  <span>info@renechip.com</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-emerald-500 rounded hover:bg-emerald-400 transition">
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-500 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-emerald-100">© 2025 ReneChip. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-emerald-100 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-emerald-100 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default IndustryInsightsPage;