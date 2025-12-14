import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full border-t-2 border-gray-800 bg-gradient-to-r from-white to-[#f5f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-tight">
              Niño Emman Natividad 
            </h1>
          </div>

          {/* Right: Icons and Buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Icon (Moon/Phone) */}
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 p-2"
              aria-label="Toggle theme or contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>

            {/* Modern Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={`h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen
                      ? 'rotate-45 translate-y-2'
                      : 'group-hover:w-6'
                  }`}
                />
                <span
                  className={`h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'group-hover:w-6'
                  }`}
                />
                <span
                  className={`h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen
                      ? '-rotate-45 -translate-y-2'
                      : 'group-hover:w-6'
                  }`}
                />
              </div>
            </button>

            {/* Contact Me Button */}
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold uppercase tracking-wide rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;