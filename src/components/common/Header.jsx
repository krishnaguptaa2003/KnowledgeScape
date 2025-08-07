import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">KnowledgeScape</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex space-x-4 lg:space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => `hover:text-indigo-600 transition text-sm lg:text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/quiz" 
                className={({ isActive }) => `hover:text-indigo-600 transition text-sm lg:text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
              >
                Quizzes
              </NavLink>
              <NavLink 
                to="/learn" 
                className={({ isActive }) => `hover:text-indigo-600 transition text-sm lg:text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
              >
                Learn
              </NavLink>
              <NavLink 
                to="/leaderboard" 
                className={({ isActive }) => `hover:text-indigo-600 transition text-sm lg:text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
              >
                Leaderboard
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `hover:text-indigo-600 transition text-sm lg:text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}
              >
                Blog
              </NavLink>
            </div>
            
            <div className="ml-2 lg:ml-6">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 transition text-sm lg:text-base">
                    Dashboard
                  </Link>
                  <LogoutButton />
                </div>
              ) : (
                <LoginButton />
              )}
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container md:hidden bg-white shadow-xl absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => `px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm ${isActive ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/quiz" 
                className={({ isActive }) => `px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm ${isActive ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quizzes
              </NavLink>
              <NavLink 
                to="/learn" 
                className={({ isActive }) => `px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm ${isActive ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </NavLink>
              <NavLink 
                to="/leaderboard" 
                className={({ isActive }) => `px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm ${isActive ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leaderboard
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm ${isActive ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
              
              <div className="pt-3 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link 
                      to="/dashboard"
                      className="block px-4 py-2 rounded-lg hover:bg-indigo-50 transition text-sm text-gray-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <div className="px-4 py-2">
                      <LogoutButton />
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-2">
                    <LoginButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;