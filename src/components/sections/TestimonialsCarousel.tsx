'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { client } from '@/lib/sanity';
import { Testimonial } from '@/types';

// ── Sanity GROQ Query ──────────────────────────────────────────────────────
const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  quote,
  authorName,
  role,
  grade,
  rating
}`;

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials from Sanity
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="py-4 md:py-6 px-4 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text-muted">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-4 md:py-6 px-4 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl font-semibold text-primary mb-8">
            What Parents & Students Say
          </h2>
          <p className="text-text-muted">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 md:py-6 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-center text-primary mb-6\">
          What Parents & Students Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg"
            >
              {/* Quote Mark */}
              <p className="text-6xl text-accent mb-6 font-light">"</p>

              {/* Quote */}
              <p className="font-cormorant text-2xl italic text-primary mb-8 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>

              {/* Author */}
              <p className="font-semibold text-primary mb-1">
                {testimonials[currentIndex].authorName}
              </p>
              <p className="text-text-muted text-sm mb-4">
                {testimonials[currentIndex].role} • {testimonials[currentIndex].grade || 'N/A'}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-accent scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
