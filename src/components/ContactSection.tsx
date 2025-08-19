import React from 'react';
import { data } from '../data/data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 tracking-tight">
          Contact
        </h2>
        <div className="w-16 sm:w-24 h-0.5 bg-white mx-auto mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
          {data.contact.description}
        </p>
        <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
          {data.contact.links.map((link, index) => (
            <div key={index} className="text-base sm:text-lg">
              <span className="text-gray-400">{link.name}: </span>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline transition-all duration-200 break-all"
              >
                {link.url.replace('https://', '').replace('www.', '')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};