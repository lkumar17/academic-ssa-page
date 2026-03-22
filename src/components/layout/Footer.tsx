'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold">
              SSA
            </div>
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
              CBSE Disclosure
            </Link>
          </nav>
        </div>

        {/* Column 3: Oddanchatram Branch */}
        <div>
          <h4 className="font-cormorant text-lg font-semibold mb-4 text-accent">
            Oddanchatram
          </h4>
          <div className="text-sm space-y-3">
            <div className="flex gap-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <p>
                [PLACEHOLDER: Oddanchatram Branch Address, Tamilnadu - 624002]
              </p>
            </div>
            <div className="flex gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <a href="tel:" className="hover:text-accent">
                +91 [PLACEHOLDER]
              </a>
            </div>
            <div className="flex gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <a href="mailto:" className="hover:text-accent">
                [PLACEHOLDER]@saiaca.in
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Other Branches */}
        <div>
          <h4 className="font-cormorant text-lg font-semibold mb-4 text-accent">
            Other Branches
          </h4>
          <div className="text-sm space-y-4">
            <div>
              <p className="font-semibold text-accent">Palani</p>
              <p className="text-xs text-gray-300">
                [PLACEHOLDER: Address] | Ph: [PLACEHOLDER]
              </p>
            </div>
            <div>
              <p className="font-semibold text-accent">Coimbatore</p>
              <p className="text-xs text-gray-300">
                [PLACEHOLDER: Address] | Ph: [PLACEHOLDER]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2024 Sree Saraswathy Academy. All rights reserved.</p>
          <p>Designed with care for excellence in education.</p>
        </div>
      </div>
    </footer>
  );
}
