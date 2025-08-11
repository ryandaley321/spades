"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function Webster() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroBanner
        subtitle="SPADES POKER HOUSE WEBSTER"
        title="Experience Real Texas Hold'em at Its Finest"
        description="Live cash tables, dynamic daily tournaments, and a refined player experience — all under one roof."
        backgroundImage="/images/optimized/spades-poker-house-full-room-live-action-poker-game 1.webp"
        overlayOpacity={0.5}
        buttonAction={() => router.push('/contact')}
      />

      <CallToActionBanner
        title="Spades Poker House Webster: Your Premier Poker Destination in Texas"
        description="Join the action at our luxurious poker room, featuring high-stakes games, daily tournaments, and a vibrant player community."
        buttonText="See Webster Schedule"
        buttonStyle="brown"
        buttonAction={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-webster/tournaments', '_blank')}
      />

      {/* Premium Amenities and Highlights Container */}
      <div className="relative" style={{ backgroundColor: '#181510' }}>
        {/* Background Image for both sections */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('/images/optimized/BACKDROP1.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />

        {/* Premium Amenities Section */}
        <section className="relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-center font-bold mb-16" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: '700' }}>
            Explore the Premium Amenities at Spades Poker House Webster
          </h2>

          {/* Top Tier Poker Action Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Mobile/Tablet: Image first, Desktop: Image on left */}
            <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-1">
              <Image
                src="/images/optimized/player-holding-cards-chip-stack-money-spades-poker-house-webster-texas.jpg 1.webp"
                alt="Player holding cards"
                width={400}
                height={300}
                className="rounded-lg max-w-full"
              />
            </div>
            <div className="w-full lg:w-2/3 order-2 lg:order-2">
              <h3 className="font-semibold mb-6 text-center lg:text-left" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px' }}>
                Experience Top-Tier Poker Action
              </h3>
              <div className="text-left" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                <p className="mb-4" style={{ fontWeight: 'normal' }}>
                  {`At Spades Poker House Webster, we bring you top-tier poker action in a `}<strong style={{ fontWeight: '600' }}>luxurious setting</strong>{`. Our `}<strong style={{ fontWeight: '600' }}>state-of-the-art poker tables</strong>{` and `}<strong style={{ fontWeight: '600' }}>Poker Atlas tablets</strong>{` make it easy to join games, track live action, and check tournament schedules. From `}<strong style={{ fontWeight: '600' }}>{`Texas Hold'em`}</strong>{` to `}<strong style={{ fontWeight: '600' }}>PLO</strong>{`, we offer a variety of `}<strong style={{ fontWeight: '600' }}>cash games</strong>{` and `}<strong style={{ fontWeight: '600' }}>high-stakes tournaments</strong>{`. Whether you're a novice looking to try your hand or a seasoned pro aiming for the next big win, our `}<strong style={{ fontWeight: '600' }}>professional dealers</strong>{` and `}<strong style={{ fontWeight: '600' }}>friendly atmosphere</strong>{` will ensure your poker experience is unforgettable.`}
                </p>
                <p className="mb-6" style={{ fontWeight: 'normal' }}>
                  Join us at <strong style={{ fontWeight: '600' }}>Spades Poker House Webster</strong>, where <strong style={{ fontWeight: '600' }}>elite poker action</strong> and <strong style={{ fontWeight: '600' }}>luxury</strong> meet.
                </p>
                <div className="flex justify-center lg:justify-end">
                  <CustomButton 
                    size="lg" 
                    className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" 
                    style={{ borderRadius: '11px', padding: '10px 30px' }}
                    onClick={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-webster', '_blank')}
                  >
                    Poker Atlas- Spades Webster
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>

          {/* Dining Section */}
          <div className="flex flex-col gap-12 mb-20">
            {/* Mobile/Tablet: Image first, before header */}
            <div className="w-full flex justify-center lg:hidden">
              <a href="/webster/menu" target="_blank" rel="noopener noreferrer" className="max-w-full">
                <Image
                  src="/images/optimized/watz-kookin-restaurant-menu-design-gabi-papirtyte 1.webp"
                  alt="Walzz Kookin Menu"
                  width={500}
                  height={700}
                  className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity max-w-full h-auto"
                />
              </a>
            </div>
            
            {/* Desktop layout */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              <div className="w-full lg:w-1/2">
                <h3 className="font-semibold mb-6 text-center lg:text-left" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px' }}>
                  Dining at Spades Poker House
                </h3>
                <div className="text-left" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                  <p className="mb-4" style={{ fontWeight: 'normal' }}>
                    {`Enjoy a wide range of `}<strong style={{ fontWeight: '600' }}>delicious meals</strong>{` at Spades Poker House, crafted to satisfy your cravings while you play. Our menu features a `}<strong style={{ fontWeight: '600' }}>variety of options</strong>{`, from quick bites to satisfying entrees, designed to fuel you for long sessions at the table. Whether you're in the mood for a `}<strong style={{ fontWeight: '600' }}>hearty meal</strong>{` or a `}<strong style={{ fontWeight: '600' }}>light snack</strong>{`, we've got something for everyone.`}
                  </p>
                  <p className="mb-6" style={{ fontWeight: 'normal' }}>
                    Take a break from the poker table to grab a bite, and recharge. <strong style={{ fontWeight: '600' }}>Great food, great poker, and a great atmosphere</strong>—only at Spades.
                  </p>
                  <div className="flex justify-center">
                    <a href="/webster/menu" target="_blank" rel="noopener noreferrer">
                      <CustomButton size="lg" className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '10px 30px' }}>
                        Explore Walzz Kookin Menu & Specials
                      </CustomButton>
                    </a>
                  </div>
                </div>
              </div>
              {/* Desktop: Image on right */}
              <div className="w-full lg:w-1/2 hidden lg:flex justify-center order-3 lg:order-2">
                <a href="/webster/menu" target="_blank" rel="noopener noreferrer" className="max-w-full">
                  <Image
                    src="/images/optimized/watz-kookin-restaurant-menu-design-gabi-papirtyte 1.webp"
                    alt="Walzz Kookin Menu"
                    width={500}
                    height={700}
                    className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity max-w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Massage Therapy Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mobile/Tablet: Image first, Desktop: Image on left */}
            <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-1">
              <Image
                src="/images/optimized/massage 1.webp"
                alt="Massage therapy"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="w-full lg:w-2/3 order-2 lg:order-2">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <Image
                  src="/images/optimized/sol_massage_logo_final_072524 1.webp"
                  alt="Sol Massage Logo"
                  width={106}
                  height={102}
                  className="w-[80px] h-[77px] md:w-[106px] md:h-[102px]"
                />
                <h3 className="font-semibold text-center lg:text-left" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px' }}>
                  Massage Therapy at Spades Poker House
                </h3>
              </div>
              <div className="text-left" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                <p className="mb-4" style={{ fontWeight: 'normal' }}>
                  At Spades Poker House, we prioritize your <strong style={{ fontWeight: '600' }}>comfort and performance</strong> at the table. We strongly recommend players who engage for four or more hours to consider a 60-minute massage. Start your session with us <strong style={{ fontWeight: '600' }}>to ensure your body is in optimal condition for focused gameplay</strong>. Prolonged sitting can take a toll, affecting concentration and physical well-being. We encourage regular breaks, including stretching before and after your massage, and every 30 minutes during play. <strong style={{ fontWeight: '600' }}>Even a 20-30 minute session can significantly enhance cognitive function and provide vital energy.</strong>
                </p>
                <p className="mb-6" style={{ fontWeight: 'normal' }}>
                  Our massages are tailored to your needs, incorporating light stretch techniques tableside. For a comprehensive experience, we suggest scheduling a weekly off-table massage for deeper relaxation and targeted therapy, including optional hot stone treatments.
                </p>
                <p className="mb-6" style={{ fontWeight: 'normal' }}>
                  {`To book an appointment with your preferred therapist, call or text 409-795-1170. Your massage session is your time—we're here to ensure it meets your expectations. Discover more about our services and benefits `}<a href="https://www.solmassagetherapies.com/" target="_blank" rel="noopener noreferrer" className="underline">[here]</a>{`.`}
                </p>
                <div className="flex justify-center">
                  <CustomButton 
                    size="lg" 
                    className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" 
                    style={{ borderRadius: '11px', padding: '10px 30px' }}
                    onClick={() => window.open('https://www.solmassagetherapies.com/', '_blank')}
                  >
                    Learn More About Sol Massage
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative" style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid #CBB682', borderBottom: '1px solid #CBB682' }}>
        <div className="relative z-10 px-8 lg:px-12">
          {/* Section Title */}
          <h2 className="text-center font-bold mb-20" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', fontWeight: '700' }}>
            Spades Poker House Highlights: Tournament Winners, Raffles, and Live Action
          </h2>

          {/* Gallery Image */}
          <div className="mb-20">
            <Image
              src="/images/optimized/Group 28.webp"
              alt="Spades Poker House Highlights Gallery"
              width={1920}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Google Reviews Button */}
          <div className="flex justify-center">
            <CustomButton 
              size="lg" 
              className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" 
              style={{ borderRadius: '11px', padding: '10px 40px', fontSize: '16px', fontFamily: 'Poppins', fontWeight: '400' }}
              onClick={() => window.open('https://maps.app.goo.gl/99ivNCoJeeuX4Uco8', '_blank')}
            >
              Spades Webster Google Reviews
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