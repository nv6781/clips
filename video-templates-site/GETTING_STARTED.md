# Getting Started - Quick Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Upload to GitHub
1. Create a new repository on GitHub
2. Upload all the files from this folder to your repository
3. Commit and push

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js)
5. Wait 1-2 minutes for deployment
6. Your site is live! 🎉

### Step 3: Test Your Site
- Visit the URL Vercel provides (e.g., `your-project.vercel.app`)
- Click through the templates
- Test the navigation

## 📝 What's Next?

### Immediate Next Steps:
1. **Customize the homepage** - Edit `pages/index.js`
2. **Add your branding** - Update logo in `components/Navbar.js`
3. **Modify template pages** - Edit files in `pages/templates/`

### Before Going Live:
1. **Add Google AdSense**
   - Sign up at [google.com/adsense](https://www.google.com/adsense)
   - Add your ad code to `pages/_app.js`

2. **Set Up Subscriptions**
   - Create a Stripe account at [stripe.com](https://stripe.com)
   - Follow the Stripe integration guide in README.md

3. **Add Authentication**
   - Install NextAuth.js: `npm install next-auth`
   - Follow setup at [next-auth.js.org](https://next-auth.js.org)

## 🎨 Easy Customizations

### Change Site Title
Edit `pages/index.js`, line with `<title>`:
```javascript
<title>Your Site Name</title>
```

### Change Main Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color'
}
```

### Add New Template
1. Copy `pages/templates/top5.js`
2. Rename it to your template name
3. Update the content
4. Add it to the homepage array

## ❓ Common Issues

**Site not loading after deployment?**
- Check Vercel dashboard for build errors
- Make sure all files uploaded correctly

**Styling looks broken?**
- Run `npm install` to ensure dependencies are installed
- Check that `tailwind.config.js` exists

**Need help?**
- Check the main README.md
- Visit Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Stripe Docs**: https://stripe.com/docs

---

You're all set! Start customizing and building your video template platform. 🚀
