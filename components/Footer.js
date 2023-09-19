"use client"

import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Footer Section 1 */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">TechPudina</h2>
            <p className="text-sm">Punjab Engineering College</p>
            <p className="text-sm">Sector 12, Chandigarh</p>
            <p className="text-sm">Smart India Hackathon✌️</p>
            <p className="text-sm"></p>
          </div>

          {/* Footer Section 2 */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Lawyers</a></li>
              <li><a href="#" className="hover:text-gray-400">Documents</a></li>              
            </ul>
          </div>
         
          {/* Footer Section 3 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Centralized platform</h2>
            <p className="mb-4">Onboarding Legal Service Providers such as Advocates, Arbitrators, Mediators, Notaries, Document Writers, etc</p>
            <div className="flex items-center">
            <div className="flex border border-purple-200">
              <input
                type="text"
                className="block w-full px-4 py-2 text-black bg-white border focus:border-black  focus:outline-none focus:ring "
                placeholder="Search..."
              />
              <button className="px-4 text-white bg-blue-500 hover:bg-blue-700 border-l rounded ">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-700 py-4 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-300">&copy; 2023 TechPudina. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
