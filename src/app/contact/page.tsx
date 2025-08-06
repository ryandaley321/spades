import Image from "next/image";
import Footer from '@/components/Footer';
import { CustomButton } from "@/components/ui/custom-button";
import HeroBanner from "@/components/HeroBanner";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <HeroBanner
          subtitle="Elite-Level Poker Events and Games Near Houston, TX"
          title="Webster | Baytown"
          description="Whether you're ready to play or need more info, our team is here to help you join the action in Webster or Baytown."
          buttonText="Find Your Nearest Club"
          backgroundImage="/images/spades-poker-house-logo-wooden-wall-luxury-design-webster-texas.jpg"
          overlayOpacity={0.7}
        />

        <CallToActionBanner
          title="Find Us, Call Us, Join the Game"
          description="Join a community of serious players and enjoy nonstop poker action, premium service, and unforgettable nights."
          buttons={[
            { text: "Webster Games & Promotions", style: "brown" },
            { text: "Baytown Games & Promotions", style: "brown" }
          ]}
          variant="contact"
        />

        {/* Location Cards Section */}
        <section className="py-16 relative" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/poker-chips-on-table-spades-poker-house-high-stakes-action-webster.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.8)' }}></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Spades Poker House Webster */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                  Spades Poker House Webster
                </h3>
                <div className="flex justify-center items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/facebook-icon.png" alt="Facebook" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/instagram-icon.png" alt="Instagram" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/phone-icon.png" alt="Phone" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/pokeratlas-icon.png" alt="Poker Atlas" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/location-icon.png" alt="Location" width={16} height={16} />
                    </div>
                  </div>
                </div>
                
                {/* Google Map Embed */}
                <div className="mb-4 overflow-hidden aspect-[4/3] max-w-sm mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.692971198143!2d-95.1287523!3d29.525307299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409deb3aaf1249%3A0x955d6348ef3f4ca7!2sSpades!5e0!3m2!1sen!2sus!4v1754450053329!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Spades Poker House Baytown */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
                  Spades Poker House Baytown
                </h3>
                <div className="flex justify-center items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/facebook-icon.png" alt="Facebook" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/instagram-icon.png" alt="Instagram" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/phone-icon.png" alt="Phone" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/pokeratlas-icon.png" alt="Poker Atlas" width={16} height={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CBB682] flex items-center justify-center">
                      <Image src="/icons/location-icon.png" alt="Location" width={16} height={16} />
                    </div>
                  </div>
                </div>
                
                {/* Google Map Embed */}
                <div className="mb-4 overflow-hidden aspect-[4/3] max-w-sm mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.1224172158722!2d-94.98263328860075!3d29.80300752986501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f59ac4a147689%3A0xa129598a21b5cb10!2sSpades%20Poker%20House%20Baytown!5e0!3m2!1sen!2sus!4v1754450126202!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <a href="https://form.jotform.com/231936301480148" target="_blank" rel="noopener noreferrer">
                <CustomButton className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
                  Work with us
                </CustomButton>
              </a>
              <a href="https://form.jotform.com/231715489717163?fbclid=IwAR1hhbvptHNP4xuS3iO80GZXTW-Qjhti9gEYxS5nx0zAkYhBQxAmqExY0Ck" target="_blank" rel="noopener noreferrer">
                <CustomButton className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200" style={{ borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
                  Become a member
                </CustomButton>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}