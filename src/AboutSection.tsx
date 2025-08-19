import React from 'react';
import { data } from './data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none mb-6 sm:mb-8">
          {data.personal.name}
        </h2>
        <div className="w-16 sm:w-24 h-0.5 bg-white mx-auto mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
          {data.personal.title}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-400">
          {data.personal.tags.map((tag, index) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {index < data.personal.tags.length - 1 && (
                <span className="hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};