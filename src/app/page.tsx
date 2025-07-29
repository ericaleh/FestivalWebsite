export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full-screen video hero */}
        <video
          autoPlay
          muted
          playsInline
          className="inset-0 w-full object-cover object-top"
        >
          {/*<source src="/cirra music notes flying.mp4" type="video/mp4" />*/}
          <source src="/growing_video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
                
              {/* Text content section */}
      <section className="py-16 px-4 bg-[#566E37]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="text-md md:text-lg leading-relaxed font-sans text-[#FFF8D9]">
                             Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-md md:text-lg leading-relaxed font-sans text-[#FFF8D9]">
              Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate, as well as given to charity organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
