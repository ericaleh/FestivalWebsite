import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#245451] text-[#FFF8D9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Festival Info */}
          <div>
            <h3 className="text-xl font-imfell font-bold mb-4">Flights & Sounds</h3>
            <p className="text-[#D9C178] font-sans">
              Fostering connection and community through music, art, nature, and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-gothic font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-sans">
                  About
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-sans">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/performers" className="text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-sans">
                  Performers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#D9C178] hover:text-[#FFF8D9] transition-colors duration-200 font-sans">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-gothic font-semibold mb-4">Get in Touch</h4>
            <p className="text-[#D9C178] font-sans">
              For more information about the festival and how to get involved.
            </p>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-[#D9C178] text-[#245451] px-6 py-2 rounded-md hover:bg-[#ECD35A] transition-colors duration-200 font-sans"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#245451] mt-8 pt-8 text-center">
          <p className="text-[#93AD67] font-sans">
            © 2025 Flights & Sounds Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 