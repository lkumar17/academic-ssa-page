'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Heart } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';

interface CoreValue {
  title: string;
  description: string;
}

interface AboutPageContent {
  coreValues: CoreValue[];
  visionTitle: string;
  visionContent: string;
  missionTitle: string;
  missionContent: string;
}

interface PrincipalMessage {
  principalName: string;
  principalQuote: string;
  principalMessage: string;
  principalPhoto: any;
}

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo: any;
  order: number;
}

export default function AboutPage() {
  const [aboutContent, setAboutContent] = useState<AboutPageContent | null>(null);
  const [principal, setPrincipal] = useState<PrincipalMessage | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch about page content
        const aboutQuery = `*[_type == "aboutPageContent"][0] {
          coreValues,
          visionTitle,
          visionContent,
          missionTitle,
          missionContent
        }`;
        const aboutData = await client.fetch<AboutPageContent>(aboutQuery);
        setAboutContent(aboutData);

        // Fetch principal message
        const principalQuery = `*[_type == "principalMessage"][0] {
          principalName,
          principalQuote,
          principalMessage,
          principalPhoto
        }`;
        const principalData = await client.fetch<PrincipalMessage>(principalQuery);
        setPrincipal(principalData);

        // Fetch team members ordered by order field
        const teamQuery = `*[_type == "managementTeamMember"] | order(order asc) {
          _id,
          name,
          role,
          photo,
          order
        }`;
        const teamData = await client.fetch<TeamMember[]>(teamQuery);
        setTeamMembers(teamData);
      } catch (err) {
        console.error('Failed to fetch about page content:', err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) return (
    <>
      <Navbar />
      <div className="pt-12 min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
      <Footer />
    </>
  );

  if (error) return (
    <>
      <Navbar />
      <div className="pt-12 min-h-screen flex items-center justify-center text-red-600">
        <p>Error: {error}</p>
      </div>
      <Footer />
    </>
  );

  const defaultValues = aboutContent?.coreValues || [];

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
                {aboutContent?.visionTitle || 'Loading...'}
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                {aboutContent?.visionContent || 'Loading...'}
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
                {aboutContent?.missionTitle || 'Loading...'}
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                {aboutContent?.missionContent || 'Loading...'}
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
              {principal?.principalPhoto ? (
                <img
                  src={urlFor(principal.principalPhoto).url()}
                  alt={principal.principalName}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-48 h-48 mx-auto bg-surface rounded-full flex items-center justify-center mb-4 text-text-muted">
                  [Photo Loading...]
                </div>
              )}
              <h4 className="font-cormorant text-xl font-semibold text-primary">
                {principal?.principalName || 'Loading...'}
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
                "{principal?.principalQuote || 'Loading...'}"
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                {principal?.principalMessage || 'Loading...'}
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
              {defaultValues.map((value, i) => {
                const icons = [Award, Users, Zap, Heart];
                const Icon = icons[i % icons.length];
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
                    <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
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
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  {member.photo ? (
                    <img
                      src={urlFor(member.photo).url()}
                      alt={member.name}
                      className="w-40 h-40 mx-auto rounded-lg object-cover mb-4"
                    />
                  ) : (
                    <div className="w-40 h-40 mx-auto bg-surface rounded-lg flex items-center justify-center mb-4 text-text-muted">
                      [Photo Loading...]
                    </div>
                  )}
                  <h4 className="font-cormorant text-lg font-semibold text-primary">
                    {member.name}
                  </h4>
                  <p className="text-accent text-sm">
                    {member.role === 'vice_principal' && 'Vice Principal'}
                    {member.role === 'academic_head' && 'Academic Head'}
                    {member.role === 'admin_head' && 'Admin Head'}
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
