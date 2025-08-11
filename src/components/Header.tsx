"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  directionsUrl?: string;
}

export default function Header({ directionsUrl }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Determine directions URL or link based on current page
  const getDirectionsConfig = () => {
    if (directionsUrl) return { url: directionsUrl, isExternal: true }; // If explicitly passed, use it
    
    if (pathname.includes('/webster')) {
      return { url: "https://maps.app.goo.gl/7vNRTP4iETRh7kbn8", isExternal: true };
    } else if (pathname.includes('/baytown')) {
      return { url: "https://maps.app.goo.gl/KRQi3kVDNUginxYj9", isExternal: true };
    } else if (pathname === '/' || pathname.includes('/about')) {
      // Landing page and about page link to contact page
      return { url: "/contact", isExternal: false };
    } else if (pathname.includes('/contact')) {
      // Contact page defaults to Webster location
      return { url: "https://maps.app.goo.gl/7vNRTP4iETRh7kbn8", isExternal: true };
    } else {
      // Default to Webster for other pages
      return { url: "https://maps.app.goo.gl/7vNRTP4iETRh7kbn8", isExternal: true };
    }
  };
  
  const directionsConfig = getDirectionsConfig();
  return (
    <header className="fixed top-0 w-full z-50" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '87px' }}>
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/optimized/spades champagne 1.webp"
              alt="Spades Poker House Logo"
              width={65}
              height={58}
              className="ml-8"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Home</Link>
            <Link href="/webster" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Webster</Link>
            <Link href="/baytown" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Baytown</Link>
            <Link href="/about" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>About</Link>
            <Link href="/contact" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Contact</Link>
          </nav>
          
          {/* Desktop Directions Button */}
          <div className="hidden md:block">
            {directionsConfig.isExternal ? (
              <a href={directionsConfig.url} target="_blank" rel="noopener noreferrer">
                <CustomButton size="md" className="mr-8 bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '8px 30px' }}>
                  Directions
                </CustomButton>
              </a>
            ) : (
              <a href={directionsConfig.url}>
                <CustomButton size="md" className="mr-8 bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '8px 30px' }}>
                  Directions
                </CustomButton>
              </a>
            )}
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden mr-8 p-2 focus:outline-none relative"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span 
                className="block h-0.5 w-6 transition-all duration-300 ease-out absolute"
                style={{ 
                  backgroundColor: '#CBB682',
                  transform: isMobileMenuOpen ? 'rotate(45deg)' : 'translateY(-8px)'
                }}
              />
              <span 
                className="block h-0.5 w-6 transition-all duration-300 ease-out absolute"
                style={{ 
                  backgroundColor: '#CBB682',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: 'translateY(0)'
                }}
              />
              <span 
                className="block h-0.5 w-6 transition-all duration-300 ease-out absolute"
                style={{ 
                  backgroundColor: '#CBB682',
                  transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'translateY(8px)'
                }}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div 
        className={`md:hidden fixed top-[87px] left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ backgroundColor: '#181510' }}
      >
        <nav className="flex flex-col px-8 py-6 space-y-4 border-t" style={{ borderColor: '#785F37' }}>
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 transition-colors hover:opacity-80" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}
          >
            Home
          </Link>
          <Link 
            href="/webster" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 transition-colors hover:opacity-80" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}
          >
            Webster
          </Link>
          <Link 
            href="/baytown" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 transition-colors hover:opacity-80" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}
          >
            Baytown
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 transition-colors hover:opacity-80" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 transition-colors hover:opacity-80" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}
          >
            Contact
          </Link>
          
          {/* Mobile Directions Button */}
          <div className="pt-4 border-t" style={{ borderColor: '#785F37' }}>
            {directionsConfig.isExternal ? (
              <a 
                href={directionsConfig.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CustomButton 
                  size="md" 
                  className="w-full bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" 
                  style={{ borderRadius: '11px', padding: '12px 30px' }}
                >
                  Directions
                </CustomButton>
              </a>
            ) : (
              <a 
                href={directionsConfig.url}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CustomButton 
                  size="md" 
                  className="w-full bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" 
                  style={{ borderRadius: '11px', padding: '12px 30px' }}
                >
                  Directions
                </CustomButton>
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}