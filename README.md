# Md. Subahan Ali - Portfolio Website

A modern, responsive portfolio website showcasing my expertise as a Full Stack Developer specializing in React.js and the MERN stack. Built with Next.js, Tailwind CSS, and Framer Motion for a smooth, professional user experience.

## Overview

This portfolio demonstrates my skills in creating beautiful, interactive web applications with a focus on user experience and technical excellence. The design features a professional dark theme with cyan accents, smooth animations, and a clean, modern aesthetic that reflects current web design trends.

**Assalamu Alaikum!** Welcome to my portfolio. I'm Md. Subahan Ali, a Computer Science Engineer passionate about crafting user-centric digital experiences using the MERN stack.

## Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for elegant page transitions and interactive elements
- **Modern Theme**: Professional dark color scheme with cyan accents for visual appeal
- **Performance Optimized**: Built with Next.js 16 and optimized for fast loading
- **Clean Code**: TypeScript for type safety and maintainability
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router and TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with OKLCH color space
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) high-quality components
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Typography**: [Geist Font](https://vercel.com/font) by Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main portfolio page
│   └── globals.css             # Global styles and CSS variables
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation header with links
│   │   └── footer.tsx          # Footer with contact info
│   └── sections/
│       ├── hero.tsx            # Hero/landing section
│       ├── about.tsx           # About me section
│       ├── services.tsx        # Services offered
│       ├── experience.tsx      # Professional experience timeline
│       └── contact.tsx         # Contact form and methods
├── public/                     # Static assets and images
└── package.json                # Dependencies and scripts
```

## Page Sections

### Hero Section
The landing area featuring:
- Prominent headline and value proposition
- Call-to-action buttons
- Key statistics (5+ years experience, 20+ projects, 50+ happy clients)
- Animated avatar with floating animation

### About Section
Comprehensive introduction including:
- My background and journey in web development
- Current focus and specialization in React.js
- Why to work with me and my approach
- Tech stack display (React, Node.js, MongoDB, etc.)
- Visual skill proficiency indicators

### Services Section
Six core services offered:
1. **Single-Page Application Development** - Fast, responsive React apps
2. **UI/UX Design Integration** - Beautiful, user-friendly interfaces
3. **API Integration** - Seamless complex API connections
4. **Database Design** - Efficient MongoDB architectures
5. **Responsive Design** - Mobile-friendly applications
6. **Full Stack Solutions** - Complete MERN stack development

Each service displays with icons, descriptions, and hover effects.

### Experience Section
Professional work history with:
- Timeline layout with visual indicators
- Company names and job titles
- Year ranges and descriptions
- Skills and technologies used
- Clear visual hierarchy

### Contact Section
Multiple contact methods:
- Email and phone information
- Functional contact form
- Social media links (LinkedIn, GitHub)
- Direct messaging capability

## Design System

### Color Palette

The portfolio uses OKLCH color space for modern, perceptually uniform colors:

**Light Mode (default)**:
- **Background**: Dark Navy `oklch(0.08 0 0)`
- **Foreground**: Off-White `oklch(0.95 0 0)`
- **Primary**: Purple `oklch(0.45 0.18 260)`
- **Accent**: Cyan `oklch(0.62 0.2 200)`
- **Border**: Subtle Dark `oklch(0.18 0 0)`
- **Card**: Slightly Lighter `oklch(0.11 0 0)`
- **Muted**: Mid-tone `oklch(0.22 0 0)`

All colors are defined as CSS custom properties in `/app/globals.css` for easy customization.

### Typography

- **Font Family**: Geist (single font family for clean consistency)
- **Headings**: Bold (font-weight: 700) with generous sizing
- **Body**: Regular weight (400) with relaxed line-height
- **Display**: Large text for hero (5xl-7xl)
- **Accents**: Cyan color for visual emphasis and brand identity

### Spacing & Layout

- **Grid**: Mobile-first, responsive grid layouts
- **Gaps**: Consistent spacing with gap-8 and gap-6
- **Padding**: Card padding of px-6 py-4 (24px × 16px)
- **Radius**: 10px base border radius for rounded corners

## Animation Patterns

### Framer Motion Usage

**Page Load Animations**:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Scroll-Triggered Animations**:
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**Hover Interactions**:
```tsx
whileHover={{ y: -4, scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Staggered Lists**:
```tsx
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
```

## Customization Guide

### Update Personal Information

**1. Header Navigation** (`/components/layout/header.tsx`):
```tsx
<span className="text-lg font-bold">Your Name</span>
```

**2. Hero Section** (`/components/sections/hero.tsx`):
- Update headline and description
- Modify statistics
- Change avatar initials

**3. About Section** (`/components/sections/about.tsx`):
- Update bio and journey
- Modify tech stack array
- Adjust skill descriptions

**4. Services** (`/components/sections/services.tsx`):
- Add/remove service items
- Update icons and descriptions
- Customize icons from lucide-react

**5. Experience** (`/components/sections/experience.tsx`):
- Add work experiences
- Update years and companies
- List relevant skills

**6. Contact** (`/components/sections/contact.tsx`):
- Update email and phone
- Modify social media links
- Customize form fields

### Modify Colors

Edit CSS variables in `/app/globals.css`:

```css
:root {
  --background: oklch(0.08 0 0);
  --accent: oklch(0.62 0.2 200);
  /* ...other variables... */
}
```

Use [OKLCH Color Picker](https://oklch.com/) to find perfect colors.

### Change Fonts

In `/app/layout.tsx`:

```tsx
import { YourFont } from 'next/font/google'

const font = YourFont({ subsets: ['latin'] })

// In @theme directive in globals.css
--font-sans: 'YourFont', sans-serif;
```

## Getting Started

### Prerequisites

- Node.js 18+ (v20 or v22 recommended)
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Visit [http://localhost:3000](http://localhost:3000)

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint checks
npm run lint

# Format code with Prettier
npm run format
```

## Performance

- Optimized bundle size with code splitting
- CSS modules for scoped styling
- Image optimization with Next.js Image component
- Lazy loading for above-the-fold content
- Minimal JavaScript for fast page loads

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com/)
3. Vercel automatically detects Next.js and deploys
4. Each push automatically triggers a new deployment

**Benefits**:
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Environment variables management
- Preview deployments for PRs

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the 'out' directory
```

**GitHub Pages**:
```bash
npm run build
# Push to gh-pages branch
```

**Self-Hosted (AWS, DigitalOcean, etc.)**:
```bash
npm run build
npm start
```

## SEO Optimization

- Semantic HTML with proper heading hierarchy
- Meta tags for Open Graph and Twitter
- Mobile viewport configuration
- Structured data support
- XML sitemap ready
- Fast Core Web Vitals scores

## Accessibility Features

- WCAG 2.1 Level AA compliance
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Future Enhancements

- [ ] Blog section with articles
- [ ] Project portfolio with case studies
- [ ] Dark/light mode toggle
- [ ] Multi-language support (English/Bangla)
- [ ] CMS integration for dynamic content
- [ ] Client testimonials section
- [ ] Newsletter subscription
- [ ] Analytics integration

## Contact Information

- **Email**: subahanislam523@gmail.com
- **Phone**: +8801786727749
- **Location**: Bangladesh
- **LinkedIn**: [Connect on LinkedIn](#)
- **GitHub**: [Visit GitHub](#)

## License

This portfolio is open source under the MIT License. Feel free to use it as a template for your own portfolio!

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

## Support

If you have questions or suggestions:
1. Open an issue on GitHub
2. Email: subahanislam523@gmail.com
3. Check documentation in code comments

---

**Made with passion by Md. Subahan Ali**

*Crafting beautiful, interactive web applications with React.js and modern web technologies.*
