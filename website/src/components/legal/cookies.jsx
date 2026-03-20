import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const cookieTypes = [
  {
    type: 'Essential Cookies',
    required: true,
    desc: 'These cookies are strictly necessary for the website to function properly. They enable core functionality such as page navigation, secure access, and form submissions. The website cannot function without these cookies, and they are enabled by default.',
    examples: ['Session management', 'Security tokens', 'User preference storage', 'Load balancing'],
  },
  {
    type: 'Analytics Cookies',
    required: false,
    desc: 'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data allows us to improve our website structure, content, and overall user experience.',
    examples: ['Page view tracking', 'User journey analysis', 'Traffic source identification', 'Performance monitoring'],
  },
  {
    type: 'Functional Cookies',
    required: false,
    desc: 'Functional cookies enable enhanced functionality and personalisation on our website. They may be set by us or by third-party providers whose services we have integrated into our pages. If you do not allow these cookies, some or all of these features may not function properly.',
    examples: ['Language preferences', 'Region-based content', 'Embedded media players', 'Chat support tools'],
  },
];

const sections = [
  {
    number: '1',
    title: 'What Are Cookies',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Cookies are small text files that are placed on your computer, smartphone, or other device when
          you visit a website. They are widely used to make websites work more efficiently, provide a better
          browsing experience, and supply information to the owners of the site.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Cookies can be "first-party" (set by the website you are visiting) or "third-party" (set by a
          different website or service). They can also be classified by duration: "session cookies" are
          deleted when you close your browser, while "persistent cookies" remain on your device for a set
          period or until you delete them manually.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Margcha Shopfitting uses cookies to ensure our website functions correctly, to analyse traffic
          patterns, and to improve your experience when browsing our{' '}
          <Link to="/services" className="hyperlink">services</Link> and{' '}
          <Link to="/projects" className="hyperlink">projects</Link>.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: 'Types of Cookies We Use',
    content: (
      <>
        <p className="text-body text-gray-600 mb-6">
          The following table outlines the categories of cookies used on our website, their purpose, and
          whether they are required for the site to function:
        </p>
        <div className="space-y-4">
          {cookieTypes.map((cookie) => (
            <div key={cookie.type} className="card p-5 hover:border-maroon-100 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-h4 text-gray-900 dark:text-white">{cookie.type}</h3>
                <span
                  className={`flex-shrink-0 ml-3 px-3 py-1 rounded-full text-caption font-medium ${
                    cookie.required
                      ? 'bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {cookie.required ? 'Required' : 'Optional'}
                </span>
              </div>
              <p className="text-body-sm text-gray-600 dark:text-gray-300 mb-3">{cookie.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cookie.examples.map((ex) => (
                  <span key={ex} className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded-lg text-caption text-gray-500 dark:text-gray-400">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    number: '3',
    title: 'Managing Cookies',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          You have the right to decide whether to accept or reject cookies. Most web browsers are set to
          accept cookies by default, but you can modify your browser settings to decline cookies if you
          prefer. The method for managing cookies varies between browsers; please refer to your browser's
          help menu for instructions.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Common browser cookie management:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
          <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
          <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and Website Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Please note that disabling certain cookies may affect the functionality of our website. Essential
          cookies cannot be disabled as they are necessary for the site to operate. If you delete or block
          cookies, your preferences and settings may be lost, and some features may not work as intended.
        </p>
      </>
    ),
  },
  {
    number: '4',
    title: 'Third-Party Cookies',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Our website may contain content or integrations from third-party services that set their own
          cookies. These third parties include, but are not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>
            <strong>Analytics providers</strong> (e.g., Google Analytics) for understanding website traffic
            and user behaviour
          </li>
          <li>
            <strong>Map services</strong> (e.g., OpenStreetMap) for displaying our{' '}
            <Link to="/contact" className="hyperlink">office location</Link>
          </li>
          <li>
            <strong>Social media platforms</strong> for enabling social sharing functionality
          </li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We do not control the cookies set by third parties and recommend reviewing their respective privacy
          and cookie policies. Margcha Shopfitting is not responsible for the practices of third-party websites
          or services. For more information about how we handle your data overall, please read our{' '}
          <Link to="/privacy" className="hyperlink">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    number: '5',
    title: 'Changes to This Cookie Policy',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting may update this Cookie Policy from time to time to reflect changes in the
          cookies we use, changes in technology, or for other operational, legal, or regulatory reasons.
          When we make changes, we will update the "Effective Date" at the top of this page.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We encourage you to review this Cookie Policy periodically to remain informed about our use of
          cookies. Your continued use of our website following any changes to this policy constitutes your
          acceptance of those changes. You may also wish to review our{' '}
          <Link to="/terms" className="hyperlink">Terms and Conditions</Link> and{' '}
          <Link to="/privacy" className="hyperlink">Privacy Policy</Link> for a complete understanding of
          the legal framework governing your use of our website.
        </p>
      </>
    ),
  },
  {
    number: '6',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          If you have any questions about this Cookie Policy or our use of cookies, please do not hesitate
          to <Link to="/contact" className="hyperlink">get in touch</Link>:
        </p>
        <div className="card p-5 space-y-2">
          <p className="text-body text-gray-900 dark:text-white font-semibold font-heading">Margcha Shopfitting (Private) Limited</p>
          <p className="text-body-sm text-gray-600 dark:text-gray-300">70 Mutare Road, Cnr Steven Drive</p>
          <p className="text-body-sm text-gray-600 dark:text-gray-300">Colonnade Building, Office Suite 12</p>
          <p className="text-body-sm text-gray-600 dark:text-gray-300">Msasa, Harare, Zimbabwe</p>
          <p className="text-body-sm text-gray-600 dark:text-gray-300">
            Email:{' '}
            <a href="mailto:sales@margchashopfitting.com" className="hyperlink">
              sales@margchashopfitting.com
            </a>
          </p>
          <p className="text-body-sm text-gray-600 dark:text-gray-300">
            Phone:{' '}
            <a href="tel:+263783574677" className="hyperlink">
              +263 78 357 4677
            </a>
          </p>
        </div>
      </>
    ),
  },
];

const CookiesPage = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 gradient-maroon" />
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/40 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(145,42,42,0.3),transparent_60%)]" />

      <div className="relative z-10 container-width text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-body-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="font-heading text-display md:text-[5rem] font-bold leading-[1.05] tracking-tight mb-4">
            Cookie <span className="text-maroon-200">Policy</span>
          </h1>
          <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
            Understand how Margcha Shopfitting uses cookies and similar technologies on our website.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Effective date */}
          <motion.div {...fadeUp} className="mb-10">
            <div className="card p-5 bg-maroon-50 dark:bg-maroon-900/20 border-maroon-100 dark:border-maroon-800">
              <p className="text-body-sm text-maroon-700 dark:text-maroon-400 font-medium">
                Effective Date: March 2025
              </p>
              <p className="text-body-sm text-gray-600 dark:text-gray-300 mt-1">
                This Cookie Policy explains how Margcha Shopfitting (Private) Limited uses cookies and similar
                tracking technologies when you visit our website.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.number}
                {...fadeUp}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl gradient-maroon flex items-center justify-center text-white font-heading font-bold text-body">
                    {section.number}
                  </span>
                  <h2 className="font-heading text-h2 text-gray-900 dark:text-white pt-1">{section.title}</h2>
                </div>
                <div className="pl-14">{section.content}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp} className="mt-16 card-elevated p-6 md:p-8 text-center">
            <h3 className="font-heading text-h3 text-gray-900 dark:text-white mb-3">Questions About Cookies?</h3>
            <p className="text-body text-gray-500 dark:text-gray-400 mb-6">
              If you need further clarification about how we use cookies, our team is here to help.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 cursor-pointer active:scale-[0.98] transition-transform"
            >
              Contact Us <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default CookiesPage;
