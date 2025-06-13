import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/spades_champagne_logo.svg"
                alt="Spades Poker House Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium" style={{ color: '#F7E7CE' }}>Home</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium" style={{ color: '#F7E7CE' }}>Website</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium" style={{ color: '#F7E7CE' }}>Baytown</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium" style={{ color: '#F7E7CE' }}>About</a>
              <a href="#" className="hover:text-yellow-400 transition-colors font-medium" style={{ color: '#F7E7CE' }}>Contact</a>
            </nav>
            
            {/* Directions Button */}
            <CustomButton size="md">
              Directions
            </CustomButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image 1.png"
            alt="Poker chips and cards background"
            fill
            className="object-cover"
            priority
          />
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4 tracking-wide" style={{ color: '#F7E7CE' }}>
            WELCOME TO SPADES POKER HOUSE
          </h1>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F7E7CE' }}>
            Webster | Baytown
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F7E7CE' }}>
            Two Convenient Locations - Premier Poker Experience in Texas
          </p>
          <CustomButton size="lg">
            Play Now
          </CustomButton>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16 border-t border-b border-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F7E7CE' }}>
            Join the Elite. Experience Private-Membership Poker.
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#F7E7CE' }}>
            Experience the best poker games in Webster & Baytown, TX.
          </p>
          <CustomButton size="lg">
            Learn More
          </CustomButton>
        </div>
      </section>

      {/* Ultimate Poker Action Section */}
      <section className="bg-black pt-16 pb-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Trophy Icon */}
          <div className="w-48 h-48 mx-auto mb-8 flex items-center justify-center">
            <Image
              src="/trophy1.png"
              alt="Trophy icon"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-16" style={{ color: '#F7E7CE' }}>
            Ultimate Poker Action & Exceptional Cuisine
          </h2>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="bg-black pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cash Games */}
            <Card className="bg-black" style={{ borderColor: '#785F37' }}>
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/cash-game-image.png"
                    alt="Cash Games at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE' }}>Cash Games</h3>
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
                    src="/tournament-image.png"
                    alt="Poker Tournaments at Spades Poker House"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE' }}>Poker Tournaments</h3>
                <div className="space-y-3 text-sm" style={{ color: '#F7E7CE' }}>
                  <p>Join our thrilling poker tournaments with big prizes and intense action! Whether you&apos;re a beginner or a pro, there&apos;s a tournament for you.</p>
                  <ul className="space-y-1">
                    <li>• <strong>NLH (Pot-Limit Omaha)</strong> and <strong>NLH (No-Limit Hold&apos;em)</strong> tournaments</li>
                    <li>• Thrilling <strong>Freezeouts</strong> and <strong>Bounty Tournaments</strong></li>
                    <li>• Our signature &quot;Chill&quot; <strong>Tournaments</strong>, designed for a more laid-back atmosphere</li>
                    <li>• <strong>Large Prizepool Re-entry Deepstack Tournaments</strong> offering massive payouts</li>
                    <li>• <strong>Re-buy Tournaments</strong> with varying buy-ins for all bankrolls</li>
                    <li>• <strong>Ladies&apos; and Seniors&apos; Tournaments</strong> for a more inclusive experience</li>
                  </ul>
                  <p className="text-xs">These <strong>tournaments are held daily</strong> in both of our locations, offering players the opportunity to compete and win thrilling prizes. Join us for an unforgettable poker experience at Spades Poker House – <strong>where the action never stops!</strong></p>
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
                    src="/wrapimg.png"
                    alt="Gyro Hero Kitchen Food"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#F7E7CE' }}>Gyro Hero Kitchen</h3>
                <div className="space-y-3 text-sm" style={{ color: '#F7E7CE' }}>
                  <p>Introducing <strong>GYRO HERO</strong>, the exclusive restaurant at Spades Poker House Webster! We take pride in offering a diverse menu that caters to all taste buds. Indulge in our mouthwatering <strong>Gyros, flavorful Sandwiches, delectable Wraps, and satisfying Pastas</strong>, alongside a variety of other tempting options. Whether you&apos;re in the mood for a quick snack or a full meal, our skilled chefs will craft dishes that will delight your senses.</p>
                  <ul className="space-y-1">
                    <li>• <strong>Wraps</strong> with fresh ingredients</li>
                    <li>• <strong>Sandwiches</strong> made to order</li>
                    <li>• <strong>Burgers</strong> cooked to perfection</li>
                    <li>• <strong>Pizza & Bowls</strong> packed with flavor</li>
                    <li>• <strong>Salads</strong> for a light yet tasty meal</li>
                    <li>• <strong>Breakfast</strong> options to fuel your day</li>
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
                src="/happy1.png"
                alt="Instagram post 1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/mario2.png"
                alt="Instagram post 2"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/trio3.png"
                alt="Instagram post 3"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/happier4.png"
                alt="Instagram post 4"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#F7E7CE' }}>Spades Poker House Webster</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/locationicon 1.png"
                    alt="Location"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phoneicon 1.png"
                    alt="Phone"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlasicon 1.png"
                    alt="Poker Atlas"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/instagramicon 1.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook icon 1.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#F7E7CE' }}>Spades Poker House Baytown</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/locationicon 1.png"
                    alt="Location"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phoneicon 1.png"
                    alt="Phone"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlasicon 1.png"
                    alt="Poker Atlas"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook icon 1.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
            
            <div className="pt-8 text-center text-sm border-t border-gray-700 space-y-3" style={{ color: '#F7E7CE' }}>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Disclaimer</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
              </div>
              <p>© 2025 Spades Poker House. All rights reserved.</p>
              <p>Site Designed by G&R Technologies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
