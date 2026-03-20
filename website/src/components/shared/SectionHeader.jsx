import { motion } from 'framer-motion';

const SectionHeader = ({ label, title, subtitle, light = false, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${alignClass}`}
    >
      {label && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-body-sm font-semibold mb-4 tracking-wide uppercase ${
          light
            ? 'glass text-white/90'
            : 'bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`section-title text-balance ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'left' ? '!mx-0' : ''} ${light ? '!text-gray-300' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
