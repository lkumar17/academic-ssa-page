'use client';

import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';

interface Stat {
  value: string;
  label: string;
  order: number;
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const query = `*[_type == "schoolStats"] | order(order asc) {
          value,
          label,
          order
        }`;
        const data = await client.fetch<Stat[]>(query);
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError('Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="w-full bg-primary py-4 text-center text-white">Loading...</div>;
  if (error) return <div className="w-full bg-primary py-4 text-center text-red-300">Error: {error}</div>;
  if (!stats.length) return <div className="w-full bg-primary py-4 text-center text-white">No statistics available</div>;

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
