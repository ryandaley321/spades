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
  variant?: "default" | "contact";
}

export default function CallToActionBanner({
  title,
  description,
  buttonText,
  buttonAction,
  buttonStyle = "brown",
  buttons,
  variant = "default"
}: CallToActionBannerProps) {
  const buttonConfigs = buttons || (buttonText ? [{ text: buttonText, action: buttonAction, style: buttonStyle }] : []);
  const isContact = variant === "contact";
  
  return (
    <section 
      className="relative" 
      style={{ 
        backgroundColor: '#181510', 
        height: isContact ? '320px' : '250px', 
        borderTop: '1px solid #CBB682', 
        borderBottom: '1px solid #CBB682' 
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
        <h2 
          className="font-bold mb-4" 
          style={{ 
            color: '#F7E7CE', 
            fontFamily: 'Montserrat',
            fontSize: isContact ? '28.8px' : '24px'
          }}
        >
          {title}
        </h2>
        <p 
          className="mb-8 max-w-3xl" 
          style={{ 
            color: '#F7E7CE', 
            fontFamily: 'Poppins',
            fontSize: isContact ? '16px' : '18px',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>
        <div className="flex flex-col items-center gap-3">
          {buttonConfigs.map((button, index) => (
            <CustomButton 
              key={index}
              size="lg" 
              style={{ 
                backgroundColor: (button.style || buttonStyle) === "gold" ? '#CBB682' : '#785F37', 
                color: (button.style || buttonStyle) === "gold" ? '#181510' : '#F7E7CE', 
                borderRadius: '11px', 
                padding: '12px 40px', 
                fontSize: '16px',
                fontWeight: '600',
                minWidth: '280px'
              }}
              onClick={button.action}
            >
              {button.text}
            </CustomButton>
          ))}
        </div>
      </div>
    </section>
  );
}