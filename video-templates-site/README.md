# Video Templates Site

A modern video template creation platform built with Next.js, inspired by Clippie's design.

## 🚀 Features

- **Clean Homepage** with hero section and template gallery
- **Multiple Video Templates** (Top 5, Reddit Stories, Comparisons, etc.)
- **Server-Side Rendering** with Next.js
- **Responsive Design** with Tailwind CSS
- **API Routes** for subscription management
- **Pricing Page** with subscription tiers
- **Ready for Monetization** with Google AdSense and paid subscriptions

## 📁 Project Structure

```
video-templates-site/
├── pages/
│   ├── api/
│   │   └── subscription/     # API routes for subscription management
│   ├── templates/            # Individual template pages
│   ├── _app.js              # Next.js app wrapper
│   ├── index.js             # Homepage
│   ├── templates.js         # All templates page
│   └── pricing.js           # Pricing page
├── components/
│   ├── Navbar.js            # Navigation component
│   └── TemplateCard.js      # Template card component
├── styles/
│   └── globals.css          # Global styles with Tailwind
├── public/                  # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

## 💰 Monetization Setup

### Google AdSense Integration
1. Sign up for [Google AdSense](https://www.google.com/adsense)
2. Get your ad code
3. Add the code to `pages/_app.js` or individual pages
4. Place ad units in components (e.g., between template cards)

Example placement in `_app.js`:
```javascript
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
```

### Subscription Integration (Stripe)

1. **Install Stripe**
```bash
npm install stripe @stripe/stripe-js
```

2. **Set Environment Variables**
Create `.env.local`:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

3. **Update API Routes**
Edit `pages/api/subscription/create.js` to integrate Stripe:
```javascript
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    // ... your checkout configuration
  })
  res.json({ sessionId: session.id })
}
```

4. **Add Checkout Button**
```javascript
import { loadStripe } from '@stripe/stripe-js'

const handleCheckout = async () => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  const response = await fetch('/api/subscription/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan: 'pro' })
  })
  const { sessionId } = await response.json()
  await stripe.redirectToCheckout({ sessionId })
}
```

## 🎨 Customization

### Adding New Templates

1. Create a new file in `pages/templates/your-template.js`
2. Copy structure from `pages/templates/top5.js`
3. Update the template info and features
4. Add the template to the array in `pages/index.js`

### Changing Colors/Theme

Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Adding Authentication

Consider using:
- **NextAuth.js** - Easy OAuth integration
- **Clerk** - Complete authentication solution
- **Auth0** - Enterprise authentication
- **Supabase** - Backend + Auth in one

## 📦 Additional Integrations

### Database (for user data, subscriptions)
- **Supabase** - PostgreSQL with real-time features
- **MongoDB Atlas** - NoSQL database
- **Prisma** - Modern ORM for TypeScript

### Video Processing
- **FFmpeg.wasm** - Browser-based video processing
- **Cloudinary** - Cloud video processing and hosting
- **AWS MediaConvert** - Professional video transcoding

### Email Notifications
- **SendGrid** - Transactional emails
- **Resend** - Modern email API
- **Postmark** - Fast email delivery

## 🔒 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Database
DATABASE_URL=postgresql://...

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...

# Other services
NEXT_PUBLIC_API_URL=https://your-api.com
```

## 📝 TODO List

- [ ] Implement actual video creation logic
- [ ] Add user authentication (NextAuth.js)
- [ ] Integrate Stripe for subscriptions
- [ ] Set up database for user data
- [ ] Add Google AdSense code
- [ ] Create video rendering backend
- [ ] Add file upload functionality
- [ ] Implement template editor
- [ ] Add analytics tracking
- [ ] Create admin dashboard
- [ ] Set up email notifications
- [ ] Add webhook handlers for Stripe
- [ ] Implement user projects/history

## 🆘 Support

For help with:
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Stripe**: [Stripe Documentation](https://stripe.com/docs)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

**Note**: This is a starter template. You'll need to implement the actual video creation logic, authentication, payment processing, and other features based on your specific requirements.
