'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Trophy, Medal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { Achievement } from '@/types';

// ── Sanity GROQ Query ──────────────────────────────────────────────────────
const ACHIEVEMENTS_QUERY = `*[_type == "achievement"] | order(year desc, _createdAt desc) {
  _id,
  title,
  year,
  category,
  description,
  slug,
  image {
    asset->{
      url
    }
  }
}`;

// ── Component ──────────────────────────────────────────────────────────────
export default function AchievementsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch achievements from Sanity
  useEffect(() => {
    async function fetchAchievements() {
      try {
        const data = await client.fetch<Achievement[]>(ACHIEVEMENTS_QUERY);
        setAchievements(data);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, []);

  // Filter achievements based on selected filter
  const filteredAchievements = achievements.filter((achievement) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'academic') return achievement.category === 'academic';
    if (selectedFilter === 'sports') return achievement.category === 'sports';
    if (selectedFilter === 'cultural') return achievement.category === 'cultural';
    return true;
  });

  // Get unique years for filter
  const years = [...new Set(achievements.map(a => a.year))].sort((a, b) => b - a);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-text-muted">Loading achievements...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const categories = ['all', 'academic', 'sports', 'cultural'];

  // Placeholder data for board results and alumni (can be moved to Sanity later)
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

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative min-h-60 bg-gradient-to-b from-primary via-primary to-primary/70 text-white flex items-center justify-center overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <motion.div 
            className="relative text-center px-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 bg-accent/20 rounded-full border border-accent/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-accent text-sm text-black font-semibold uppercase tracking-widest">Excellence Celebrated</p>
            </motion.div>
            
            <motion.h1 
              className="font-cormorant text-5xl md:text-7xl font-semibold mb-6 leading-tight text-black drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Achievements & Awards
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Celebrating academic excellence, sports prowess, and cultural achievements
            </motion.p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <section className="py-12 px-4 bg-gradient-to-b from-surface to-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {categories.map((cat, index) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all capitalize transform ${
                    selectedFilter === cat
                      ? 'bg-blue text-black shadow-lg hover:shadow-xl scale-105'
                      : 'bg-white text-primary border-2 border-accent hover:bg-accent/10 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {cat === 'all' ? 'All' : cat}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievement Gallery */}
        <section className="py-4 md:py-6 px-4 bg-gradient-to-b from-surface to-bg">
          <div className="max-w-6xl mx-auto">
            {filteredAchievements.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Trophy className="w-20 h-20 text-accent/40 mx-auto mb-6" />
                <p className="text-text-muted text-lg">No achievements found for the selected filter.</p>
              </motion.div>
            ) : (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((item, i) => (
                  <motion.div
                    key={item._id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image Container */}
                    {item.image?.asset?.url && (
                      <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                        <motion.img
                          src={item.image.asset.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    )}
                    {!item.image?.asset?.url && (
                      <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-colors duration-300">
                        <Trophy className="text-accent w-20 h-20 opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform" />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <motion.span 
                          className="text-xs font-bold text-accent uppercase bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          {item.category}
                        </motion.span>
                        <span className="text-text-muted text-sm font-semibold">{item.year}</span>
                      </div>
                      
                      <h3 className="font-cormorant text-xl font-semibold text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {item.slug?.current && (
                        <Link
                          href={`/achievements/${item.slug.current}`}
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors mt-4 group-hover:gap-3"
                        >
                          Read More
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Board Results */}
{/*         <section className="py-16 md:py-24 px-4 bg-surface">
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
        </section> */}

        {/* Notable Alumni */}
{/*         <section className="py-16 md:py-24 px-4">
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
        </section> */}

        {/* Stats Row */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: '🏆', label: 'Trophies Won', value: '50+' },
              { icon: '🎖️', label: 'Awards & Honors', value: '200+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl text-black font-bold text-accent mb-3 font-cormorant"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-lg md:text-xl text-black/90 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
