'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: '',
  });

  const branches = [
    {
      name: 'Oddanchatram',
      address: '[PLACEHOLDER: Address], Tamilnadu - 624002',
      phone: '+91 [PLACEHOLDER]',
      email: 'oddanchatram@saiaca.in',
    },
    {
      name: 'Palani',
      address: '[PLACEHOLDER: Address], Tamilnadu - 624601',
      phone: '+91 [PLACEHOLDER]',
      email: 'palani@saiaca.in',
    },
    {
      name: 'Coimbatore',
      address: '[PLACEHOLDER: Address], Tamilnadu - 641001',
      phone: '+91 [PLACEHOLDER]',
      email: 'coimbatore@saiaca.in',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', phone: '', email: '', grade: '', message: '' });
    alert('Thank you! We will contact you soon.');
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="min-h-80 bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/80">We'd love to hear from you</p>
          </div>
        </div>

        {/* Branch Cards */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {branches.map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-accent rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-cormorant text-2xl font-semibold text-primary mb-6">
                  {branch.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-text-muted text-sm">{branch.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="text-accent flex-shrink-0" size={20} />
                    <a href={`tel:${branch.phone}`} className="text-primary font-medium hover:text-accent transition">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="text-accent flex-shrink-0" size={20} />
                    <a href={`mailto:${branch.email}`} className="text-primary font-medium hover:text-accent transition">
                      {branch.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enquiry Form & Map */}
        <section className="py-16 md:py-24 px-4 bg-surface">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cormorant text-3xl font-semibold text-primary mb-8">
                Send Us an Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                />

                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select Grade Interested In</option>
                  <option value="primary">Primary (I-V)</option>
                  <option value="upper">Upper Primary (VI-VIII)</option>
                  <option value="secondary">Secondary (IX-X)</option>
                  <option value="senior">Senior Secondary (XI-XII)</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden h-96 lg:h-auto"
            >
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-text-muted">
                [Google Maps Embed: Oddanchatram Branch]
              </div>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/919384052901"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.98 1.513 9.945 9.945 0 001.512 19.32c1.336.127 2.46-.322 3.37-1.08 2.05-1.73 3.16-4.28 2.84-6.94-.57-4.71-4.92-8.13-9.74-7.83" />
          </svg>
        </motion.a>
      </div>
      <Footer />
    </>
  );
}
