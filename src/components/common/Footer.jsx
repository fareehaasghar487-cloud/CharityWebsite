import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Qatar Charity</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Connecting generosity with need through transparency and technology. Making charitable giving more impactful in Qatar and beyond.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="url(#instagramGradient)">
                  <defs>
                    <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="50%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#8134af" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.405a4.92 4.92 0 011.753 1.045 4.92 4.92 0 011.045 1.753c.165.457.351 1.257.405 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.427a4.92 4.92 0 01-1.045 1.753 4.92 4.92 0 01-1.753 1.045c-.457.165-1.257.351-2.427.405-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.405a4.92 4.92 0 01-1.753-1.045 4.92 4.92 0 01-1.045-1.753c-.165-.457-.351-1.257-.405-2.427C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.427a4.92 4.92 0 011.045-1.753 4.92 4.92 0 011.753-1.045c.457-.165 1.257-.351 2.427-.405C8.416 2.175 8.796 2.163 12 2.163zm0 4.838a5 5 0 110 10 5 5 0 010-10zm0 1.802a3.198 3.198 0 100 6.396 3.198 3.198 0 000-6.396zm4.406-3.39a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Our Campaigns</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Transparency Report</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Get Involved</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Blog & News</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Support Center</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white">Doha, Qatar<br />West Bay, Diplomatic Area</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white">+974 4494 4444</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">info@qcharity.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-white/30 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h4 className="text-xl font-semibold mb-4">Stay Updated with Our Initiatives</h4>
              <p className="text-white/80 max-w-md">Subscribe to our newsletter to receive updates on our campaigns, impact stories, and ways to help.</p>
            </div>
            <div className="lg:w-1/2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-5 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white/30 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Qatar Charity Platform. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-gray-300 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-gray-300 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-gray-300 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
