# Sree Saraswathy Academy Website

A modern, fully-featured Matriculation school website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Sanity CMS**.

## 🚀 Project Features

### Implemented Components
- ✅ **Homepage** with hero banner, stats bar, welcome section, and testimonials
- ✅ **About Us** page with vision, mission, principal's message, and values
- ✅ **Admissions** page with eligibility, process steps, and dates
- ✅ **Achievements** page with filterable gallery and board results
- ✅ **Contact** page with branch cards and inquiry form
- ✅ **Matriculation Compliance** page with mandatory disclosures
- ✅ **Responsive Navigation** with mobile menu
- ✅ **Smooth Animations** using Framer Motion
- ✅ **Premium Design** with custom color tokens

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **CMS:** Sanity (configured, ready to connect)
- **Fonts:** Cormorant Garamond (display) + Inter (body)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles with design tokens
│   ├── about/page.tsx          # About Us page
│   ├── admissions/page.tsx     # Admissions page
│   ├── achievements/page.tsx   # Achievements page
│   ├── contact/page.tsx        # Contact page
│   └── compliance/page.tsx     # Matriculation Compliance page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroBanner.tsx
│       ├── StatsBar.tsx
│       ├── WelcomeSection.tsx
│       └── TestimonialsCarousel.tsx
├── lib/
│   ├── sanity.ts               # Sanity client
│   └── utils.ts                # Utility functions
└── types/
    └── index.ts                # TypeScript types

public/
├── images/                     # [PLACEHOLDER] Image files
└── docs/                       # [PLACEHOLDER] PDF documents

sanity/
├── sanity.config.ts            # Sanity configuration
└── schemas/
    ├── news.ts
    ├── achievement.ts
    ├── testimonial.ts
    └── campusInfo.ts
```

## 🎨 Design Tokens

The site uses elegant, professional color palette:
- **Primary:** `#1a2e5a` (Deep Navy)
- **Accent:** `#c8982a` (Warm Gold)
- **Background:** `#fdfcf9` (Warm Off-White)
- **Surface:** `#f5f2eb` (Cream)
- **Text:** `#1c1c1c` (Dark)
- **Text Muted:** `#6b6b6b` (Gray)

Fonts:
- **Display:** Cormorant Garamond (weights: 400, 600)
- **Body:** Inter (weights: 400, 500)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   
   Update `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
   NEXT_PUBLIC_WHATSAPP_NUMBER=91xxxxxxxxxx
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

## 📝 Available Commands

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## 🔧 Customization

### Placeholders to Replace
Search for `[PLACEHOLDER]` throughout the codebase to find all areas needing customization:
- School name and affiliation
- Contact information
- Branch addresses and coordinates
- Image paths (add actual images to `/public/images/`)
- PDF documents (add to `/public/docs/`)
- Google Maps embed URLs
- WhatsApp number

### Adding Images
Replace placeholder images in `/public/images/`:
- `logo.png` (400×400px, transparent background)
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (1920×1080px)
- `about-campus.jpg` (1280×720px)
- `principal.jpg` (400×400px, square)
- `staff-1.jpg`, `staff-2.jpg` (400×400px)
- `achievement-*.jpg` (800×600px)

### Connecting Sanity CMS

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Copy your project ID and dataset name
3. Update `.env.local` with your Sanity credentials
4. Deploy Sanity schemas:
   ```bash
   npm run sanity:deploy  # (if configured)
   ```

## 🌐 Pages Overview

### Home (`/`)
- Hero banner with slideshow
- Statistics bar with animations
- Welcome section
- Testimonials carousel
- Full footer

### About Us (`/about`)
- Vision & Mission statements
- Principal's message
- Management team showcases
- Core values grid

### Admissions (`/admissions`)
- Eligibility criteria by grade
- Step-by-step process
- Important dates
- Fee structure download
- Application portal link

### Achievements (`/achievements`)
- Filterable gallery (Academic, Sports, Cultural)
- Board exam results table
- Notable alumni section
- Achievement statistics

### Contact (`/contact`)
- Three branch location cards
- Inquiry form with validation
- Google Maps embed
- WhatsApp floating button

### Matriculation Compliance (`/compliance`)
- School information table
- Downloadable compliance documents
- Regulatory information
- Transparency details

## 🎨 Component Highlights

### Navbar
- Sticky positioning with glass morphism on scroll
- Mobile hamburger menu
- Active link indicators
- Dropdown for secondary menus

### Hero Banner
- Auto-rotating image slideshow
- Smooth fade transitions
- Dot indicators for navigation
- Animated scroll chevron

### Animations
All animations use **Framer Motion**:
- Initial page load animations
- Scroll-triggered reveal effects
- Smooth transitions between pages
- Interactive hover states

## 📱 Responsive Design
The entire site is fully responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons and navigation
- Optimized images for all devices

## 🔐 Security
- Environment variables for sensitive data
- Proper TypeScript types
- ESLint configuration for code quality

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is compatible with any Node.js hosting platform that supports Next.js:
- Netlify
- Railway
- Heroku (with configuration)
- Any VPS with Node.js

## 🛠️ Maintenance

### Updating Content
Most content can be updated directly in the code or through Sanity CMS:
- Testimonials (hardcoded + Sanity)
- News/Achievements (Sanity)
- Personnel information
- Branch details

### Performance Optimization
- Static page pre-rendering
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- API routes ready for serverless functions

## 📞 Support

For issues or questions, check:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Sanity: https://www.sanity.io/docs

## 📄 License

This project is created for Sree Saraswathy Academy. All rights reserved.

---

**Built with ❤️ using modern web technologies**
