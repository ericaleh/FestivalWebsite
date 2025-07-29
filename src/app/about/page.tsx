export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <img src="/about.png" alt="About Flights & Sounds" className="w-full md:h-128 object-cover" />

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#566E37]">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">            
            <div className="space-y-6 text-[#FFF8D9] font-sans">
              <p className="text-lg leading-relaxed">
                Flights & Sounds was born from a simple idea: to create a space where music, art, nature, and performance come together to foster genuine human connection and community.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our founders, all musicians and performers themselves, understand the transformative power of live experiences. They envisioned a festival that would not only showcase incredible talent but also create an environment where attendees could truly connect with each other and with the natural world around them.
              </p>
              
              <p className="text-lg leading-relaxed">
                We are committed to supporting the artists and performers who make this festival possible. We believe in fair compensation for all contributors, so any profits generated are split among the participating artists and performers, ensuring that those who create the magic are properly rewarded for their work.
              </p>
              
              <p className="text-lg leading-relaxed">
                Additionally, we&apos;re committed to giving back to the community through charitable donations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 