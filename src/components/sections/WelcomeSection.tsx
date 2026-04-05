'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
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
            Welcome to Our Academy
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-6">
            Building Leaders, Inspiring Minds
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Sree Saraswathy Academy is committed to nurturing young minds with a perfect blend of
            academic excellence and character development. Our holistic approach ensures that
            every student develops into a confident, capable, and compassionate individual ready
            to face life's challenges.
          </p>
          <p className="text-text-muted mb-6 leading-relaxed">
            With state-of-the-art facilities, experienced faculty, and a student-centric
            curriculum, we create an environment where excellence is not just expected but
            celebrated.
          </p>

          {/* Learn More Link */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Learn More <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Right Column - Image */}
{/*         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden"
            <div className="absolute inset-0 border-4 border-accent opacity-30 rounded-lg transform translate-x-2 translate-y-2 z-0"></div>
            <div className="relative bg-surface rounded-lg aspect-video flex items-center justify-center text-text-muted overflow-hidden z-10">
              <img
                src="/images/campus-images/about-campus.jpg"
                alt="Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
