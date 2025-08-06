import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '87px' }}>
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/spades champagne 1.png"
              alt="Spades Poker House Logo"
              width={65}
              height={58}
              className="ml-8"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="/" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Home</a>
            <a href="/webster" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Webster</a>
            <a href="/baytown" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Baytown</a>
            <a href="/about" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>About</a>
            <a href="/contact" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Contact</a>
          </nav>
          
          {/* Directions Button */}
          <CustomButton size="md" className="mr-8" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
            Directions
          </CustomButton>
        </div>
      </div>
    </header>
  );
}