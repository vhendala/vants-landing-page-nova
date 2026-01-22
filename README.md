# 🚀 Vants Landing Page

<div align="center">
  
  ![Vants Logo](./public/logo.svg)
  
  **A modern, high-fidelity fintech landing page built with React & TypeScript**
  
  [![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-646cff?logo=vite)](https://vitejs.dev/)
  
</div>

---

## ✨ Features

- 🎨 **Beautiful UI/UX** - Modern design with smooth animations and transitions
- 🎭 **Interactive Components** - Engaging loan calculator and dashboard preview
- 🔐 **Security-First** - Dedicated security section highlighting trust and compliance
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Performance Optimized** - Built with Vite for lightning-fast load times
- 🌊 **Smooth Animations** - Powered by Framer Motion and Lottie
- 🎯 **TypeScript** - Type-safe code for better developer experience

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) 18.2
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.3
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Build Tool:** [Vite](https://vitejs.dev/) 5.0
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/) - React animation library
  - [Lottie React](https://github.com/Gamote/lottie-react) - Airbnb's animation library
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Utilities:** 
  - [clsx](https://github.com/lukeed/clsx) - Dynamic className builder
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Tailwind class merger

## 📦 Installation

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/vants-landing-page.git
cd vants-landing-page
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Start the development server**

```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to see the landing page in action! 🎉

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production (outputs to `dist/`) |
| `pnpm preview` | Preview production build locally |

## 🌍 Deploy to Vercel

This project is ready to deploy on [Vercel](https://vercel.com) with zero configuration!

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vants-landing-page)

### Manual Deploy

1. **Install Vercel CLI** (optional)

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel
```

3. **Production Deploy**

```bash
vercel --prod
```

### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"

That's it! Your site will be live in seconds. 🚀

## 📁 Project Structure

```
vants-landing-page/
├── public/              # Static assets
│   ├── logo.png
│   └── logo.svg
├── src/
│   ├── animations/      # Lottie animation files
│   │   └── vants-loader.json
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── VantsLoader.tsx
│   │   ├── BridgeFeature.tsx
│   │   ├── DashboardPreview.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoaderDemo.tsx
│   │   ├── LoanCalculator.tsx
│   │   ├── Navbar.tsx
│   │   ├── SecuritySection.tsx
│   │   └── TrustTicker.tsx
│   ├── App.tsx          # Main application component
│   ├── Component.tsx    # Landing page wrapper
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── utils.ts         # Utility functions
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Key Components

### 🦸 Hero Section
Eye-catching hero section with animated elements and clear call-to-action buttons.

### 🏦 Bridge Feature
Showcases the platform's bridge functionality with interactive visualizations.

### 📊 Dashboard Preview
Interactive preview of the Vants dashboard experience.

### 💰 Loan Calculator
Dynamic loan calculator allowing users to simulate different lending scenarios.

### 🔒 Security Section
Highlights security features, compliance, and trust badges.

### 🎯 Trust Ticker
Animated ticker displaying key metrics and social proof.

## 🌐 Demo Routes

- `/` - Main landing page
- `/?demo=loader` - Loader animation demo

## 🎯 Customization

### Colors

Update your brand colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      // ...
    }
  }
}
```

### Animations

Custom Lottie animations can be added to `src/animations/` and imported in components.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern fintech platforms
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) and [Lottie](https://airbnb.io/lottie/)

---

<div align="center">
  
  **Made with ❤️ and ☕**
  
  If you found this project helpful, please consider giving it a ⭐!
  
</div>
