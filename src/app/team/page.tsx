import Image from 'next/image';

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <Image src="/our-team.png" alt="Our Team at Flights & Sounds" width={1200} height={400} className="relative w-full h-auto object-contain object-top bg-[#EDDFB8]" />
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 px-4 bg-[#ECDFB8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[20px] text-[#245451] font-gabarito max-w-2xl mx-auto">
              Meet the passionate team behind Flights & Sounds Festival.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Erica */}
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/erica-guitar.png" 
                  alt="Erica Leh" 
                  width={256}
                  height={256}
                  className="w-64 h-64 mx-auto object-cover shadow-lg"
                />
              </div>
              <div className="text-left space-y-3">
                <h3 className="text-2xl font-semibold font-gabarito text-[#245451]">Erica Leh</h3>
                <p className="text-[16px] text-[#245451] font-gabarito leading-relaxed">
                  Erica is an event organizer, aerialist, musician, and DJ based in Brooklyn, NY. She has helped organize and perform in events around NYC, both as an aerialist and DJ. She has previously run Yale&apos;s Spring Festival, featuring artists such as Diplo, Jessie J, Passion Pit, and T-Pain, and has assisted with and performed in the Keep the Dream Alive charity stream, which has raised upwards of $20K for Detroit youth. She has worked in the music industry for the past 8 years, both at Groover and Spotify.
                </p>
              </div>
            </div>

            {/* Raff */}
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/raff-2.png" 
                  alt="Raphael Estrach" 
                  width={256}
                  height={256}
                  className="w-64 h-64 mx-auto object-cover shadow-lg"
                />
              </div>
              <div className="text-left space-y-3">
                <h3 className="text-2xl font-semibold font-gabarito text-[#245451]">Raphael Estrach</h3>
                <p className="text-[16px] text-[#245451] font-gabarito leading-relaxed">
                  Raff is a music producer, DJ, VJ, and engineer from Bordeaux, France, focusing on electronic funk, soul, hip hop, and bass music. He has DJ&apos;d at venues and parties across the globe, and performs in and helps run the Keep the Dream Alive charity stream. He also helps run a music production community, where he teaches and collaborates with other artists learning music production. He has worked in the music industry for 11 years, as part of Niland and Spotify.
                </p>
              </div>
            </div>
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