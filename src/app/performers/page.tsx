import Image from 'next/image';

export default function Artists() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <Image src="/performers.png" alt="About Onset Festival" width={1200} height={400} className="relative w-full h-auto object-contain object-top bg-[#EDDEB7]" />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 px-4 bg-[#ECDFB8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[20px] text-[#245451] font-gabarito font-bold max-w-4xl mx-auto leading-relaxed">
              Our festival brings together an eclectic mix of talented musicians from various genres and backgrounds, as well as talented aerial and fire performers. Each artist has been carefully selected to create a unique and engaging experience for our attendees.
            </p>
          </div>
          
          {/* Performer Pictures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              <Image 
                src="/erica-pic.png" 
                alt="Erica performing" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/fire-1.jpg" 
                alt="Fire performance" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/fiona-1.png" 
                alt="Fiona performing" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/sammie.jpg" 
                alt="Sammie performing" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/fire-4.JPG" 
                alt="Fire performance" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/raff-pic.png" 
                alt="Raff performing" 
                width={256}
                height={256}
                className="w-full h-64 mx-auto object-cover shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[20px] text-[#245451] font-gabarito font-bold">
              The full list of artists and performers will be announced in 2026. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Border Image */}
      <section className="w-full">
        <Image src="/border.png" alt="Border decoration" width={1200} height={400} className="w-full h-auto max-h-[100vh]" />
      </section>
    </div>
  );
} 