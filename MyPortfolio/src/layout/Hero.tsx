import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";


const Hero = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    //ARRAY OF TEXT TO ANIMATE
    const texts = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Creative Thinker",
        "Tech Enthusiast"
    ]
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [texts.length]);

    const handleResumeDownload = () => {

      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Resume_Niño_Emman_Natividad.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16 rounded-b-[80px] mx-auto ">
        <div className="flex flex-col items-center text-center max-w-4xl w-full rounded-lg">
          {/* Profile Picture and Name */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Circular Profile Picture */}
            <div className="relative">
              <img
                src="/profile.jpg" // Replace with your profile image path
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Crect width="160" height="160" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%239ca3af"%3E👤%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
  
          {/* Description Text */}
          <div className="mb- max-w-2xl">
            <p className="text-1xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight font-mono tracking-tight">
              Building scalable<br />
              web app and secure<br />
              authentication.
            </p>
          </div>

            <div className="mb-4 max-w-2xl">
                <div className="relative  sm:h-24 md:h-28 lg:h-32 overflow-hidden">
                    <p className="text-1xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight font-mono tracking-tight">
                        A multidisciplinary
                    </p>
                    <div
                    className={`text-purple-600 mt-1 text-1xl sm:text-2xl md:text-3xl lg:text-5xl  leading-tight tracking-tight transition-transform duration-600 ease-in-out ${
                        isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
                    >
                    {texts[currentIndex]}
                    </div>
                </div>
            </div>               

                
          {/* Resume Button */}
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 sm:text-xl text-xs  px-4 py-2 sm:py-5 sm:px-7 bg-black text-white font-semibold 
            rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl transform 
            hover:-translate-y-1"
          >
            <span>Resume</span>
            <ArrowDown className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 w-5 h-5"/>
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;