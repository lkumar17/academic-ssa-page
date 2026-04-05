'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Award, title: 'Academic Excellence', desc: 'Rigorous curriculum with personalized learning.' },
    { icon: Users, title: 'Holistic Development', desc: 'Character building and life skills training.' },
    { icon: Zap, title: 'Innovation', desc: 'Modern teaching methods and technology integration.' },
    { icon: Heart, title: 'Integrity', desc: 'Ethical values and moral responsibility.' },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-12">
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
              <p className="text-accent text-sm text-black font-semibold uppercase tracking-widest">Nurturing Leaders, Inspiring Minds</p>
            </motion.div>
            
            <motion.h1 
              className="font-cormorant text-5xl md:text-7xl font-semibold mb-6 leading-tight text-black drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              About Sree Saraswathy Academy
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Excellence in Education, Character in Conduct
            </motion.p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <section className="py-6 md:py-8 px-4 bg-gradient-to-r from-surface to-bg">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Vision</p>
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-6">
                Leading the Future of Education
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                To be a leading institution that nurtures academically excellent, morally strong,
                and socially responsible individuals who contribute positively to society and shape
                the future with innovation and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Mission</p>
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-6">
                Empowering Every Student
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                To provide comprehensive education that blends academic rigor with character
                development, empowering students to think critically, act responsibly, and inspire
                others through exemplary conduct and achievement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-6 md:py-8 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto bg-surface rounded-full flex items-center justify-center mb-4 text-text-muted">
                [Principal Photo: 400×400px]
              </div>
              <h4 className="font-cormorant text-xl font-semibold text-primary">
                 Miruthula
              </h4>
              <p className="text-accent text-sm">Principal</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-4">
                Principal's Message
              </p>
              <p className="font-cormorant text-3xl font-semibold text-primary mb-4 leading-relaxed">
                "Education is not just about acquiring knowledge; it's about transforming lives."
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                At Sree Saraswathy Academy, we believe in creating an environment where every student is
                valued and empowered to reach their full potential. Our dedicated team works
                tirelessly to ensure that education transcends the classroom and prepares students
                for real-world challenges.
              </p>
              <p className="text-text-muted leading-relaxed">
                With best-in-class facilities, innovative teaching methods, and a commitment to
                holistic development, we are proud to be a beacon of excellence in education.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-surface to-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Our Foundation</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary">
                Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/50"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={28} />
                    </motion.div>
                    <h3 className="font-cormorant text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-center text-primary mb-12">
              Our Management Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-40 h-40 mx-auto bg-surface rounded-lg flex items-center justify-center mb-4 text-text-muted">
                    [Staff Photo: 400×400px]
                  </div>
                  <h4 className="font-cormorant text-lg font-semibold text-primary">
                    [PLACEHOLDER NAME]
                  </h4>
                  <p className="text-accent text-sm">
                    {i === 1 ? 'Vice Principal' : i === 2 ? 'Academic Head' : 'Admin Head'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
