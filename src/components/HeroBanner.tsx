import { CustomButton } from "@/components/ui/custom-button";
import type { CSSProperties } from "react";

interface HeroBannerProps {
  subtitle?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  backgroundImage: string;
  overlayOpacity?: number;
  /**
   * Optional class override for the subtitle heading element. Use this to
   * precisely control typography on a per-page basis without affecting other
   * pages that consume the shared HeroBanner component.
   */
  subtitleClassName?: string;
  /**
   * Optional inline style override for the subtitle. Useful for exact pixel
   * values such as 18px font size or 0 letter-spacing as specified by a design
   * system.
   */
  subtitleStyle?: CSSProperties;
  /** Class override for the main title heading */
  titleClassName?: string;
  /** Inline style override for the main title heading */
  titleStyle?: CSSProperties;
  /** Class override for the description paragraph */
  descriptionClassName?: string;
  /** Inline style override for the description paragraph */
  descriptionStyle?: CSSProperties;
}

export default function HeroBanner({
  subtitle,
  title,
  description,
  buttonText = "Play Now",
  buttonAction,
  backgroundImage,
  overlayOpacity = 0.5,
  subtitleClassName,
  subtitleStyle,
  titleClassName,
  titleStyle,
  descriptionClassName,
  descriptionStyle
}: HeroBannerProps) {
  return (
    <>
      {/* Hero Section - 700px on desktop, 500px on mobile */}
      <section 
        className="relative flex items-center justify-center h-[500px] lg:h-[700px]"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${backgroundImage}')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: `rgba(24, 21, 16, ${overlayOpacity})` }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          {subtitle && (
            <h1 
              className="font-semibold mb-4 text-sm md:text-base lg:text-lg" 
              style={{ 
                color: '#F7E7CE', 
                fontFamily: 'Poppins', 
                fontWeight: 600,
                letterSpacing: '0%'
              }}
            >
              {subtitle}
            </h1>
          )}
          <h2 
            className="font-bold mb-6 text-4xl md:text-5xl lg:text-6xl" 
            style={{ 
              color: '#F7E7CE', 
              fontFamily: 'Montserrat', 
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            {title}
          </h2>
          <p 
            className="mb-10 max-w-3xl mx-auto text-sm md:text-base lg:text-base" 
            style={{ 
              color: '#F7E7CE', 
              fontFamily: 'Poppins', 
              fontWeight: 400,
              lineHeight: '1.5',
              letterSpacing: '0%'
            }}
          >
            {description}
          </p>
          <CustomButton 
            size="lg" 
            className="bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE] transition-all duration-200"
            style={{ borderRadius: '11px', padding: '12px 40px' }}
            onClick={buttonAction}
          >
            {buttonText}
          </CustomButton>
        </div>
      </section>
    </>
  );
}