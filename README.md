# AOIN – Live Commerce Marketplace

A modern live shopping platform built with **React 18**, **Vite**, and **Material Design 3 "Expressive"** design system.

[![Version](https://img.shields.io/badge/version-1.0.0-orange)](https://github.com)
[![React](https://img.shields.io/badge/react-18.3-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/vite-5.4-purple)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✨ Features

### For Shoppers
- 🔴 **AOIN Live** – Real-time shopping with interactive seller engagement
- 🏪 **Themed Shops** – Curated shopping experiences
- ⚡ **Daily Deals** – Limited-time exclusive offers
- 🤖 **Smart Discovery** – AI-powered recommendations
- 💳 **Secure Payments** – Safe transactions with easy returns
- 📦 **Fast Shipping** – Quick delivery with order tracking
- ❤️ **Wishlist** – Save and manage favorites
- 🎧 **24/7 Support** – Always available customer service

### For Merchants
- 📊 **Analytics Dashboard** – Real-time insights and metrics
- 🎥 **Live Streaming** – Engage customers in real-time
- 💰 **Flexible Pricing** – Competitive fee structure
- 📈 **Growth Tools** – Built-in marketing & promotions

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/react-app.git
cd react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📦 What's Inside

### Tech Stack
- **React 18.3** – Modern UI library with hooks
- **Vite 5.4** – Lightning-fast build tool
- **Tailwind CSS 3.4** – Utility-first styling
- **Lucide React** – Beautiful SVG icons
- **Material Design 3** – Professional design system

### Project Structure

```
react-app/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── index.jsx          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── M3Hero.jsx
│   │   ├── M3Features.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js               # Shared data & constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Design System

### Material Design 3 "Expressive"

This project uses **Material Design 3** with:

- **Large Border Radius** – 32px rounded corners for a soft, modern look
- **Tonal Color Surfaces** – Warm creams and pastels, no harsh whites
- **Asymmetric Layouts** – Dynamic "bento box" grid compositions
- **Expressive Typography** – Bold headlines mixing serif and sans-serif
- **Glassmorphism** – Subtle backdrop blur and transparency effects
- **Color Harmony** – Primary orange, secondary sage, tertiary lavender

### Color Palette

```css
/* Primary (Orange) */
primary-50:   #FFF8F4   /* Background */
primary-200:  #FFDCC1   /* Light containers */
primary-500:  #ea580c   /* Brand color */
primary-900:  #482818   /* Dark surfaces */

/* Surface (Warm Neutrals) */
surface-50:   #FFF8F4   /* Page background */
surface-100:  #FFF3EB   /* Elevated surfaces */
surface-900:  #52443D   /* Text */

/* Secondary (Sage Green) */
secondary-100: #E7F3EE
secondary-900: #0F3528

/* Tertiary (Lavender) */
tertiary-100: #EBE9FC
tertiary-900: #362F5C
```

### Border Radius Scale

```css
rounded-m3:     28px    /* Standard */
rounded-m3-lg:  32px    /* Cards (most common) */
rounded-m3-xl:  36px    /* Large elements */
rounded-full:   9999px  /* Pills & circles */
```

---

## 🧩 Components

### Available UI Components

All reusable components are in `src/components/ui/index.jsx`:

```jsx
import { 
  Button, 
  Chip, 
  IconButton, 
  M3Card, 
  FeatureCard,
  SectionHeader,
  BackgroundBlob
} from './components/ui';

// Examples
<Button variant="filled" icon={ArrowRight}>Shop Now</Button>
<Chip label="Fashion" active={true} />
<M3Card title="Deals" variant="primary" />
<FeatureCard icon={Zap} title="Fast" />
```

### Shared Constants

Store data in `src/constants/index.js`:

```jsx
import { CATEGORIES, STATS, FOOTER_LINKS } from '../constants';
```

---

## 🎯 Design Guidelines

### ✅ DO

- Use `bg-surface-50` for backgrounds (warm cream, not white)
- Use `rounded-m3-lg` (32px) for cards and containers
- Create asymmetric, dynamic layouts
- Use large, bold typography for headlines
- Mix serif italics with sans-serif for emphasis
- Add emotional, expressive visual elements

### ❌ DON'T

- Don't use pure `bg-white` (use tonal variants)
- Don't use small border radius like `rounded-md`
- Don't create symmetric grids (add visual interest)
- Don't use stark color contrasts (keep it warm)
- Don't use tiny typography for headlines

---

## 🔧 Customization

### Change Brand Color

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#YOUR_COLOR",
        }
      }
    }
  }
}
```

Then restart the dev server.

### Update Logo

Replace `public/logo.png` (recommended: 200x200px PNG with transparency).

### Modify Content

- **Component text**: `src/components/`
- **Data (categories, stats)**: `src/constants/index.js`
- **Styles & theme**: `tailwind.config.js` and `src/index.css`

### Add New Pages

```jsx
// 1. Create component
const NewPage = () => {
  return <div>Your content</div>;
};

// 2. Import in App.jsx
import NewPage from './components/NewPage';

// 3. Add to routing (if using React Router)
```

---

## 📤 Deployment

### GitHub Pages (Automatic)

This project is pre-configured for GitHub Pages with automatic CI/CD.

**Setup:**

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Go to repository **Settings → Pages**

3. Set **Source** to **GitHub Actions**

4. Your site deploys automatically on every push!

**Your site URL**: `https://YOUR_USERNAME.github.io/react-app/`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Manual Deployment

```bash
npm run deploy
```

This builds your project and pushes to the `gh-pages` branch.

---

## 🐛 Troubleshooting

### Site shows 404 errors

- Verify `base` path in `vite.config.js` matches your repository name
- Check that your repository is public
- Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (macOS)

### Styles not loading

- Verify `base` path in `vite.config.js`
- Clear browser cache
- Hard refresh your browser
- Check the Actions tab for build errors

### Build fails

- Check the **Actions** tab for detailed error logs
- Ensure all dependencies are installed: `npm install`
- Try building locally: `npm run build`

### Changes not showing

- Wait 1-2 minutes for GitHub Actions to complete
- Check the **Actions** tab to confirm deployment succeeded
- Hard refresh your browser and clear cache

---

## 📊 Performance

### Bundle Size (Production)
- **HTML**: ~0.86 KB
- **CSS**: ~28.64 KB
- **JavaScript**: ~168 KB (~52 KB gzipped)
- **Total**: ~197 KB (~81 KB gzipped)

### Optimizations
- ✅ Reusable component architecture
- ✅ Shared constants reduce duplication
- ✅ Tree-shaking enabled in Vite
- ✅ CSS purging in production
- ✅ Icon tree-shaking with lucide-react
- ✅ Ready for code-splitting with React.lazy

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Follow the Material Design 3 guidelines above
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a Pull Request

### Code Style
- Use functional components with React hooks
- Follow M3 design principles (32px radius, tonal colors)
- Extract reusable components to `src/components/ui/`
- Store static data in `src/constants/`
- Include accessibility attributes (aria-label, role, etc.)

---

## 📚 Resources

### Material Design 3
- [M3 Design Guidelines](https://m3.material.io/)
- [M3 Color System](https://m3.material.io/styles/color/overview)
- [M3 Components](https://m3.material.io/components)

### Documentation
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

### Deployment
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [DEPLOYMENT.md](./DEPLOYMENT.md) – Detailed deployment guide
- [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md) – Quick reference

---

## 📄 License

MIT License – Free to use for personal or commercial projects.

---

## 💬 Support

Need help?

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/react-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/react-app/discussions)
- **Documentation**: See [DEPLOYMENT.md](./DEPLOYMENT.md) and [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)

---

**Built with ❤️ using React, Vite, and Material Design 3**