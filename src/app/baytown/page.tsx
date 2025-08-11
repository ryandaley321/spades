import Image from "next/image";
import Footer from '@/components/Footer';
import { CustomButton } from "@/components/ui/custom-button";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baytown TX Poker Room | Real Poker Vibes Southeast Texas",
  description: "Discover real poker vibes in Baytown, Texas. Exceptional service, friendly atmosphere, and professional poker action. Trusted venue for Southeast Texas players.",
  keywords: "Baytown TX poker room, Baytown poker, Southeast Texas poker, real poker vibes Baytown, East Houston poker, poker tournaments Baytown",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/baytown",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Baytown, Texas",
    "geo.position": "29.7355;-94.9774",
    "ICBM": "29.7355,-94.9774",
  },
};

export default function BaytownLocationPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <HeroBanner
          subtitle="SPADES POKER HOUSE BAYTOWN"
          subtitleClassName="font-semibold mb-4"
          subtitleStyle={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0',
            color: '#F7E7CE'
          }}
          title="Discover Real Poker Vibes in Baytown, Texas"
          titleClassName="font-bold mb-6"
          titleStyle={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '28.8px',
            lineHeight: '100%',
            letterSpacing: '0',
            color: '#F7E7CE'
          }}
          description="Looking for poker near Baytown? Join live games, daily tournaments with blind and level adjustments, and top-notch connection that wins your Baytown, Texas poker experience over."
          descriptionClassName="mb-10 max-w-3xl mx-auto"
          descriptionStyle={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0',
            color: '#F7E7CE'
          }}
          backgroundImage="/images/optimized/baytown-hero-image.webp"
          overlayOpacity={0.7}
        />

        <CallToActionBanner
          title="Trusted Poker Venue for Cash Games and Tournaments in Southeast Texas"
          description="Established tables, consistent action, and a loyal community of serious players."
          buttonText="View Baytown Schedule"
          buttonStyle="brown"
        />

        {/* Service Highlights Section */}
        <section className="py-16 relative" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/optimized/spades-unbeatable-background.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Dark overlay to fade the background */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.8)' }}></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '28.8px', lineHeight: '100%', letterSpacing: '0%' }}>
                Join Us for Poker, Fun, and Unbeatable Vibes
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Staff Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/optimized/spades-baytown-lobby-welcoming-new-customer-shaking-hands-smiling.webp"
                    alt="Spades Baytown Staff"
                    width={496}
                    height={368}
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div>
                <h3 className="font-semibold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Spades Baytown: Exceptional Service, Friendly Atmosphere, and Professional Staff
                </h3>
                <div className="space-y-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
                  <p>
                    {`At `}<strong style={{ fontWeight: 700 }}>Spades Baytown</strong>{`, we pride ourselves on offering a `}<strong style={{ fontWeight: 700 }}>friendly and welcoming atmosphere</strong>{` where every player feels at home. Our `}<strong style={{ fontWeight: 700 }}>professional staff</strong>{`, from `}<strong style={{ fontWeight: 700 }}>cocktail waitresses to dealers</strong>{`, are dedicated to providing the best experience possible. Whether you're `}<strong style={{ fontWeight: 700 }}>new to poker</strong>{` or a seasoned pro, you'll appreciate the `}<strong style={{ fontWeight: 700 }}>outstanding customer service</strong>{` and the `}<strong style={{ fontWeight: 700 }}>positive energy</strong>{` from our team, making every visit a memorable one.`}
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
        <section className="py-16 relative" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/optimized/spades-unbeatable-background.webp')", backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid #CBB682' }}>
          {/* Dark overlay to fade the background */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.8)' }}></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h3 className="font-semibold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Ultimate Comfort, Premium Facilities, and Exclusive Merch!
                </h3>
                <div className="space-y-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
                  <p>
                    {`At `}<strong style={{ fontWeight: 700 }}>Spades Baytown</strong>{`, we offer more than just exceptional poker action – enjoy `}<strong style={{ fontWeight: 700 }}>ultimate comfort</strong>{` in our `}<strong style={{ fontWeight: 700 }}>movie theater seating</strong>{` with a `}<strong style={{ fontWeight: 700 }}>massive sports TV wall</strong>{` to keep you relaxed between sessions. And don't forget to `}<strong style={{ fontWeight: 700 }}>show your Spades pride</strong>{` with our `}<strong style={{ fontWeight: 700 }}>exclusive merchandise!</strong>{` From cozy hoodies to stylish hats and high-quality apparel, we have the perfect gear for every fan. Visit the cage to check out our full collection and pick up your favorite piece today.`}
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
                    src="/images/optimized/spades-baytown-movie-theater-seating-sports-memorabilia-relaxing.webp"
                    alt="Spades Baytown movie theater seating with sports memorabilia"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                  {/* Patriotic hat overlay */}
                  <div className="absolute left-0" style={{ bottom: '-29px' }}>
                    <Image
                      src="/images/optimized/premium-patriotic-hat-spades-poker-merch-usa-style.webp"
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
              <h2 className="font-semibold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>
                Ongoing Promotions for Cash Games & Tournaments!
              </h2>
            </div>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/optimized/spades-baytown-poker-tournament-winners-cash-prize-felt-webster.webp"
                  alt="Spades Baytown poker tournament winners with cash prize"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/optimized/spades-baytown-10000-giveaway-winner-cash-backdrop-promotion.webp"
                  alt="Spades Baytown $10,000 giveaway winner with cash backdrop"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{ transform: 'rotate(90deg)' }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/optimized/spades-baytown-large-chip-stacks-poker-game-high-stakes-texas.webp"
                  alt="Spades Baytown large chip stacks in high stakes poker game"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{ transform: 'rotate(90deg)' }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/optimized/spades-baytown-poker-room-full-players-live-action-texas-poker.webp"
                  alt="Spades Baytown poker room full of players in live action"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>
                {`At `}<strong style={{ fontWeight: 700 }}>Spades Baytown</strong>{`, the excitement never stops! With `}<strong style={{ fontWeight: 700 }}>ongoing promotions</strong>{` for both `}<strong style={{ fontWeight: 700 }}>cash games</strong>{` and `}<strong style={{ fontWeight: 700 }}>tournaments</strong>{`, there's always something exciting happening. Whether you're joining daily bounty tournaments or taking advantage of our `}<strong style={{ fontWeight: 700 }}>high hand</strong>{` promotions, you'll find new opportunities to win big every day at `}<strong style={{ fontWeight: 700 }}>Spades Baytown</strong>{` is the perfect poker experience.`}
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