import { useState, useEffect } from 'react';
import { Linkedin, Github, Instagram  } from 'lucide-react';

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight || 1;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);

      // make header transparent after scrolling down a bit
      setIsTransparent(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* progress bar stays the same */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60]">
        <div
          className="h-full bg-purple-600 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isTransparent
            ? 'bg-transparent border-t-transparent backdrop-blur '
            : 'border-t-2 border-gray-800 bg-gradient-to-r from-white/95 to-[#f5f5f0]/95 backdrop-blur-sm'
        }`}
      >
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
               {/* LinkedIn */}
               <a
                href="https://www.linkedin.com/in/emman-natividad-2172aa2b8 "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Neon-099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors duration-200 p-2"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/urne_on/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors duration-200 p-2"
                aria-label="GitHub Profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;