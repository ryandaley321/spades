import Image from "next/image";
import Footer from '@/components/Footer';
import { CustomButton } from "@/components/ui/custom-button";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function BaytownLocationPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <HeroBanner
          subtitle="SPADES POKER HOUSE BAYTOWN"
          title="Discover Real Poker Vibes in Baytown, Texas"
          description="Looking for poker near Baytown? Join live games, daily tournaments with blind and level adjustments, and top-notch connection that wins your Baytown, Texas poker experience over."
          backgroundImage="/images/baytown-hero-image.png"
          overlayOpacity={0.7}
        />

        <CallToActionBanner
          title="Trusted Poker Venue for Cash Games and Tournaments in Southeast Texas"
          description="Established tables, consistent action, and a loyal community of serious players."
          buttonText="View Baytown Schedule"
          buttonStyle="brown"
        />

        {/* Service Highlights Section */}
        <section className="py-16 relative" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/spades-unbeatable-background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Dark overlay to fade the background */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.8)' }}></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '36px' }}>
                Join Us for Poker, Fun, and Unbeatable Vibes
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Staff Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/spades-baytown-lobby-welcoming-new-customer-shaking-hands-smiling.jpg"
                    alt="Spades Baytown Staff"
                    width={496}
                    height={368}
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div>
                <h3 className="font-bold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                  Spades Baytown: Exceptional Service, Friendly Atmosphere, and Professional Staff
                </h3>
                <div className="space-y-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                  <p>
                    At <strong>Spades Baytown</strong>, we pride ourselves on offering a <strong>friendly and welcoming atmosphere</strong> where every player feels at home. Our <strong>professional staff</strong>, from <strong>cocktail waitresses to dealers</strong>, are dedicated to providing the best experience possible. Whether you're <strong>new to poker</strong> or a seasoned pro, you'll appreciate the <strong>outstanding customer service</strong> and the <strong>positive energy</strong> from our team, making every visit a memorable one.
                  </p>
                </div>
                <div className="mt-8">
                  <CustomButton className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '12px 30px', fontSize: '16px' }}>
                    Read Our Google Reviews
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 relative" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/spades-unbeatable-background.png')", backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid #CBB682' }}>
          {/* Dark overlay to fade the background */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.8)' }}></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h3 className="font-bold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                  Ultimate Comfort, Premium Facilities, and Exclusive Merch!
                </h3>
                <div className="space-y-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                  <p>
                    At <strong>Spades Baytown</strong>, we offer more than just exceptional poker action – enjoy <strong>ultimate comfort</strong> in our <strong>movie theater seating</strong> with a <strong>massive sports TV wall</strong> to keep you relaxed between sessions. And don't forget to <strong>show your Spades pride</strong> with our <strong>exclusive merchandise!</strong> From cozy hoodies to stylish hats and high-quality apparel, we have the perfect gear for every fan. Visit the cage to check out our full collection and pick up your favorite piece today.
                  </p>
                </div>
                <div className="mt-8">
                  <CustomButton className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '12px 30px', fontSize: '16px' }}>
                    Check Out Spades in Person
                  </CustomButton>
                </div>
              </div>
              
              {/* Right side - Facilities Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/spades-baytown-movie-theater-seating-sports-memorabilia-relaxing.jpg"
                    alt="Spades Baytown movie theater seating with sports memorabilia"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                  {/* Patriotic hat overlay */}
                  <div className="absolute left-0" style={{ bottom: '-29px' }}>
                    <Image
                      src="/images/premium-patriotic-hat-spades-poker-merch-usa-style.jpg"
                      alt="Premium patriotic Spades poker merchandise hat"
                      width={180}
                      height={180}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section className="py-16" style={{ backgroundColor: '#181510' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '36px' }}>
                Ongoing Promotions for Cash Games & Tournaments!
              </h2>
            </div>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/spades-baytown-poker-tournament-winners-cash-prize-felt-webster.jpg"
                  alt="Spades Baytown poker tournament winners with cash prize"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/spades-baytown-10000-giveaway-winner-cash-backdrop-promotion.jpg"
                  alt="Spades Baytown $10,000 giveaway winner with cash backdrop"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/spades-baytown-large-chip-stacks-poker-game-high-stakes-texas.jpg"
                  alt="Spades Baytown large chip stacks in high stakes poker game"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/spades-baytown-poker-room-full-players-live-action-texas-poker.jpg"
                  alt="Spades Baytown poker room full of players in live action"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                At <strong>Spades Baytown</strong>, the excitement never stops! With <strong>ongoing promotions</strong> for both <strong>cash games</strong> and <strong>tournaments</strong>, there's always something exciting happening. Whether you're joining daily bounty tournaments or taking advantage of our <strong>high hand</strong> promotions, you'll find new opportunities to win big every day at <strong>Spades Baytown</strong> is the perfect poker experience.
              </p>
              <CustomButton className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
                See Current Promotions
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}