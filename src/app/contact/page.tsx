import Image from "next/image";
import Footer from '@/components/Footer';
import { CustomButton } from "@/components/ui/custom-button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center text-center" style={{ backgroundColor: '#181510', backgroundImage: "url('/images/spades-poker-house-logo-wooden-wall-luxury-design-webster-texas.jpg')", backgroundSize: '100% auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '80vh' }}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 21, 16, 0.7)' }}></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <p className="text-sm mb-2" style={{ color: '#F7E7CE', fontFamily: 'Poppins' }}>
              Elite-Level Poker Events and Games Near Houston, TX
            </p>
            <h1 className="text-5xl font-bold mb-2" style={{ color: '#F7E7CE', fontFamily: 'Montserrat' }}>
              Webster | Baytown
            </h1>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.6' }}>
              Whether you're ready to play or need more info, our team is here to help you join the action in Webster or Baytown.
            </p>
            
            <div className="flex justify-center mb-16">
              <CustomButton style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
                Find Your Nearest Club
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Find Us Section */}
        <section className="relative py-16" style={{ backgroundColor: '#181510', borderBottom: '1px solid #CBB682' }}>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="font-bold mb-2" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontSize: '28.8px', whiteSpace: 'nowrap', marginBottom: '5px' }}>
              Find Us, Call Us, Join the Game
            </h2>
            <p className="mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '1.6', whiteSpace: 'nowrap' }}>
              Join a community of serious players and enjoy nonstop poker action, premium service, and unforgettable nights.
            </p>
            <div className="flex flex-col items-center gap-4">
              <CustomButton style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '12px 40px', fontSize: '16px', fontWeight: '600' }}>
                Webster Games & Promotions
              </CustomButton>
              <CustomButton style={{ backgroundColor: '#785F37', color: '#F7E7CE', borderRadius: '11px', padding: '12px 40px', fontSize: '16px', fontWeight: '600' }}>
                Baytown Games & Promotions
              </CustomButton>
            </div>
          </div>
        </section>

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
                <div className="mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.123!2d-95.123!3d29.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI3JzIxLjYiTiA5NcKwMDcnMjIuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="200"
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
                <div className="mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.789!2d-94.977!3d29.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0123!2s6952+Garth+Rd%2C+Baytown%2C+TX+77521!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="200"
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
                <CustomButton style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
                  Work with us
                </CustomButton>
              </a>
              <a href="https://form.jotform.com/231715489717163?fbclid=IwAR1hhbvptHNP4xuS3iO80GZXTW-Qjhti9gEYxS5nx0zAkYhBQxAmqExY0Ck" target="_blank" rel="noopener noreferrer">
                <CustomButton style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 30px', fontSize: '16px', fontWeight: '600' }}>
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