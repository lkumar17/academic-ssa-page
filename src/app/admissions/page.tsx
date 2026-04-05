'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApplicationForm from '@/components/forms/ApplicationForm';
import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

export default function AdmissionsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const eligibility = [
    {
      grade: 'Primary (Class I-V)',
      criteria: 'Age-appropriate admission based on DoB. Interview with parents.',
    },
    {
      grade: 'Upper Primary (Class VI-VIII)',
      criteria: 'Entrance assessment and interview. Previous academics considered.',
    },
    {
      grade: 'Secondary (Class IX-X)',
      criteria: 'Entrance exam and interview. Merit-based selection.',
    }
  ];

  const process = [
    { step: 1, title: 'Apply', desc: 'Submit online application with required documents.' },
    { step: 2, title: 'Review', desc: 'Application review and preliminary assessment.' },
    { step: 3, title: 'Interview', desc: 'Student and parent interview with faculty.' },
    { step: 4, title: 'Confirm', desc: 'Result notification and admission confirmation.' },
  ];

  const dates = [
    { event: 'Application Window Opens', date: '[PLACEHOLDER]' },
    { event: 'Application Deadline', date: '[PLACEHOLDER]' },
    { event: 'Entrance Exam', date: '[PLACEHOLDER]' },
    { event: 'Interview Rounds', date: '[PLACEHOLDER]' },
    { event: 'Results Announced', date: '[PLACEHOLDER]' },
    { event: 'Session Begins', date: '[PLACEHOLDER]' },
  ];

  return (
    <>
      <Navbar onApplyClick={() => setIsFormOpen(true)} />
      <div className="pt-8">
        {/* Hero Section */}
        <div className="relative min-h-60 bg-gradient-to-b from-accent via-accent/90 to-accent/70 text-white flex items-center justify-center overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <motion.div 
            className="relative text-center px-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 bg-white/20 rounded-full border border-white/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-black font-semibold uppercase tracking-widest">Join Our Community of Achievers</p>
            </motion.div>
            
            <motion.h1 
              className="font-cormorant text-5xl md:text-7xl font-semibold mb-6 leading-tight text-black drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Admissions
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Merit-based admissions for aspiring students
            </motion.p>
          </motion.div>
        </div>

        {/* Important Notice */}
        <section className="py-8 px-4 bg-accent/10 border-l-4 border-accent">
          <div className="max-w-6xl mx-auto flex gap-4">
            <div className="text-accent text-2xl">ℹ️</div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Important Notice</h4>
              <p className="text-text-muted">
                All admissions are conducted on a merit-cum-entrance basis. We encourage
                applications from deserving students across all backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-6 md:py-8 px-4 bg-gradient-to-b from-bg to-surface">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Your Path to Success</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-3">
                Eligibility Criteria
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                We welcome talented students at all levels. Here's what we look for.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibility.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="border-l-4 border-accent p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="font-cormorant text-xl font-semibold text-primary mb-3">
                    {item.grade}
                  </h3>
                  <p className="text-text-muted leading-relaxed flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item.criteria}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-6 md:py-8 px-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Simple & Transparent</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-3">
                Admission Process
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-4">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="flex-1 relative"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 text-black rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg flex-shrink-0 relative z-10"
                      whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(200, 152, 42, 0.3)' }}
                    >
                      {item.step}
                    </motion.div>
                    
                    <h3 className="font-cormorant text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-text-muted text-sm leading-relaxed flex-grow">
                      {item.desc}
                    </p>

                    {i < process.length - 1 && (
                      <motion.div 
                        className="hidden md:block absolute left-1/2 top-24 w-full h-1 bg-gradient-to-r from-accent/30 to-transparent -z-10 transform -translate-x-1/2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.4 }}
                      ></motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Dates */}
        <section className="py-6 md:py-8 px-4 bg-surface">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-primary mb-6">
              Important Dates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dates.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 bg-white rounded border-b-2 border-accent"
                >
                  <p className="font-semibold text-primary">{item.event}</p>
                  <p className="text-accent font-bold">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure & Application */}
        <section className="py-6 md:py-8 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fee Structure */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-accent p-8 rounded-lg text-center"
            >
              <Download className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-4">
                Fee Structure
              </h3>
              <p className="text-text-muted mb-6">
                Download our complete fee structure document for all grades and branches.
              </p>
              <button className="w-full px-6 py-3 bg-accent text-white rounded font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2">
                <Download size={18} />
                Download PDF
              </button>
            </motion.div>

            {/* Online Application */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-primary p-8 rounded-lg text-center"
            >
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-4">
                Apply Now
              </h3>
              <p className="text-text-muted mb-6">
                Submit your application through our secure online portal.
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="w-full px-6 py-3 bg-primary text-white rounded font-medium hover:bg-opacity-90 transition-all"
              >
                Online Application
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Application Form Modal */}
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <Footer />
    </>
  );
}
