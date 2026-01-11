import { motion } from 'framer-motion';
import { HiLightningBolt, HiAdjustments, HiUserGroup } from 'react-icons/hi';
import { SKILL_CATEGORIES } from '@/data/skills';

export const Skills = () => {
  const achievements = [
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Performance',
      description:
        'Reduced response times from 850ms to 180ms and query execution from 8000ms to 320ms',
    },
    {
      icon: <HiAdjustments className="w-8 h-8" />,
      title: 'DevOps',
      description:
        'Built CI/CD pipeline reducing deployment cycle from 4 hours to 12 minutes',
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Leadership',
      description: 'Mentored 5 junior developers, 2 promoted to mid-level within 12 months',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full stack, from frontend to backend, infrastructure
            to testing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                {achievement.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">{achievement.title}</h3>
              <p className="text-slate-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
