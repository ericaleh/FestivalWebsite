export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        {/* Header image */}
        <img src="/about.png" alt="About Flights & Sounds" className="absolute inset-0 w-full h-full object-cover bg-[#566E37]" />
      </section>

      {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#566E37]">
              Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-sans text-[#566E37]">
              Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate, as well as given to charity organizations.
            </p>
          </div>
        </div>
        <br></br>
        <img src="/activities.png" alt="Activities at Flights & Sounds" className="w-1/2 h-auto" />
      </section>

      {/* Activities Image */}
      <section className="w-full">
      </section>

      {/* Border Image */}
      <section className="w-full">
        <img src="/border.png" alt="Border decoration" className="w-full h-auto" />
      </section>
    </div>
  );
} 