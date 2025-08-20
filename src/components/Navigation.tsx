import React from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../data/types';

interface NavigationProps {
  activeSection: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onNavClick: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  onNavClick 
}) => {
  const navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'competitions', label: 'Math Competitions' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b-2 border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">
            Tim Kuessner
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 border-b-2 pb-1 hover:text-gray-300 hover:-translate-y-0.5 ${
                  activeSection === item.id 
                    ? 'text-white border-white' 
                    : 'text-gray-400 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-xl border-b border-gray-700 py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`text-base font-medium py-2 transition-all duration-200 border-b-2 border-transparent hover:text-white ${
                    activeSection === item.id 
                      ? 'text-white border-white' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
