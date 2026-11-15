import { createRoot } from 'react-dom/client'
import { MotionGlobalConfig } from 'framer-motion'
import App from './App.tsx'
import './index.css'

// Reduced motion: framer-motion reveals complete instantly, so content is
// never held back by an animation. Updated live when the preference changes.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
MotionGlobalConfig.skipAnimations = reducedMotion.matches;
reducedMotion.addEventListener('change', event => {
  MotionGlobalConfig.skipAnimations = event.matches;
});

createRoot(document.getElementById("root")!).render(<App />);
