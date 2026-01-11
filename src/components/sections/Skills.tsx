import { motion } from 'framer-motion';
import { HiLightningBolt, HiAdjustments, HiUserGroup } from 'react-icons/hi';
import { SKILL_CATEGORIES } from '@/data/skills';

export const Skills = () => {
  const achievements = [
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Performance',
      description: 'Reduced response times from 850ms to 180ms',
      stat: '78%',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <HiAdjustments className="w-8 h-8" />,
      title: 'DevOps',
      description: 'Deployment cycle from 4 hours to 12 minutes',
      stat: '95%',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Leadership',
      description: '2 engineers promoted within 12 months',
      stat: '40%',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            Technical Excellence
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Full-stack expertise spanning modern frameworks, cloud infrastructure, and performance optimization
          </p>
        </motion.div>

        {/* Skills Grid with glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards with stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Key Impact Metrics
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  
                  {/* Stat number */}
                  <div className={`text-5xl font-bold bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent mb-3`}>
                    {achievement.stat}
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-20 rounded-3xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Building the future, one commit at a time
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Passionate about creating scalable, performant applications that make a real impact
          </p>
        </motion.div>
      </div>
    </section>
  );
};
