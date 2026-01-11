# Kiddovate Website

A beautiful, interactive landing page for the Kiddovate educational gaming app built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🎨 Features

- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Get in touch with the Kiddovate team
- **Download Links**: Easy access to Play Store and App Store
- **YouTube Integration**: Direct link to Kiddovate YouTube channel
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 📂 Project Structure

```
kiddovate-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Screenshots.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.ts
└── package.json
```

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with download buttons
2. **Features**: Six colorful feature cards showcasing app capabilities
3. **Screenshots**: Horizontal scrollable app preview gallery
4. **Contact**: Form for user inquiries and feedback
5. **Footer**: Social links and copyright information

## 🛠️ Customization

### Update Download Links

Edit the links in `app/components/Hero.tsx`:

```tsx
<a href="YOUR_PLAY_STORE_URL" ...>
<a href="YOUR_APP_STORE_URL" ...>
```

### Add Real Screenshots

Replace placeholder screenshots in `app/components/Screenshots.tsx` with actual app images.

### Configure Contact Form

The contact form currently logs to console. To connect to a backend:

1. Set up a backend API (e.g., Next.js API routes)
2. Update the `handleSubmit` function in `app/components/Contact.tsx`

## 🎨 Color Scheme

The website uses Kiddovate's brand colors:

- Primary Orange: `#F7AC3D`
- Primary Blue: `#0077B6`
- Dark Blue: `#264653`
- Light Blue: `#69CAFD`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

Deploy easily on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 📝 License

Copyright © 2026 Kiddovate. All rights reserved.
