'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function About() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 1178);
      setIsMediumScreen(width >= 750 && width < 1178);
    };
    
    const updateVideoSource = () => {
      if (videoRef.current) {
        const newSrc = '/onset-4.mp4';
        
        if (videoRef.current.src !== newSrc) {
          videoRef.current.src = newSrc;
          videoRef.current.load();
          videoRef.current.play();
        }
      }
    };
    
    checkScreenSize();
    updateVideoSource();
    
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('resize', updateVideoSource);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Video */}
      <div>
        {/* Header video container */}
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          {isMounted && isLargeScreen ? (
            <video 
              ref={videoRef}
              id="hero-video"
              autoPlay 
              muted 
              playsInline
              className="h-[60vh] w-auto md:h-full md:w-full object-cover cursor-pointer"
              onClick={() => router.push('/about')}
            />
          ) : isMounted && isMediumScreen ? (
            <Image
              src="/hero-mobile.png"
              alt="Onset Festival Hero"
              fill
              className="object-cover cursor-pointer"
              onClick={() => router.push('/about')}
            />
          ) : isMounted ? (
            <Image
              src="/onset-smallest.png"
              alt="Onset Festival Hero"
              fill
              className="object-cover cursor-pointer"
              onClick={() => router.push('/about')}
            />
          ) : (
            <div className="h-[60vh] w-auto md:h-full md:w-full bg-gray-200 animate-pulse" />
          )}
        </div>
      </div>

      {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-justify">
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              This is the Onset of something new.<br /><br />
              Join us for a weekend escape in the Berkshires at Camp Timber Trails on September 18–20, 2026.
            </p>
            
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              Spread across more than 400 acres of forest, the venue features a private lake with its own island, beach, boathouse stocked with kayaks and canoes, lakeside amphitheatre, cabins, beautiful foliage, and stunning views.
            </p>

            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              Discover new musicians, catch aerial performances and fire dancers, eat s&apos;mores and freshly-prepared meals, do yoga, meditate, and meet new friends. It&apos;s all here.<br /><br />
              Stay tuned for updates on the lineup and ticket sales.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
} 