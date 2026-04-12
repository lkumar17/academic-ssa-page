# SSA School AI Chatbot — Implementation Plan
> **Stack:** Next.js 14 · HuggingFace Inference API · Sanity CMS · Framer Motion · TypeScript  
> **Project Path:** `C:\Logesh\SSA\academic-ssa-page`

---

## Overview

Build an AI chatbot widget for the SSA School website that:
- Floats on every page (bottom-right corner)
- Fetches live school data from Sanity CMS schemas
- Uses HuggingFace Mistral-7B model to answer parent/student questions
- Matches the SSA design system (deep navy `#1a2e5a` + warm gold `#c8982a`)

---

## Step 1 — Install Dependencies

Run in `C:\Logesh\SSA\academic-ssa-page`:

```bash
npm install @huggingface/inference
```

---

## Step 2 — Add Environment Variable

Add to `.env.local`:

```bash
HUGGINGFACE_API_TOKEN=hf_xxxxxxxxxxxxxxxxx
```

Get your token from → https://huggingface.co/settings/tokens
- Click "New Token" → Role: Read → Copy token

---

## Step 3 — File Structure to Create

```
src/
├── app/
│   └── api/
│       └── chat/
│           └── route.ts        ← Backend API route (Prompt 1)
└── components/
    └── ChatWidget.tsx          ← Frontend chat UI (Prompt 2)
```

---

## 📑 Navigation Guide

After following Steps 1-3, proceed with:

1. **Prompt 1** → Copy-paste into `src/app/api/chat/route.ts` (Chat API backend)
2. **Prompt 2** → Copy-paste into `src/components/ChatWidget.tsx` (Chat UI frontend)
3. **Prompt 3** → Update `src/app/layout.tsx` (Add widget to all pages)
4. **Prompt 4** → Add env var in Vercel dashboard
5. **Deploy** → Run `npm run build` then push to Vercel
6. **Test** → Use quick test cases below
7. **Monitor** → Check analytics and maintenance monthly

---

---

## Copilot Prompts

> Run these prompts one by one in GitHub Copilot Chat in order.

---

### Prompt 1 — API Route (`src/app/api/chat/route.ts`)

