import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <HiMail className="w-10 h-10" />
            </div>
          </motion.div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            I'm currently seeking <span className="font-semibold text-white">Technical Lead</span> or{' '}
            <span className="font-semibold text-white">Senior Engineer</span> roles where system
            design and team influence matter.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
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
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="block bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="text-sm text-blue-200 mb-1">{item.label}</div>
                  <div className="font-semibold text-white">{item.value}</div>
                </a>
              ) : (
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <div className="text-sm text-blue-200 mb-1">{item.label}</div>
                  <div className="font-semibold text-white">{item.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <motion.a
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all"
          >
            <HiMail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Send Email
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          
          <motion.a
            href={`tel:${CONTACT_INFO.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg border-2 border-blue-400 shadow-2xl hover:shadow-blue-500/50 transition-all"
          >
            <HiPhone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Call Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/10">
            <p className="text-center text-blue-200 mb-4 font-medium">Connect with me</p>
            <SocialLinks links={SOCIAL_LINKS} variant="horizontal" size="md" />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-blue-200 mb-4">
            © 2026 Sonu Baghel. Senior Full-Stack Engineer
          </p>
          <p className="text-blue-300/80 text-sm">
            Specializing in React · React Native · Node.js · Performance Optimization
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-2 h-32 bg-gradient-to-b from-blue-500 to-transparent rounded-r-full opacity-50" />
        <div className="absolute top-1/2 right-0 w-2 h-32 bg-gradient-to-b from-indigo-500 to-transparent rounded-l-full opacity-50" />
      </div>
    </section>
  );
};
