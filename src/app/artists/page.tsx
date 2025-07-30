export default function Artists() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <img src="/artists.png" alt="About Flights & Sounds" className="relative w-full h-auto object-contain object-top bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 px-4 bg-[#ECDFB8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">

            <p className="text-[20px] text-[#245451] font-dwpica max-w-2xl mx-auto">
              Our festival brings together an eclectic mix of talented artists from various genres and backgrounds. 
              Each artist has been carefully selected to create a unique and engaging experience for our attendees.
            </p>
          </div>

          <div className="text-center mt-2"><br></br>
            <p className="text-[20px] text-[#245451] font-dwpica">
              Artists will be announced in 2026. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Border Image */}
      <section className="w-full">
        <img src="/border2.png" alt="Border decoration" className="w-full h-auto max-h-[100vh]" />
      </section>
    </div>
  );
} 