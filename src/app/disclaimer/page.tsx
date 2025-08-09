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
            <h1 className="font-['Montserrat'] font-bold text-[28px] md:text-[32px] text-[#f7e7ce] text-center mb-6">
              Disclaimer
            </h1>
            <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-8">
              Last Updated: March 3, 2025
            </p>
            
            <div className="space-y-8 text-left">
              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Accuracy of Content
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  Spades Poker House is committed to maintaining the accuracy and completeness of the information provided 
                  on this website. However, we cannot guarantee that the content is free from errors or outdated information. If you 
                  come across any incorrect or outdated details, please notify us so that we can address the issue promptly. You 
                  can reach us at: info@spadespokerhouse.com
                </p>
              </div>

              <div>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  We are not liable for any loss resulting from inaccuracies or incomplete information on this website, nor for any 
                  loss arising from your use of information on this website for any purpose. We make every effort to maintain required 
                  laws within such jurisdiction but we accept no liability for any loss suffered as a result of using data, advice, or 
                  information provided on this website.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Intellectual Property Rights
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  All intellectual property rights to the materials and content on this website are owned by third parties who have 
                  provided the content, or from which Spades Poker House has obtained user licenses. Copying, distributing, or any 
                  other unauthorized use is prohibited without written permission from Spades Poker House, except as required 
                  by mandatory law or under specific exceptions allowed by the content itself.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Website Accessibility
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  If you encounter any accessibility issues while navigating our website, we encourage you to contact us immediately. 
                  We are dedicated to improving the accessibility of our site and will work to address any challenges promptly.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Contact Information
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  For any questions regarding this disclaimer or any content on our website, please contact us at:
                </p>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-2">
                  <strong>Email:</strong> info@spadespokerhouse.com
                </p>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  <strong>Phone:</strong> 281-724-1405
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