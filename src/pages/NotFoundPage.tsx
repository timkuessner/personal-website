import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-7xl font-bold mb-4 tracking-tight">404</h1>
      <h2 className="text-2xl sm:text-3xl font-light mb-6 text-center">
        Oops! Page not found.
      </h2>
      <p className="text-gray-400 text-base sm:text-lg mb-8 text-center max-w-md leading-relaxed">
        The page you are looking for does not exist, or the URL is incorrect.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 border-2 border-gray-700 px-6 py-3 rounded-xl bg-white/0 hover:border-gray-600 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
      >
        <Home size={20} />
        Go back home
      </Link>
    </div>
  );
};
