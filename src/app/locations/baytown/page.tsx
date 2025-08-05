import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CustomButton } from "@/components/ui/custom-button";

export default function BaytownLocationPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center" style={{ height: '1080px', marginTop: '87px' }}>
          {/* Background Image with poker chips */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/images/spades-poker-house-baytown-opening-day-cash-games-live-action-texas.jpg 1.png')`,
            }}
          >
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="font-semibold mb-4 tracking-wide" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}>
              SPADES POKER HOUSE BAYTOWN
            </h1>
            <h2 className="font-bold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '48px', lineHeight: '1.2' }}>
              Discover Real Poker Vibes in Baytown, Texas
            </h2>
            <p className="mb-10 max-w-3xl mx-auto" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '1.6' }}>
              Looking for poker near Baytown? Join live games, daily tournaments with blind and level adjustments, and top-notch connection that wins your Baytown, Texas poker experience over.
            </p>
            <CustomButton size="lg" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 40px', fontSize: '16px', fontWeight: '600' }}>
              Play Now
            </CustomButton>
          </div>
        </section>

        {/* Trusted Venue Section */}
        <section className="relative py-16" style={{ backgroundColor: '#181510' }}>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="font-bold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '36px' }}>
              Trusted Poker Venue for Cash Games and Tournaments in Southeast Texas
            </h2>
            <p className="mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '1.6' }}>
              Established mobile consultant action, and a loyal community of serious players.
            </p>
            <CustomButton size="lg" style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '12px 40px', fontSize: '16px', fontWeight: '600' }}>
              View Baytown Schedule
            </CustomButton>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="py-16" style={{ backgroundColor: '#181510' }}>
          <div className="max-w-7xl mx-auto px-4">
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
                    src="/images/happyq 1.png"
                    alt="Spades Baytown Staff"
                    width={400}
                    height={500}
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
                    At <strong>Spades Baytown</strong>, we pride ourselves on offering a <strong>friendly and welcoming atmosphere</strong> where every player feels at home. Our <strong>professional staff</strong> from <strong>cocktail waitresses to dealers</strong> are dedicated to providing the best experience possible. Whether you're <strong>new to poker</strong> or bringing a <strong>customer service</strong> and the <strong>positive energy</strong> from our team, making every visit a memorable one.
                  </p>
                </div>
                <div className="mt-8">
                  <CustomButton style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '12px 30px', fontSize: '16px' }}>
                    Read Our Google Reviews
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16" style={{ backgroundColor: '#181510' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h3 className="font-bold mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28px' }}>
                  Ultimate Comfort, Premium Facilities, and Exclusive Merch!
                </h3>
                <div className="space-y-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
                  <p>
                    At <strong>Spades Baytown</strong>, we offer more than just exceptional poker action - enjoy <strong>ultimate comfort</strong> in our <strong>movie theater seating</strong> with a <strong>massive sports TV wall</strong> so you can take relaxed breaks. We take <strong>pride</strong> with our <strong>exclusive merchandise!</strong> from carry hoodies to stylish hats and high-quality apparel, wear the perfect gear for every fan. Visit the reps to check out our full collection and pick up your favorite piece today.
                  </p>
                </div>
                <div className="mt-8">
                  <CustomButton style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '12px 30px', fontSize: '16px' }}>
                    Check Out Sweatshirt in Person
                  </CustomButton>
                </div>
              </div>
              
              {/* Right side - Facilities Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/Screenshot 2025-07-22 135627 1.png"
                    alt="Movie theater seating"
                    width={200}
                    height={150}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/images/Screenshot 2025-07-22 135705 1.png"
                    alt="Sports TV wall"
                    width={200}
                    height={150}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/Screenshot 2025-07-22 135730 1.png"
                    alt="Exclusive merchandise"
                    width={200}
                    height={150}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/images/Screenshot 2025-07-22 135749 1.png"
                    alt="Poker room"
                    width={200}
                    height={150}
                    className="rounded-lg w-full"
                  />
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
                  src="/images/happyq 1.png"
                  alt="Promotion 1"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/mario 1.png"
                  alt="Promotion 2"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/trio 1.png"
                  alt="Promotion 3"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/happier 1.png"
                  alt="Promotion 4"
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
              <CustomButton style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
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