import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Spades Poker House Webster & Baytown TX",
  description: "Cookie Policy for Spades Poker House. Learn how we use cookies on our website for our Webster and Baytown poker locations.",
  keywords: "Spades Poker House cookie policy, Texas poker cookies, Webster Baytown poker website cookies, cookie information",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/cookie-policy",
  },
  other: {
    "geo.region": "US-TX",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <div className="px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-['Montserrat'] font-bold text-[28px] md:text-[32px] text-[#f7e7ce] text-center mb-6">
              Cookie Policy
            </h1>
            <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-8">
              This Cookie Policy explains how Spades Poker House uses cookies on our website. By continuing to use 
              our website, you agree to the use of cookies in accordance with this policy.
            </p>
            
            <div className="space-y-8 text-left">
              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  What are Cookies?
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They help improve your 
                  experience by remembering your preferences and providing us with data about how visitors use the site.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  How We Use Cookies
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-4">
                  We use cookies for various purposes, including:
                </p>
                <ul className="list-disc ml-6 space-y-2 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website and cannot be 
                  switched off in our systems. They enable basic functions such as page navigation and access to secure areas of the 
                  website.</li>
                  <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website, allowing us to 
                  improve its functionality and user experience. They collect information about which pages are visited most 
                  often.</li>
                  <li><strong>Analytics Cookies:</strong> These cookies allow us to remember your preferences and personalize your experience 
                  on our website, such as saving your language choice or location.</li>
                  <li><strong>Targeting/Advertising Cookies:</strong> These cookies track your browsing habits and help us show you relevant 
                  advertisements. They also limit the number of times you see an advertisement and measure the effectiveness of advertising 
                  campaigns.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  How to Control Cookies
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  You can control and manage cookies in your browser settings. Most browsers allow you to block or delete 
                  cookies, but doing so may affect your experience on our website. To learn more about how to manage cookies in your browser, 
                  please visit the "Help" section of your browser.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Third-Party Cookies
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  We may use third-party services (such as Google Analytics or advertising networks) that place cookies on your 
                  device. These third-party cookies are subject to the privacy policies of the respective service providers.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Consent to Use Cookies
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  By using our website, you consent to the use of cookies as outlined in this Cookie Policy. If you do not agree with 
                  the use of cookies, you can disable them via your browser or mentioned above, but this may affect your experience with 
                  our website.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Changes to This Cookie Policy
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the updated 
                  policy on this page. Please check this page regularly for updates.
                </p>
              </div>

              <div>
                <h2 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-3">
                  Contact Us
                </h2>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  If you have any questions about this Cookie Policy or how we use cookies, please contact us:
                </p>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-2">
                  <strong>Phone:</strong> 281-724-1405
                </p>
                <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                  <strong>Email:</strong> info@spadespokerhouse.com
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