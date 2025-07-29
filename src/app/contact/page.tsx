export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#432C2C] via-[#566E37] to-[#934D2F] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl font-sans">Get in touch with our team</p>
          </div>
        </div>
        {/* Placeholder for header image */}
        {/* <img src="/contact.jpg" alt="Contact Flights & Sounds" className="w-full h-full object-cover" /> */}
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#FFF8D9]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-[#432C2C] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold font-serif text-[#432C2C] mb-2">General Inquiries</h3>
                  <p className="text-[#566E37] font-sans">
                    For general questions about the festival, ticketing, or general information.
                  </p>
                  <p className="text-[#934D2F] font-sans mt-2">info@flightsandsounds.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-serif text-[#432C2C] mb-2">Artist & Performer Applications</h3>
                  <p className="text-[#566E37] font-sans">
                    Interested in performing at Flights & Sounds? We&apos;d love to hear from you.
                  </p>
                  <p className="text-[#934D2F] font-sans mt-2">artists@flightsandsounds.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-serif text-[#432C2C] mb-2">Volunteer Opportunities</h3>
                  <p className="text-[#566E37] font-sans">
                    Want to be part of making this festival happen? Join our volunteer team.
                  </p>
                  <p className="text-[#934D2F] font-sans mt-2">volunteers@flightsandsounds.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-serif text-[#432C2C] mb-2">Press & Media</h3>
                  <p className="text-[#566E37] font-sans">
                    For press inquiries, media passes, and promotional opportunities.
                  </p>
                  <p className="text-[#934D2F] font-sans mt-2">press@flightsandsounds.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-[#432C2C] mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium font-sans text-[#432C2C] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-[#566E37] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-sans"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium font-sans text-[#432C2C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[#566E37] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-sans"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium font-sans text-[#432C2C] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-[#566E37] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-sans"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="artist">Artist Application</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium font-sans text-[#432C2C] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[#566E37] rounded-md focus:ring-2 focus:ring-[#EA902B] focus:border-transparent font-sans"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA902B] text-[#432C2C] py-3 px-6 rounded-md hover:bg-[#ECD35A] transition-colors duration-200 font-sans font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 