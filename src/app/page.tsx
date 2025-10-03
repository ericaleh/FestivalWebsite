'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function About() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
        {/* Header video container */}
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          <video 
            ref={videoRef}
            id="hero-video"
            autoPlay 
            muted 
            playsInline
            className="h-[60vh] w-auto md:h-full md:w-full object-cover cursor-pointer"
            onClick={() => router.push('/about')}
          />
        </div>
      </div>

      {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-justify">
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451]">
              This is the Onset of something new.<br /><br />
              Join us for a weekend escape in the Berkshires at Camp Timber Trails on September 18–20, 2026. At Onset Festival, we're fostering connection and community through music, art, nature, and performance. Our festival is built from the ground up, with the creators being musicians and performers themselves. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451]">
              Spread across more than 400 acres of forest, the venue features a private lake with its own island, beach, and boathouse stocked with kayaks and canoes, a lakeside amphitheatre, beautiful foliage, and stunning views. Set up a tent, or book a cabin, and immerse yourself in a unique experience just a few hours from NYC and Boston.
            </p>

            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451]">
              Discover new musicians, catch aerial performances and fire dancers, eat s'mores and freshly-prepared meals, do yoga, meditate, and meet new friends. It's all here.<br /><br />
              Stay tuned for updates on the lineup and ticket sales.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
} 