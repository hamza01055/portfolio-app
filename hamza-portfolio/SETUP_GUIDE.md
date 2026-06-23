# 🚀 Portfolio Setup Guide

## Quick Start (5 minutes)

### Step 1: Extract & Navigate
```bash
unzip hamza-portfolio.zip
cd hamza-portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Add Profile Image
- Add your `profile_img.jpeg` to the `public/` folder
- The image dimensions should be approximately 800x1000px (4:5 ratio)

### Step 4: Run Development Server
```bash
npm run dev
```

Your portfolio will automatically open at `http://localhost:5173` 🎉

---

## 📋 File Structure Overview

### Root Level
- `index.html` - HTML entry point
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.cjs` - ESLint rules
- `.gitignore` - Git ignore patterns

### src/ Directory
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── Navbar.jsx       # Navigation
│   ├── Hero.jsx         # Hero section
│   ├── Stats.jsx        # Statistics cards
│   ├── AboutPreview.jsx # About with profile image ⭐
│   ├── ResearchFocus.jsx
│   ├── ProjectGallery.jsx
│   ├── SkillsAndServices.jsx
│   ├── EducationPreview.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js # All content data
├── App.jsx             # Main app component
├── App.css             # App styles
├── main.jsx            # React DOM entry
└── index.css           # Global styles
```

---

## ✏️ Customization Guide

### 1️⃣ Update Your Information
**File**: `src/data/portfolioData.js`

```javascript
const DATA = {
  personal: {
    name: "Your Name",           // Change this
    role: "Your Role",           // Change this
    email: "your@email.com",     // Change this
    phone: "+1234567890",        // Change this
    // ... more fields
  },
  // ... rest of data
};
```

### 2️⃣ Update Projects
**File**: `src/data/portfolioData.js`

Add new projects to `featuredProjects` array:
```javascript
{
  id: "p7",
  title: "My Awesome Project",
  category: "Machine Learning",
  description: "Project description here...",
  tech: ["Python", "PyTorch", "FastAPI"],
  github: "https://github.com/yourname/project",
  demo: "https://demo.example.com",
  image: "https://unsplash.com/image-url"
}
```

### 3️⃣ Update Skills
**File**: `src/data/portfolioData.js`

Modify the `skills` object:
```javascript
skills: {
  languages: ["Python", "JavaScript", "SQL"],
  frameworks: ["React", "Django", "FastAPI"],
  // ... other categories
}
```

### 4️⃣ Update Profile Image
1. Add your image to `public/` folder as `profile_img.jpeg`
2. Or change the filename in `src/components/AboutPreview.jsx`:
   ```jsx
   <img 
     src="/your-image-name.jpg" 
     alt={DATA.personal.name} 
   />
   ```

### 5️⃣ Update Resume/CV Link
**File**: `src/components/Hero.jsx`

```jsx
<a href="/your-resume.pdf" target="_blank" rel="noreferrer">
  <Button variant="outline" className="group">
    <Download className="mr-3 w-5 h-5 text-amber-400" /> Resume
  </Button>
</a>
```

---

## 🎨 Styling Customization

### Change Colors
**File**: `tailwind.config.js`

Current theme uses amber/gold. To change:
1. Update Tailwind colors in config
2. Replace `amber-*` classes with new colors
3. Replace `yellow-*` classes accordingly

Example color replacements:
- Amber → Blue: `bg-amber-500` → `bg-blue-500`
- Gold → Purple: `from-amber-400` → `from-purple-400`

### Modify Fonts
**File**: `src/index.css` or component JSX

Current fonts:
- Headings: 'Grindy Brush', 'Permanent Marker'
- Tagline: 'Great Vibes', cursive

Update in JSX:
```jsx
<h1 style={{ fontFamily: '"Your Font", sans-serif' }}>
  Your Heading
</h1>
```

---

## 📦 Building for Production

### Create Optimized Build
```bash
npm run build
```

Output: `dist/` folder (ready to deploy)

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Options

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

### Netlify (Free)
1. Push to GitHub
2. Connect repository to Netlify
3. Auto-deploy on push

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your web server
3. Configure your domain

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint to check code quality
```

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Test with browser DevTools or on real devices.

---

## 🐛 Common Issues

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check file path matches exactly
- Ensure files are in `public/` folder
- Use `/filename` not `./filename`

### Styles Look Wrong
- Clear browser cache
- Rebuild with `npm run build`
- Check Tailwind classes are correct

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

## ✨ Tips for Best Results

1. **Profile Image**: Use high-quality photo, preferably 4:5 ratio
2. **Projects**: Include real, working links to demos and code
3. **Description**: Keep bio concise but impactful
4. **Skills**: List tools you actually use regularly
5. **Performance**: Optimize images before adding (use [TinyPNG](https://tinypng.com))

---

## 🚀 Next Steps

1. ✅ Extract and install
2. ✅ Add profile image
3. ✅ Update your information
4. ✅ Test locally with `npm run dev`
5. ✅ Build with `npm run build`
6. ✅ Deploy to your hosting platform

**Enjoy your new portfolio!** 🎉
