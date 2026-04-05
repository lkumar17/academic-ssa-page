'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronLeft } from 'lucide-react';
import { client } from '@/lib/sanity';
import { NewsArticle } from '@/types';

const ALL_NEWS_QUERY = `*[_type == "news"] | order(publishedAt desc) {
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

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await client.fetch<NewsArticle[]>(ALL_NEWS_QUERY);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-white pt-16 pb-8 md:pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-6">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-primary">
            All News
          </h1>
          <p className="text-text-muted mt-4 max-w-2xl">
            Stay informed about all the latest happenings and announcements from our school community.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-8 md:py-12 px-4 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-text-muted">Loading articles...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <motion.article
                  key={article._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col"
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
                      <span className="text-text-muted">No image</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
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
          )}
        </div>
      </section>
    </>
  );
}
