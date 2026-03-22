'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Sree Saraswathy Academy has been transformative for my daughter. The teachers are exceptionally dedicated and the holistic approach ensures she's learning beyond just academics.",
    author: 'Mrs. Priya Kumar',
    role: 'Parent',
    grade: 'Class 10',
    rating: 5,
  },
  {
    quote:
      "The best investment we made was choosing SSA for our son's education. The facilities and faculty are world-class, and he has grown as an individual tremendously.",
    author: 'Mr. Rajesh Patel',
    role: 'Parent',
    grade: 'Class 12',
    rating: 5,
  },
  {
    quote:
      "My time at Sree Saraswathy Academy shaped who I am today. The teachers genuinely care about every student, and the environment encourages you to push your boundaries.",
    author: 'Arjun Sharma',
    role: 'Student',
    grade: 'Class 12',
    rating: 5,
  },
  {
    quote:
      "The curriculum is well-balanced between academic rigor and personality development. I saw significant growth in my confidence and knowledge.",
    author: 'Avni Desai',
    role: 'Student',
    grade: 'Class 10',
    rating: 5,
  },
  {
    quote:
      "Excellent infrastructure combined with passionate teachers makes SSA a standout institution. My daughter loves coming to school every day!",
    author: 'Dr. Vikram Singh',
    role: 'Parent',
    grade: 'Class 8',
    rating: 5,
  },
  {
    quote:
      "The co-curricular activities are outstanding. I've developed leadership skills and made lifelong friendships here at Sree Saraswathy Academy.",
    author: 'Karan Verma',
    role: 'Student',
    grade: 'Class 11',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-center text-primary mb-12">
          What Parents & Students Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
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
                {testimonials[current].quote}
              </p>

              {/* Author */}
              <p className="font-semibold text-primary mb-1">
                {testimonials[current].author}
              </p>
              <p className="text-text-muted text-sm mb-4">
                {testimonials[current].role} • {testimonials[current].grade}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
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
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:translate-x-0 p-2 rounded-full bg-primary text-white hover:bg-accent transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-0 p-2 rounded-full bg-primary text-white hover:bg-accent transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'bg-primary w-8' : 'bg-primary/30 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
