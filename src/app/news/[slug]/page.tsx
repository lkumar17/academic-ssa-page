'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { NewsArticle } from '@/types';
import { CalendarIcon, ChevronLeft } from 'lucide-react';

const NEWS_QUERY = (slug: string) => `*[_type == "news" && slug.current == "${slug}"][0] {
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

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        if (!slug) return;
        const data = await client.fetch<NewsArticle>(NEWS_QUERY(slug));
        if (!data) {
          setError('Article not found');
          return;
        }
        setArticle(data);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text-muted">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-text-muted mb-6">{error || 'The article you are looking for does not exist.'}</p>
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white pt-16 pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-6">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="bg-white pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          {article.image?.asset?.url && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={article.image.asset.url}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary mb-4">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-2 text-text-muted mb-8 pb-8 border-b border-gray-200">
            <CalendarIcon size={18} />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-text whitespace-pre-wrap leading-relaxed">
              {article.body}
            </p>
          </div>

          {/* Gallery */}
          {article.gallery && article.gallery.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="font-cormorant text-2xl font-semibold text-primary mb-6">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.gallery.map((image, index) => (
                  <figure key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image.asset.url}
                      alt={image.caption || `Gallery image ${index + 1}`}
                      className="w-full h-auto"
                    />
                    {image.caption && (
                      <figcaption className="p-3 bg-surface text-text-muted text-sm">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
              <ChevronLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
