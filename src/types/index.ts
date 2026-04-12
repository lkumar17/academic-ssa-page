// School types
export interface School {
  name: string;
  affiliation: string;
  principal: string;
  contact: string;
  email: string;
}

// Campus types
export interface Campus {
  id: string;
  branchName: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
}

// Achievement types
export interface Achievement {
  _id: string;
  title: string;
  year: number;
  category: 'academic' | 'sports' | 'cultural';
  description?: string;
  slug?: {
    current: string;
  };
  image?: {
    asset: {
      url: string;
    };
  };
}

// Testimonial types
export interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  role: 'parent' | 'student' | 'staff';
  grade?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

// News types
export interface NewsArticle {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  body: string;
  image?: {
    asset: {
      url: string;
    };
  };
  gallery?: Array<{
    _type: 'image';
    asset: {
      url: string;
    };
    caption?: string;
  }>;
}
