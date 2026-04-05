'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: '#0a1a3c' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Sree Saraswathy Academy Logo"
              width={40}
              height={40}
              className="rounded"
              priority
            />
            <span className="font-cormorant text-xl font-bold text-white hidden sm:inline drop-shadow">
              Sree Saraswathy Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Admissions', href: '/admissions' },
              { name: 'Achievements', href: '/achievements' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-white font-medium text-sm hover:text-accent transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="relative group">
              <button className="text-white font-medium text-sm hover:text-accent transition-colors">More</button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-primary hover:bg-surface rounded-t-lg font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/compliance"
                  className="block px-4 py-2 text-primary hover:bg-surface rounded-b-lg font-medium"
                >
                   Disclosure
                </Link>
              </div>
            </div>
          </div>

          {/* Apply Link */}
          <Link href="/admissions" className="hidden md:block text-accent font-medium text-sm hover:text-white transition-colors">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link href="/" className="text-primary font-medium">
                Home
              </Link>
              <Link href="/about" className="text-primary font-medium">
                About Us
              </Link>
              <Link href="/admissions" className="text-primary font-medium">
                Admissions
              </Link>
              <Link href="/achievements" className="text-primary font-medium">
                Achievements
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact Us
              </Link>
              <Link href="/compliance" className="text-primary font-medium">
                 Disclosure
              </Link> 
              <Link href="/admissions" className="block w-full text-center px-4 py-2 bg-accent text-white rounded font-medium mt-4">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
