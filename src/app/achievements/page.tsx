'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Medal } from 'lucide-react';

export default function AchievementsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const achievements = [
    {
      id: 1,
      title: 'National Science Olympiad Winners',
      year: 2024,
      category: 'Academic',
      description: '5 students qualified for national round',
    },
    {
      id: 2,
      title: 'State Chess Championship',
      year: 2024,
      category: 'Sports',
      description: 'First position in U-14 category',
    },
    {
      id: 3,
      title: 'Inter-School Cultural Fest',
      year: 2024,
      category: 'Cultural',
      description: 'Overall champions for 3rd consecutive year',
    },
    {
      id: 4,
      title: 'Board Exam Excellence',
      year: 2024,
      category: 'Academic',
      description: '98% pass rate with 7 toppers at state level',
    },
    {
      id: 5,
      title: 'Cricket Tournament Victory',
      year: 2023,
      category: 'Sports',
      description: 'Won the district-level cricket tournament',
    },
    {
      id: 6,
      title: 'Debate Championship',
      year: 2023,
      category: 'Cultural',
      description: 'National level debate tournament winners',
    },
  ];

  const awards = [
    { year: 2024, class10: 94.2, class12: 96.8 },
    { year: 2023, class10: 92.1, class12: 95.5 },
    { year: 2022, class10: 91.5, class12: 94.8 },
  ];

  const alumni = [
    {
      name: 'Dr. Raj Sharma',
      batch: '2015',
      role: 'Chief Medical Officer, Apollo Hospitals',
    },
    {
      name: 'Priya Desai',
      batch: '2016',
      role: 'Software Engineer, Google',
    },
    {
      name: 'Arun Kumar',
      batch: '2014',
      role: 'IAS Officer',
    },
  ];

  const categories = ['all', 'Academic', 'Sports', 'Cultural'];

  const filtered =
    selectedFilter === 'all'
      ? achievements
      : achievements.filter((a) => a.category === selectedFilter);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="min-h-80 bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4">
              Achievements & Awards
            </h1>
            <p className="text-lg text-white/80">Excellence Celebrated</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <section className="py-8 px-4 bg-surface">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                  selectedFilter === cat
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary border-2 border-accent hover:bg-accent/10'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Achievement Gallery */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Trophy className="text-accent w-16 h-16" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-text-muted text-sm">{item.year}</span>
                    </div>
                    <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Board Results */}
        <section className="py-16 md:py-24 px-4 bg-surface">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-center text-primary mb-12">
              Board Exam Results
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-accent">
                    <th className="px-4 py-3 text-left font-semibold text-primary">Year</th>
                    <th className="px-4 py-3 text-center font-semibold text-primary">
                      Class X Pass %
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-primary">
                      Class XII Pass %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {awards.map((row, i) => (
                    <tr key={i} className="border-b border-surface hover:bg-white transition-all">
                      <td className="px-4 py-3 font-semibold text-primary">{row.year}</td>
                      <td className="px-4 py-3 text-center text-accent font-bold">
                        {row.class10}%
                      </td>
                      <td className="px-4 py-3 text-center text-accent font-bold">
                        {row.class12}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Notable Alumni */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-center text-primary mb-12">
              Notable Alumni
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {alumni.map((person, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 bg-surface rounded-lg"
                >
                  <Medal className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                    {person.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">Batch of {person.batch}</p>
                  <p className="text-text-muted text-sm">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-12 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">50+</p>
              <p className="text-sm">Trophies Won</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">200+</p>
              <p className="text-sm">Awards & Honors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">500+</p>
              <p className="text-sm">Merit Scholars</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
