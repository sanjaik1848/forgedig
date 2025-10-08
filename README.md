# 🚀 Inai One - Futuristic Dark Mode Website

A stunning, fully responsive website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion featuring a futuristic dark theme with neon green accents.

## ✨ Features

### 🎨 Design Elements
- **Futuristic Dark Theme** with gradient backgrounds (#0A0A0A → #101820)
- **Neon Accents**: Primary (#00FF85), Secondary (#0D9488), Accent (#22D3EE)
- **Smooth Animations** powered by Framer Motion
- **Glowing Effects** on buttons, borders, and interactive elements
- **Particle Background** with animated code lines
- **Responsive Design** for all screen sizes

### 📱 Sections

1. **Hero Section**
   - Animated typewriter text
   - Floating tech icons (💻, ⚙️, 🔋, 📱, 🧠)
   - Glowing CTA buttons with pulse animations
   - Smooth scroll indicator

2. **Highlights Section**
   - 4 animated feature cards
   - Directional slide-in animations (left, right, top, bottom)
   - Hover effects with glow borders
   - Icons: Learn, Practice, Internships, Business Solutions

3. **Progress & Certificate Section**
   - Interactive LeetCode-style progress graph
   - Animated bar chart with weekly stats
   - Certificate mockup with floating animations
   - Real-time progress counter

4. **Open IDE Section**
   - Live code typing animation
   - Syntax highlighting
   - Blinking cursor effect
   - Animated code lines in background
   - Interactive "Try IDE Now" button

5. **Internship & Services Section**
   - Flip cards for internships (IoT, Full Stack, Digital Marketing)
   - Service cards with neon icons
   - Animated gradient background
   - Hover effects with glow

6. **Testimonials Section**
   - Auto-rotating carousel (5s interval)
   - Student & Client testimonials
   - Floating quote icons
   - Navigation controls with dots indicator

7. **Footer**
   - Glowing top border
   - Quick links, contact info, newsletter
   - Social media icons with hover effects
   - Animated logo with text glow

8. **AI Chatbot Assistant**
   - Floating button with pulse animation
   - Interactive chat window
   - Message history
   - Smooth open/close animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins, Inter, Space Grotesk

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
inaione/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & animations
├── components/
│   ├── AnimatedBackground.tsx
│   ├── HeroSection.tsx
│   ├── HighlightsSection.tsx
│   ├── ProgressSection.tsx
│   ├── IDESection.tsx
│   ├── InternshipServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── Footer.tsx
│   └── ChatbotAssistant.tsx
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Color Palette

| Purpose | Color Code | Description |
|---------|-----------|-------------|
| Background | `#0A0A0A – #101820` | Deep dark gradient |
| Primary Accent | `#00FF85` | Neon green (coding/active) |
| Secondary Accent | `#0D9488` | Teal (trustworthy) |
| Highlight | `#22D3EE` | Cyan glow for buttons |
| Text | `#E2E8F0` | Soft white |
| Muted Text | `#94A3B8` | Subtle gray |

## ✨ Key Animations

- **Scroll-triggered animations** using Framer Motion's `useInView`
- **Typewriter effect** for hero section
- **Particle float** animations in background
- **Card flip** animations for internships
- **Progress bar** animations with counters
- **Carousel** auto-rotation for testimonials
- **Glow effects** on hover
- **Pulse animations** for CTA buttons

## 🚀 Features Highlights

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Interactive components
- ✅ Optimized performance
- ✅ SEO-friendly
- ✅ Accessible UI
- ✅ Modern tech stack
- ✅ Production-ready

## 📝 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#00FF85',
  secondary: '#0D9488',
  accent: '#22D3EE',
}
```

### Modify Content
Update component files in `/components` directory to change text, images, or data.

### Add New Sections
Create new component in `/components` and import in `app/page.tsx`.

## 🌐 Deployment

Deploy to Vercel (recommended):
```bash
vercel deploy
```

Or build static export:
```bash
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For support, email info@inaione.com or join our community channels.

---

**Made with ❤️ by Inai One**

*Empowering Students & Businesses*
