export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div>
        {/* Thick line separator */}
        <div className="h-1/2 bg-[#245451]"></div>
        {/* Header image */}
        <img src="/hero2.png" alt="About Flights & Sounds" className="w-full h-auto object-contain object-top md:h-full md:object-cover bg-[#245451]" />
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