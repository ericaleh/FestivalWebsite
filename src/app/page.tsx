'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function About() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const verticalImageRef = useRef<HTMLImageElement>(null);
  const horizontalImageRef = useRef<HTMLImageElement>(null);
  const [showVerticalImage, setShowVerticalImage] = useState(false);
  const [showHorizontalImage, setShowHorizontalImage] = useState(false);

  useEffect(() => {
    const updateVideoSource = () => {
      if (videoRef.current) {
        const isSmallScreen = window.innerWidth < 768;
        const newSrc = isSmallScreen ? '/vertical-video-3.mp4' : '/bounce-hero.mp4';
        
        if (videoRef.current.src !== newSrc) {
          videoRef.current.src = newSrc;
          videoRef.current.load();
          videoRef.current.play();
          setShowVerticalImage(false);
          setShowHorizontalImage(false);
        }
      }
    };

    // Set initial video source
    updateVideoSource();

    // Update video source on window resize
    window.addEventListener('resize', updateVideoSource);

    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Video */}
      <div>
        {/* Thick line separator */}
        <div className="h-1/2 bg-[#245451]"></div>
        {/* Header video container */}
        <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
          <video 
            ref={videoRef}
            id="hero-video"
            autoPlay 
            muted 
            playsInline
            className={`h-full w-full lg:w-auto lg:max-w-[1200px] object-contain transition-opacity duration-300 cursor-pointer ${showVerticalImage || showHorizontalImage ? 'opacity-0' : 'opacity-100'}`}
            onEnded={() => {
              const isSmallScreen = window.innerWidth < 768;
              if (isSmallScreen) {
                setShowVerticalImage(true);
              } else {
                setShowHorizontalImage(true);
              }
            }}
            onClick={() => {
              if (showVerticalImage || showHorizontalImage) {
                router.push('/about');
              }
            }}
          />
          {/* Vertical end image for mobile */}
          <Image
            ref={verticalImageRef}
            src="/vertical-image.png"
            alt="Flights & Sounds"
            fill
            className={`object-contain transition-opacity duration-300 cursor-pointer ${showVerticalImage ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => router.push('/about')}
          />
          {/* Horizontal end image for desktop */}
          <Image
            ref={horizontalImageRef}
            src="/horizontal-end-of-video.png"
            alt="Flights & Sounds"
            fill
            className={`object-contain transition-opacity duration-300 cursor-pointer ${showHorizontalImage ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => router.push('/about')}
          />
        </div>
      </div>



    </div>
  );
} 