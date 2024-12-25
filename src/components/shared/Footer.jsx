import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BiUpArrow } from 'react-icons/bi';

const Footer = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    // Split text animation setup
    const letters = lettersRef.current;
    const colors = [
      '#FFD700', // L - Yellow
      '#FFA500', // E - Orange
      '#FF7F50', // T - Coral
      '#FF6B4A', // ' - Light Coral
      '#FF4969', // S - Pink Red
      '#FF1493', // Space
      '#FF69B4', // T - Hot Pink
      '#FF1493', // A - Deep Pink
      '#DA70D6', // L - Orchid
      '#E066FF', // K - Purple
    ];

    letters.forEach((letter, index) => {
      gsap.to(letter, {
        color: colors[index],
        duration: 0.5,
        ease: "none",
      });
    });
  }, []);

  return (
    <footer className="min-h-screen bg-black text-white relative px-6 py-12 lg:p-12">
      {/* Left Section */}
      <div className="mb-20 lg:mb-0 lg:absolute lg:top-12 lg:left-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Λxtra</h2>
          <p className="text-xs tracking-wide">DIGITAL AGENCY STUDIO</p>
        </div>
        <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
          When do they work well, and when do they 
          on us and finally, when do we actually need 
          how can we avoid them.
        </p>
      </div>

      {/* Center Social Links */}
      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        {['FACEBOOK', 'TWITTER', 'LINKEDIN', 'INSTAGRAM'].map((social) => (
          <div 
            key={social}
            className="py-4 border-b border-zinc-800 hover:opacity-60 transition-opacity cursor-pointer w-64"
          >
            {social}
          </div>
        ))}
      </div>

      {/* Right Section - Let's Talk */}
      <div className="my-20 lg:my-0 lg:absolute lg:top-1/2 lg:right-12 lg:-translate-y-1/2">
        <h1 className="text-6xl lg:text-8xl font-bold whitespace-nowrap">
          {"LET'S TALK".split('').map((letter, index) => (
            <span
              key={index}
              ref={el => lettersRef.current[index] = el}
              className="inline-block transition-transform hover:scale-105"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="lg:absolute lg:bottom-12 lg:left-0 lg:right-0 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="text-sm text-gray-400 mb-8 lg:mb-0">
            © 2022 - 2025 | All rights reserved<br className="lg:hidden" />
            by Wealcoder
          </div>

          <nav className="flex flex-wrap gap-8">
            {['ABOUT US', 'CONTACT', 'CAREER', 'FAQS'].map((item, index) => (
              <div key={item} className="relative group">
                <span className="text-sm cursor-pointer hover:text-gray-300 transition-colors">
                  {item}
                </span>
                {item === 'CONTACT' && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#4CAF50] group-hover:bg-[#4CAF50] transition-colors" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-12 right-12 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition-colors"
      >
        <BiUpArrow size={16} />
      </button>
    </footer>
  );
};

export default Footer;