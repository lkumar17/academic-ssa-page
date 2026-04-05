'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { client } from '@/lib/sanity';

// ── Types ──────────────────────────────────────────────────────────────────
interface CampusInfo {
  _id: string;
  branchName: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
}

// ── Sanity GROQ Query ──────────────────────────────────────────────────────
const CAMPUS_QUERY = `*[_type == "campusInfo"] | order(branchName asc) {
  _id,
  branchName,
  address,
  phone,
  email,
  mapEmbedUrl
}`;

// ── Component ──────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [branches, setBranches] = useState<CampusInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeBranch, setActiveBranch] = useState<CampusInfo | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: '',
  });

  // Fetch campus info from Sanity
  useEffect(() => {
    async function fetchBranches() {
      try {
        const data = await client.fetch<CampusInfo[]>(CAMPUS_QUERY);
        setBranches(data);
        // Set first branch as default for map display
        if (data.length > 0) setActiveBranch(data[0]);
      } catch (error) {
        console.error('Failed to fetch campus info:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBranches();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      <div className="pt-12">

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <div className="min-h-60 bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-cormorant text-5xl text-black md:text-6xl font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-black/80">We'd love to hear from you</p>
          </div>
        </div>

        {/* ── Branch Cards ─────────────────────────────────────────────── */}
        <section className="py-4 md:py-6 px-4\">
          <div className="max-w-6xl mx-auto">

            {loading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-accent/30 rounded-lg p-6 animate-pulse"
                  >
                    <div className="h-6 bg-primary/10 rounded mb-4 w-3/4" />
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/10 rounded w-full" />
                      <div className="h-4 bg-primary/10 rounded w-2/3" />
                      <div className="h-4 bg-primary/10 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : branches.length === 0 ? (
              <p className="text-center text-text-muted py-12">
                No branch information available. Please add campus info in Sanity Studio.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6\">
                {branches.map((branch, i) => (
                  <motion.div
                    key={branch._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => branch.mapEmbedUrl && setActiveBranch(branch)}
                    className={`border rounded-lg p-4 transition-all cursor-pointer hover:shadow-lg ${
                      activeBranch?._id === branch._id
                        ? 'border-accent bg-accent/5 shadow-md'
                        : 'border-accent/40'
                    }`}
                  >
                    <h3 className="font-cormorant text-2xl font-semibold text-primary mb-3\">
                      {branch.branchName}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <MapPin className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-text-muted text-sm whitespace-pre-line">
                          {branch.address}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Phone className="text-accent flex-shrink-0" size={20} />
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-primary font-medium hover:text-accent transition"
                        >
                          {branch.phone}
                        </a>
                      </div>

                      <div className="flex gap-3">
                        <Mail className="text-accent flex-shrink-0" size={20} />
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-primary font-medium hover:text-accent transition break-all"
                        >
                          {branch.email}
                        </a>
                      </div>

                      {branch.mapEmbedUrl && (
                        <p className="text-xs text-accent font-medium mt-2">
                          {activeBranch?._id === branch._id
                            ? '📍 Showing on map below'
                            : 'Click to view on map'}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Enquiry Form & Map ───────────────────────────────────────── */}
        <section className="py-6 md:py-8 px-4 bg-surface">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cormorant text-3xl font-semibold text-primary mb-4\">
                Send Us an Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
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

                {/* Branch selector — dynamically populated from Sanity */}
                <select
                  name="branch"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select Branch</option>
                  {branches.map((b) => (
                    <option key={b._id} value={b.branchName}>
                      {b.branchName}
                    </option>
                  ))}
                </select>

                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">Select Grade Interested In</option>
                  <option value="primary">Primary (I–V)</option>
                  <option value="upper">Upper Primary (VI–VIII)</option>
                  <option value="secondary">Secondary (IX–X)</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:border-accent resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-black rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>
              </form>
            </motion.div>

            {/* Map — shows active branch's embed URL */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden h-96 lg:h-auto"
            >
              {activeBranch?.mapEmbedUrl ? (
                <div className="w-full h-full flex flex-col">
                  <p className="text-sm text-text-muted mb-2 font-medium">
                    📍 {activeBranch.branchName}
                  </p>
                  <iframe
                    src={activeBranch.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '380px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-text-muted rounded-lg">
                  <p className="text-sm text-center px-6">
                    No map available. Add a Google Maps embed URL in Sanity Studio for this branch.
                  </p>
                </div>
              )}
            </motion.div>

          </div>
        </section>

        {/* ── WhatsApp Floating Button ─────────────────────────────────── */}
        <motion.a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '0123456789'}`}
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
