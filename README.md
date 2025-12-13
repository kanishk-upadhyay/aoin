# AOIN – Live Commerce Marketplace

A modern, premium live shopping platform built with Material Design 3 "Expressive" design system, featuring bold typography, large border radius, tonal color surfaces, and asymmetric layouts.

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![React](https://img.shields.io/badge/react-18.3-blue)
![Vite](https://img.shields.io/badge/vite-5.4-purple)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment-to-github-pages)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Components](#components)
- [Customization](#customization)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### For Shoppers

- **AOIN Live** – Real-time shopping with interactive seller engagement
- **Themed Shops** – Curated shopping experiences tailored to your interests
- **Innovation Window** – Limited-time daily deals and exclusive offers
- **Smart Discovery** – AI-powered product recommendations
- **Secure Payments** – Safe transactions with easy returns
- **Fast Delivery** – Quick shipping with real-time order tracking
- **Wishlist & Cart** – Save favorites and manage purchases seamlessly
- **24/7 Support** – Always-available customer service

### For Merchants

- **Seller Dashboard** – Comprehensive analytics and insights
- **Live Streaming** – Engage customers in real-time
- **Competitive Pricing** – Flexible fee structure
- **Growth Tools** – Built-in marketing and promotion features

---

## Tech Stack

- **React 18.3** – Modern UI library with hooks
- **Vite 5.4** – Fast build tool and development server
- **Tailwind CSS 3.4** – Utility-first CSS framework
- **Lucide React** – Tree-shakeable icon library
- **PostCSS** – CSS processing and optimization
- **Material Design 3** – Google's latest design system

---

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Modern browser with ES6+ support

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The production-ready files will be output to the `dist/` directory.

### Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

#### Prerequisites

- Your project must be in a GitHub repository
- You have admin access to the repository settings

#### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` or `master` branch.

**Setup Instructions:**

1. Push your project to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository settings on GitHub
3. Navigate to **Settings → Pages**
4. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
   - The workflow will run automatically on your next push

5. Once the workflow completes, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/react-app/
   ```

#### Manual Deployment

If you prefer to deploy manually:

1. Install the `gh-pages` package (already in devDependencies):
```bash
npm install
```

2. Deploy your site:
```bash
npm run deploy
```

This command builds your project and pushes the `dist` folder to the `gh-pages` branch.

3. Enable GitHub Pages in your repository settings (same as step 2-5 above)

#### Important Notes

- The `base` path in `vite.config.js` is set to `/react-app/` to work correctly on GitHub Pages
- If you're using a custom domain, update the `base` path accordingly
- Changes pushed to `main` or `master` branch trigger automatic deployment via GitHub Actions
- Deployments typically take 1-2 minutes to go live

### Cache Clearing

If styles appear incorrect after updates, clear the build cache:

```bash
rm -rf node_modules/.vite dist
npm run dev
```

Then perform a hard refresh in your browser:
- **Windows/Linux**: `Ctrl + Shift + R`
- **macOS**: `Cmd + Shift + R`

---

## Project Structure

```
react-app/
├── public/
│   └── logo.png              # Brand logo
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── index.jsx     # Reusable UI component library
│   │   ├── Header.jsx        # Navigation with category chips
│   │   ├── M3Hero.jsx        # Hero section with asymmetric layout
│   │   ├── M3Features.jsx    # Feature cards and benefits
│   │   ├── CTA.jsx           # Call-to-action section with FAB
│   │   └── Footer.jsx        # Footer with newsletter signup
│   ├── constants/
│   │   └── index.js          # Shared data and constants
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles and M3 utilities
├── index.html                # HTML template
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind and M3 theme configuration
├── vite.config.js            # Vite build configuration
└── README.md                 # Project documentation
```

### Key Files

| File | Description |
|------|-------------|
| `src/components/ui/index.jsx` | Centralized UI component library (Button, Chip, Card, etc.) |
| `src/constants/index.js` | Shared constants (categories, stats, navigation links) |
| `src/index.css` | M3 utility classes and custom CSS styles |
| `tailwind.config.js` | M3 color system and design tokens |

---

## Design System

This project implements **Material Design 3 "Expressive"** with the following principles:

- **Large Border Radius** – 32px rounded corners for a soft, modern aesthetic
- **Tonal Color Surfaces** – Warm cream and orange tones instead of pure white
- **Asymmetric Layouts** – Dynamic "bento box" grid arrangements
- **Expressive Typography** – Mixing serif italics with sans-serif fonts
- **Glassmorphism Effects** – Backdrop blur and transparency layers
- **Color Harmony** – Cohesive primary (orange), secondary (sage), tertiary (lavender) palette

### Color Palette

#### Primary (Orange)

```css
primary-50:  #FFF8F4  /* Page background */
primary-200: #FFDCC1  /* Light containers */
primary-400: #FFB787  /* Interactive elements */
primary-500: #ea580c  /* Brand color */
primary-900: #482818  /* Dark surfaces */
```

#### Surface (Warm Neutrals)

```css
surface-50:  #FFF8F4  /* Page background */
surface-100: #FFF3EB  /* Elevated surfaces */
surface-200: #FDEEE3  /* Containers */
surface-900: #52443D  /* Primary text */
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
rounded-m3:     28px    /* Standard elements */
rounded-m3-lg:  32px    /* Cards and containers (most common) */
rounded-m3-xl:  36px    /* Extra large elements */
rounded-full:   9999px  /* Pills, chips, circular buttons */
rounded-xl:     12px    /* Small interactive elements */
rounded-2xl:    16px    /* Icon containers */
```

### Design Guidelines

**Use:**
- `bg-surface-50` for page backgrounds (warm cream)
- `rounded-m3-lg` (32px) for cards and containers
- Tonal color surfaces (pastel backgrounds)
- Asymmetric, dynamic layouts
- Large typography (text-4xl to text-7xl for headlines)
- Mixed serif italics with sans-serif for emphasis

**Avoid:**
- Pure `bg-white` (use `bg-surface-50` or tonal variants)
- Pure `bg-black` (use `bg-surface-900`)
- Small border radius like `rounded-md` (minimum `rounded-xl`)
- Small typography for headlines
- Symmetric grids without visual interest
- Stark color contrasts

---

## Components

### UI Component Library

The project includes a comprehensive set of reusable components in `src/components/ui/index.jsx`:

```jsx
import { 
  Button, 
  Chip, 
  IconButton, 
  M3Card, 
  FeatureCard 
} from './components/ui';

// Usage examples
<Button variant="filled" icon={ArrowRight}>Shop Now</Button>
<Chip label="Fashion" active={true} onClick={handleClick} />
<IconButton icon={Search} filled badge={3} />
<M3Card title="Daily Deals" subtitle="50% off" variant="primary" />
<FeatureCard icon={Zap} title="Fast" description="Lightning speed" />
```

### Available Components

- **Button** – Unified button with filled, outlined, and tonal variants
- **Chip** – Navigation and filter chips with active states
- **IconButton** – Icon-only buttons with optional badge support
- **M3Card** – Reusable card with primary, secondary, and tertiary color variants
- **FeatureCard** – Feature display cards with icons
- **BenefitChip** – Benefit and feature chips
- **SectionHeader** – Consistent section headers across pages
- **BackgroundBlob** – Decorative abstract background shapes
- **StatCard** – Statistics display components
- **FooterLink** – Footer navigation links
- **Container / Section** – Layout wrapper components

### Constants

Shared data is centralized in `src/constants/index.js`:

```jsx
import { CATEGORIES, STATS, FOOTER_LINKS } from '../constants';
```

**Available Constants:**
- `CATEGORIES` – Navigation category data
- `STATS` – Company statistics and metrics
- `FOOTER_LINKS` – Footer navigation structure
- `SOCIAL_LINKS` – Social media links
- `LEGAL_LINKS` – Privacy policy, terms of service links
- `M3_VARIANTS` – Color variant mappings
- `ICON_SIZES` – Standardized icon size tokens

---

## Customization

### Changing the Brand Color

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#YOUR_COLOR", // Update this value
        }
      }
    }
  }
}
```

Restart the development server after making changes.

### Updating the Logo

Replace `public/logo.png` with your logo. Recommended specifications:
- Format: PNG with transparency
- Size: 200x200px
- Optimized for web

### Modifying Content

- Component text and structure: `src/components/`
- Shared data (categories, stats): `src/constants/index.js`
- Styling and theme: `tailwind.config.js` and `src/index.css`

### Adding New Pages

```jsx
// 1. Create new component file
const NewPage = () => {
  return <div>New Page Content</div>;
};
export default NewPage;

// 2. Import in App.jsx
import NewPage from './components/NewPage';

// 3. Integrate into routing system (if using React Router)
```

---

## Performance

### Bundle Size (Production Build)

- **HTML**: ~0.86 KB
- **CSS**: ~28.64 KB
- **JavaScript**: ~168 KB (~52 KB gzipped)
- **Total**: ~197 KB (~81 KB gzipped)

### Optimizations

- Component library architecture eliminates code duplication
- Shared constants reduce data redundancy
- Tree-shaking enabled via Vite
- CSS purging in production builds
- Ready for code-splitting with React.lazy
- Icon tree-shaking via lucide-react

### Performance Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## Troubleshooting

### White Background Instead of Warm Cream

Clear all build caches and restart:

```bash
rm -rf node_modules/.vite dist
npm run dev
```

Then perform a hard refresh in your browser.

### Sharp Corners Instead of Rounded

This is typically caused by browser caching. Perform a hard refresh:
- **Windows/Linux**: `Ctrl + Shift + R`
- **macOS**: `Cmd + Shift + R`

### Incorrect Colors

1. Verify `tailwind.config.js` contains the correct M3 color definitions
2. Check browser DevTools for CSS conflicts
3. Clear build cache: `rm -rf node_modules/.vite dist`
4. Restart the development server

### Component Import Errors

Ensure all dependencies are installed:

```bash
npm install
```

Verify import paths match the file structure. Import from `'./components/ui'` not `'./ui'`.

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Follow the Material Design 3 principles outlined above
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Style

- Use functional components with React hooks
- Follow M3 design guidelines (32px border radius, tonal colors)
- Extract reusable components to `src/components/ui/`
- Store static data in `src/constants/`
- Include accessibility attributes (aria-label, role, etc.)
- Write clear, descriptive commit messages

---

## Resources

### Material Design 3

- [M3 Design Guidelines](https://m3.material.io/)
- [M3 Color System](https://m3.material.io/styles/color/overview)
- [M3 Components](https://m3.material.io/components)

### React & Build Tools

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## License

MIT License – This project is free to use for personal or commercial purposes.

---

## Support

For questions, issues, or feature requests:

- **Issues**: [GitHub Issues](your-repo-url/issues)
- **Discussions**: [GitHub Discussions](your-repo-url/discussions)
- **Documentation**: Refer to this README

### Deployment Help

For comprehensive deployment instructions:
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed GitHub Pages setup
- Use [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md) for a quick reference
- Check [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) for pre-deployment verification
- Review [CLEANUP_SUMMARY.md](./CLEANUP_SUMMARY.md) for codebase optimization details

---

**Built with Material Design 3 "Expressive"**