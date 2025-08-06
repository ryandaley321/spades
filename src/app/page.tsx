import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";
import LogoAnimation from "@/components/LogoAnimation";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LogoAnimation />
      <HeroBanner
        subtitle="WELCOME TO SPADES POKER HOUSE"
        title="Webster | Baytown"
        description="Two Convenient Locations - Premier Poker Experience in Texas"
        backgroundImage="/images/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.png"
        overlayOpacity={0.7}
      />

      <CallToActionBanner
        title="Join the Elite. Experience Private-Membership Poker."
        description="Experience the best poker games in Webster & Baytown, TX."
        buttonText="Learn More"
        buttonStyle="brown"
      />

      {/* Ultimate Poker Action Section - Remove this section as it's not in Figma design */}

      {/* Three Column Section */}
      <section className="bg-black pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cash Games */}
            <Card className="bg-black" style={{ borderColor: '#785F37' }}>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/high-stakes-poker-hand-chip-tower-cash-game-spades-poker-webster.jpg 1.png"
                    alt="Cash Games at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>Cash Games</h3>
                <div className="space-y-3 text-sm" style={{ color: '#F7E7CE' }}>
                  <p>Enjoy the action of cash games at Spades Poker House! No matter your skill level, our tables are always open for you to join in the action.</p>
                  <ul className="space-y-1">
                    <li>• <strong>No-Limit Hold&apos;em (NLH)</strong> cash games for all levels</li>
                    <li>• <strong>Pot-Limit Omaha (PLO)</strong> for a more challenging experience</li>
                    <li>• Friendly atmosphere for beginners and experienced players alike</li>
                    <li>• Tables open <strong>24/7</strong> with no waiting time</li>
                    <li>• Varied stakes to fit your budget, from low to high limits</li>
                    <li>• <strong>Action-packed</strong> games, with new hands dealt every minute</li>
                    <li>• And so much more!</li>
                  </ul>
                  <p className="text-xs">Our cash games are available daily at both of our locations, providing a wide range of options for players. Whether you&apos;re looking for a relaxed game or high-stakes action, <strong>Spades Poker House is the place to be!</strong></p>
                </div>
                <div className="mt-6 space-y-2">
                  <CustomButton size="sm" className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                    Games today- Webster
                  </CustomButton>
                  <CustomButton size="sm" className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                    Games today- Baytown
                  </CustomButton>
                </div>
              </CardContent>
            </Card>

            {/* Poker Tournaments */}
            <Card className="bg-black" style={{ borderColor: '#785F37' }}>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/tournament-image 1.png"
                    alt="Poker Tournaments at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>Poker Tournaments</h3>
                <div className="space-y-3 text-sm" style={{ color: '#F7E7CE' }}>
                  <p>Join our thrilling poker tournaments with big prizes and intense action! Whether you&apos;re a beginner or a pro, there&apos;s a tournament for you.</p>
                  <ul className="space-y-1">
                    <li>• <strong>PLO (Pot-Limit Omaha)</strong> and <strong>NLH (No-Limit Hold&apos;em)</strong> tournaments</li>
                    <li>• Thrilling <strong>Freezeouts</strong> and <strong>Bounty Tournaments</strong></li>
                    <li>• Our signature <strong>&quot;Chill&quot; Tournaments</strong>, designed for a more laid-back atmosphere</li>
                    <li>• <strong>Large Prizepool Re-entry Deepstack Tournaments</strong> offering massive payouts</li>
                    <li>• <strong>Re-buy Tournaments</strong> with varying buy-ins for all bankrolls</li>
                    <li>• <strong>Ladies&apos; and Seniors&apos; Tournaments</strong> for a more inclusive experience</li>
                  </ul>
                  <p className="text-xs">These <strong>tournaments are held daily</strong> in both of our locations, offering players the opportunity to compete and win amazing prizes. Join us for an unforgettable poker experience at Spades Poker House – <strong>where the action never stops!</strong></p>
                </div>
                <div className="mt-6">
                  <CustomButton size="sm" className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                    Webster Schedule
                  </CustomButton>
                  <CustomButton size="sm" className="w-full text-sm mt-2 bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                    Baytown Schedule
                  </CustomButton>
                </div>
              </CardContent>
            </Card>

            {/* Gyro Hero Kitchen */}
            <Card className="bg-black" style={{ borderColor: '#785F37' }}>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/wrap2 1.png"
                    alt="Gyro Hero Kitchen Food"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>Kitchen</h3>
                <div className="space-y-3 text-sm" style={{ color: '#F7E7CE' }}>
                  <p>Introducing <strong>GYRO HERO</strong>, the exclusive restaurant at Spades Poker House Webster! We take pride in offering a diverse menu that caters to all taste buds. Indulge in our mouthwatering <strong>Gyros, flavorful Sandwiches, delectable Wraps, and satisfying Pastas</strong>, alongside a variety of other tempting options. Whether you&apos;re in the mood for a quick snack or a full meal, our skilled chefs will craft dishes that will delight your senses.</p>
                  <ul className="space-y-1">
                    <li>• <strong>Wraps</strong> with fresh ingredients</li>
                    <li>• <strong>Sandwiches</strong> made to order</li>
                    <li>• <strong>Burgers</strong> cooked to perfection</li>
                    <li>• <strong>Plates & Bowls</strong> packed with flavor</li>
                    <li>• <strong>Salads</strong> for a light yet tasty meal</li>
                    <li>• <strong>Breakfast</strong> options to start your day right</li>
                    <li>• <strong>Desserts</strong> to satisfy your sweet tooth</li>
                  </ul>
                  <p className="text-xs">Come by to satisfy your hunger at <strong>Gyro Hero, where each dish is crafted with care and full of flavor!</strong></p>
                </div>
                <div className="mt-6">
                  <CustomButton size="sm" className="w-full text-sm bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200">
                    View Menu
                  </CustomButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12" style={{ color: '#F7E7CE' }}>
            Follow Us on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/happyq 1.png"
                alt="Instagram post 1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/mario 1.png"
                alt="Instagram post 2"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/trio 1.png"
                alt="Instagram post 3"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/happier 1.png"
                alt="Instagram post 4"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
