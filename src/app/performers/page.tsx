export default function Artists() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <img src="/performers-2.png" alt="About Flights & Sounds" className="relative w-full h-auto object-contain object-top bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 px-4 bg-[#ECDFB8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[20px] text-[#245451] font-gabarito max-w-4xl mx-auto leading-relaxed">
              Our festival brings together an eclectic mix of talented musicians from various genres and backgrounds, as well as talented aerial and fire performers. Each artist has been carefully selected to create a unique and engaging experience for our attendees.
            </p>
          </div>
          
          {/* Performer Pictures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              <img 
                src="/erica-pic.png" 
                alt="Erica performing" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/fire-1.jpg" 
                alt="Fire performance" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/fiona-1.png" 
                alt="Fiona performing" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/sammie.jpg" 
                alt="Sammie performing" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/fire-4.JPG" 
                alt="Fire performance" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src="/raff-pic.png" 
                alt="Raff performing" 
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[20px] text-[#245451] font-gabarito">
              The full list of artists and performers will be announced in 2026. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Border Image */}
      <section className="w-full">
        <img src="/border.png" alt="Border decoration" className="w-full h-auto max-h-[100vh]" />
      </section>
    </div>
  );
} 