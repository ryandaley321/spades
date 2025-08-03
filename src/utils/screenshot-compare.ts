// Utility to help with visual comparisons
export const viewportSizes = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 }
} as const;

export const takeScreenshotAtSize = async (size: keyof typeof viewportSizes) => {
  const { width, height } = viewportSizes[size];
  console.log(`Taking screenshot at ${size}: ${width}x${height}`);
  // Playwright will handle this
};

export const measureElement = (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) return null;
  
  const rect = el.getBoundingClientRect();
  const styles = window.getComputedStyle(el);
  
  return {
    width: rect.width,
    height: rect.height,
    padding: styles.padding,
    margin: styles.margin,
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    color: styles.color,
    backgroundColor: styles.backgroundColor
  };
};