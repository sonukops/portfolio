import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const SocialLinks = ({
  links,
  variant = 'horizontal',
  size = 'md',
  showLabels = false,
}: SocialLinksProps) => {
  const getIcon = (iconName: string) => {
    const icons = {
      linkedin: FaLinkedin,
      github: FaGithub,
      email: FaEnvelope,
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent /> : null;
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl',
  };

  const containerClass =
    variant === 'horizontal' ? 'flex flex-row gap-4' : 'flex flex-col gap-4';

  return (
    <div className={containerClass}>
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
          aria-label={link.name}
        >
          {/* Icon container */}
          <div
            className={`${sizeClasses[size]} flex items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
          >
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <span className="relative z-10">{getIcon(link.icon)}</span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              animate={{
                translateX: ['0%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'linear',
              }}
            />
          </div>

          {/* Label */}
          {showLabels && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="block text-center text-sm font-medium text-slate-600 mt-2"
            >
              {link.name}
            </motion.span>
          )}

          {/* Tooltip on hover */}
          {!showLabels && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {link.name}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </motion.div>
          )}
        </motion.a>
      ))}
    </div>
  );
};
