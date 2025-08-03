import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#181510] border border-[#cbb682]">
      <div className="px-4 py-8 md:py-10">
        <div className="max-w-2xl mx-auto">
          {/* Locations Container - Vertically Stacked */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            {/* Webster Location */}
            <div className="text-center">
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-2">
                Spades Poker House Webster
              </h3>
              <div className="flex items-center justify-center gap-[5px]">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/instagram-icon.png"
                    alt="Instagram"
                    width={48}
                    height={51}
                    className="w-12 h-12 md:w-[48px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
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
              <div className="flex items-center justify-center gap-[5px]">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
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
              <Link href="/privacy-policy" className="hover:text-[#cbb682] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-[#cbb682] transition-colors">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="hover:text-[#cbb682] transition-colors">
                Disclaimer
              </Link>
              <Link href="/cookie-policy" className="hover:text-[#cbb682] transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Logo and Copyright */}
          <div className="text-center">
            <Image
              src="/images/spades champagne 1.png"
              alt="Spades Poker House"
              width={55}
              height={55}
              className="mx-auto mb-3 w-12 h-12 md:w-[55px] md:h-[55px]"
            />
            <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
              <p>© 2025 Spades Poker House. All rights reserved.</p>
              <p>Site Designed by G&R Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}