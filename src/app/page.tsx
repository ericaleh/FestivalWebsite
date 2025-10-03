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
            className="h-full w-full object-cover cursor-pointer"
            onClick={() => router.push('/about')}
          />
        </div>
      </div>



    </div>
  );
} 