export default function Performers() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        {/* Header image */}
        <img src="/performers.png" alt="Performers at Flights & Sounds" className="absolute inset-0 w-full h-full object-cover bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#FFF8D9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-[#432C2C] mb-4">Featured Performers</h2>
            <p className="text-lg text-[#566E37] font-sans max-w-2xl mx-auto">
              From dance troupes to theatrical performances, our festival showcases a wide variety of 
              talented performers who bring their unique artistry to life on stage.
            </p>
          </div>

          {/* Performer Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Dance Performers */}
            <div className="bg-gradient-to-br from-[#D9C178] to-[#ECD35A] rounded-lg p-6">
              <h3 className="text-xl font-bold font-serif text-[#432C2C] mb-4">Dance</h3>
              <p className="text-[#566E37] font-sans mb-4">
                Contemporary, modern, and traditional dance performances that will move your soul.
              </p>
              <div className="space-y-2">
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Dance Company Name</h4>
                  <p className="text-sm text-[#566E37] font-sans">Contemporary Dance</p>
                </div>
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Another Dance Group</h4>
                  <p className="text-sm text-[#566E37] font-sans">Modern Performance</p>
                </div>
              </div>
            </div>

            {/* Theater Performers */}
            <div className="bg-gradient-to-br from-[#93AD67] to-[#566E37] rounded-lg p-6">
              <h3 className="text-xl font-bold font-serif text-[#432C2C] mb-4">Theater</h3>
              <p className="text-[#432C2C] font-sans mb-4">
                Immersive theatrical experiences that blur the line between performer and audience.
              </p>
              <div className="space-y-2">
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Theater Company</h4>
                  <p className="text-sm text-[#566E37] font-sans">Immersive Theater</p>
                </div>
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Performance Group</h4>
                  <p className="text-sm text-[#566E37] font-sans">Experimental Theater</p>
                </div>
              </div>
            </div>

            {/* Circus & Acrobatics */}
            <div className="bg-gradient-to-br from-[#EA902B] to-[#934D2F] rounded-lg p-6">
              <h3 className="text-xl font-bold font-serif text-[#432C2C] mb-4">Circus & Acrobatics</h3>
              <p className="text-[#432C2C] font-sans mb-4">
                Breathtaking aerial performances and acrobatic displays that defy gravity.
              </p>
              <div className="space-y-2">
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Aerial Arts Troupe</h4>
                  <p className="text-sm text-[#566E37] font-sans">Aerial Silks & Hoop</p>
                </div>
                <div className="bg-[#FFF8D9] rounded p-3">
                  <h4 className="font-semibold font-serif text-[#432C2C]">Acrobatic Ensemble</h4>
                  <p className="text-sm text-[#566E37] font-sans">Ground Acrobatics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#566E37] font-sans">
              More performers and detailed schedules will be announced as we get closer to the festival dates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 