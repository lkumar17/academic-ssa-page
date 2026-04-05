'use client';

import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '2', label: 'Campuses' },
  { value: '90%', label: 'Board Results' },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!isInView) return;

    const targets = [25, 3, 5000, 98];
    const animations = targets.map((target) => {
      let current = 0;
      const increment = target / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    });

    return () => animations.forEach((fn) => fn());
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full bg-primary py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-cormorant text-4xl md:text-5xl font-semibold text-accent mb-2">
            {stat.value}
          </p>
          <p className="font-cormorant text-sm md:text-base font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
