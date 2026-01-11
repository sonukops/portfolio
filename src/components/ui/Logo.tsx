import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const Logo = ({ size = 'md', animated = true }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* Logo Icon */}
        <div className="relative">
          <svg
            className={sizes[size]}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer hexagon with gradient */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            {/* Hexagon shape */}
            <motion.path
              d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
              fill="url(#logoGradient)"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Inner design - S shape */}
            <motion.path
              d="M35 35 Q45 30 55 35 T65 45 Q60 50 55 55 T45 65 Q50 70 55 75"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            {/* Accent dots */}
            <motion.circle
              cx="30"
              cy="50"
              r="3"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            />
            <motion.circle
              cx="70"
              cy="50"
              r="3"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 }}
            />
          </svg>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-lg -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Text Logo */}
        <div className="flex flex-col leading-none">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`font-display font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent ${textSizes[size]}`}
          >
            Sonu Baghel
          </motion.span>
          {size !== 'sm' && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-slate-600 font-medium tracking-wider"
            >
              FULL-STACK ENGINEER
            </motion.span>
          )}
        </div>
      </motion.div>
    );
  }

  // Non-animated version
  return (
    <div className="flex items-center gap-3">
      <svg
        className={sizes[size]}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradientStatic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          fill="url(#logoGradientStatic)"
        />
        <path
          d="M35 35 Q45 30 55 35 T65 45 Q60 50 55 55 T45 65 Q50 70 55 75"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="50" r="3" fill="white" />
        <circle cx="70" cy="50" r="3" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent ${textSizes[size]}`}
        >
          Sonu Baghel
        </span>
        {size !== 'sm' && (
          <span className="text-xs text-slate-600 font-medium tracking-wider">
            FULL-STACK ENGINEER
          </span>
        )}
      </div>
    </div>
  );
};