```
Create src/app/api/chat/route.ts as a Next.js 14 App Router POST API route.

Requirements:
- Import HfInference from @huggingface/inference
- Import NextRequest, NextResponse from next/server
- Import the Sanity client from @/lib/sanity

Define these four GROQ queries as constants:

CAMPUS_QUERY fetches all campusInfo documents with fields:
branchName, address, phone, email

ACHIEVEMENTS_QUERY fetches last 5 achievement documents ordered by year desc with fields:
title, year, category, description

NEWS_QUERY fetches last 3 news documents ordered by publishedAt desc with fields:
title, publishedAt

TESTIMONIALS_QUERY fetches 3 testimonial documents with fields:
quote, authorName, role, grade

Create an async function fetchSchoolData() that runs all four queries
in parallel using Promise.all and returns { branches, achievements, news, testimonials }.
Wrap in try/catch and return empty arrays on error.

Create a function buildSystemPrompt(data) that takes the fetched data
and builds a detailed system prompt string containing:

1. Bot identity: "You are a friendly assistant for SSA School 
   (Sree Saraswathy Academy), Sri Ramapuram, Vedasandur, Dindigul, Tamil Nadu.
   Answer only school-related questions. Be concise and warm.
   Reply in the same language the user writes in (English or Tamil).
   If unsure, say: Please contact the school office directly."

2. School overview section:
   Name: Sree Saraswathy Academy (SSA School)
   Location: Sri Ramapuram, Vedasandur, Dindigul District, Tamil Nadu
   Board: CBSE (Central Board of Secondary Education), New Delhi
   Type: Co-educational, Senior Secondary School
   Tagline: Seek Study Act

3. Branch & Contact Details section — dynamically built from branches array.
   Format each branch as: Branch name, Address, Phone, Email.
   If branches array is empty, say "Please contact school directly."

4. Admission Process section:
   Steps: Fill enquiry form → Submit documents (Birth cert, marksheet,
   TC, photos, Aadhaar) → Interaction session → Confirmation → Pay fees
   Grades: LKG to Class 12
   Academic year starts: June
   Admissions open: January onwards

5. School Timings section:
   School: 8:30 AM to 4:00 PM
   Office: 8:00 AM to 5:00 PM, Monday to Saturday
   Lunch: 12:30 PM to 1:15 PM

6. Fee Structure section:
   Fees vary by grade. Download from website or contact office.
   Scholarships available for meritorious students.

7. Facilities section:
   Science, Maths & Computer Labs, Library, Sports ground,
   Hostel (boys & girls), CCTV campus, School bus, Canteen, Medical room

8. CBSE Affiliation section:
   Board: CBSE New Delhi, Valid affiliation,
   Disclosure docs available on website

9. Recent Achievements section — dynamically built from achievements array.
   Format: - Title (Year) — Category: Description

10. Latest News section — dynamically built from news array.
    Format: - Title (formatted date in en-IN locale)

11. Testimonials section — dynamically built from testimonials array.
    Format: - "Quote" — AuthorName, Role, Grade X

12. Quick Answers section with hardcoded Q&A pairs for:
    How to apply, Board affiliation, Hostel, Timings, Fee structure

Return the complete prompt as a string.

Create the POST export async function handler:
- Destructure message and history (default []) from req.json()
- Return 400 if message is empty
- Call fetchSchoolData()
- Call buildSystemPrompt() with the data
- Build messages array: system prompt + last 6 history items + current user message
- Call hf.chatCompletion with model mistralai/Mistral-7B-Instruct-v0.3,
  messages array, max_tokens 400, temperature 0.7
- Return NextResponse.json({ reply: response content })
- Handle errors: if rate limit (429), return friendly retry message
- General error: return "unable to respond, please contact school directly"

Initialize HfInference with process.env.HUGGINGFACE_API_TOKEN at top of file.
TypeScript, use proper types for all parameters.
```

---

### Prompt 2 — Chat Widget (`src/components/ChatWidget.tsx`)

