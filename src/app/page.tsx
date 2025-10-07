"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";
import LogoAnimation from "@/components/LogoAnimation";
import OptimizedImage from "@/components/OptimizedImage";


export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <LogoAnimation />
      <HeroBanner
        subtitle="WELCOME TO SPADES POKER HOUSE"
        title="Webster | Baytown"
        description="Two Convenient Locations - Premier Poker Experience in Texas"
        backgroundImage="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.webp"
        overlayOpacity={0.7}
        buttonAction={() => router.push('/contact')}
      />

      <CallToActionBanner
        title="Join the Elite. Experience Private-Membership Poker."
        description="Experience the best poker games in Webster & Baytown, TX."
        buttonText="Learn More"
        buttonStyle="brown"
        buttonAction={() => router.push('/about')}
      />

      {/* Combined Three Column and Instagram Sections */}
      <section 
        className="relative pt-16 pb-16"
        style={{
          backgroundImage: 'url("/images/optimized/image 1.webp")',
          backgroundSize: '800px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundColor: '#181510'
        }}
      >
        {/* Three Column Section */}
        <div className="w-full px-6 lg:px-12 pb-8">
          <h2 
            className="text-center mb-12 text-2xl md:text-3xl"
            style={{
              color: '#F7E7CE',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 28.8px)',
              lineHeight: '1.25',
              letterSpacing: '0%'
            }}
          >
            Ultimate Poker Action & Exceptional Cuisine
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cash Games */}
            <Card className="border" style={{ backgroundColor: 'transparent', borderColor: '#785F37', borderWidth: '1px', borderRadius: '0' }}>
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="/images/optimized/high-stakes-poker-hand-chip-tower-cash-game-spades-poker-webster.jpg 1"
                    alt="Cash Games at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 600, letterSpacing: '0%', lineHeight: '1.2' }}>Cash Games</h3>
                <div className="space-y-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  <p>Enjoy the action of cash games at Spades Poker House! No matter your skill level, our tables are always open for you to join in the action.</p>
                  <ul className="space-y-1 pl-4">
                    <li>• <strong>No-Limit Hold&apos;em (NLH)</strong> cash games for all levels</li>
                    <li>• <strong>Pot-Limit Omaha (PLO)</strong> for a more challenging experience</li>
                    <li>• Friendly atmosphere for beginners and experienced players alike</li>
                    <li>• Tables open <strong>24/7</strong> with no waiting time</li>
                    <li>• Varied stakes to fit your budget, from low to high limits</li>
                    <li>• <strong>Action-packed</strong> games, with new hands dealt every minute</li>
                    <li>• And so much more!</li>
                  </ul>
                  <p style={{ fontSize: '16px', lineHeight: '25px' }}>Our cash games are available daily at both of our locations, providing a wide range of options for players. Whether you&apos;re looking for a relaxed game or high-stakes action, <strong>Spades Poker House is the place to be!</strong></p>
                </div>
                <div className="mt-6 space-y-2">
                  <CustomButton 
                    size="sm" 
                    className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200"
                    onClick={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-webster/cash-games', '_blank')}
                  >
                    Games today- Webster
                  </CustomButton>
                  <CustomButton 
                    size="sm" 
                    className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200"
                    onClick={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-baytown/cash-games', '_blank')}
                  >
                    Games today- Baytown
                  </CustomButton>
                </div>
              </CardContent>
            </Card>

            {/* Poker Tournaments */}
            <Card className="border" style={{ backgroundColor: 'transparent', borderColor: '#785F37', borderWidth: '1px', borderRadius: '0' }}>
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/optimized/tournament-image 1.webp"
                    alt="Poker Tournaments at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 600, letterSpacing: '0%', lineHeight: '1.2' }}>Poker Tournaments</h3>
                <div className="space-y-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  <p>Join our thrilling poker tournaments with big prizes and intense action! Whether you&apos;re a beginner or a pro, there&apos;s a tournament for you.</p>
                  <ul className="space-y-1 pl-4">
                    <li>• <strong>PLO (Pot-Limit Omaha)</strong> and <strong>NLH (No-Limit Hold&apos;em)</strong> tournaments</li>
                    <li>• Thrilling <strong>Freezeouts</strong> and <strong>Bounty Tournaments</strong></li>
                    <li>• Our signature <strong>&quot;Chill&quot; Tournaments</strong>, designed for a more laid-back atmosphere</li>
                    <li>• <strong>Large Prizepool Re-entry Deepstack Tournaments</strong> offering massive payouts</li>
                    <li>• <strong>Re-buy Tournaments</strong> with varying buy-ins for all bankrolls</li>
                    <li>• <strong>Ladies&apos; and Seniors&apos; Tournaments</strong> for a more inclusive experience</li>
                  </ul>
                  <p style={{ fontSize: '16px', lineHeight: '25px' }}>These <strong>tournaments are held daily</strong> in both of our locations, offering players the opportunity to compete and win amazing prizes. Join us for an unforgettable poker experience at Spades Poker House – <strong>where the action never stops!</strong></p>
                </div>
                <div className="mt-6">
                  <CustomButton 
                    size="sm" 
                    className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200"
                    onClick={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-webster/tournaments', '_blank')}
                  >
                    Webster Schedule
                  </CustomButton>
                  <CustomButton 
                    size="sm" 
                    className="w-full text-sm mt-2 bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200"
                    onClick={() => window.open('https://www.pokeratlas.com/poker-room/spades-poker-house-baytown/tournaments', '_blank')}
                  >
                    Baytown Schedule
                  </CustomButton>
                </div>
              </CardContent>
            </Card>

            {/* Gyro Hero Kitchen */}
            <Card className="border" style={{ backgroundColor: 'transparent', borderColor: '#785F37', borderWidth: '1px', borderRadius: '0' }}>
              <CardContent className="p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/optimized/wrap2 1.webp"
                    alt="Gyro Hero Kitchen Food"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 600, letterSpacing: '0%', lineHeight: '1.2' }}>Kitchen</h3>
                <div className="space-y-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  <p>Introducing the exclusive restaurant at Spades Poker House Webster! We take pride in offering a diverse menu that caters to all taste buds. Indulge in our <strong>mouthwatering Gyros, flavorful Sandwiches, delectable Wraps, and satisfying Pastas</strong>, alongside a variety of other tempting options. Whether you&apos;re in the mood for a quick snack or a full meal, our skilled chefs will craft dishes that will delight your senses.</p>
                  <ul className="space-y-1 pl-4">
                    <li>• <strong>Wraps</strong> with fresh ingredients</li>
                    <li>• <strong>Sandwiches</strong> made to order</li>
                    <li>• <strong>Burgers</strong> cooked to perfection</li>
                    <li>• <strong>Plates & Bowls</strong> packed with flavor</li>
                    <li>• <strong>Salads</strong> for a light yet tasty meal</li>
                    <li>• <strong>Breakfast</strong> options to start your day right</li>
                    <li>• <strong>Desserts</strong> to satisfy your sweet tooth</li>
                  </ul>
                  <p style={{ fontSize: '16px', lineHeight: '25px' }}>Come by to satisfy your hunger at <strong>Gyro Hero, where each dish is crafted with care and full of flavor!</strong></p>
                </div>
                <div className="mt-6">
                  <a href="/webster/menu" target="_blank" rel="noopener noreferrer">
                    <CustomButton size="sm" className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                      View Menu
                    </CustomButton>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="relative w-full px-8 lg:px-20 pt-8">
          <h2 
            className="text-center mb-12 text-2xl md:text-3xl"
            style={{
              color: '#F7E7CE',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 28.8px)',
              lineHeight: '1.25',
              letterSpacing: '0%'
            }}
          >
            Follow us on Facebook
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <Image
                src="/images/optimized/happyq 1.webp"
                alt="Happy poker players at Spades Poker House - Click to visit our Facebook page"
                width={300}
                height={300}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <Image
                src="/images/optimized/mario 1.webp"
                alt="Poker tournament winner at Spades - Click to visit our Facebook page"
                width={300}
                height={300}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <Image
                src="/images/optimized/trio 1.webp"
                alt="Group of players enjoying poker at Spades - Click to visit our Facebook page"
                width={300}
                height={300}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
              <Image
                src="/images/optimized/happier 1.webp"
                alt="Smiling poker player at Spades - Click to visit our Facebook page"
                width={300}
                height={300}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
