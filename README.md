# AOIN – Live Commerce Marketplace

A modern, premium live shopping platform built with **Material Design 3 "Expressive"** – featuring bold, emotional design with large border radius, tonal color surfaces, and asymmetric layouts.

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![React](https://img.shields.io/badge/react-18.3-blue)
![Vite](https://img.shields.io/badge/vite-5.4-purple)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🎨 Material Design 3 "Expressive"

This project implements **M3 Expressive** design system with:

- ✨ **Large Border Radius** (32px) - No sharp corners!
- 🎨 **Tonal Color Surfaces** - Warm creams and oranges, not pure white
- 📐 **Asymmetric "Bento Box" Layouts** - Dynamic, engaging grids
- 🔤 **Expressive Typography** - Mixing serif italics with sans-serif
- 🎯 **Floating Action Button (FAB)** - Prominent orange cart button
- 💎 **Glassmorphism Effects** - Backdrop blur and transparency
- 🌈 **Color Harmony** - Primary orange, secondary sage, tertiary lavender

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Modern browser with ES6+ support

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-app

# Install dependencies
npm install

# Clear cache (IMPORTANT for first run!)
rm -rf node_modules/.vite dist

# Start development server
npm run dev
```

Visit **http://localhost:5173**

**Then HARD REFRESH your browser:**
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Output will be in the `dist/` folder, ready to deploy.

---

## ✅ Design Verification Checklist

After starting the dev server, verify these M3 elements are displaying correctly:

### Visual Elements
- [ ] **Warm Background** - Page background is `#FFF8F4` (cream/warm), NOT white
- [ ] **Large Rounded Corners** - All cards use 32px border radius
- [ ] **Tonal Cards** - Soft orange, sage green, lavender containers
- [ ] **Asymmetric Grid** - Hero section spans 2 columns, cards vary in height
- [ ] **FAB Button** - Orange floating cart button in bottom-right corner
- [ ] **Chip Navigation** - Rounded pill-shaped category buttons in header
- [ ] **Serif Typography** - "Live Shopping" text uses italic serif font

### Color Verification
- [ ] Background: `#FFF8F4` (warm cream)
- [ ] Primary Orange: `#ea580c`
- [ ] Surface Cards: Pastel tones (not stark white)
- [ ] CTA Section: Dark brown `#482818` with orange accents

**If you see pure white backgrounds or sharp corners (4px), clear your cache and hard refresh!**

---

## 🎨 M3 Design System

### Color Palette

#### Primary (Orange)
```css
primary-50:  #FFF8F4  /* Lightest, page background */
primary-200: #FFDCC1  /* Light containers */
primary-400: #FFB787  /* Interactive elements */
primary-500: #ea580c  /* Brand color */
primary-900: #482818  /* Dark surfaces, CTA */
```

#### Surface (Warm Neutrals)
```css
surface-50:  #FFF8F4  /* Page background */
surface-100: #FFF3EB  /* Elevated surfaces */
surface-200: #FDEEE3  /* Containers */
surface-900: #52443D  /* Text on light backgrounds */
```

#### Secondary (Sage Green)
```css
secondary-100: #E7F3EE  /* Container background */
secondary-900: #0F3528  /* Text on secondary */
```

#### Tertiary (Lavender)
```css
tertiary-100: #EBE9FC  /* Container background */
tertiary-900: #362F5C  /* Text on tertiary */
```

### Border Radius Scale

```css
rounded-m3:     28px  /* Standard */
rounded-m3-lg:  32px  /* Most common, cards & containers */
rounded-m3-xl:  36px  /* Extra large elements */
rounded-full:   9999px /* Pills, chips, buttons */
rounded-xl:     12px  /* Small interactive elements */
rounded-2xl:    16px  /* Icon containers */
```

### Component Classes

#### Buttons
```jsx
<button className="btn-filled">Primary Action</button>
<button className="btn-outlined">Secondary Action</button>
<button className="btn-tonal">Tertiary Action</button>
```

#### Cards
```jsx
<div className="m3-card m3-card-primary">Primary Card</div>
<div className="m3-card m3-card-secondary">Secondary Card</div>
<div className="m3-card m3-card-tertiary">Tertiary Card</div>
```

#### Chips (Navigation)
```jsx
<button className="chip chip-selected">Active</button>
<button className="chip chip-unselected">Inactive</button>
```

#### Icon Buttons
```jsx
<button className="icon-btn icon-btn-filled">Filled</button>
<button className="icon-btn icon-btn-standard">Standard</button>
```

#### FAB (Floating Action Button)
```jsx
<button className="fab">
  <ShoppingCart />
</button>
```

---

## 📁 Project Structure

```
react-app/
├── public/
│   └── logo.png              # Brand logo
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── index.jsx     # Reusable UI components library
│   │   ├── Header.jsx        # Navigation with chips
│   │   ├── M3Hero.jsx        # Hero section with bento layout
│   │   ├── M3Features.jsx    # Feature cards and benefits
│   │   ├── CTA.jsx           # Call-to-action section + FAB
│   │   └── Footer.jsx        # Footer with newsletter
│   ├── constants/
│   │   └── index.js          # Shared data & constants
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & M3 utilities
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind + M3 theme
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

### Key Files

- **`src/components/ui/index.jsx`** - Centralized UI component library (Button, Chip, Card, etc.)
- **`src/constants/index.js`** - Shared constants (categories, stats, links)
- **`src/index.css`** - M3 utility classes and custom CSS
- **`tailwind.config.js`** - M3 color system and design tokens

---

## 🧩 Reusable Components

The project uses a **component-first architecture** to eliminate redundancy:

### UI Components (`src/components/ui/index.jsx`)

```jsx
import { Button, Chip, IconButton, M3Card, FeatureCard } from './components/ui';

// Usage examples:
<Button variant="filled" icon={ArrowRight}>Shop Now</Button>
<Chip label="Fashion" active={true} onClick={handleClick} />
<IconButton icon={Search} filled badge={3} />
<M3Card title="Daily Deals" subtitle="50% off" variant="primary" />
<FeatureCard icon={Zap} title="Fast" description="Lightning speed" />
```

**Available Components:**
- `Button` - Unified button with variants
- `Chip` - Navigation/filter chips
- `IconButton` - Icon-only buttons with badge support
- `M3Card` - Reusable card with color variants
- `FeatureCard` - Feature display cards
- `BenefitChip` - Benefit/feature chips
- `SectionHeader` - Consistent section headers
- `BackgroundBlob` - Abstract background shapes
- `StatCard` - Statistics display
- `FooterLink` - Footer navigation links
- `Container` / `Section` - Layout wrappers

### Constants (`src/constants/index.js`)

```jsx
import { CATEGORIES, STATS, FOOTER_LINKS } from '../constants';

// No more hardcoded data duplication!
```

**Available Constants:**
- `CATEGORIES` - Navigation categories
- `STATS` - Company statistics
- `FOOTER_LINKS` - Footer navigation structure
- `SOCIAL_LINKS` - Social media links
- `LEGAL_LINKS` - Privacy, Terms, etc.
- `M3_VARIANTS` - Color variant mappings
- `ICON_SIZES` - Standardized icon sizes

---

## 🎯 Design Principles

### ✅ DO
1. Use `bg-surface-50` for page backgrounds (warm cream)
2. Use `rounded-m3-lg` (32px) for cards and containers
3. Use tonal color surfaces (pastel backgrounds)
4. Create asymmetric, dynamic layouts
5. Use large typography (4xl-7xl for headlines)
6. Mix serif italics with sans-serif for emphasis
7. Add emotional, expressive elements

### ❌ DON'T
1. **NO** pure `bg-white` - Use `bg-surface-50` or tonal variants
2. **NO** pure `bg-black` - Use `bg-surface-900`
3. **NO** `rounded-md` (4px) - Minimum `rounded-xl` (12px)
4. **NO** small text - Be bold with typography
5. **NO** symmetric grids - Add visual interest with asymmetry
6. **NO** stark contrasts - Use warm, tonal colors

---

## 🎨 Customization Guide

### Change Brand Color

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#YOUR_COLOR", // Change this
        }
      }
    }
  }
}
```

Then restart the dev server.

### Update Logo

Replace `public/logo.png` with your logo (recommended size: 200x200px PNG with transparency).

### Modify Content

All component text is in `src/components/`. Data like categories and stats are in `src/constants/index.js`.

### Add New Pages

```jsx
// 1. Create component
const NewPage = () => {
  return <div>New Page Content</div>;
};

// 2. Import in App.jsx
import NewPage from './components/NewPage';

// 3. Add to routing (if using React Router)
```

---

## 🔍 Troubleshooting

### Problem: Still seeing white background

**Solution:**
```bash
# Clear ALL caches
rm -rf node_modules/.vite dist
npm run dev

# Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
```

### Problem: Sharp corners instead of rounded

**Cause:** Browser cache  
**Solution:** Hard refresh with `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Problem: Colors look wrong

**Check:**
1. Verify `tailwind.config.js` has correct M3 colors
2. Check browser DevTools for CSS conflicts
3. Clear build cache: `rm -rf node_modules/.vite dist`
4. Restart dev server

### Problem: Components not found

**Solution:**
```bash
# Ensure all dependencies are installed
npm install

# Check import paths match file structure
# Import from './components/ui' not './ui'
```

---

## 📊 Performance

### Bundle Size (Production)
- **HTML**: ~0.86 KB
- **CSS**: ~28.64 KB
- **JS**: ~168 KB (52 KB gzipped)
- **Total**: ~197 KB (~81 KB gzipped)

### Optimizations Implemented
- ✅ Component library eliminates code duplication
- ✅ Shared constants reduce data redundancy
- ✅ Tree-shaking enabled via Vite
- ✅ CSS purged in production
- ✅ Lazy loading ready (React.lazy support)
- ✅ Icon tree-shaking via lucide-react

### Lighthouse Score Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.4** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library (tree-shakeable)
- **PostCSS** - CSS processing
- **M3 Design System** - Google's Material Design 3

---

## 🎓 Learning Resources

### Material Design 3
- [M3 Design Guidelines](https://m3.material.io/)
- [M3 Color System](https://m3.material.io/styles/color/overview)
- [M3 Components](https://m3.material.io/components)

### React & Vite
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the M3 design principles (see above)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

**Code Style:**
- Use functional components with hooks
- Follow M3 design rules (32px radius, tonal colors)
- Extract reusable components to `src/components/ui/`
- Store static data in `src/constants/`
- Add accessibility attributes (aria-label, etc.)

---

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 🎯 Features

### For Shoppers
- 🔴 **AOIN Live** - Real-time shopping with seller interaction
- 🏪 **Themed Shops** - Curated shopping experiences
- ⚡ **Innovation Window** - Limited-time daily deals
- 📈 **Smart Discovery** - AI-powered product recommendations
- 🛡️ **Secure Payments** - Safe transactions with easy returns
- 📦 **Fast Delivery** - Quick shipping with order tracking
- ❤️ **Wishlist & Cart** - Save favorites and manage purchases
- 🎧 **24/7 Support** - Always-available customer service

### For Merchants
- 📊 **Seller Dashboard** - Comprehensive analytics
- 🎥 **Live Streaming** - Engage customers in real-time
- 💰 **Competitive Pricing** - Flexible fee structure
- 📈 **Growth Tools** - Marketing and promotion features

---

## 💡 Pro Tips

1. **Always use M3 components** from `src/components/ui/` instead of creating duplicates
2. **Store data in constants** - Never hardcode repeated data
3. **Use Tailwind utilities** - Avoid custom CSS when possible
4. **Follow the color system** - Stick to primary/secondary/tertiary/surface palette
5. **Test responsiveness** - Check mobile (375px), tablet (768px), desktop (1440px)
6. **Optimize images** - Use WebP format when possible
7. **Add accessibility** - Include aria-labels and keyboard navigation
8. **Keep it expressive** - M3 is about emotion and personality!

---

## 📞 Support

Need help? Check these resources:

1. **Issues** - [GitHub Issues](your-repo-url/issues)
2. **Discussions** - [GitHub Discussions](your-repo-url/discussions)
3. **Documentation** - This README!

---

**Built with ❤️ using Material Design 3 "Expressive"**

*Remember: If you change the border radius back to 4px, you're fired.* 😉