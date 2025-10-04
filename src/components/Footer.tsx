import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#245451] text-[#FFF8D9] py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Festival Info */}
          <div>
            <h3 className="text-[20px] font-gabarito font-semibold mb-4">Flights & Sounds</h3>
            <p className="text-[16px] text-[#D9C178] font-gabarito font-bold">
              Fostering connection and community through music, art, nature, and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[20px] font-gabarito font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[16px] text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-gabarito">
                  About
                </Link>
              </li>
              <li>
                <Link href="/performers" className="text-[16px] text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-gabarito">
                  Performers
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-[16px] text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-gabarito">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[16px] text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-gabarito">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[20px] font-gabarito font-semibold mb-4">Get in Touch</h4>
            <p className="text-[16px] text-[#D9C178] font-gabarito">
              Reach out for more information about the festival and how to get involved.
            </p>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-[#EA902B] text-[#432C2C] px-6 py-2 rounded-md hover:bg-[#ECD35A] transition-colors duration-200 font-gabarito font-semibold text-[20px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#245451] mt-8 pt-8 text-center">
          <p className="text-[20px] text-[#93AD67] font-gabarito font-bold">
            © 2025 Flights & Sounds Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 