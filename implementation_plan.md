# SSA School Website — Implementation Plan
> **Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Sanity CMS · Vercel  
> **Project Path:** `C:\Logesh\SSA\academic-ssa-page`

---

## Step 1 — Bootstrap the Project

Run this inside `C:\Logesh\SSA\academic-ssa-page`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install framer-motion @sanity/client next-sanity lucide-react clsx tailwind-merge
npx shadcn-ui@latest init
```

---

## Step 2 — Folder Structure

Create this exact structure in your project:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  → Home
│   ├── about/page.tsx            → About Us
│   ├── admissions/page.tsx       → Admissions
│   ├── achievements/page.tsx     → Achievements
│   ├── contact/page.tsx          → Contact Us
│   ├── compliance/page.tsx       → Matriculation Disclosure
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroBanner.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── NewsSection.tsx
│   │   └── BranchCards.tsx
│   └── ui/                       → shadcn components live here
├── lib/
│   ├── sanity.ts                 → Sanity client config
│   └── utils.ts                  → clsx + tailwind-merge helper
├── types/
│   └── index.ts                  → shared TypeScript types
└── public/
    ├── images/
    │   ├── logo.png              → PLACEHOLDER: School logo (PNG, transparent bg, min 400×400px)
    │   ├── hero-1.jpg            → PLACEHOLDER: Campus hero image 1 (1920×1080px)
    │   ├── hero-2.jpg            → PLACEHOLDER: Campus hero image 2 (1920×1080px)
    │   ├── hero-3.jpg            → PLACEHOLDER: Campus hero image 3 (1920×1080px)
    │   ├── about-campus.jpg      → PLACEHOLDER: About Us banner (1280×720px)
    │   ├── principal.jpg         → PLACEHOLDER: Principal photo (400×400px, square)
    │   ├── staff-1.jpg           → PLACEHOLDER: Staff photo 1 (400×400px)
    │   ├── staff-2.jpg           → PLACEHOLDER: Staff photo 2 (400×400px)
    │   ├── achievement-1.jpg     → PLACEHOLDER: Achievement/event photo 1 (800×600px)
    │   ├── achievement-2.jpg     → PLACEHOLDER: Achievement/event photo 2 (800×600px)
    │   ├── hostel.jpg            → PLACEHOLDER: Hostel facility photo (1280×720px)
    │   └── og-image.jpg          → PLACEHOLDER: Social share image (1200×630px)
    └── docs/
        ├── affiliation-cert.pdf  → PLACEHOLDER: Matriculation affiliation certificate PDF
        ├── fire-safety.pdf       → PLACEHOLDER: Fire safety certificate PDF
        ├── building-safety.pdf   → PLACEHOLDER: Building safety certificate PDF
        └── fee-structure.pdf     → PLACEHOLDER: Fee structure PDF
```

---

## Step 3 — Copilot Prompts

> Run these prompts one by one in order inside GitHub Copilot Chat or Copilot Workspace.

---

### Prompt 1 — Design Tokens & Global CSS

```
In src/app/globals.css, set up CSS custom properties for an elegant premium school website:
- Font: Import 'Cormorant Garamond' (display, weights 400/600) and 'Inter' (body, weights 400/500) from Google Fonts
- Colors:
  --color-primary: #1a2e5a (deep navy)
  --color-accent: #c8982a (warm gold)
  --color-bg: #fdfcf9 (warm off-white)
  --color-surface: #f5f2eb (cream surface)
  --color-text: #1c1c1c
  --color-text-muted: #6b6b6b
- Add smooth scroll behavior, antialiased text rendering
- Base body uses Inter, all h1-h3 use Cormorant Garamond
```

---

### Prompt 2 — Navbar

```
Create src/components/layout/Navbar.tsx:
- Sticky top navbar with glass morphism effect on scroll (backdrop-blur, semi-transparent bg)
- Left: logo image from /public/images/logo.png with school name text beside it
- Center: navigation links → Home, About Us, Admissions, Achievements, More (dropdown with Contact Us and Matriculation Disclosure)
- Right: "Apply Now" CTA button in gold (#c8982a) with hover animation
- Mobile: hamburger icon toggles a full-screen slide-down menu
- Use framer-motion for navbar entrance animation and dropdown
- Active link gets gold underline indicator
- TypeScript, use Next.js Link component
```

---

### Prompt 3 — Hero Banner

```
Create src/components/sections/HeroBanner.tsx:
- Full viewport height hero with image slideshow cycling through:
  /public/images/hero-1.jpg, hero-2.jpg, hero-3.jpg
- Dark overlay gradient (bottom-heavy) over images
- Center-aligned content:
  - Small gold uppercase label: " Matriculation school"
  - Large display heading using Cormorant Garamond: school name
  - Subtitle: affiliation text
  - Three CTA buttons side by side: "Apply Online" (gold filled), "Call Us" (outlined), "Locate Us" (outlined)
- Slide transition using framer-motion AnimatePresence
- Dot indicators at bottom for slide position
- Scroll-down chevron animation at bottom center
- TypeScript component
```

