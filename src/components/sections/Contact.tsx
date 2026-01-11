import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { CONTACT_INFO } from '@/data/constants';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently seeking Technical Lead or Senior Engineer roles where system design and
            team influence matter. Let's connect!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              <HiMail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
            >
              <HiPhone className="w-5 h-5 mr-2" />
              Call Me
            </a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2026 Sonu Baghel. Senior Full-Stack Engineer specializing in React, React Native,
              and Node.js
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
