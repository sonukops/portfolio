import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { CONTACT_INFO, ABOUT_PARAGRAPHS } from '@/data/constants';

export const About = () => {
  const contactItems = [
    {
      icon: <HiMail className="w-6 h-6" />,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      label: 'Location',
      value: CONTACT_INFO.location,
      href: null,
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50
  dark:from-slate-800 dark:to-slate-700
  p-8 rounded-3xl
  border border-blue-100 dark:border-slate-700
  shadow-xl">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4 last:mb-0"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  9+
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  150K+
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Users Served</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 dark:text-white">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl text-white text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-2xl font-bold mb-2">Ready to collaborate?</div>
              <div className="text-blue-100 mb-4">Let's build something amazing together</div>
              <div className="inline-flex items-center gap-2 text-lg font-semibold">
                Get in touch
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
