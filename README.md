# 🚀 Modern Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)

A stunning, fully responsive portfolio website built with modern web technologies. Features smooth animations, interactive particles, dark mode, and a clean, professional design.

[🌐 Live Demo](https://ravishankar2463.github.io/portfolio-website/) | [📧 Contact](mailto:ravishankar2463@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/ravi-shankar-216b101a9/)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark Mode** - Seamless light/dark theme switching with system preference detection
- 🎭 **Interactive Particles** - Dynamic particle field with mouse interaction in hero section
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Blazing Fast** - Built with Vite for lightning-fast performance
- 🎬 **Smooth Animations** - Powered by Framer Motion for fluid transitions
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- 📦 **Easy to Customize** - Simple JSON configuration for content updates
- 🎨 **Gradient Cards** - Eye-catching project cards with colorful gradients
- 🧭 **Smooth Navigation** - Interactive navbar with scroll progress indicator

## 🛠️ Tech Stack

### Frontend

- **React 19.2** - Modern UI library with latest features
- **TypeScript** - Type-safe development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

### Build Tools

- **Vite** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS transformations

### Deployment

- **GitHub Pages** - Free hosting with custom domain support

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ravishankar2463/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000/portfolio-website/`

## 🎯 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components (Button, Card, etc.)
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Page sections (Hero, Projects, etc.)
│   ├── context/         # React context (Theme)
│   ├── data/            # JSON data files (editable content)
│   │   ├── personal.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   ├── expertise.json
│   │   └── contact.json
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── package.json
└── vite.config.ts
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/personal.json`:

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "tagline": "Your tagline",
  "bio": "Your bio",
  "resumeUrl": "/path-to-resume.pdf"
}
```

### Add/Edit Projects

Edit `src/data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "category": "Frontend/Fullstack/Backend",
  "icon": "🚀",
  "gradient": "from-blue-500 via-cyan-500 to-teal-500",
  "description": "Project description",
  "technologies": ["React", "TypeScript", "..."],
  "githubUrl": "https://github.com/...",
  "highlights": ["Feature 1", "Feature 2"]
}
```

### Update Skills

Edit `src/data/skills.json` to add or modify your skills with proficiency levels (1-5).

### Modify Experience

Edit `src/data/experience.json` to update your work history.

### Change Contact Info

Edit `src/data/contact.json` with your email, location, and social links.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `homepage` in `package.json`:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Deploy:

```bash
npm run deploy
```

### Deploy to Other Platforms

The build output is in the `dist/` folder after running `npm run build`. You can deploy this folder to:

- **Vercel**: Connect your repo and deploy
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder
- **Any static hosting service**

## 🎨 Color Customization

The project uses Tailwind CSS. Modify colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... your custom colors
      }
    }
  }
}
```

## 📱 Sections

- **Hero** - Eye-catching introduction with interactive particles
- **Expertise** - Showcase your core competencies
- **Skills** - Display technologies with proficiency levels
- **Experience** - Professional work history timeline
- **Projects** - Feature your best work with gradients
- **Contact** - Get in touch section with social links

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ravi Shankar**

- 🌐 Website: [ravishankar2463.github.io/portfolio-website](https://ravishankar2463.github.io/portfolio-website/)
- 💼 LinkedIn: [Ravi Shankar](https://www.linkedin.com/in/ravi-shankar-216b101a9/)
- 🐙 GitHub: [@ravishankar2463](https://github.com/ravishankar2463)
- 📧 Email: ravishankar2463@gmail.com

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Heroicons](https://heroicons.com/) - Icons

---

<div align="center">

⭐ Star this repo if you found it helpful!

Made with ❤️ by [Ravi Shankar](https://github.com/ravishankar2463)

</div>
