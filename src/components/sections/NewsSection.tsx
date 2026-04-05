'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import { NewsArticle } from '@/types';

// ── Sanity GROQ Query ──────────────────────────────────────────────────────
const NEWS_QUERY = `*[_type == "news"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  body,
  image {
    asset->{
      url
    }
  },
  gallery[] {
    _type,
    asset->{
      url
    },
    caption
  }
}`;

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from Sanity
  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await client.fetch<NewsArticle[]>(NEWS_QUERY);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text-muted">Loading latest news...</p>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return null; // Don't show section if no news
  }

  return (
      <section className="py-4 md:py-6 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-2">
            Latest News
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Stay updated with the latest happenings and announcements from our school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <motion.article
              key={article._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col h-full"
            >
              {/* Image Container with fixed aspect ratio */}
              {article.image?.asset?.url ? (
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={article.image.asset.url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-text-muted text-sm">No image</span>
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                  <Calendar size={16} />
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <h3 className="font-cormorant text-xl font-semibold text-primary mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-text-muted text-sm mb-4 line-clamp-3 flex-1">
                  {article.body}
                </p>

                <Link
                  href={`/news/${article.slug.current}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors group-hover:gap-3"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            View All News
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}