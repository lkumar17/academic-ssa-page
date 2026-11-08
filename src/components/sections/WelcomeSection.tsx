'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface WelcomeContent {
  label: string;
  heading: string;
  paragraphs: string[];
  image?: {
    asset: {
      _ref: string;
    };
  };
}

export default function WelcomeSection() {
  const [content, setContent] = useState<WelcomeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const query = `*[_type == "welcomeSection" && isActive == true][0] {
          label,
          heading,
          paragraphs,
          image
        }`;
        const data = await client.fetch<WelcomeContent>(query);
        setContent(data);
      } catch (err) {
        console.error('Failed to fetch welcome content:', err);
        setError('Failed to load welcome section');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) return <div className="py-4 md:py-6 text-center">Loading...</div>;
  if (error) return <div className="py-4 md:py-6 text-center text-red-600">Error: {error}</div>;
  if (!content) return <div className="py-4 md:py-6 text-center">No content available</div>;

  return (
    <section className="py-4 md:py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            {content.label}
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-6">
            {content.heading}
          </h2>
          {content.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-text-muted mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Learn More Link */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Learn More <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Right Column - Image */}
        {content.image && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg">
              <div className="relative bg-surface rounded-lg overflow-hidden z-10">
                <img
                  src={urlFor(content.image).url()}
                  alt="Welcome Section"
                  className="block w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
