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
      <div className="pt-16">
        {/* Hero Section */}
        <div className="min-h-96 bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4">
              About Sree Saraswathy Academy
            </h1>
            <p className="text-lg text-white/80">Nurturing Leaders, Inspiring Minds</p>
          </div>
        </div>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-lg"
            >
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To be a leading institution that nurtures academically excellent, morally strong,
                and socially responsible individuals who contribute positively to society and shape
                the future with innovation and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent"
            >
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To provide comprehensive education that blends academic rigor with character
                development, empowering students to think critically, act responsibly, and inspire
                others through exemplary conduct and achievement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                Dr. [PLACEHOLDER NAME]
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
        <section className="py-16 md:py-24 px-4 bg-surface">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-center text-primary mb-12">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-text-muted text-sm">{value.desc}</p>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
