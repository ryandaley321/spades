"use client";

import Image from "next/image";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50" style={{ backgroundColor: '#181510', height: '87px' }}>
        <div className="relative h-full" style={{ width: '1440px', margin: '0 auto' }}>
          <Image
            src="/images/spades champagne 1.png"
            alt="Spades Poker House Logo"
            width={65}
            height={58}
            className="absolute left-[50px] top-[12px]"
          />
          
          <nav className="absolute left-[452px] top-[30px] flex items-center gap-[67px]">
            <a href="/" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Home</a>
            <a href="#" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Webster</a>
            <a href="#" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Baytown</a>
            <a href="/about" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>About</a>
            <a href="#" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Contact</a>
          </nav>
          
          <div className="absolute left-[1252px] top-[24px]" style={{ width: '139px', height: '38px', backgroundColor: '#CBB682', borderRadius: '11px' }}>
            <p className="text-center mt-2" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>Directions</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ width: '1440px', margin: '0 auto', paddingTop: '87px' }}>
        {/* First Hero Section */}
        <section className="relative" style={{ height: '746px' }}>
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url('/images/webster-elite-poker-destination-felt-cards-chips-spades-poker-house 1.png')`,
              backgroundSize: '100% 144.77%',
              backgroundPosition: 'center top',
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }} />
          
          <div className="relative z-10">
            <p className="absolute left-[492px] top-[320px]" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600 }}>
              TWO LOCATIONS. ONE LEGENDARY POKER EXPERIENCE.
            </p>
            <h2 className="absolute left-[585px] top-[357px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: 700 }}>
              Webster | Baytown
            </h2>
            <p className="absolute left-[492px] top-[399px]" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>
              Your Premier Poker Destination in Baytown and Webster, Texas
            </p>
            <div className="absolute left-[659px] top-[442px]" style={{ width: '139px', height: '38px', backgroundColor: '#CBB682', borderRadius: '11px' }}>
              <p className="text-center mt-2" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>Play Now</p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="relative" style={{ height: '250px', backgroundColor: '#181510', borderTop: '1px solid #CBB682', borderBottom: '1px solid #CBB682' }}>
          <h2 className="absolute left-[229px] top-[56px] text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: 700, width: '1000px' }}>
            How Spades Poker House Became a Top Poker Club in Texas
          </h2>
          <p className="absolute left-[492px] top-[101px]" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>
            Two locations, endless action, and a luxury poker atmosphere.
          </p>
          <div className="absolute left-[627px] top-[156px]" style={{ width: '185px', height: '38px', backgroundColor: '#785F37', borderRadius: '11px' }}>
            <p className="text-center mt-2" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>See How It All Started</p>
          </div>
        </section>

        {/* Second Hero Section */}
        <section className="relative" style={{ height: '938px', overflow: 'hidden' }}>
          <div 
            className="absolute"
            style={{ 
              left: '-177px',
              top: 0,
              width: '1906px',
              height: '938px',
              backgroundImage: `url('/images/faded spade premium quality poker cards 1.png')`,
              backgroundSize: 'auto',
              backgroundPosition: '0% 0%',
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }} />
          
          <div className="relative z-10">
            <p className="absolute left-[563px] top-[400px]" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600 }}>
              WELCOME TO SPADES POKER HOUSE
            </p>
            <h2 className="absolute left-[583px] top-[434px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: 700 }}>
              Webster | Baytown
            </h2>
            <div className="absolute left-[658px] top-[489px]" style={{ width: '139px', height: '38px', backgroundColor: '#CBB682', borderRadius: '11px' }}>
              <p className="text-center mt-2" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>Play Now</p>
            </div>
          </div>
        </section>

        {/* Main Content Section with Timeline */}
        <section className="relative" style={{ backgroundColor: '#181510', minHeight: '2664px' }}>
          {/* Background image */}
          <Image
            src="/images/image 1.png"
            alt="Background"
            width={1411}
            height={1866}
            className="absolute opacity-30"
            style={{ left: '21px', top: '42px' }}
          />

          {/* Google Reviews */}
          <div className="relative z-10 pt-[68px]">
            <Image
              src="/images/Screenshot 2025-07-22 135627 1.png"
              alt="Review 1"
              width={529}
              height={144}
              className="absolute left-[91px] top-[68px]"
            />
            <Image
              src="/images/Screenshot 2025-07-22 135705 1.png"
              alt="Review 2"
              width={522}
              height={148}
              className="absolute left-[94px] top-[257px]"
            />
            <Image
              src="/images/Screenshot 2025-07-22 135730 1.png"
              alt="Review 3"
              width={525}
              height={152}
              className="absolute left-[94px] top-[421px]"
            />
            <Image
              src="/images/Screenshot 2025-07-22 135749 1.png"
              alt="Review 4"
              width={533}
              height={142}
              className="absolute left-[87px] top-[618px]"
            />

            <div className="absolute left-[611px] top-[818px]">
              <button className="relative">
                <Image
                  src="/images/Rectangle 3.svg"
                  alt="Button"
                  width={234}
                  height={38}
                />
                <span className="absolute inset-0 flex items-center justify-center" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>
                  See More Google Reviews
                </span>
              </button>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative z-10" style={{ marginTop: '150px' }}>
            <h2 className="text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: 700 }}>
              Timeline
            </h2>
            
            <Image
              src="/images/Group 16.svg"
              alt="Decoration"
              width={709}
              height={90}
              className="mx-auto mt-8"
            />

            {/* Timeline Container */}
            <div className="relative mt-16" style={{ maxWidth: '1250px', margin: '0 auto' }}>
              {/* Timeline vertical lines */}
              <div style={{ 
                position: 'absolute',
                left: '0',
                top: '0',
                width: '1px',
                height: '1300px',
                backgroundColor: '#785F37',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left',
                marginTop: '150px',
                marginLeft: '625px'
              }} />

              {/* 2020 Entry */}
              <div className="relative" style={{ paddingTop: '100px' }}>
                <Image
                  src="/images/spades-poker-house-original-2020-poker-room-webster-tx.jpg 1.png"
                  alt="2020 Poker Room"
                  width={288}
                  height={216}
                  className="absolute"
                  style={{ left: '134px', top: '172px' }}
                />
                
                <h3 className="absolute" style={{ 
                  left: '456px', 
                  top: '172px',
                  color: '#F7E7CE', 
                  fontFamily: 'Montserrat', 
                  fontSize: '24px', 
                  fontWeight: 600 
                }}>
                  2020 – Launching Spades Poker House in Webster, TX
                </h3>
                
                <p className="absolute" style={{ 
                  left: '456px', 
                  top: '223px',
                  width: '854px',
                  color: '#F7E7CE', 
                  fontFamily: 'Poppins', 
                  fontSize: '16px',
                  lineHeight: '25px'
                }}>
                  In 2020, Spades Poker House opened its doors in Webster, Texas, bringing a luxurious and professional poker club experience to Southeast Texas.<br />
                  We created dozens of local jobs for poker dealers, servers, managers, cage cashiers, security staff, and cleaners, building a team of qualified professionals.<br />
                  Players were drawn to our modern poker room, time-based cash game model, and safe, upscale atmosphere, making us the go-to spot for Texas Hold'em and PLO action.
                </p>
              </div>

              {/* 2021-2022 Entry */}
              <div className="relative" style={{ paddingTop: '200px' }}>
                <h3 className="absolute" style={{ 
                  left: '145px', 
                  top: '289px',
                  color: '#F7E7CE', 
                  fontFamily: 'Montserrat', 
                  fontSize: '24px', 
                  fontWeight: 600 
                }}>
                  2021–2022 – Remodeling, Expanding & More Poker Action
                </h3>
                
                <p className="absolute" style={{ 
                  left: '145px', 
                  top: '340px',
                  width: '804px',
                  color: '#F7E7CE', 
                  fontFamily: 'Poppins', 
                  fontSize: '16px',
                  lineHeight: '25px'
                }}>
                  With increasing demand, we invested in remodeling the Webster poker room, introducing more tables and enhancing the environment.<br />
                  Our kitchen upgrades brought high-quality food and drinks to complement the gaming experience.<br />
                  We added a wider variety of poker games and tournaments, creating nonstop action for Southeast Texas poker enthusiasts.
                </p>

                <Image
                  src="/images/480742102_2727444374108691_8265231031706897172_n 1.png"
                  alt="Remodeled Room"
                  width={286}
                  height={215}
                  className="absolute"
                  style={{ left: '1035px', top: '306px' }}
                />
              </div>

              {/* 2023 Entry */}
              <div className="relative" style={{ paddingTop: '250px' }}>
                <Image
                  src="/images/spades-poker-house-baytown-opening-day-cash-games-live-action-texas.jpg 1.png"
                  alt="Baytown Opening"
                  width={290}
                  height={218}
                  className="absolute"
                  style={{ left: '145px', top: '414px' }}
                />

                <h3 className="absolute" style={{ 
                  left: '473px', 
                  top: '400px',
                  color: '#F7E7CE', 
                  fontFamily: 'Montserrat', 
                  fontSize: '24px', 
                  fontWeight: 600 
                }}>
                  2023 – Opening Baytown's Top Poker Room
                </h3>
                
                <div className="absolute" style={{ 
                  left: '473px', 
                  top: '451px',
                  width: '842px',
                  color: '#F7E7CE', 
                  fontFamily: 'Poppins', 
                  fontSize: '16px',
                  lineHeight: '25px'
                }}>
                  <p>In 2023, we proudly expanded with a second location: Spades Poker House Baytown.<br />
                  The Baytown poker room features:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>A 150 sq. ft. TV wall for watching live sports</li>
                    <li>Multiple big screens across the room</li>
                    <li>A spacious, modern layout perfect for socializing or enjoying poker date nights</li>
                  </ul>
                  <p className="mt-2">We introduced fun daily promotions and quickly became a favorite among players seeking a vibrant and professional poker club in Baytown, TX.</p>
                </div>
              </div>

              {/* 2024-Present Entry */}
              <div className="relative" style={{ paddingTop: '300px' }}>
                <h3 className="absolute" style={{ 
                  left: '165px', 
                  top: '435px',
                  width: '755px',
                  color: '#F7E7CE', 
                  fontFamily: 'Montserrat', 
                  fontSize: '24px', 
                  fontWeight: 600 
                }}>
                  2024–Present – Leading Texas Poker with Technology & Service
                </h3>
                
                <div className="absolute" style={{ 
                  left: '165px', 
                  top: '510px',
                  width: '870px',
                  color: '#F7E7CE', 
                  fontFamily: 'Poppins', 
                  fontSize: '16px',
                  lineHeight: '25px'
                }}>
                  <p>Today, Spades Poker House uses Poker Atlas tablets at every table, giving players access to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Real-time waitlist registration for cash games</li>
                    <li>Live updates on active tables and tournament schedules</li>
                    <li>Convenient mobile check-ins for Webster and Baytown poker rooms</li>
                  </ul>
                  <p className="mt-2">With two thriving locations and a focus on innovation, we're proud to be recognized as a top-rated poker destination in Texas, offering a premium experience for casual players and high-stakes grinders alike.</p>
                </div>

                <Image
                  src="/images/texas-holdem-quads-queens-spades-poker-house-full-table-action-webster.jpg 1.png"
                  alt="Modern Action"
                  width={290}
                  height={218}
                  className="absolute"
                  style={{ left: '1045px', top: '470px' }}
                />
              </div>
            </div>

            <Image
              src="/images/Group 16.svg"
              alt="Decoration"
              width={709}
              height={90}
              className="absolute"
              style={{ right: '86px', bottom: '240px' }}
            />
          </div>

          {/* Call to Action Section at Bottom */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '280px', backgroundColor: '#181510', borderTop: '1px solid #CBB682' }}>
            <h2 className="text-center mt-[43px]" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: 700 }}>
              Your Seat is Waiting – Check Live Poker Action
            </h2>
            
            <div className="flex flex-col items-center gap-4 mt-12">
              <div style={{ width: '365px', height: '38px', backgroundColor: '#CBB682', borderRadius: '11px' }}>
                <p className="text-center mt-2" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>Poker Atlas- Webster</p>
              </div>
              <div style={{ width: '365px', height: '38px', backgroundColor: '#CBB682', borderRadius: '11px' }}>
                <p className="text-center mt-2" style={{ color: '#181510', fontFamily: 'Poppins', fontSize: '16px' }}>Poker Atlas- Baytown</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}