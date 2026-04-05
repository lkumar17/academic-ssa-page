'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a1a3c' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-cormorant text-xl font-semibold">
              Sree Saraswathy Academy
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Empowering students with quality education and holistic development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-accent transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-accent transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-cormorant text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About Us
            </Link>
            <Link href="/admissions" className="hover:text-accent transition">
              Admissions
            </Link>
            <Link href="/achievements" className="hover:text-accent transition">
              Achievements
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact
            </Link>
            <Link href="/compliance" className="hover:text-accent transition">
              Disclosure
            </Link>
          </nav>
        </div>

        {/* Column 3: Vedasandur Branch */}
        <div>
          <h4 className="font-cormorant text-lg font-semibold mb-4 text-accent">
            Vedasandur
          </h4>
          <div className="text-sm space-y-3">
            <div className="flex gap-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <p>
                 Vedasandur Branch Address, Tamilnadu - 624002
              </p>
            </div>
            <div className="flex gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <a href="tel:" className="hover:text-accent">
                +91 0123456789
              </a>
            </div>
            <div className="flex gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <a href="mailto:" className="hover:text-accent">
                 ssacademy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2024 Sree Saraswathy Academy. All rights reserved.</p>
          <p>Designed with care for excellence in education.</p>
        </div>
      </div>
    </footer>
  );
}
