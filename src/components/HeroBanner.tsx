import { CustomButton } from "@/components/ui/custom-button";

interface HeroBannerProps {
  subtitle?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  backgroundImage: string;
  overlayOpacity?: number;
}

export default function HeroBanner({
  subtitle,
  title,
  description,
  buttonText = "Play Now",
  buttonAction,
  backgroundImage,
  overlayOpacity = 0.5
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
              className="font-semibold mb-4 tracking-wide text-sm md:text-base lg:text-lg" 
              style={{ color: '#F7E7CE', fontFamily: 'Poppins', letterSpacing: '0.1em' }}
            >
              {subtitle}
            </h1>
          )}
          <h2 
            className="font-bold mb-6 text-3xl md:text-4xl lg:text-5xl" 
            style={{ color: '#F7E7CE', fontFamily: 'Montserrat', lineHeight: '1.2' }}
          >
            {title}
          </h2>
          <p 
            className="mb-10 max-w-3xl mx-auto text-base md:text-lg" 
            style={{ color: '#F7E7CE', fontFamily: 'Poppins', lineHeight: '1.6' }}
          >
            {description}
          </p>
          <CustomButton 
            size="lg" 
            className="text-sm md:text-base"
            style={{ backgroundColor: '#CBB682', color: '#181510', borderRadius: '11px', padding: '12px 40px', fontWeight: '600' }}
            onClick={buttonAction}
          >
            {buttonText}
          </CustomButton>
        </div>
      </section>
    </>
  );
}