```
Create src/components/ChatWidget.tsx as a Next.js 'use client' TypeScript component.

Import: useState, useRef, useEffect from react
Import: motion, AnimatePresence from framer-motion
Import: MessageCircle, X, Send, Bot, Loader2 from lucide-react

Define Message interface with role ('user' | 'assistant') and content (string).

Define QUICK_QUESTIONS constant array with these 4 strings:
'How to apply for admission?'
'What are the school timings?'
'Where is the branch located?'
'What is the fee structure?'

Component state:
- isOpen: boolean (false)
- messages: Message[] — initialize with one assistant welcome message:
  "Hi! 👋 I'm the SSA School assistant. I can help you with admissions,
  timings, branch locations, fees and more. How can I help you today?"
- input: string ('')
- isLoading: boolean (false)

Refs: messagesEndRef (div), inputRef (input)

useEffect 1: scroll messagesEndRef into view smoothly when messages or isLoading changes.
useEffect 2: focus inputRef 300ms after isOpen becomes true.

Create sendMessage(text: string) async function:
- Trim text, return if empty or isLoading
- Append user message to messages state
- Clear input, set isLoading true
- POST to /api/chat with { message: text, history: messages.slice(1, -1) }
  (exclude first welcome message and current user message from history)
- Append assistant reply to messages
- On catch: append error message "Sorry, something went wrong. Please try again or call us directly! 📞"
- Finally: set isLoading false

Create handleSubmit that calls sendMessage(input) on form submit.
Create handleQuickQuestion(question) that calls sendMessage(question).

JSX structure:

1. AnimatePresence wrapping the chat panel (renders when isOpen is true):
   - motion.div with initial opacity 0 y 20 scale 0.95, animate to opacity 1 y 0 scale 1
   - Fixed position, bottom-24, right-6, z-50, width 80 on mobile / 96 on sm+
   - Height 520px, border-radius 16px
   - Box shadow: 0 20px 60px rgba(26,46,90,0.25)
   - Border: 1px solid rgba(200,152,42,0.3)
   - Background: #fdfcf9
   
   Inside the panel:
   
   A) Header div with navy gradient background (linear-gradient 135deg #1a2e5a to #243d73):
      - Bot icon in gold circle on left
      - Title "SSA School Assistant" white bold
      - Subtitle "Powered by AI · Usually replies instantly" muted white small
      - X button to close (onClick sets isOpen false)
   
   B) Messages scrollable div (flex-1, overflow-y auto, padding 14px, flex col, gap 10px):
      - Map messages array: each message is a motion.div with opacity/y animation
        User messages: justify end, gold gradient bubble, white text, rounded 16px 16px 4px 16px
        Bot messages: justify start, white bubble, navy border, dark text, rounded 16px 16px 16px 4px
      
      - Quick question chips: show only when messages.length === 1 (only welcome message shown)
        Map QUICK_QUESTIONS as buttons with:
        White background, gold border, navy text, pill shape (border-radius 20px)
        Hover: navy background, white text
        onClick: handleQuickQuestion(question)
      
      - Typing indicator: show when isLoading is true
        Three animated dots using framer-motion, each bouncing with 0.15s delay stagger
        Dots are gold colored (#c8982a), 6px circles
      
      - messagesEndRef div at the very end

   C) Form at bottom (white background, gold top border):
      - Text input ref=inputRef, value=input, onChange updates input
        Placeholder "Ask about admissions, fees..."
        Pill shaped, navy border, cream background
      - Submit button: gold circle, disabled when loading or input empty
        Shows Loader2 with animate-spin when loading, Send icon otherwise

2. Floating chat bubble button (always visible):
   - motion.button, whileHover scale 1.1, whileTap scale 0.95
   - Fixed bottom-22 right-6 z-40 (above WhatsApp button)
   - 52px circle, navy gradient background, gold border
   - Box shadow: 0 4px 20px rgba(26,46,90,0.4)
   - onClick toggles isOpen
   - AnimatePresence switching between MessageCircle and X icons
     Both icons gold (#c8982a), 22px size
     Icons animate with rotate and opacity on switch
   - When isOpen is false: show small gold dot (10px) at top-right as unread indicator
     Animate with scale from 0 to 1

Export default ChatWidget.
All colors must match SSA design system: navy #1a2e5a, gold #c8982a, cream #fdfcf9.
No Tailwind classes for colors — use inline styles for all color values.
Use Tailwind only for layout utilities (fixed, flex, gap, etc.).
TypeScript, no any types where avoidable.
```

---

### Prompt 3 — Add ChatWidget to Layout

```
In src/app/layout.tsx:
- Import ChatWidget from '@/components/ChatWidget'
- Add <ChatWidget /> just before the closing </body> tag
  so it appears on every page of the website
- Make sure it is placed AFTER the main {children} content
- Do not wrap it in any additional providers
```

---

### Prompt 4 — Add Env Variable to Vercel

```
Remind me to add this environment variable in Vercel dashboard:
Settings → Environment Variables → Add New:

Key:   HUGGINGFACE_API_TOKEN
Value: hf_xxxxxxxxxxxxxxxxx  (replace with real token)
Environments: ✅ Production  ✅ Preview  ✅ Development

After adding, go to Deployments → latest → "..." → Redeploy
```

---

## How Sanity Data Flows Into the Bot

```
Parent types: "Where is the branch?"
          ↓
POST /api/chat fires
          ↓
fetchSchoolData() runs 4 Sanity queries in parallel:
  ✅ campusInfo   → branch name, address, phone, email
  ✅ achievement  → last 5 wins with year & category  
  ✅ news         → last 3 events with dates
  ✅ testimonial  → 3 parent/student quotes
          ↓
buildSystemPrompt() injects all live data into prompt
          ↓
HuggingFace Mistral-7B-Instruct receives enriched prompt
          ↓
Bot replies with real branch address from Sanity ✅
          ↓
Answer shown in chat widget UI
```