---

### Prompt 4 — Stats Bar

```
Create src/components/sections/StatsBar.tsx:
- Full-width dark navy (#1a2e5a) bar below hero
- 4 stats displayed horizontally:
  { value: "20+", label: "Years of Excellence" }
  { value: "2", label: "Campuses" }
  { value: "98%", label: "Board Results" }
- Each stat: large gold number (Cormorant Garamond 48px), small white label below
- Animated count-up using framer-motion when scrolled into view
- Dividers between stats
```

---

### Prompt 5 — Welcome Section

```
Create src/components/sections/WelcomeSection.tsx:
- Two-column layout (text left, image right)
- Left:
  - Gold overline text "Welcome to Our Academy"
  - Large heading in Cormorant Garamond
  - 2-3 paragraphs of placeholder body text about the school
  - Affiliation code display styled as a badge
  - "Learn More" link with animated arrow
- Right:
  - Framed image using /public/images/about-campus.jpg
  - Decorative gold border offset frame effect
- Reveal animation using framer-motion whileInView
```

---

### Prompt 6 — Testimonials Carousel

```
Create src/components/sections/TestimonialsCarousel.tsx:
- Section title "What Parents & Students Say"
- Auto-scrolling carousel, pauses on hover
- Each card:
  - Large decorative quote mark in gold
  - Quote text in italic Cormorant Garamond
  - Author name, role (Parent/Student), grade
  - 5-star rating display
- 6 placeholder testimonial objects hardcoded in the component
- Smooth slide transition with framer-motion
- Prev/Next arrow buttons
- Dot pagination
```

---

### Prompt 7 — Footer

```
Create src/components/layout/Footer.tsx:
- Dark navy background (#1a2e5a)
- Four columns:
  1. Logo + school name + short description + social icons (Facebook, Instagram, YouTube) using lucide-react
  2. Quick Links: Home, About Us, Admissions, Achievements, Contact
  3. Branch 1 — Vedasandur: address placeholder, phone placeholder
  4. Branch 2 — Palani + Branch 3 — Coimbatore condensed
- Gold accent color for headings and hover states
- Bottom bar: copyright text + "Designed with care" note
- Fully responsive, stacks to single column on mobile
```

---

### Prompt 8 — About Us Page

```
Create src/app/about/page.tsx and supporting sections:
- Hero banner with /public/images/about-campus.jpg and page title overlay
- Vision & Mission section: two elegant cards side by side
- Principal's message: photo (/public/images/principal.jpg) left, quote and message right
- Management team grid: 3 staff cards using /public/images/staff-1.jpg, staff-2.jpg with name and designation placeholders
- Values section: 4 icon cards (Academic Excellence, Holistic Development, Innovation, Integrity)
- All sections animated with framer-motion whileInView stagger
```

---

### Prompt 9 — Admissions Page

```
Create src/app/admissions/page.tsx:
- Page hero with title "Admissions"
- Eligibility section: grade-wise criteria in a clean table
- Step-by-step process: numbered timeline (Apply → Review → Interview → Confirm) with framer-motion step animation
- Key dates section: academic calendar highlights in card grid
- Fee structure: "Download Fee Structure" button linking to /public/docs/fee-structure.pdf
- Online application: prominent CTA card linking to Google Form placeholder URL
- Important notice banner in gold
```

---

### Prompt 10 — Achievements Page

```
Create src/app/achievements/page.tsx:
- Filterable gallery: filter tabs by Year and Category (Academic, Sports, Cultural)
- Achievement cards using /public/images/achievement-1.jpg, achievement-2.jpg with placeholder data
- Board results highlight section: table showing class 10 and 12 results by year (placeholder data)
- Notable alumni section: 3 cards with name, batch year, current role (placeholder)
- Trophy/medal count stats row
- Filter animation using framer-motion layout
```

---

### Prompt 11 — Contact Page

```
Create src/app/contact/page.tsx:
- Three branch cards at top: Vedasandur, Palani, Coimbatore — each with address placeholder, phone placeholder, email placeholder
- Enquiry form below: Name, Phone, Email, Grade Interested In (select), Message — with client-side validation
- Google Maps iframe placeholder for Vedasandur branch (replace src with real embed URL later)
- Form submits to a mailto: link as placeholder (real EmailJS integration can be added later)
- WhatsApp floating button (bottom-right) linking to wa.me/placeholder
```

---

### Prompt 12 — Matriculation Compliance Page

```
Create src/app/compliance/page.tsx:
- Page title "Matriculation Mandatory Disclosure"
- Intro paragraph about Matriculation affiliation requirements
- Document table with columns: Document Name, Description, Download Link
- Rows for: Affiliation Certificate, Fire Safety, Building Safety Certificate, Water & Sanitation, DEO Certificate, Land Certificate, Fee Structure
- Each row links to corresponding PDF in /public/docs/
- School information table: Name, Affiliation No, Address, Principal, Contact
- All placeholder values clearly marked with [PLACEHOLDER] text
```

