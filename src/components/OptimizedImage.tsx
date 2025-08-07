'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string; // Original image path without extension
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}

/**
 * OptimizedImage component that automatically serves WebP with fallback
 * Usage: <OptimizedImage src="/images/optimized/image-name" alt="Description" />
 * Note: Don't include file extension in src
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  style
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Determine the original extension based on what exists
  const getImageSrc = () => {
    if (imageError) {
      // Fallback to PNG or JPG if WebP fails
      return `${src}.png`;
    }
    return `${src}.webp`;
  };

  return (
    <picture>
      {!imageError && (
        <source 
          srcSet={`${src}.webp`} 
          type="image/webp" 
        />
      )}
      <Image
        src={getImageSrc()}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
        style={style}
        onError={() => setImageError(true)}
      />
    </picture>
  );
}