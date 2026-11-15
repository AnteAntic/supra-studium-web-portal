import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="on-dark min-h-hero -mt-20 flex items-end" style={{ background: '#141311' }}>
      <div className="container mx-auto px-6 pt-28 md:pt-32 pb-[18%] md:pb-[9%]">
        <div className="w-10 h-px mb-8 bg-[#d4af37]/60" aria-hidden="true" />
        <h1 className="font-playfair font-semibold mb-6 text-display text-[#f4f0e8]">404</h1>
        <p className="text-body-l text-[#ede9e3]/80 mb-8">Oops! Page not found</p>
        <a href="/" className="press-line pb-1 text-body-s tracking-[0.08em] text-[#ede9e3]/80 hover:text-[#ede9e3]">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
