import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-auto overflow-hidden">
        {/* Header image */}
        <Image src="/about-purple.png" alt="About Onset Festival" width={1200} height={400} className="relative w-full h-auto object-contain object-top" />
      </section>

      {/* Festival Description Section */}
      <section className="py-16 px-4 bg-[#EDDEB7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-justify">
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              This is the Onset of something new.<br /><br />
              Join us for a weekend escape in the Berkshires at Camp Timber Trails on September 18–20, 2026.<br /><br />
              At Onset Festival, we&apos;re fostering connection and community through music, art, nature, and performance. Our festival is built from the ground up, with the creators being musicians and performers themselves. We aim to provide experiences and activities that bring joy and inspire creativity.
          </p></div><br></br>

          <div className="flex justify-center">
          <Image src="/activities.png" alt="Activities at Onset Festival" width={600} height={400} className="w-1/2 h-auto" />
        </div><br></br>

          {/* Activities Image */}
          <section className="w-full">
          </section>
            <div>
            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              Spread across more than 400 acres of forest, the venue features a private lake with its own island, beach, and boathouse stocked with kayaks and canoes, a lakeside amphitheatre, beautiful foliage, and stunning views. Set up a tent, or book a cabin, and immerse yourself in a unique experience just a few hours from NYC and Boston.
            </p><br></br>

            <p className="text-[20px] leading-relaxed font-rammetto text-[#245451] font-sans font-bold">
              Discover new musicians, catch aerial performances and fire dancers, eat s&apos;mores and freshly-prepared meals, do yoga, meditate, and meet new friends. It&apos;s all here.<br /><br />
              Stay tuned for updates on the lineup and ticket sales.
            </p>
          </div>
        </div>
        <br></br><br></br>
      </section>


          {/* Border Image */}
          <section className="w-full">
            <Image src="/border.png" alt="Border decoration" width={1200} height={400} className="w-full h-auto" />
          </section>


    </div>
  );
} 