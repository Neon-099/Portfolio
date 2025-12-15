import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight || 1;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 h-1 bg-transparent z-40">
        <div
          className="h-full bg-purple-600 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 border-t-2 border-gray-800
               bg-gradient-to-r from-white/95 to-[#f5f5f0]/95
               backdrop-blur-sm">
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

              {/* Contact Me Button */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold uppercase tracking-wide rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;