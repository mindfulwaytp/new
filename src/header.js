import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroBg from './assets/hero-bg.png';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Providers', path: '/providers' },
    { label: 'Join Our Team', path: '/join-our-team' },
    { label: 'Neurodiversity', path: '/neurodiversity' },
    { label: 'Services', path: '#services' },
    { label: 'Get Started', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Hero Image Block */}
      <div
        className="h-[280px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Fixed Nav Overlay */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-none text-white shadow-md transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
          {/* Logo and Hamburger */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl uppercase font-serif font-bold">
              Mindful Way Therapy, PLLC
            </h1>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-wrap gap-8 mt-4 md:text-lg font-serif font-semibold">
            {navItems.map((item, idx) =>
              item.path.startsWith('/') ? (
                <Link
                  key={idx}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'underline underline-offset-4'
                      : ''
                  } hover:text-sky-200 transition`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={item.path}
                  className="hover:text-sky-200 transition"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bg-white text-black z-50 px-6 py-8 text-lg shadow-md max-h-[90vh] overflow-y-auto rounded-b-xl transition-all duration-300 flex flex-col space-y-6 pt-[80px]">
          <button
            className="self-end text-3xl mb-4"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          {navItems.map((item, idx) =>
            item.path.startsWith('/') ? (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b pb-3 border-gray-200 ${
                  location.pathname === item.path ? 'text-sky-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b pb-3 border-gray-200"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </>
  );
}
