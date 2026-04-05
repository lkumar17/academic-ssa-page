'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CompliancePage() {
  const documents = [
    {
      name: 'Affiliation Certificate',
      description: 'Matriculation affiliation certificate for Sree Saraswathy Academy',
      file: 'affiliation-cert.pdf',
    },
    {
      name: 'Fire Safety Certificate',
      description: 'Fire safety compliance and evacuation procedures',
      file: 'fire-safety.pdf',
    },
    {
      name: 'Building Safety Certificate',
      description: 'Structural safety and building compliance certificate',
      file: 'building-safety.pdf',
    },
    {
      name: 'Water & Sanitation Report',
      description: 'Water quality and sanitation facility details',
      file: 'water-sanitation.pdf',
    },
    {
      name: 'DEO Certificate',
      description: 'District Education Officer recognition',
      file: 'deo-cert.pdf',
    },
    {
      name: 'Land Certificate',
      description: 'Land ownership and utilization certificate',
      file: 'land-cert.pdf',
    },
    {
      name: 'Fee Structure',
      description: 'Detailed fee structure for all classes',
      file: 'fee-structure.pdf',
    },
  ];

  const schoolInfo = [
    { label: 'School Name', value: 'Sree Saraswathy Academy' },
    { label: 'Principal Name', value: 'Dr. [PLACEHOLDER NAME]' },
    { label: 'Contact Phone', value: '+91 [PLACEHOLDER]' },
    { label: 'Email', value: 'info@saiaca.in' },
    { label: 'Address', value: '[PLACEHOLDER: Main Branch Address]' },
    { label: 'Established Year', value: '[PLACEHOLDER]' },
    { label: 'Board', value: 'Matriculation' },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-4">
        {/* Hero Section */}
        <div className="min-h-60 bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-black font-cormorant text-4xl md:text-5xl font-semibold mb-4">
              Mandatory Disclosure
            </h1>
            <p className="text-lg text-black/80">Transparency & Compliance</p>
          </div>
        </div>

        {/* Info Section */}
        <section className="py-2 px-4 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-text-muted leading-relaxed">
              As per Matriculation guidelines on mandatory disclosure, Sree Saraswathy Academy maintains complete
              transparency in all regulatory compliances and institutional information. All
              required certificates, approvals, and documents are available for public inspection.
            </p>
          </div>
        </section>

        {/* School Information Table */}
        <section className="py-4 md:py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-primary mb-3">
              School Information
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {schoolInfo.map((item, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        i % 2 === 0 ? 'bg-surface' : 'bg-white'
                      }`}
                    >
                      <td className="px-4 py-2 font-semibold text-primary w-1/3">
                        {item.label}
                      </td>
                      <td className="px-4 py-2 text-text-muted">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-6 md:py-8 px-4 bg-surface">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-primary mb-4">
              Required Documents
            </h2>

            <div className="space-y-4">
              {documents.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 hover:shadow-lg transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-text-muted text-sm">{doc.description}</p>
                  </div>
                  <a
                    href={`/docs/${doc.file}`}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-black rounded font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-4 md:py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-primary mb-3">
              Additional Information
            </h2>

            <div className="space-y-3 text-text-muted leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-2">Facilities</h3>
                <p>
                  Sree Saraswathy Academy is equipped with state-of-the-art facilities including
                  laboratories, library, sports grounds, medical facilities, and transportation
                  services at all campuses.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Curriculum</h3>
                <p>
                  The school follows Matriculation curriculum with a focus on experiential learning,
                  critical thinking, and holistic development. Special emphasis is given to
                  co-curricular activities and skill development.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Staff Qualifications</h3>
                <p>
                  All faculty members are postgraduates with relevant qualifications and teaching
                  experience. Regular professional development and training programs are conducted.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Fee Details</h3>
                <p>
                  Fee structure is transparent and available on the school website and office.
                  Scholarships and financial assistance are provided to deserving students based
                  on merit and need.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Grievance Redressal</h3>
                <p>
                  The school maintains a formal grievance redressal mechanism. Parents and
                  students can approach the principal or designated committee for any concerns.
                  All grievances are addressed promptly and fairly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-6 px-4 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-black font-cormorant text-2xl font-semibold mb-4">
              For Further Clarifications
            </h3>
            <p className="text-black/80 mb-4">Contact the School Office:</p>
            <div className="text-black/80 space-y-2 text-sm">
              <p>📞 Phone: +91 [PLACEHOLDER]</p>
              <p>📧 Email: info@saiaca.in</p>
              <p>🕐 Office Hours: 9:00 AM - 4:00 PM (Monday to Friday)</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
