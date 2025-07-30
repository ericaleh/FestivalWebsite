export default function Artists() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        {/* Header image */}
        <img src="/performers.png" alt="About Flights & Sounds" className="absolute inset-0 w-full h-full object-cover bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 px-4 bg-[#ECDFB8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-[20px] text-[#245451] font-dwpica max-w-2xl mx-auto">
              Our festival brings together an eclectic mix of talented performers, focused on aerial acrobatics and fire performance.
            </p>
          </div>
          <div className="text-center mt-2">
            <p className="text-[20px] text-[#245451] font-dwpica"><br></br>
              Artists will be announced in 2026. Stay tuned for updates!
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