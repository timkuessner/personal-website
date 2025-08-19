import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
}

interface CardTitleProps {
  href: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border border-gray-700 p-6 sm:p-8 rounded-xl bg-white/[0.02] hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({ href, children }) => {
  return (
    <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 group">
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200 flex-wrap"
      >
        <span>{children}</span>
        <ExternalLink 
          size={16} 
          className="opacity-60 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" 
        />
      </a>
    </h3>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return (
    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
      {children}
    </p>
  );
};