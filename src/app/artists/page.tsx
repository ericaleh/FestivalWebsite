export default function Artists() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        {/* Header image */}
        <img src="/artists.png" alt="Artists at Flights & Sounds" className="absolute inset-0 w-full h-full object-cover" />
        {/* Overlay with text */}
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#FFF8D9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-[#432C2C] mb-4">Featured Artists</h2>
            <p className="text-lg text-[#566E37] font-sans max-w-2xl mx-auto">
              Our festival brings together an eclectic mix of talented artists from various genres and backgrounds. 
              Each artist has been carefully selected to create a diverse and engaging experience for our attendees.
            </p>
          </div>

          {/* Artist Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artist Card Placeholders */}
            {[1, 2, 3, 4, 5, 6].map((artist) => (
              <div key={artist} className="bg-[#D9C178] rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-[#93AD67] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#432C2C] font-sans">Artist {artist}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#432C2C] mb-2">Artist Name</h3>
                <p className="text-[#566E37] font-sans">Genre • Location</p>
                <p className="text-sm text-[#934D2F] font-sans mt-2">
                  Brief description of the artist and their style.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[#566E37] font-sans">
              More artists will be announced soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 