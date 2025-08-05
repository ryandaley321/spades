import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation - Same as homepage */}
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
              <a href="#" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Webster</a>
              <a href="#" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Baytown</a>
              <a href="/about" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>About</a>
              <a href="#" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Contact</a>
            </nav>
            
            {/* Directions Button */}
            <CustomButton size="md" className="mr-8" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
              Directions
            </CustomButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center" style={{ height: '746px', marginTop: '87px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/webster-elite-poker-destination-felt-cards-chips-spades-poker-house 1.png')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="font-semibold mb-4 tracking-wide" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}>
            TWO LOCATIONS. ONE LEGENDARY POKER EXPERIENCE.
          </p>
          <h1 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '48px' }}>
            Webster | Baytown
          </h1>
          <p className="mb-10 max-w-2xl mx-auto" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}>
            Your Premier Poker Destination in Baytown and Webster, Texas
          </p>
          <CustomButton size="lg" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
            Play Now
          </CustomButton>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative" style={{ backgroundColor: '#181510', height: '250px', borderTop: '1px solid #CBB682', borderBottom: '1px solid #CBB682' }}>
        <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F7E7CE' }}>
            How Spades Poker House Became a Top Poker Club in Texas
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#F7E7CE' }}>
            Two locations, endless action, and a luxury poker atmosphere.
          </p>
          <CustomButton size="lg" style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
            See How It All Started
          </CustomButton>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="relative" style={{ minHeight: '800px', backgroundColor: '#181510' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('/images/faded spade premium quality poker cards 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Review 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reviewer Name</h4>
                  <p className="text-sm text-gray-600">Local Guide • 23 reviews • 7 photos</p>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Placeholder review text. Great poker experience at Spades Poker House!</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reviewer Name</h4>
                  <p className="text-sm text-gray-600">Local Guide • 15 reviews • 10 photos</p>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Placeholder review text. Amazing atmosphere and professional dealers!</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reviewer Name</h4>
                  <p className="text-sm text-gray-600">45 reviews • 1 photo</p>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Placeholder review text. Best poker room in Texas!</p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reviewer Name</h4>
                  <p className="text-sm text-gray-600">89 reviews • 15 photos</p>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Placeholder review text. Excellent service and great food!</p>
            </div>
          </div>

          {/* See More Google Reviews Button */}
          <div className="text-center mt-12">
            <CustomButton size="lg" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '8px 40px', fontSize: '16px' }}>
              See More Google Reviews
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}