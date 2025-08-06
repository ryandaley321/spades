import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroBanner
        subtitle="TWO LOCATIONS. ONE LEGENDARY POKER EXPERIENCE."
        title="Webster | Baytown"
        description="Your Premier Poker Destination in Baytown and Webster, Texas"
        backgroundImage="/images/webster-elite-poker-destination-felt-cards-chips-spades-poker-house 1.png"
        overlayOpacity={0.7}
      />

      <CallToActionBanner
        title="How Spades Poker House Became a Top Poker Club in Texas"
        description="Two locations, endless action, and a luxury poker atmosphere."
        buttonText="See How It All Started"
        buttonStyle="brown"
      />

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
            <CustomButton size="lg" className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '8px 40px', fontSize: '16px' }}>
              See More Google Reviews
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Timeline and CTA Container with shared background */}
      <div className="relative" style={{ backgroundColor: '#181510' }}>
        {/* Background Image for both sections */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('/images/image 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />

        {/* Timeline Section */}
        <section className="relative" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            {/* Timeline Title */}
            <h2 className="text-center font-bold mb-16" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '48px' }}>
              Timeline
            </h2>

            {/* Top Spades Decoration */}
            <div className="flex justify-center mb-20">
              <Image
                src="/images/Group 16.svg"
                alt="Spades decoration"
                width={700}
                height={90}
              />
            </div>

            {/* Timeline Container */}
            <div className="space-y-8">
              {/* 2020 Entry */}
              <div className="p-8 rounded-lg mx-auto" style={{ maxWidth: '1000px', backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '2px solid #785F37' }}>
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/spades-poker-house-original-2020-poker-room-webster-tx.jpg 1.png"
                      alt="2020 Poker Room"
                      width={280}
                      height={210}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                      2020 – Launching Spades Poker House in Webster, TX
                    </h3>
                    <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.8' }}>
                      In 2020, Spades Poker House opened its doors in Webster, Texas, bringing a luxurious and professional poker club experience to Southeast Texas.<br/>
                      We created dozens of local jobs for poker dealers, servers, managers, cage cashiers, security staff, and cleaners, building a team of qualified professionals.<br/>
                      Players were drawn to our modern poker room, time-based cash game model, and safe, upscale atmosphere, making us the go-to spot for Texas Hold'em and PLO action.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021-2022 Entry */}
              <div className="p-8 rounded-lg mx-auto" style={{ maxWidth: '1000px', backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '2px solid #785F37' }}>
                <div className="flex items-start gap-8">
                  <div className="flex-1">
                    <h3 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                      2021–2022 – Remodeling, Expanding & More Poker Action
                    </h3>
                    <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.8' }}>
                      With increasing demand, we invested in remodeling the Webster poker room, introducing more tables and enhancing the environment.<br/>
                      Our kitchen upgrades brought high-quality food and drinks to complement the gaming experience.<br/>
                      We added a wider variety of poker games and tournaments, creating nonstop action for Southeast Texas poker enthusiasts.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/480742102_2727444374108691_8265231031706897172_n 1.png"
                      alt="Remodeled Room"
                      width={280}
                      height={210}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* 2023 Entry */}
              <div className="p-8 rounded-lg mx-auto" style={{ maxWidth: '1000px', backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '2px solid #785F37' }}>
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/spades-poker-house-baytown-opening-day-cash-games-live-action-texas.jpg 1.png"
                      alt="Baytown Opening"
                      width={280}
                      height={210}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                      2023 – Opening Baytown's Top Poker Room
                    </h3>
                    <div style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.8' }}>
                      <p className="mb-2">In 2023, we proudly expanded with a second location: Spades Poker House Baytown.</p>
                      <p className="mb-2">The Baytown poker room features:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>A 150 sq. ft. TV wall for watching live sports</li>
                        <li>Multiple big screens across the room</li>
                        <li>A spacious, modern layout perfect for socializing or enjoying poker date nights</li>
                      </ul>
                      <p>We introduced fun daily promotions and quickly became a favorite among players seeking a vibrant and professional poker club in Baytown, TX.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024-Present Entry */}
              <div className="p-8 rounded-lg mx-auto" style={{ maxWidth: '1000px', backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '2px solid #785F37' }}>
                <div className="flex items-start gap-8">
                  <div className="flex-1">
                    <h3 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                      2024–Present – Leading Texas Poker with Technology & Service
                    </h3>
                    <div style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.8' }}>
                      <p className="mb-2">Today, Spades Poker House uses Poker Atlas tablets at every table, giving players access to:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Real-time waitlist registration for cash games</li>
                        <li>Live updates on active tables and tournament schedules</li>
                        <li>Convenient mobile check-ins for Webster and Baytown poker rooms</li>
                      </ul>
                      <p>With two thriving locations and a focus on innovation, we're proud to be recognized as a top-rated poker destination in Texas, offering a premium experience for casual players and high-stakes grinders alike.</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/texas-holdem-quads-queens-spades-poker-house-full-table-action-webster.jpg 1.png"
                      alt="Modern Poker Action"
                      width={280}
                      height={210}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Spades Decoration */}
            <div className="flex justify-center mt-20">
              <Image
                src="/images/Group 16.svg"
                alt="Spades decoration"
                width={700}
                height={90}
              />
            </div>
          </div>
        </section>

        {/* Call to Action - Check Live Poker Action */}
        <section className="relative" style={{ height: '280px', borderTop: '1px solid #CBB682' }}>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-center font-bold mb-12" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '36px' }}>
              Your Seat is Waiting – Check Live Poker Action
            </h2>
            
            <div className="flex flex-col items-center gap-4">
              <CustomButton size="lg" className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ 
                borderRadius: '11px', 
                padding: '10px 60px', 
                fontSize: '16px',
                minWidth: '365px'
              }}>
                Poker Atlas- Webster
              </CustomButton>
              <CustomButton size="lg" className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ 
                borderRadius: '11px', 
                padding: '10px 60px', 
                fontSize: '16px',
                minWidth: '365px'
              }}>
                Poker Atlas- Baytown
              </CustomButton>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}