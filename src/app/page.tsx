import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
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
              <a href="/baytown" className="transition-colors" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>Baytown</a>
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
      <section className="relative flex items-center justify-center" style={{ height: '1080px', marginTop: '87px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.png')`,
            backgroundColor: 'rgba(24, 21, 16, 0.7)'
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4" style={{ marginTop: '-200px' }}>
          <h1 className="font-semibold mb-4 tracking-wide" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px' }}>
            WELCOME TO SPADES POKER HOUSE
          </h1>
          <h2 className="font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px' }}>
            Webster | Baytown
          </h2>
          <p className="mb-10 max-w-2xl mx-auto" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px' }}>
            Two Convenient Locations - Premier Poker Experience in Texas
          </p>
          <CustomButton size="lg" style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
            Play Now
          </CustomButton>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative" style={{ backgroundColor: '#181510', height: '250px', borderTop: '1px solid #CBB682', borderBottom: '1px solid #CBB682' }}>
        <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F7E7CE' }}>
            Join the Elite. Experience Private-Membership Poker.
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#F7E7CE' }}>
            Experience the best poker games in Webster & Baytown, TX.
          </p>
          <CustomButton size="lg" style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '8px 30px', fontSize: '16px' }}>
            Learn More
          </CustomButton>
        </div>
      </section>

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
                  <CustomButton size="sm" className="w-full text-sm" style={{ color: '#181510' }}>
                    Games today- Webster
                  </CustomButton>
                  <CustomButton size="sm" className="w-full text-sm" style={{ color: '#181510' }}>
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
                  <CustomButton size="sm" className="w-full text-sm" style={{ color: '#181510' }}>
                    Webster Schedule
                  </CustomButton>
                  <CustomButton size="sm" className="w-full text-sm mt-2" style={{ color: '#181510' }}>
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
                  <CustomButton size="sm" className="w-full text-sm" style={{ color: '#181510' }}>
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
