'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";
import GoogleReviewCard from "@/components/GoogleReviewCard";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroBanner
        subtitle="TWO LOCATIONS. ONE LEGENDARY POKER EXPERIENCE."
        title="Webster | Baytown"
        description="Your Premier Poker Destination in Baytown and Webster, Texas"
        backgroundImage="/images/optimized/webster-elite-poker-destination-felt-cards-chips-spades-poker-house 1.webp"
        overlayOpacity={0.7}
      />

      <CallToActionBanner
        title="How Spades Poker House Became a Top Poker Club in Texas"
        description="Two locations, endless action, and a luxury poker atmosphere."
        buttonText="See How It All Started"
        buttonStyle="brown"
      />

      {/* Google Reviews Section */}
      <section className="relative" style={{ backgroundColor: '#181510' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('/images/optimized/faded spade premium quality poker cards 1.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GoogleReviewCard
              name="Michael Torres"
              rating={5}
              comment="Great Atmosphere, friendly staff and surprisingly great food for a Poker place!"
              isLocalGuide={true}
              reviewCount={47}
              photoCount={12}
            />

            <GoogleReviewCard
              name="David Chen"
              rating={5}
              comment="Virtually always great service from service team, dealers, and management."
              isLocalGuide={true}
              reviewCount={31}
              photoCount={8}
            />

            <GoogleReviewCard
              name="Sarah Johnson"
              rating={5}
              comment="Best poker room in Houston area! Professional dealers, clean facility, and the action never stops. Highly recommend!"
              reviewCount={92}
              photoCount={5}
            />

            <GoogleReviewCard
              name="James Rodriguez"
              rating={5}
              comment="Love the atmosphere here! Great promotions, friendly staff, and the food is actually really good. My go-to poker spot!"
              reviewCount={156}
              photoCount={23}
            />
          </div>

          {/* See More Google Reviews Button */}
          <div className="text-center mt-8">
            <a 
              href="https://maps.app.goo.gl/jEARNPRj9tnAbKuC6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <CustomButton size="lg" className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '8px 40px', fontSize: '16px' }}>
                See More Google Reviews
              </CustomButton>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline and CTA Container with shared background */}
      <div className="relative" style={{ backgroundColor: '#181510' }}>
        {/* Background Image for both sections */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('/images/optimized/image 1.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />

        {/* Timeline Section */}
        <section ref={timelineRef} className="relative" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            {/* Timeline Title */}
            <h2 className="text-center font-bold mb-8 md:mb-16 text-3xl md:text-4xl lg:text-5xl" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
              Timeline
            </h2>

            {/* Top Spades Decoration */}
            <div className="flex justify-start mb-2 overflow-hidden" style={{ marginLeft: 'calc(2.5% + 5px)' }}>
              <Image
                src="/images/Group 16.svg"
                alt="Spades decoration"
                width={700}
                height={90}
                className={`spade-line top ${isVisible ? 'visible' : ''} w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] h-auto`}
              />
            </div>

            {/* Timeline Container */}
            <div className="space-y-8">
              {/* 2020 Entry */}
              <div className="p-4 md:p-6 lg:p-8 mx-auto" style={{ maxWidth: '95%', border: '2px solid #785F37' }}>
                <div className="flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 flex items-stretch lg:order-1">
                    <Image
                      src="/images/optimized/spades-poker-house-original-2020-poker-room-webster-tx.jpg 1.webp"
                      alt="2020 Poker Room"
                      width={280}
                      height={0}
                      className="w-full lg:w-[280px]"
                      style={{ height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center lg:order-2">
                    <h3 className="font-bold mb-3 md:mb-4 text-xl md:text-2xl lg:text-[28px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                      2020 – Launching Spades Poker House in Webster, TX
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: '#F7E7CE', fontFamily: 'Poppins', lineHeight: '1.8' }}>
                      In 2020, Spades Poker House opened its doors in Webster, Texas, bringing a luxurious and professional poker club experience to Southeast Texas.<br/>
                      We created dozens of local jobs for poker dealers, servers, managers, cage cashiers, security staff, and cleaners, building a team of qualified professionals.<br/>
                      {`Players were drawn to our modern poker room, time-based cash game model, and safe, upscale atmosphere, making us the go-to spot for Texas Hold'em and PLO action.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021-2022 Entry */}
              <div className="p-4 md:p-6 lg:p-8 mx-auto" style={{ maxWidth: '95%', border: '2px solid #785F37' }}>
                <div className="flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 flex items-stretch lg:order-2">
                    <Image
                      src="/images/optimized/480742102_2727444374108691_8265231031706897172_n 1.webp"
                      alt="Remodeled Room"
                      width={280}
                      height={0}
                      className="w-full lg:w-[280px]"
                      style={{ height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center lg:order-1">
                    <h3 className="font-bold mb-3 md:mb-4 text-xl md:text-2xl lg:text-[28px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                      2021–2022 – Remodeling, Expanding & More Poker Action
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: '#F7E7CE', fontFamily: 'Poppins', lineHeight: '1.8' }}>
                      With increasing demand, we invested in remodeling the Webster poker room, introducing more tables and enhancing the environment.<br/>
                      Our kitchen upgrades brought high-quality food and drinks to complement the gaming experience.<br/>
                      We added a wider variety of poker games and tournaments, creating nonstop action for Southeast Texas poker enthusiasts.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 Entry */}
              <div className="p-4 md:p-6 lg:p-8 mx-auto" style={{ maxWidth: '95%', border: '2px solid #785F37' }}>
                <div className="flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 flex items-stretch lg:order-1">
                    <Image
                      src="/images/optimized/spades-poker-house-baytown-opening-day-cash-games-live-action-texas.jpg 1.webp"
                      alt="Baytown Opening"
                      width={280}
                      height={0}
                      className="w-full lg:w-[280px]"
                      style={{ height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center lg:order-2">
                    <h3 className="font-bold mb-3 md:mb-4 text-xl md:text-2xl lg:text-[28px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                      {`2023 – Opening Baytown's Top Poker Room`}
                    </h3>
                    <div className="text-sm md:text-base" style={{ color: '#F7E7CE', fontFamily: 'Poppins', lineHeight: '1.8' }}>
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
              <div className="p-4 md:p-6 lg:p-8 mx-auto" style={{ maxWidth: '95%', border: '2px solid #785F37' }}>
                <div className="flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 flex items-stretch lg:order-2">
                    <Image
                      src="/images/optimized/texas-holdem-quads-queens-spades-poker-house-full-table-action-webster.jpg 1.webp"
                      alt="Modern Poker Action"
                      width={280}
                      height={0}
                      className="w-full lg:w-[280px]"
                      style={{ height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center lg:order-1">
                    <h3 className="font-bold mb-3 md:mb-4 text-xl md:text-2xl lg:text-[28px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                      2024–Present – Leading Texas Poker with Technology & Service
                    </h3>
                    <div className="text-sm md:text-base" style={{ color: '#F7E7CE', fontFamily: 'Poppins', lineHeight: '1.8' }}>
                      <p className="mb-2">Today, Spades Poker House uses Poker Atlas tablets at every table, giving players access to:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Real-time waitlist registration for cash games</li>
                        <li>Live updates on active tables and tournament schedules</li>
                        <li>Convenient mobile check-ins for Webster and Baytown poker rooms</li>
                      </ul>
                      <p>{`With two thriving locations and a focus on innovation, we're proud to be recognized as a top-rated poker destination in Texas, offering a premium experience for casual players and high-stakes grinders alike.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Spades Decoration */}
            <div className="flex justify-end mt-2 overflow-hidden" style={{ marginRight: 'calc(2.5% + 5px)' }}>
              <Image
                src="/images/Group 16.svg"
                alt="Spades decoration"
                width={700}
                height={90}
                className={`spade-line bottom ${isVisible ? 'visible' : ''} w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] h-auto`}
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