---

## What the Bot Knows Automatically

| Sanity Schema | Bot Knows | Updates When |
|---|---|---|
| `campusInfo` | Branch name, address, phone, email | You update in Sanity Studio |
| `achievement` | Last 5 achievements with year & category | You add new achievements |
| `news` | Last 3 news/events with dates | You publish new news |
| `testimonial` | 3 parent/student quotes | You add testimonials |

> **No code changes needed** to update bot knowledge — just update Sanity Studio!

---

## Static Info in System Prompt (Hardcoded)

These are written once in `buildSystemPrompt()` and rarely change:

| Topic | Content |
|---|---|
| Admission process | 5-step process, documents needed |
| School timings | 8:30 AM – 4:00 PM, Mon–Sat |
| Facilities | Labs, library, hostel, bus, canteen |
| CBSE affiliation | Board details, disclosure docs |
| Quick Q&A | 5 pre-written question-answer pairs |

---

## Vercel Deployment Checklist

```
✅ HUGGINGFACE_API_TOKEN added in Vercel env vars
✅ Redeployed after adding env var
✅ ChatWidget added to layout.tsx
✅ Test on live URL — open chat, click quick questions
✅ Check browser console for any API errors
```

---

## Troubleshooting

| Error | Fix |
|---|---|
| `401 Unauthorized` | Check HUGGINGFACE_API_TOKEN is correct in Vercel |
| Slow first response (5–15s) | Normal — HF free tier has cold start delay |
| `429 Rate limit` | HF free tier limit hit — wait or upgrade to HF Pro |
| Sanity data missing | Check SANITY env vars are set correctly in Vercel |
| Bot gives wrong info | Update content in Sanity Studio — bot auto-updates |

---

## Chatbot Limitations & What It Can't Do

### What the Bot CANNOT Do

| Limitation | Why | Workaround |
|---|---|---|
| **Hallucination** | LLMs generate plausible-sounding wrong answers | Monitor responses, provide feedback to improve |
| **Real-time notifications** | No live update capability for urgent announcements | Use WhatsApp alert button for emergencies |
| **Student data access** | Cannot access student records for security | Direct parents to portal or admin email |
| **Payment processing** | No integration with payment gateways | Link to school payment portal |
| **Complex calculations** | Cannot do precise fee breakdowns | Provide fee PDFs instead |
| **Language switching mid-chat** | Tamil/English context gets confused if mixed | Recommend one language per session |
| **Emotional support** | LLMs lack true empathy for sensitive issues | Suggest counseling contact or principal email |
| **Verification of external info** | Cannot verify admission deadlines from third parties | Hardcode key dates in system prompt |

### Known Constraints

1. **Response Time**: 5-15 seconds on first message (HF free tier cold start)
2. **Token Limit**: Max 400 tokens per response (~200 words)
3. **Memory**: Only remembers last 6 messages in conversation
4. **Accuracy**: Data accuracy depends entirely on Sanity CMS content quality
5. **Language**: Currently configured for English and Tamil only
6. **Mobile**: Best experience on mobile; desktop works but less optimized

---

## Multi-Language Support (Tamil)

### Current Setup: English + Tamil

The chatbot automatically serves both languages based on browser/device locale.

#### Language Flow
```
User device locale detected (EN/TA)
          ↓
buildSystemPrompt() checks Accept-Language header
          ↓
If TA (Tamil): inject Tamil version of system prompt + Tamil examples
          ↓
If EN (English): use English system prompt
          ↓
Bot responds in detected language
```

#### Tamil System Prompt (Short Version)

In `buildSystemPrompt()`, add after English prompt:

