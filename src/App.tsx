import { lazy, Suspense } from "react";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';

// Lazy load heavy sections
const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('@/components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20" />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
