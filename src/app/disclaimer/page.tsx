import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Spades Poker House Webster & Baytown TX",
  description: "Disclaimer for Spades Poker House. Important legal information regarding our website and services at our Webster and Baytown poker locations.",
  keywords: "Spades Poker House disclaimer, Texas poker disclaimer, Webster Baytown poker legal information, website disclaimer",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/disclaimer",
  },
  other: {
    "geo.region": "US-TX",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <div className="px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '28.8px', lineHeight: '100%', letterSpacing: '0%' }}>
              Disclaimer
            </h1>
            <p className="text-center mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
              Last Updated: March 3, 2025
            </p>
            
            <div className="space-y-8 text-left">
              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Accuracy of Content
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  Spades Poker House is committed to maintaining the accuracy and completeness of the information provided 
                  on this website. However, we cannot guarantee that the content is free from errors or outdated information. If you 
                  come across any incorrect or outdated details, please notify us so that we can address the issue promptly. You 
                  can reach us at: info@spadespokerhouse.com
                </p>
              </div>

              <div>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  We are not liable for any loss resulting from inaccuracies or incomplete information on this website, nor for any 
                  loss arising from your use of information on this website for any purpose. We make every effort to maintain required 
                  laws within such jurisdiction but we accept no liability for any loss suffered as a result of using data, advice, or 
                  information provided on this website.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Intellectual Property Rights
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  All intellectual property rights to the materials and content on this website are owned by third parties who have 
                  provided the content, or from which Spades Poker House has obtained user licenses. Copying, distributing, or any 
                  other unauthorized use is prohibited without written permission from Spades Poker House, except as required 
                  by mandatory law or under specific exceptions allowed by the content itself.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Website Accessibility
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  If you encounter any accessibility issues while navigating our website, we encourage you to contact us immediately. 
                  We are dedicated to improving the accessibility of our site and will work to address any challenges promptly.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Contact Information
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  For any questions regarding this disclaimer or any content on our website, please contact us at:
                </p>
                <p className="mt-2" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  <strong>Phone:</strong> 281-724-1415
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}