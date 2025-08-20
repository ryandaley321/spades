'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#181510] border-t border-[#cbb682]">
      <div className="px-4 py-8 md:py-10">
        <div className="max-w-2xl mx-auto">
          {/* Locations Container - Vertically Stacked */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            {/* Webster Location */}
            <div className="text-center">
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-2">
                Spades Poker House Webster
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div 
                  onClick={() => window.open('https://maps.app.goo.gl/YaWdtsakbGvQMHNT8', '_blank')} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </div>
                <a href="tel:2817241415" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.pokeratlas.com/poker-room/spades-poker-house-webster" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook-icon.png"
                    alt="Facebook"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
              </div>
            </div>

            {/* Baytown Location */}
            <div className="text-center">
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-2">
                Spades Poker House Baytown
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div 
                  onClick={() => window.open('https://maps.app.goo.gl/jHRek6VcBgtxrnMw9', '_blank')} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </div>
                <a href="tel:3469776537" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.pokeratlas.com/poker-room/spades-poker-house-baytown" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.facebook.com/people/Spades-Baytown/100093212547274/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook-icon.png"
                    alt="Facebook"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center mb-6">
            <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
              <a 
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Terms of Use
              </a>
              <a 
                href="/disclaimer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Disclaimer
              </a>
              <a 
                href="/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Logo and Copyright */}
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/optimized/spades champagne 1.webp"
                alt="Spades Poker House"
                width={65}
                height={58}
                className="w-[65px] h-[58px] cursor-pointer"
              />
            </Link>
            <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
              <p>© 2025 Spades Poker House. All rights reserved.</p>
              <p>Site Designed by <a href="tel:4097390888" className="underline hover:text-[#cbb682] transition-colors">G&R Technologies</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}