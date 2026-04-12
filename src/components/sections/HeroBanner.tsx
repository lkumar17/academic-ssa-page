'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface HeroImage {
  _key: string;
  asset: {
    _ref: string;
  };
}

interface HeroCarousel {
  images: HeroImage[];
}

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [heroImages, setHeroImages] = useState<HeroImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const query = `*[_type == "heroCarousel"] | order(order asc) [0] {
          images
        }`;
        const data = await client.fetch<HeroCarousel>(query);
        if (data?.images) {
          setHeroImages(data.images);
        }
      } catch (error) {
        console.error('Failed to fetch hero images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    if (heroImages.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages]);

  return (
    <div className="relative h-screen w-full overflow-hidden pt-16">
      <AnimatePresence mode="wait">
        {heroImages.length > 0 && (
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${urlFor(heroImages[current]).url()})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-white mb-4 leading-tight">
            Sree Saraswathy Academy
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Matriculation School, Vedasandur, Dindigul
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-white rounded font-medium hover:bg-opacity-90 transition-all hover:scale-105">
              Apply Online
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded font-medium hover:bg-white/10 transition-all">
              Call Us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded font-medium hover:bg-white/10 transition-all">
              Locate Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'bg-accent w-8' : 'bg-white/50 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </div>
  );
}
