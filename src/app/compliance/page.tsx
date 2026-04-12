'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';

interface SchoolInfo {
  schoolName: string;
  principalName: string;
  contactPhone: string;
  email: string;
  address: string;
  establishedYear: number;
  board: string;
}

interface Document {
  _id: string;
  name: string;
  description: string;
  file: {
    asset: {
      url: string;
    };
  };
  order: number;
}

interface AdditionalInfo {
  _id: string;
  title: string;
  content: string;
  order: number;
}

interface Clarifications {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  officeHours: string;
}

export default function CompliancePage() {
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo[]>([]);
  const [clarifications, setClarifications] = useState<Clarifications | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComplianceData = async () => {
      try {
        // Fetch school information
        const schoolQuery = `*[_type == "schoolInformation"][0] {
          schoolName,
          principalName,
          contactPhone,
          email,
          address,
          establishedYear,
          board
        }`;
        const schoolData = await client.fetch<SchoolInfo>(schoolQuery);
        setSchoolInfo(schoolData);

        // Fetch required documents
        const docsQuery = `*[_type == "requiredDocument"] | order(order asc) {
          _id,
          name,
          description,
          file {
            asset {
              url
            }
          },
          order
        }`;
        const docsData = await client.fetch<Document[]>(docsQuery);
        setDocuments(docsData);

        // Fetch additional information sections
        const infoQuery = `*[_type == "additionalInformationSection"] | order(order asc) {
          _id,
          title,
          content,
          order
        }`;
        const infoData = await client.fetch<AdditionalInfo[]>(infoQuery);
        setAdditionalInfo(infoData);

        // Fetch further clarifications
        const clarQuery = `*[_type == "furtherClarifications"][0] {
          title,
          subtitle,
          phone,
          email,
          officeHours
        }`;
        const clarData = await client.fetch<Clarifications>(clarQuery);
        setClarifications(clarData);
      } catch (err) {
        console.error('Failed to fetch compliance data:', err);
        setError('Failed to load compliance information');
      } finally {
        setLoading(false);
      }
    };

    fetchComplianceData();
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
                  {schoolInfo && (
                    <>
                      <tr className="border-b bg-surface">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">School Name</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.schoolName || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Principal Name</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.principalName || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-surface">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Contact Phone</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.contactPhone || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Email</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.email || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-surface">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Address</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.address || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-white">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Established Year</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.establishedYear || 'Loading...'}</td>
                      </tr>
                      <tr className="border-b bg-surface">
                        <td className="px-4 py-2 font-semibold text-primary w-1/3">Board</td>
                        <td className="px-4 py-2 text-text-muted">{schoolInfo.board || 'Loading...'}</td>
                      </tr>
                    </>
                  )}
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
              {documents.map((doc) => (
                <motion.div
                  key={doc._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 hover:shadow-lg transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-text-muted text-sm">{doc.description}</p>
                  </div>
                  <a
                    href={doc.file?.asset?.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
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
              {additionalInfo.map((section) => (
                <div key={section._id}>
                  <h3 className="font-semibold text-primary mb-2">{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-6 px-4 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-black font-cormorant text-2xl font-semibold mb-4">
              {clarifications?.title || 'For Further Clarifications'}
            </h3>
            <p className="text-black/80 mb-4">{clarifications?.subtitle || 'Contact the School Office:'}</p>
            <div className="text-black/80 space-y-2 text-sm">
              <p>📞 Phone: {clarifications?.phone || 'Loading...'}</p>
              <p>📧 Email: {clarifications?.email || 'Loading...'}</p>
              <p>🕐 Office Hours: {clarifications?.officeHours || 'Loading...'}</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