---

### Prompt 13 — Sanity CMS Setup

```
Create sanity/ folder at project root with:
- sanity.config.ts: project config with schemas for news, achievement, testimonial, campusInfo
- schemas/news.ts: fields → title (string), slug, publishedAt (date), body (text), image (image)
- schemas/achievement.ts: fields → title, year (number), category (string), description, image
- schemas/testimonial.ts: fields → quote, authorName, role, grade, rating (number)
- schemas/campusInfo.ts: fields → branchName, address, phone, email, mapEmbedUrl
Create src/lib/sanity.ts: Sanity client using @sanity/client with projectId and dataset as env vars
```

---

### Prompt 14 — Environment Variables

```
Create .env.local at project root with these placeholder keys:
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key-here
NEXT_PUBLIC_WHATSAPP_NUMBER=919384052901
NEXT_PUBLIC_CONTACT_EMAIL=admissions@yourschool.com
```

---

### Prompt 15 — Final Polish

```
In src/app/layout.tsx:
- Add metadata: title, description, og:image (/public/images/og-image.jpg), keywords for SEO
- Import and apply Navbar and Footer as layout wrappers
- Add framer-motion LazyMotion provider
- Add smooth page transition wrapper

In tailwind.config.ts:
- Extend theme with school color tokens matching the CSS variables
- Add Cormorant Garamond and Inter to fontFamily config
- Add custom animation keyframes for fade-up and slide-in
```

---

## Step 4 — Placeholder Replacement Tracker

Once real assets are ready, replace these across the project:

| Placeholder | File Location | Replace With |
|---|---|---|
| `logo.png` | `/public/images/` | Real school logo |
| `hero-1/2/3.jpg` | `/public/images/` | Real campus photos |
| `about-campus.jpg` | `/public/images/` | Real campus photo |
| `principal.jpg` | `/public/images/` | Principal's photo |
| `staff-1.jpg`, `staff-2.jpg` | `/public/images/` | Staff photos |
| `achievement-1/2.jpg` | `/public/images/` | Achievement event photos |
| `hostel.jpg` | `/public/images/` | Hostel facility photo |
| `og-image.jpg` | `/public/images/` | Social share image (1200×630px) |
| `affiliation-cert.pdf` | `/public/docs/` | Real Matriculation affiliation certificate |
| `fire-safety.pdf` | `/public/docs/` | Real fire safety certificate |
| `building-safety.pdf` | `/public/docs/` | Real building safety certificate |
| `fee-structure.pdf` | `/public/docs/` | Real fee structure document |
| `[SCHOOL NAME]` | All pages | Official school name |
| `[AFFILIATION NO]` | Home, Compliance | Real Matriculation affiliation number |
| `[PHONE PLACEHOLDER]` | Footer, Contact | Real phone numbers per branch |
| `[ADDRESS PLACEHOLDER]` | Footer, Contact | Real branch addresses |
| `Google Form URL` | Admissions page | Real Google Form application link |
| `Maps embed URL` | Contact page | Real Google Maps embed URL |
| `SANITY_PROJECT_ID` | `.env.local` | From sanity.io dashboard |
| `CONTACT_EMAIL` | `.env.local` | Real admissions email address |
| `WHATSAPP_NUMBER` | `.env.local` | Real WhatsApp number with country code |

---

## Step 5 — Run & Deploy

```bash
# Start development server
npm run dev
# Open → http://localhost:3000

# Check production build locally
npm run build
npm run start

# Deploy to Vercel (first time)
npx vercel
# Follow prompts → connects to GitHub for auto-deploys on every push
```

---

## Step 6 — Sanity Studio Setup (after Prompt 13)

```bash
# Inside the sanity/ folder
cd sanity
npm install
npm run dev
# Open → http://localhost:3333
# Log in with your Sanity account
# Start adding real content: news, achievements, testimonials, branch info
```

Once content is added in Sanity Studio, Vercel ISR automatically rebuilds the affected pages within seconds — no redeployment needed.

---

## Asset Specifications Summary

| Asset | Format | Dimensions | Notes |
|---|---|---|---|
| School logo | PNG | Min 400×400px | Transparent background required |
| Hero images (×3) | JPG | 1920×1080px | High res, bright campus shots |
| About banner | JPG | 1280×720px | Wide landscape shot |
| Principal photo | JPG | 400×400px | Square crop, professional |
| Staff photos | JPG | 400×400px | Square crop, consistent style |
| Achievement photos | JPG | 800×600px | Event or award ceremony shots |
| Hostel photo | JPG | 1280×720px | Facility interior/exterior |
| OG share image | JPG | 1200×630px | Used for WhatsApp/social previews |
| Matriculation documents | PDF | Any | Official stamped copies |

---

*Generated for SSA School Website · Next.js 14 + Sanity CMS + Vercel*
