"use client";

import { X } from "lucide-react";

export default function WebsterMenu() {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Close button - sticky at top */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#CBB682]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-[#F7E7CE] font-semibold text-lg md:text-xl" style={{ fontFamily: 'Montserrat' }}>
            Walzz Kookin Menu
          </h1>
          <button
            onClick={handleClose}
            className="bg-[#CBB682] hover:bg-[#785F37] text-[#181510] hover:text-[#F7E7CE] px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm md:text-base"
            aria-label="Close menu"
          >
            <X size={20} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>
      
      {/* Menu PDF */}
      <div className="flex items-center justify-center p-4 md:p-8">
        <div className="max-w-6xl w-full h-screen">
          <iframe
            src="/images/3pt WK MENU .pdf"
            title="Walzz Kookin Menu"
            className="w-full h-full border-0"
            style={{ minHeight: '80vh' }}
          />
        </div>
      </div>
    </div>
  );
}