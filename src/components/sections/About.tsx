import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { CONTACT_INFO, ABOUT_PARAGRAPHS } from '@/data/constants';

export const About = () => {
  const contactItems = [
    {
      icon: <HiMail className="w-6 h-6 text-blue-600" />,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <HiPhone className="w-6 h-6 text-blue-600" />,
      label: 'Phone',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: <HiLocationMarker className="w-6 h-6 text-blue-600" />,
      label: 'Location',
      value: CONTACT_INFO.location,
      href: null,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-700 text-lg leading-relaxed"
          >
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-2">
                  {item.icon}
                  <span className="text-slate-600">{item.label}</span>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-800 font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
