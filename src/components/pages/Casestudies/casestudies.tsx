import Navigation from '@/components/Layout/Header';
import React from 'react';

const SuccessStoriesPage = () => {
  const successStories = [
    {
      tags: ['Engineering Staffing', 'BIM Modeling', 'Automotive'],
      title: 'Automotive Assembly Line Expansion',
      subtitle: 'Major Auto Manufacturer',
      metrics: [
        { value: '6 weeks', label: 'Timeline' },
        { value: '175 staff', label: 'Personnel' },
        { value: '+15%', label: 'Efficiency' }
      ],
      challenge: 'Required 25 manufacturing engineers and 150 assembly operators for new production line within 6 weeks',
      solution: 'Deployed technical staffing team and provided BIM modeling for facility layout optimization',
      results: [
        'On-time launch of new production line',
        '15% improvement in workflow efficiency',
        'Zero safety incidents during ramp-up'
      ]
    },
    {
      tags: ['BIM Services', 'CAD Documentation', 'Project Management'],
      title: 'Facility Modernization Project',
      subtitle: 'Industrial Equipment Manufacturer',
      metrics: [
        { value: '3 months', label: 'Timeline' },
        { value: '50,000 sq ft', label: 'Space' },
        { value: '20%', label: 'Savings' }
      ],
      challenge: 'Legacy facility needed complete CAD documentation and equipment upgrade planning',
      solution: 'Fixed-bid BIM modeling service with structural and MEP documentation, plus 3 project engineers',
      results: [
        'Complete 3D facility model delivered',
        'Equipment upgrade roadmap defined',
        '20% reduction in project timeline'
      ]
    },
    {
      tags: ['Hybrid Staffing', 'Process Engineering', 'Electronics'],
      title: 'Electronics Production Scale-Up',
      subtitle: 'Precision Electronics Firm',
      metrics: [
        { value: '8 weeks', label: 'Timeline' },
        { value: '2x increase', label: 'Capacity' },
        { value: '+12%', label: 'Quality' }
      ],
      challenge: 'Needed rapid scaling of assembly operations with quality control expertise',
      solution: 'Hybrid engagement: 8 process engineers + 80 assembly technicians + lean manufacturing support',
      results: [
        'Production capacity doubled in 8 weeks',
        'Quality metrics improved by 12%',
        'Successful transition to permanent staff'
      ]
    },
    {
      tags: ['Blue-Collar Staffing', 'Rapid Deployment', 'Heavy Equipment'],
      title: 'Heavy Equipment Production Ramp-Up',
      subtitle: 'Heavy Machinery Manufacturer',
      metrics: [
        { value: '2 weeks', label: 'Timeline' },
        { value: '60 skilled workers', label: 'Personnel' },
        { value: '+40%', label: 'Increase' }
      ],
      challenge: 'New contract required immediate 40% production increase with skilled welders and fabricators',
      solution: 'Deployed 60 certified welders, fabricators, and quality inspectors within 2 weeks',
      results: [
        'Met aggressive production deadlines',
        'Maintained quality standards throughout scale-up',
        'Client extended engagement for 18 months'
      ]
    },
    {
      tags: ['CAD Services', 'Facility Design', 'Process Improvement'],
      title: 'Plastics Facility Layout Optimization',
      subtitle: 'Injection Molding Company',
      metrics: [
        { value: '4 months', label: 'Timeline' },
        { value: '+25%', label: 'Throughput' },
        { value: '40% fewer incidents', label: 'Safety' }
      ],
      challenge: 'Inefficient production floor layout causing bottlenecks and safety concerns',
      solution: 'Complete facility simulation, CAD redesign, and phased implementation with engineering oversight',
      results: [
        '25% increase in throughput',
        'Eliminated major bottlenecks',
        'Reduced workplace incidents by 40%'
      ]
    },
    {
      tags: ['Automation Engineering', 'Training', 'Technical Staffing'],
      title: 'Automation Integration Support',
      subtitle: 'Consumer Goods Manufacturer',
      metrics: [
        { value: '5 months', label: 'Timeline' },
        { value: '4 engineers + 50 operators', label: 'Personnel' },
        { value: '30% faster', label: 'Efficiency' }
      ],
      challenge: 'Installing new robotic systems required control engineers and operator training',
      solution: 'Provided 4 automation engineers and developed comprehensive training program for 50 operators',
      results: [
        'Seamless automation integration',
        'Reduced integration time by 30%',
        'All operators certified ahead of schedule'
      ]
    }
  ];

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-base md:text-lg opacity-90">
            Real results from our engineering staffing and project delivery partnerships
          </p>
        </div>
      </header>

      {/* Success Stories Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-6 md:space-y-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{story.title}</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">{story.subtitle}</p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 py-6 border-t border-b border-gray-200 mb-6">
                {story.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                <p className="text-sm md:text-base text-gray-700">{story.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-sm md:text-base text-gray-700">{story.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Results</h3>
                <ul className="space-y-2">
                  {story.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start text-sm md:text-base text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your manufacturing operations
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">ReneChip</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Engineering excellence and workforce solutions for manufacturing companies
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Home</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">About Us</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Services</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Case Studies</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Blog</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="mailto:info@renechip.com" className="flex items-center text-sm opacity-90 hover:opacity-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@renechip.com
                </a>
                <a href="#" className="flex items-center text-sm opacity-90 hover:opacity-100">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>© 2025 ReneChip. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default SuccessStoriesPage;