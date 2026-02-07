
# LGCRED Landing Page Redesign -- Brand-Consistent

Redesign the landing page following the comprehensive design prompt but adapted to LGCRED's red and black brand colors, real company metrics, and existing product details.

---

## What Changes

### 1. Hero Section (complete rewrite of `src/components/Hero.tsx`)
- **Gradient background**: Soft gradient using LGCRED red tones -- from a light rose/blush (e.g., `hsl(350, 60%, 95%)`) to a soft warm cream/white, keeping it on-brand but modern and airy
- **Decorative geometric shapes**: Soft circles and semi-circles in muted red/rose tones at 20-40% opacity, positioned at corners with `absolute` positioning and `pointer-events-none`
- **Bold headline**: "Get the Loan You Need, Fast" in large (48-64px) dark text
- **Short tagline**: "Simple application. Quick approval. Real results for Nigerians."
- **Illustrated loan cards**: CSS-only stacked/fanned cards showing LGCRED's real loan ranges (₦50K, ₦250K, ₦500K, ₦1M+) with Naira symbols and subtle rotation transforms
- **Primary CTA**: "Apply Now" in a bold rounded-pill button using LGCRED red (`hsl(350, 85%, 42%)`)
- **Secondary CTA**: "Calculate Repayment" as a subtle outline button, positioned below
- **Mobile-first**: Geometric elements scale down on mobile, loan cards stack, buttons are full-width

### 2. New Trust Section (new file: `src/components/TrustSection.tsx`)
- Title: "Trusted by Nigerians"
- 4 stat cards in a clean grid, using LGCRED's alternating white/red pattern:
  - Card 1 (white): "Less than 24hrs" -- Approval time
  - Card 2 (red): "5% /month" -- Interest from
  - Card 3 (red): "50+" -- Happy Customers
  - Card 4 (white): "₦50M+" -- Loans Disbursed
- Trust badges below: "100% Secure", "Quick Disbursement", "No Hidden Fees"
- Placed between Hero and Products section

### 3. "Why Choose LGCRED" Feature Section (new file: `src/components/WhyChooseUs.tsx`)
- 6 feature cards in a 2x3 or 3x2 grid with icons:
  - Loan ranges: ₦50K - ₦12M+
  - Approval: Less than 24 Hours
  - Repayment: 3-12 Months
  - No Hidden Fees
  - Flexible Repayment Options
  - SMS and Email Updates
- Each card: icon + bold metric + brief description
- Clean card design with subtle borders, no heavy gradients

### 4. Updated Page Layout (`src/pages/Index.tsx`)
- New order: Header > Hero > TrustSection > ProductsSection > WhyChooseUs > FAQ > Footer

### 5. FAQ Fix (`src/components/FAQ.tsx`)
- Update WhatsApp link from old number (`2348130222496`) to correct number (`2348170099789`)

### 6. Color/Theme Updates (`src/index.css` + `tailwind.config.ts`)
- Add new CSS custom properties for soft gradient tones (light rose, warm cream) derived from the existing red primary
- No blue CTA -- keep LGCRED red as the primary action color throughout
- Add utility classes for the geometric shapes' pastel red tones

---

## What Stays the Same
- Header (white, already approved)
- Footer (dark, correct phone number)
- Products section structure and content (real loan data)
- All routing, loan pages, calculator, apply page
- LGCRED red (`hsl(350, 85%, 42%)`) and black as brand colors
- Real company metrics: ₦50M+ disbursed, 50+ customers, less than 24hr approval, 5% monthly interest

---

## Technical Notes

### Files to create
- `src/components/TrustSection.tsx`
- `src/components/WhyChooseUs.tsx`

### Files to modify
- `src/components/Hero.tsx` -- complete rewrite
- `src/pages/Index.tsx` -- add new sections
- `src/components/FAQ.tsx` -- fix WhatsApp number
- `src/index.css` -- add soft gradient color tokens
- `tailwind.config.ts` -- extend with new color utilities

### Design principles
- All geometric/decorative elements built with pure CSS (no external images)
- Gradient backgrounds use CSS `background: linear-gradient(...)` for performance
- Mobile-first responsive design with touch-friendly 48px minimum tap targets
- No blur effects, no abstract SVGs -- clean, intentional design that doesn't look AI-generated
- Brand colors throughout: red for CTAs and accents, black/dark for text, soft rose/cream for backgrounds
