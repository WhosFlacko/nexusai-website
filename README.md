# NexusAI Agency Website

A modern, responsive website for NexusAI - an advanced AI solutions agency. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, professional UI with glass-morphism effects and smooth animations
- **Responsive**: Optimized for all devices and screen sizes  
- **Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Meta tags and structured data for search engines
- **Accessible**: WCAG compliant design patterns
- **Dark Theme**: Professional dark color scheme with gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nexusai-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Deploy automatically on every push

### Environment Setup

For production deployment, ensure these settings in Vercel:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

## 🎨 Customization

### Colors & Branding

Edit the gradient and color schemes in:
- `tailwind.config.js` - Theme configuration
- `app/globals.css` - Custom CSS classes
- `app/page.tsx` - Component colors

### Content

Update the website content by modifying:
- **Services**: Edit the `services` array in `app/page.tsx`
- **Stats**: Update the `stats` array  
- **Contact Info**: Modify contact details in the contact section
- **Meta Tags**: Update SEO information in `app/layout.tsx`

### Styling

The site uses a custom design system with these key classes:
- `.gradient-text` - Blue to pink gradient text
- `.glass-card` - Glass-morphism card effect
- `.glow-button` - Glowing call-to-action buttons
- `.section-padding` - Consistent section spacing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration with static export
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS plugins

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, contact the NexusAI team at hello@nexusai.agency

---

Built with ❤️ for NexusAI