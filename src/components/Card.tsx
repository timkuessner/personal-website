import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  href?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  children: React.ReactNode;
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ href, children }) => {
  const cardClasses = "border-2 border-gray-700 p-6 sm:p-8 rounded-xl bg-white/[0.02] hover:border-gray-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 block";
  
  if (!href) {
    return (
      <div className={cardClasses}>
        {children}
      </div>
    );
  }

  // Check if it's an internal link (starts with /) or external
  const isInternalLink = href.startsWith('/');
  
  if (isInternalLink) {
    return (
      <Link to={href} className={cardClasses}>
        {children}
      </Link>
    );
  }

  // External link
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {children}
    </a>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 hover:text-gray-300 transition-colors duration-200">
      {children}
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