import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroBg from './assets/hero-bg.png';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Providers', path: '/providers' },
    { label: 'Work With Us', path: '/jobs' },
    { label: 'Neurodiversity', path: '/neurodiversity' },
    { label: 'Services', path: '#services' },
    { label: 'Get Started', path: '/contact' },
  ];

  return (
    <header
      className="bg-cover bg-center bg-no-repeat text-white relative z-10"
      style={{ backgroundImage: `url(${heroBg})`, height: '280px' }}
    >
      <div className="bg-black/40 w-full h-full">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col justify-start h-full">
          {/* Logo and Hamburger */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-serif uppercase">
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
          <nav className="hidden md:flex flex-wrap gap-8 mt-8 text-sm md:text-base font-semibold font-serif">
            {navItems.map((item, idx) =>
              item.path.startsWith('/') ? (
                <Link
                  key={idx}
                  to={item.path}
                  className={`$ {
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

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="flex flex-col mt-6 gap-4 md:hidden text-sm font-semibold font-serif">
              {navItems.map((item, idx) =>
                item.path.startsWith('/') ? (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-sky-200 transition"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
