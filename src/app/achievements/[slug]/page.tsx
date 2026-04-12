'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { client } from '@/lib/sanity';
import { Achievement } from '@/types';
import { ChevronLeft, Trophy } from 'lucide-react';

const ACHIEVEMENT_QUERY = (slug: string) => `*[_type == "achievement" && slug.current == "${slug}"][0] {
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

export default function AchievementDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [achievement, setAchievement] = useState<Achievement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAchievement() {
      try {
        if (!slug) return;
        const data = await client.fetch<Achievement>(ACHIEVEMENT_QUERY(slug));
        if (!data) {
          setError('Achievement not found');
          return;
        }
        setAchievement(data);
      } catch (err) {
        console.error('Error fetching achievement:', err);
        setError('Failed to load achievement');
      } finally {
        setLoading(false);
      }
    }

    fetchAchievement();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-24 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-text-muted">Loading achievement...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !achievement) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-24 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Trophy className="w-20 h-20 text-accent/40 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">Achievement Not Found</h1>
            <p className="text-text-muted mb-6">{error || 'The achievement you are looking for does not exist.'}</p>
            <Link href="/achievements" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
              <ChevronLeft size={16} />
              Back to Achievements
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white pt-12 pb-12">
        {/* Header Navigation */}
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <Link href="/achievements" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
            <ChevronLeft size={16} />
            Back to Achievements
          </Link>
        </div>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto px-4">
          {/* Hero Image */}
          {achievement.image?.asset?.url && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={achievement.image.asset.url}
                alt={achievement.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full font-medium capitalize border border-accent/20">
              {achievement.category}
            </span>
            <span className="text-text-muted font-semibold">{achievement.year}</span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {achievement.title}
          </h1>

          {/* Description */}
          <div className="prose prose-sm max-w-none text-text-muted leading-relaxed space-y-4">
            <p className="text-lg">{achievement.description}</p>
          </div>

          {/* Footer CTA */}
          <div className="border-t border-accent/20 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <p className="text-text-muted text-sm mb-2">Explore more achievements</p>
                <Link href="/achievements" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                  View All Achievements
                  <ChevronLeft size={16} className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