```javascript
const TAMIL_INTRO = `
நீங்கள் SSA பள்ளியின் உதவியாளர் AI அசிஸ்டன்ட்.
எங்கள் பள்ளியைப் பற்றி கேள்வி கேளுங்கள்.
சேர்க்கை, நேரம், சுবிধைகள், சாதனை பற்றி பதிலளிக்கலாம்.
`;
```

#### How to Add Tamil Content

1. **In Sanity Studio**: Add Tamil translations for all schemas
   - `achievementTamil`: Achievement name in Tamil
   - `newsTamil`: News title in Tamil
   - etc.

2. **In buildSystemPrompt()**:
   ```javascript
   if (language === 'ta') {
     // Use Tamil fields from Sanity
     data.achievements = data.achievements.map(a => ({
       ...a,
       name: a.achievementTamil || a.name
     }))
   }
   ```

3. **In ChatWidget.tsx**: 
   ```javascript
   const QUICK_QUESTIONS_TA = [
     'சேர்க்கை செயல்முறை என்ன?',
     'பள்ளி நேரம் என்ன?',
     'கிளை எங்கே உள்ளது?',
     'கட்டணம் எவ்வளவு?'
   ];
   ```

#### Language Preference UI (Optional Future Feature)

Store user's language choice in localStorage:
```javascript
// ChatWidget.tsx
const [language, setLanguage] = useState<'en' | 'ta'>(
  localStorage.getItem('chatLanguage') as 'en' | 'ta' || 'en'
);

const toggleLanguage = () => {
  const newLang = language === 'en' ? 'ta' : 'en';
  setLanguage(newLang);
  localStorage.setItem('chatLanguage', newLang);
};
// Add language toggle button near close button in header
```

---

## Analytics & Performance Monitoring

### What to Track

| Metric | Why | Target |
|---|---|---|
| **Chat initiation rate** | % of visitors who open chat | >5% |
| **Message send count** | Avg messages per session | >2 |
| **Quick question usage** | % using preset questions | >40% |
| **Response time** | API latency | <10s |
| **User satisfaction** | Post-chat rating (optional) | >4/5 ⭐ |
| **Bot accuracy** | Manual review of responses | >80% accurate |
| **Daily active users** | Unique chat users/day | >20 |

### Implementation: Add Analytics to ChatWidget

#### Step 1: Log Events (in ChatWidget.tsx)

```javascript
const logAnalytics = (event: string, data?: any) => {
  // Send to your analytics service
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event,
      timestamp: new Date().toISOString(),
      data
    })
  }).catch(err => console.error('Analytics error:', err));
};

// Call in key moments:
useEffect(() => {
  logAnalytics('chat_opened', { timestamp: Date.now() });
}, [isOpen]);

const sendMessage = async (text) => {
  logAnalytics('message_sent', { length: text.length });
  // ... rest of send logic
};
```

#### Step 2: Create Analytics API Route (`src/app/api/analytics/route.ts`)

```typescript
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(req: Request) {
  try {
    const { event, timestamp, data } = await req.json();
    
    // Log to file (development)
    const logEntry = `${timestamp} | ${event} | ${JSON.stringify(data)}\n`;
    const logPath = join(process.cwd(), 'logs', 'chatbot-analytics.log');
    
    await writeFile(logPath, logEntry, { flag: 'a' });
    
    // In production: send to Datadog, Sentry, or LogRocket
    // await sendToExternalAnalytics({ event, timestamp, data });
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return Response.json({ error: 'Failed to log' }, { status: 500 });
  }
}
```

#### Step 3: Simple Dashboard View (Production)

Create `src/app/admin/analytics/page.tsx` (protected page) to:
- Display daily chat counts
- Show average response times
- List top questions asked
- Track user satisfaction ratings

**For now**: Use Vercel Analytics dashboard + manual log review.

#### Step 4: Integrate with Vercel Analytics (Optional)

