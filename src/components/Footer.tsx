'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  const handleTogglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
    setShowTermsOfUse(false);
    setShowDisclaimer(false);
    setShowCookiePolicy(false);
  };

  const handleToggleTermsOfUse = () => {
    setShowTermsOfUse(!showTermsOfUse);
    setShowPrivacyPolicy(false);
    setShowDisclaimer(false);
    setShowCookiePolicy(false);
  };

  const handleToggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
    setShowPrivacyPolicy(false);
    setShowTermsOfUse(false);
    setShowCookiePolicy(false);
  };

  const handleToggleCookiePolicy = () => {
    setShowCookiePolicy(!showCookiePolicy);
    setShowPrivacyPolicy(false);
    setShowTermsOfUse(false);
    setShowDisclaimer(false);
  };

  return (
    <footer className="relative bg-[#181510] border-t border-[#cbb682]">
      <div className="px-4 py-8 md:py-10">
        <div className="max-w-2xl mx-auto">
          {/* Locations Container - Vertically Stacked */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            {/* Webster Location */}
            <div className="text-center">
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-2">
                Spades Poker House Webster
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div 
                  onClick={() => window.open('https://maps.app.goo.gl/YaWdtsakbGvQMHNT8', '_blank')} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </div>
                <a href="tel:2817241415" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.pokeratlas.com/poker-room/spades-poker-house-webster" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/instagram-icon.png"
                    alt="Instagram"
                    width={48}
                    height={51}
                    className="w-12 h-12 md:w-[48px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.facebook.com/Spadespokerhouse/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook-icon.png"
                    alt="Facebook"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
              </div>
            </div>

            {/* Baytown Location */}
            <div className="text-center">
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#f7e7ce] mb-2">
                Spades Poker House Baytown
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div 
                  onClick={() => window.open('https://maps.app.goo.gl/jHRek6VcBgtxrnMw9', '_blank')} 
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/icons/location-icon.png"
                    alt="Location"
                    width={51}
                    height={51}
                    className="w-12 h-12 md:w-[51px] md:h-[51px]"
                  />
                </div>
                <a href="tel:3469776537" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/phone-icon.png"
                    alt="Phone"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.pokeratlas.com/poker-room/spades-poker-house-baytown" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/pokeratlas-icon.png"
                    alt="Poker Atlas"
                    width={44}
                    height={51}
                    className="w-11 h-12 md:w-[44px] md:h-[51px]"
                  />
                </a>
                <a href="https://www.facebook.com/people/Spades-Baytown/100093212547274/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/facebook-icon.png"
                    alt="Facebook"
                    width={49}
                    height={51}
                    className="w-12 h-12 md:w-[49px] md:h-[51px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center mb-6">
            <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
              <button 
                onClick={handleTogglePrivacyPolicy}
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleToggleTermsOfUse}
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Terms of Use
              </button>
              <button 
                onClick={handleToggleDisclaimer}
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Disclaimer
              </button>
              <button 
                onClick={handleToggleCookiePolicy}
                className="hover:text-[#cbb682] transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </nav>
          </div>

          {/* Expandable Cookie Policy Section */}
          {showCookiePolicy && (
            <div className="mb-8 px-4 py-6 bg-[#181510] border-t border-[#cbb682]">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-['Montserrat'] font-bold text-[24px] text-[#f7e7ce] text-center mb-6">
                  Cookie Policy
                </h2>
                <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-4">
                  This Cookie Policy explains how Spades Poker House uses cookies on our website. By continuing to use 
                  our website, you agree to the use of cookies in accordance with this policy.
                </p>
                
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      What are Cookies?
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      Cookies are small text files that are stored on your device when you visit a website. They help improve your 
                      experience by remembering your preferences and providing us with data about how visitors use the site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      How We Use Cookies
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      We use cookies for various purposes, including:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
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
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      How to Control Cookies
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      You can control and manage cookies in your browser settings. Most browsers allow you to block or delete 
                      cookies, but doing so may affect your experience on our website. To learn more about how to manage cookies in your browser, 
                      {`please visit the "Help" section of your browser.`}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Third-Party Cookies
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      We may use third-party services (such as Google Analytics or advertising networks) that place cookies on your 
                      device. These third-party cookies are subject to the privacy policies of the respective service providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Consent to Use Cookies
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      By using our website, you consent to the use of cookies as outlined in this Cookie Policy. If you do not agree with 
                      the use of cookies, you can disable them via your browser or mentioned above, but this may affect your experience with 
                      our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Changes to This Cookie Policy
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      We may update this Cookie Policy from time to time. We will notify you of any changes by posting the updated 
                      policy on this page. Please check this page regularly for updates.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Contact Us
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      If you have any questions about this Cookie Policy or how we use cookies, please contact us:
                    </p>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-2">
                      <strong>Phone:</strong> 281-724-1405
                    </p>
                  </div>
                </div>

                {/* Social Media Icons - Two Rows */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  {/* First Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Links in Cookie Policy */}
                <div className="text-center mt-6">
                  <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
                    <button 
                      onClick={handleTogglePrivacyPolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Privacy Policy
                    </button>
                    <button 
                      onClick={handleToggleTermsOfUse}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Terms of Use
                    </button>
                    <button 
                      onClick={handleToggleDisclaimer}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Disclaimer
                    </button>
                    <button 
                      onClick={() => setShowCookiePolicy(false)}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Cookie Policy
                    </button>
                  </nav>
                </div>

                {/* Copyright in Cookie Policy */}
                <div className="text-center mt-6">
                  <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
                    <p>© 2025 Spades Poker House. All rights reserved.</p>
                    <p>Site Designed by G&R Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expandable Terms of Use Section */}
          {showTermsOfUse && (
            <div className="mb-8 px-4 py-6 bg-[#181510] border-t border-[#cbb682]">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-['Montserrat'] font-bold text-[24px] text-[#f7e7ce] text-center mb-6">
                  Terms of Use
                </h2>
                <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-4">
                  Last Updated: March 3, 2025
                </p>
                
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Acceptance of Terms
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      {`By accessing and using the Spades Poker House website, you agree to be bound by these Terms of Use ("Terms").`} 
                      If you do not agree to all of the terms and conditions contained herein, you are expressly prohibited from using 
                      the site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      User License
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      Permission is granted to temporarily download one copy of the materials (information or software) on the 
                      Spades Poker House website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                      <li>Attempt to decompile or reverse engineer any software contained on the Spades Poker House website</li>
                      <li>Remove any copyright or other proprietary notations from the materials on any online server</li>
                    </ul>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-3">
                      This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                      Spades Poker House at any time. Upon terminating your viewing of these materials or upon the termination of this 
                      license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Disclaimer
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      {`The materials on the Spades Poker House website are provided on an 'as is' basis. Spades Poker House makes no`} 
                      warranties, expressed or implied, and hereby disclaims and negates all other warranties including without 
                      limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-
                      infringement of intellectual property or other violation of rights.
                    </p>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-3">
                      Further, Spades Poker House does not warrant or make any representations concerning the accuracy, likely results, 
                      or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites 
                      linked to this site. Spades Poker House at any time make changes to the materials contained on its website at any 
                      time without notice. However Spades Poker House does not make any commitment to update the materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Accuracy of Materials
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      The materials appearing on the Spades Poker House website could include technical, typographical, or 
                      photographic errors. Spades Poker House does not warrant that any of the materials on its website are accurate, 
                      complete, or current. Spades Poker House may make changes to the materials contained on its website at any 
                      time without notice. However Spades Poker House does not make any commitment to update the materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Links
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      Spades Poker House has not reviewed all of the sites linked to our website and is not responsible for the contents 
                      of any such linked site. The inclusion of any link does not imply endorsement by Spades Poker House of the site. 
                      {`Use of any such linked website is at the user's own risk.`}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Modifications
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      Spades Poker House may revise these Terms of Use for its website at any time without notice. By using this 
                      website, you are agreeing to be bound by the then-current version of these Terms of Use.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Governing Law
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      These terms and conditions are governed by and construed in accordance with the laws of Texas, and you 
                      irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Contact Us
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      If you have any questions about these Terms of Use or wish to exercise your rights regarding your data, please 
                      contact us:
                    </p>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-2">
                      <strong>Phone:</strong> 281-724-1405
                    </p>
                  </div>
                </div>

                {/* Social Media Icons - Two Rows */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  {/* First Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Links in Terms of Use */}
                <div className="text-center mt-6">
                  <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
                    <button 
                      onClick={handleTogglePrivacyPolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Privacy Policy
                    </button>
                    <button 
                      onClick={() => setShowTermsOfUse(false)}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Terms of Use
                    </button>
                    <button 
                      onClick={handleToggleDisclaimer}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Disclaimer
                    </button>
                    <button 
                      onClick={handleToggleCookiePolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Cookie Policy
                    </button>
                  </nav>
                </div>

                {/* Copyright in Terms of Use */}
                <div className="text-center mt-6">
                  <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
                    <p>© 2025 Spades Poker House. All rights reserved.</p>
                    <p>Site Designed by G&R Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expandable Privacy Policy Section */}
          {showPrivacyPolicy && (
            <div className="mb-8 px-4 py-6 bg-[#181510] border-t border-[#cbb682]">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-['Montserrat'] font-bold text-[24px] text-[#f7e7ce] text-center mb-6">
                  Privacy Policy
                </h2>
                <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-4">
                  This privacy statement was last updated on March 7th 2025, and applies to all site visitors.
                </p>
                
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Disclaimer
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      We are not liable for any loss resulting from inaccuracies or incomprehensive information on this site. Instead of changes to our disclaimer policy. We recommend reviewing the information on this site regularly. Furthermore, to understand details of the disclaimer policy, we recommend reading the terms of use. The data is used for the best intentions of the website and the data is protected by the privacy policy. The data is protected by the privacy policy and the privacy policy is protected by Spades Poker House accepts no liability.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Introduction
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      Welcome to Spades Poker House. We respect your privacy and are committed to protecting your personal information. This privacy policy details how we collect, use, and protect information when you use our website and services. If you visit other websites, please see the privacy policy of each website for more detailed information.</p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Data We Collect
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      When you make reservations when you visit our website or use our services, the data we may collect includes:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li><strong>Personal Data:</strong> Full name, email address, and phone number.</li>
                      <li><strong>Usage Data:</strong> Information about how you interact with our website, including google visits and areas accessed.</li>
                      <li><strong>Location Information:</strong> Information about the locations you visit to our physical locations.</li>
                      <li><strong>Communication Records:</strong> Records of your correspondence with us.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      How We Use Your Data
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      We use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li><strong>To provide and improve services:</strong> we use your information to process and enhance your experience.</li>
                      <li><strong>Communication:</strong> We may use your contact information to send you information, promotional offers or surveys, unless our policies.</li>
                      <li><strong>Legal compliance:</strong> We may use your information to comply with legal obligations or respond to legal requests.</li>
                      <li><strong>Analytics:</strong> We may process user insights and service with your visit to our website with applicable laws or response to legal requests.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      How We Use Your Data
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      Protecting your personal information is important to us. We implement various security measures including on the website. Cookie flags or remember that your preferences and provide you with personalized content.
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li><strong>Encryption:</strong> We encrypt data to prevent unauthorized access to websites, data or to any of our services.</li>
                      <li><strong>Analytics Cookies:</strong> These help us improve website usage and improve our services.</li>
                      <li><strong>Marketing Cookies:</strong> These deliver or deliver targeted ads to your browser by users to provide or social media.</li>
                      <li><strong>Session Cookies:</strong> These help in our functionality, like keeping you logged in to your browser automatically.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Data Sharing and Disclosure
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      We may share your data with third parties under the following circumstances:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our services.</li>
                      <li><strong>Legal Requirements:</strong> We may disclose your data if required by law or to protect our rights. However, in other circumstances.</li>
                      <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your data may be transferred to new owners.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Data Security
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      We implement appropriate security measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security of your data.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Your Rights
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mb-3">
                      As a user, you have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      <li><strong>Access:</strong> You can request access to the personal data we have about you.</li>
                      <li><strong>Correction:</strong> You can request corrections to any inaccurate data we have about you.</li>
                      <li><strong>Deletion:</strong> You can request deletion of your personal data, subject to certain exceptions.</li>
                      <li><strong>Opt-Out:</strong> You can opt out of receiving marketing emails by following the unsubscribe instructions in the emails.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Changes to This Privacy Policy
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy on this page. We encourage you to review this privacy policy periodically to stay informed about how we protect your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Contact Us
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      If you have any questions or concerns about this privacy policy, or if you want to exercise your rights regarding your personal data, please contact us at:
                    </p>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed mt-2">
                      <strong>Email:</strong> info@spadespokerhouse.com
                    </p>
                  </div>
                </div>

                {/* Social Media Icons - Two Rows */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  {/* First Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Links in Privacy Policy */}
                <div className="text-center mt-6">
                  <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
                    <button 
                      onClick={() => setShowPrivacyPolicy(false)}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Privacy Policy
                    </button>
                    <button 
                      onClick={handleToggleTermsOfUse}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Terms of Use
                    </button>
                    <button 
                      onClick={handleToggleDisclaimer}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Disclaimer
                    </button>
                    <button 
                      onClick={handleToggleCookiePolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Cookie Policy
                    </button>
                  </nav>
                </div>

                {/* Copyright in Privacy Policy */}
                <div className="text-center mt-6">
                  <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
                    <p>© 2025 Spades Poker House. All rights reserved.</p>
                    <p>Site Designed by G&R Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expandable Disclaimer Section */}
          {showDisclaimer && (
            <div className="mb-8 px-4 py-6 bg-[#181510] border-t border-[#cbb682]">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-['Montserrat'] font-bold text-[24px] text-[#f7e7ce] text-center mb-6">
                  Disclaimer
                </h2>
                <p className="font-['Poppins'] text-[12px] text-[#f7e7ce] text-center mb-4">
                  Last Updated: March 3, 2025
                </p>
                
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Accuracy of Content
                    </h3>
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
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Intellectual Property Rights
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      All intellectual property rights to the materials and content on this website are owned by third parties who have 
                      provided the content, or from which Spades Poker House has obtained user licenses. Copying, distributing, or any 
                      other unauthorized use is prohibited without written permission from Spades Poker House, except as required 
                      by mandatory law or under specific exceptions allowed by the content itself.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#f7e7ce] mb-2">
                      Website Accessibility
                    </h3>
                    <p className="font-['Poppins'] text-[14px] text-[#f7e7ce] leading-relaxed">
                      If you encounter any accessibility issues while navigating our website, we encourage you to contact us immediately. 
                      We are dedicated to improving the accessibility of our site and will work to address any challenges promptly.
                    </p>
                  </div>
                </div>

                {/* Social Media Icons - Two Rows */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  {/* First Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/location-icon.png"
                        alt="Location"
                        width={51}
                        height={51}
                        className="w-12 h-12 md:w-[51px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/phone-icon.png"
                        alt="Phone"
                        width={49}
                        height={51}
                        className="w-12 h-12 md:w-[49px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/pokeratlas-icon.png"
                        alt="Poker Atlas"
                        width={44}
                        height={51}
                        className="w-11 h-12 md:w-[44px] md:h-[51px]"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram"
                        width={48}
                        height={51}
                        className="w-12 h-12 md:w-[48px] md:h-[51px]"
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Links in Disclaimer */}
                <div className="text-center mt-6">
                  <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 font-['Poppins'] text-[16px] text-[#f7e7ce]">
                    <button 
                      onClick={handleTogglePrivacyPolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Privacy Policy
                    </button>
                    <button 
                      onClick={handleToggleTermsOfUse}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Terms of Use
                    </button>
                    <button 
                      onClick={() => setShowDisclaimer(false)}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Disclaimer
                    </button>
                    <button 
                      onClick={handleToggleCookiePolicy}
                      className="hover:text-[#cbb682] transition-colors duration-200"
                    >
                      Cookie Policy
                    </button>
                  </nav>
                </div>

                {/* Copyright in Disclaimer */}
                <div className="text-center mt-6">
                  <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
                    <p>© 2025 Spades Poker House. All rights reserved.</p>
                    <p>Site Designed by G&R Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Logo and Copyright */}
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/optimized/spades champagne 1.webp"
                alt="Spades Poker House"
                width={55}
                height={55}
                className="w-12 h-12 md:w-[55px] md:h-[55px] cursor-pointer"
              />
            </Link>
            <div className="font-['Poppins'] text-[#f7e7ce] text-[16px] leading-tight space-y-1">
              <p>© 2025 Spades Poker House. All rights reserved.</p>
              <p>Site Designed by G&R Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}