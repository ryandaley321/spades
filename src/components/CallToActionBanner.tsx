import { CustomButton } from "@/components/ui/custom-button";

interface ButtonConfig {
  text: string;
  action?: () => void;
  style?: "gold" | "brown";
}

interface CallToActionBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  buttonStyle?: "gold" | "brown";
  buttons?: ButtonConfig[];
}

export default function CallToActionBanner({
  title,
  description,
  buttonText,
  buttonAction,
  buttonStyle = "brown",
  buttons
}: CallToActionBannerProps) {
  const buttonConfigs = buttons || (buttonText ? [{ text: buttonText, action: buttonAction, style: buttonStyle }] : []);
  
  return (
    <section 
      className="relative py-16" 
      style={{ 
        backgroundColor: '#181510', 
        borderTop: '1px solid #CBB682', 
        borderBottom: '1px solid #CBB682' 
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center">
        <h2 
          className="font-bold mb-4 text-2xl md:text-3xl" 
          style={{ 
            color: '#F7E7CE', 
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 28.8px)',
            lineHeight: '1.25',
            letterSpacing: '0%'
          }}
        >
          {title}
        </h2>
        <p 
          className="mb-8 max-w-3xl text-sm md:text-base" 
          style={{ 
            color: '#F7E7CE', 
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            lineHeight: '1.5',
            letterSpacing: '0%'
          }}
        >
          {description}
        </p>
        <div className="flex flex-col items-center gap-3">
          {buttonConfigs.map((button, index) => {
            const isGold = (button.style || buttonStyle) === "gold";
            return (
              <CustomButton 
                key={index}
                size="lg" 
                className={`
                  ${isGold 
                    ? 'bg-[#CBB682] text-[#181510] hover:bg-[#785F37] hover:text-[#F7E7CE]' 
                    : 'bg-[#785F37] text-[#F7E7CE] hover:bg-[#CBB682] hover:text-[#181510]'
                  }
                  transition-colors duration-200
                `}
                style={{ 
                  borderRadius: '11px', 
                  padding: '12px 40px', 
                  minWidth: '280px'
                }}
                onClick={button.action}
              >
                {button.text}
              </CustomButton>
            );
          })}
        </div>
      </div>
    </section>
  );
}