import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Spades Poker House Webster & Baytown TX",
  description: "Terms of Use for Spades Poker House. Review our website terms and conditions for our Webster and Baytown poker locations.",
  keywords: "Spades Poker House terms of use, Texas poker terms, Webster Baytown poker conditions, website terms",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/terms-of-use",
  },
  other: {
    "geo.region": "US-TX",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <main>
        <div className="px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center mb-6" style={{ color: '#F7E7CE', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '28.8px', lineHeight: '100%', letterSpacing: '0%' }}>
              Terms of Use
            </h1>
            <p className="text-center mb-8" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
              Last Updated: March 3, 2025
            </p>
            
            <div className="space-y-8 text-left">
              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Acceptance of Terms
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  By accessing and using the Spades Poker House website, you agree to be bound by these Terms of Use ({"\"Terms\""}). 
                  If you do not agree to all of the terms and conditions contained herein, you are expressly prohibited from using 
                  the site.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  User License
                </h2>
                <p className="mb-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  Permission is granted to temporarily download one copy of the materials (information or software) on the 
                  Spades Poker House website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc ml-6 space-y-2" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the Spades Poker House website</li>
                  <li>Remove any copyright or other proprietary notations from the materials on any online server</li>
                </ul>
                <p className="mt-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                  Spades Poker House at any time. Upon terminating your viewing of these materials or upon the termination of this 
                  license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Disclaimer
                </h2>
                <p className="mb-4" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  The materials on the Spades Poker House website are provided on an {"'as is'"} basis. Spades Poker House makes no 
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including without 
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-
                  infringement of intellectual property or other violation of rights.
                </p>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  Further, Spades Poker House does not warrant or make any representations concerning the accuracy, likely results, 
                  or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites 
                  linked to this site. Spades Poker House at any time make changes to the materials contained on its website at any 
                  time without notice. However Spades Poker House does not make any commitment to update the materials.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Accuracy of Materials
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  The materials appearing on the Spades Poker House website could include technical, typographical, or 
                  photographic errors. Spades Poker House does not warrant that any of the materials on its website are accurate, 
                  complete, or current. Spades Poker House may make changes to the materials contained on its website at any 
                  time without notice. However Spades Poker House does not make any commitment to update the materials.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Links
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  Spades Poker House has not reviewed all of the sites linked to our website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by Spades Poker House of the site. 
                  Use of any such linked website is at the {"user's"} own risk.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Modifications
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  Spades Poker House may revise these Terms of Use for its website at any time without notice. By using this 
                  website, you are agreeing to be bound by the then-current version of these Terms of Use.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Governing Law
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  These terms and conditions are governed by and construed in accordance with the laws of Texas, and you 
                  irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </div>

              <div>
                <h2 className="mb-3" style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Contact Us
                </h2>
                <p style={{ color: '#F7E7CE', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '25px', letterSpacing: '0%' }}>
                  If you have any questions about these Terms of Use or wish to exercise your rights regarding your data, please 
                  contact us:
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