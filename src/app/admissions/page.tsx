'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';

export default function AdmissionsPage() {
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
    },
    {
      grade: 'Senior Secondary (Class XI-XII)',
      criteria: 'Academic excellence. Merit-based. Stream selection available.',
    },
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
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="min-h-80 bg-gradient-to-b from-accent to-accent/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4">
              Admissions
            </h1>
            <p className="text-lg text-white/80">Join Our Community of Achievers</p>
          </div>
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
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-center text-primary mb-12">
              Eligibility Criteria
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibility.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-4 border-accent p-6 bg-surface rounded"
                >
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-2">
                    {item.grade}
                  </h3>
                  <p className="text-text-muted text-sm">{item.criteria}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-center text-primary mb-12">
              Step-by-Step Process
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center flex-1 relative"
                >
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10">
                    {item.step}
                  </div>
                  <h3 className="font-cormorant text-lg font-semibold text-primary mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm text-center">{item.desc}</p>

                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-8 w-full h-0.5 bg-accent/30 -z-10 transform -translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Dates */}
        <section className="py-16 md:py-24 px-4 bg-surface">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-4xl font-semibold text-center text-primary mb-12">
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
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <button className="w-full px-6 py-3 bg-primary text-white rounded font-medium hover:bg-opacity-90 transition-all">
                Online Application
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
