import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroBg from './assets/hero-bg.png';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Providers', path: '/providers' },
    { label: 'Work With Us', path: '#work' },
    { label: 'Neurodiversity', path: '#neurodiversity' },
    { label: 'Services', path: '#services' },
    { label: 'Get Started', path: '#get-started' },
  ];

return (
    <header
        className="bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${heroBg})`, height: '280px' }}
    >
        <div className="bg-black/40 w-full h-full">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-start justify-center h-full text-left">
                {/* Logo */}
                <h1 className="text-white text-2xl md:text-3xl font-bold font-serif uppercase mb-12">
                    Mindful Way Therapy, PLLC
                </h1>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-start items-center gap-8 text-sm md:text-base font-semibold font-serif">
                    {navItems.map((item, idx) => (
                        item.path.startsWith('/') ? (
                            <Link
                                key={idx}
                                to={item.path}
                                className={`${
                                    location.pathname === item.path ? 'underline underline-offset-4' : ''
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
                    ))}
                </nav>
            </div>
        </div>
    </header>
);
}
