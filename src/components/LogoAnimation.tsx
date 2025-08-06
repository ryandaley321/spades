'use client';

import React, { useState, useRef, useEffect } from 'react';

const LogoAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match the transition duration
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="max-w-full max-h-full"
      >
        <source src="/Stroke logo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LogoAnimation;