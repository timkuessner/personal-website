import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  showBackButton = false 
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center gap-4">
              {showBackButton && !isHomePage && (
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  <ArrowLeft size={16} />
                  Back
                </Link>
              )}
              <Link to="/" className="text-lg sm:text-xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-200">
                Tim Kuessner
              </Link>
            </div>
            
            {!isHomePage && (
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                <Home size={16} />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
          </div>
          
          {title && !isHomePage && (
            <div className="pb-3">
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-center">
                {title}
              </h1>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className={isHomePage ? "pt-16 md:pt-20" : "pt-24 md:pt-32"}>
        {children}
      </main>

      {/* Footer */}
      {!isHomePage && (
        <footer className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
};