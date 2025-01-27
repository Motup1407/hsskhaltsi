import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import logo from '../assets/LOGO.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      shouldBeTransparent ? 'bg-black bg-opacity-40 shadow-md' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img className='w-18 h-14' src={logo} alt='schoollogo'/>
            <span className={`hidden lg:block font-bold text-2xl ${shouldBeTransparent ? 'text-primary-400' : 'text-primary-800'}`}>
              Govt Higher Secondary School Khaltsi
            </span>
            <span className={`block lg:hidden font-bold text-2xl ${shouldBeTransparent ? 'text-white' : 'text-primary-800'}`}>
              GHSS Khaltsi</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
              {[
                { name: 'Home', path: '' },
                { name: 'About', path: 'About' },
                { name: 'Staff', path: 'Staff' },
                { name: 'Contact', path: 'Contact' },
                { name: 'Gallery', path: 'Gallery' }
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md text-md font-medium transition-colors
                    ${shouldBeTransparent
                      ? 'text-white hover:text-primary-400 hover:underline'
                      : 'text-primary-900 hover:text-black hover:underline'
                    }
                    ${isActive ? 'bg-primary-50 bg-opacity-20 font-semibold' : ''}
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Registration Number */}
            <div className={`text-sm font-medium px-4 py-2 rounded-lg ${
              shouldBeTransparent ? 
              'bg-primary-400 text-black' 
              : 'bg-primary-700 text-black-400'
            }`}>
              <div className='flex flex-col item-end'>
                <span className='font-semibold'>CBSE Affiliation No: 3720143</span>
                <span className='font-semibold'>School Code: 24496</span>
              </div>              
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${shouldBeTransparent ? 'text-white' : 'text-primary-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/About' },
              { name: 'Staff', path: '/Staff' },
              { name: 'Contact', path: '/Contact' }
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  block px-3 py-2 rounded-md text-base font-medium
                  text-primary-800 hover:text-primary-900 transition-colors
                  ${isActive ? 'bg-primary-50 font-semibold' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {/* Mobile Registration Number */}
            <div className="px-3 py-2 bg-gray-900 bg-opacity-20 rounded-lg mx-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Registration Number</span>
                <span className="font-semibold text-primary-800">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;