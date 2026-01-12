import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '@/data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-white max-w-3xl mx-auto">
            8+ years of building production systems, optimizing performance, and leading
            engineering teams
          </p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 bg-white dark:bg-slate-900"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:bg-blue-500 dark:border-slate-900 shadow-md" />

              {/* Timeline line */}
              {index < EXPERIENCES.length - 1 && (
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-transparent hidden md:block" />
              )}

              <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-300 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-300">{exp.location}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start space-x-3">
                      <HiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[...EDUCATION, ...CERTIFICATIONS].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-500">{item.degree}</h4>
                <p className="text-slate-600 dark:text-slate-400">{item.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
