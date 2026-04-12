'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';

interface SchoolInfo {
  schoolName?: string;
  address?: string;
  contactPhone?: string;
  email?: string;
}

export default function Footer() {
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo | null>(null);

  useEffect(() => {
    async function fetchSchoolInfo() {
      try {
        const query = `*[_type == "schoolInformation"][0] {
          schoolName,
          address,
          contactPhone,
          email
        }`;
        const data = await client.fetch<SchoolInfo>(query);
        setSchoolInfo(data);
      } catch (error) {
        console.error('Failed to fetch school information:', error);
      }
    }
    fetchSchoolInfo();
  }, []);
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

        {/* Column 3: Contact Information */}
        <div>
          <h4 className="font-cormorant text-lg font-semibold mb-4 text-accent">
            Contact
          </h4>
          <div className="text-sm space-y-3">
            <div className="flex gap-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <p>
                {schoolInfo?.address || 'Campus Address'}
              </p>
            </div>
            <div className="flex gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <a href={`tel:${schoolInfo?.contactPhone}`} className="hover:text-accent">
                {schoolInfo?.contactPhone || '+91 0123456789'}
              </a>
            </div>
            <div className="flex gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <a href={`mailto:${schoolInfo?.email}`} className="hover:text-accent">
                {schoolInfo?.email || 'info@school.in'}
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