```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Metrics to Review Monthly

Every month, check:
1. **Performance**: Is response time degrading?
2. **Usage**: Are more users using the chatbot?
3. **Accuracy**: Are responses getting better?
4. **Errors**: Are there recurring error patterns?
5. **Costs**: Approaching rate limit?
6. **Feedback**: Any user complaints or suggestions?

---

## Support & Maintenance Guide

### Monthly Maintenance Checklist

- [ ] Review chatbot analytics (logs or Vercel dashboard)
- [ ] Check if response time is >15s (may need to upgrade HF)
- [ ] Update Sanity content (news, achievements, testimonials)
- [ ] Test 5 sample questions in live chatbot
- [ ] Monitor Vercel error logs for API failures
- [ ] Review HF API usage (approaching 1K/day limit?)
- [ ] Check for typos or inaccuracies in recent bot responses
- [ ] Update system prompt if school processes change

### When Something Goes Wrong

| Problem | Debug Steps | Contact |
|---|---|---|
| **Bot goes offline** | 1. Check Vercel logs 2. Verify HUGGINGFACE_API_TOKEN in Vercel | HF Support or Vercel Support |
| **Bot gives wrong info** | 1. Check Sanity data 2. Verify system prompt in code | Update Sanity content + redeploy |
| **Slow responses** | 1. Check HF API status 2. Monitor requests/day count | Upgrade HF plan or add caching |
| **Users report bugs** | 1. Log the exact question 2. Reproduce in development 3. File in GitHub Issues | Dev team or me |

### Roadmap: Future Enhancements

**Phase 2 (After 2 months)**:
- Add student testimonials as dynamic content
- Implement sentiment analysis (happy/sad reactions)
- Add "Contact Admin" button for complex queries
- Better Tamil language support with translation API

**Phase 3 (After 6 months)**:
- Fine-tune model on SSA School FAQ data
- Add multi-turn conversation context
- Implement chatbot user ratings
- Integrate with WhatsApp Business API

**Phase 4 (After 1 year)**:
- Move to custom trained model (if budget allows)
- Add support for parent notifications
- Link to school management system for live data
- Advanced analytics dashboard

---

## Cost & Budget Analysis

### Open-Source Model Strategy

**Current Setup (Cost-Free)**:
- **HuggingFace Inference API**: FREE with `hf_xxx_token` (no credit card required)
- **Mistral-7B-Instruct**: Open-source model, runs on HF infrastructure
- **Usage**: ~1,000 requests/day (generous free tier)
- **Cold starts**: 5-15 seconds on free tier (normal behavior)
- **Perfect for**: SSA School's initial launch and growth phase

### Cost Breakdown

| Component | Free Tier | Pro Tier | Notes |
|---|---|---|---|
| **HF API Calls** | ~1,000/day | Unlimited | Switch if >1K/day |
| **Sanity CMS** | ₹0 | ₹9,000/mo | Already using free tier |
| **Vercel Hosting** | ₹0–500/mo | ₹1,000+/mo | Based on bandwidth |
| **Domain** | ₹1,000/yr | — | Consistent |
| **TOTAL** | **₹83/mo** | **₹10,500+/mo** | Recommend free → pro after 3-6 months |

### When to Upgrade

| Metric | Action |
|---|---|
| **<500 requests/day** | Stay on Free tier |
| **500–1,000 requests/day** | Monitor, stay on Free |
| **1,000–5,000 requests/day** | Upgrade to HF Pro (₹750/mo) |
| **5,000+ requests/day** | Use Dedicated Endpoint (₹1,500/mo) or self-host |

> **Recommendation**: Launch on free tier, monitor analytics, upgrade in 3-6 months if needed.

---

## Quick Test After Deployment

Open your live Vercel URL and test these questions in the chatbot:

```
1. "How to apply for admission?"      → should explain 5-step process
2. "Where is the branch?"             → should show real Sanity address
3. "What are the school timings?"     → should say 8:30 AM to 4:00 PM
4. "Tell me about recent achievements" → should show Sanity achievement data
5. "What is the fee structure?"       → should suggest downloading PDF
```

---

*Generated for SSA School Website · HuggingFace + Sanity CMS + Next.js 14 + Vercel*
