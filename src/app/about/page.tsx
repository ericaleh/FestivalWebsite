import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <Image src="/about-3.png" alt="About Flights & Sounds" width={1200} height={400} className="relative w-full h-auto object-contain object-top bg-[#245451]" />
      </section>

      {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center">
            <p className="text-[20px] leading-relaxed font-dwpica text-[#245451]">
              Flights & Sounds is a festival fostering connection and community through music, art, nature, and performance. We aim to provide experiences and activities that bring joy and inspire creativity.
            </p>
            
            <p className="text-[20px] leading-relaxed font-dwpica text-[#245451]">
              Our festival is built from the ground up, with the creators being musicians and performers themselves. Any profits made will be split among the artists and performers who participate.
            </p>
          </div>
        </div>
        <br></br><br></br>
        <div className="flex justify-center">
          <Image src="/activities.png" alt="Activities at Flights & Sounds" width={600} height={400} className="w-1/2 h-auto" />
        </div>
      </section>

      {/* Activities Image */}
      <section className="w-full">
      </section>

      {/* Border Image */}
      <section className="w-full">
        <Image src="/border.png" alt="Border decoration" width={1200} height={400} className="w-full h-auto" />
      </section>
    </div>
  );
} 