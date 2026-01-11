# Sonu Baghel Portfolio - Setup Guide

This guide will walk you through setting up a production-grade React portfolio application following industry best practices.

## Prerequisites

- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- Git - [Download here](https://git-scm.com/)
- VS Code or your preferred code editor
- GitHub account

## Step 1: Initialize React Project with Vite

Vite is the modern, fastest build tool recommended for React projects.

```bash
# Create a new Vite + React + TypeScript project
npm create vite@latest portfolio -- --template react-ts

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

## Step 2: Install Required Dependencies

```bash
# Install Tailwind CSS and its dependencies
npm install tailwindcss @tailwindcss/vite


# Install additional dependencies
npm install framer-motion  # For advanced animations
npm install react-icons    # For consistent icons


## Step 3: Configure Tailwind CSS

Update `vite.config.js`:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

Update `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

@import "tailwindcss";

:root {
  --primary: #0f172a;
  --accent: #3b82f6;
  --accent-light: #60a5fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
}
```

## Step 4: Project Structure (Industry Best Practice)

Create the following folder structure:

```
portfolio/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SkillPill.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── data/
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── styles/
│   │   └── animations.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Step 5: Configure ESLint and Prettier

Create `.eslintrc.cjs`:

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
```

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## Step 6: Configure VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Step 7: Update TypeScript Configuration

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/data/*": ["./src/data/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Update `vite.config.ts` to support path aliases:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/data': path.resolve(__dirname, './src/data'),
    },
  },
})
```

## Step 8: Git Setup and GitHub Deployment

### Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Setup React portfolio with TypeScript and Tailwind"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `portfolio`
3. Don't initialize with README (we already have one)
4. Click "Create repository"

### Connect to GitHub and Push

```bash
# Add remote repository
git remote add origin https://github.com/sonukops/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 9: Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://sonu-baghel-portfolio.vercel.app`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages

Install gh-pages:

```bash
npm install -D gh-pages
```

Update `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/sonu-baghel-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/sonu-baghel-portfolio/',
  // ... rest of config
})
```

Deploy:

```bash
npm run deploy
```

## Step 10: Development Workflow

### Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Git Workflow (Best Practices)

```bash
# Create a new feature branch
git checkout -b feature/add-projects-section

# Make changes and commit
git add .
git commit -m "feat: Add projects section with portfolio items"

# Push to GitHub
git push origin feature/add-projects-section

# Create Pull Request on GitHub
# After review and approval, merge to main
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example:
```bash
git commit -m "feat: Add contact form with validation"
git commit -m "fix: Resolve mobile menu closing issue"
git commit -m "refactor: Extract skills data to separate file"
```

## Step 11: Environment Variables (Optional)

Create `.env` file (add to .gitignore):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_TOKEN=your_github_token
```

Access in code:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

## Step 12: Performance Optimization

Add to `package.json`:

```json
{
  "scripts": {
    "analyze": "vite-bundle-visualizer"
  }
}
```

Install analyzer:

```bash
npm install -D vite-bundle-visualizer
```

Run analysis:

```bash
npm run analyze
```

## Step 13: CI/CD with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Testing Your Portfolio

### Checklist

- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1920px)
- [ ] All links work correctly
- [ ] Smooth scrolling between sections
- [ ] Animations perform well
- [ ] Load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Works on Chrome, Firefox, Safari

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)

## Support

For issues or questions, create an issue on GitHub or contact sonu.baghel06@gmail.com

## License

MIT License - feel free to use this for your own portfolio!