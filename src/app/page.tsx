'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoSource = () => {
      if (videoRef.current) {
        const isSmallScreen = window.innerWidth < 768;
        const newSrc = isSmallScreen ? '/vertical-video-3.mp4' : '/bounce-hero.mp4';
        
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
        {/* Thick line separator */}
        <div className="h-1/2 bg-[#245451]"></div>
        {/* Header video container */}
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <video 
            ref={videoRef}
            id="hero-video"
            autoPlay 
            muted 
            playsInline
            className="h-full w-full lg:w-auto lg:max-w-[1200px] object-contain"
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = videoRef.current.duration;
              }
            }}
          />
        </div>
      </div>
              {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#245451]">
              Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#245451]">
              Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate, as well as given to charity organizations.
            </p>
          </div>
        </div>

      {/* Border Image */}
      </section>


    </div>
  );
} 