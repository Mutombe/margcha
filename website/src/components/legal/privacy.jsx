import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const sections = [
  {
    number: '1',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting collects information that you provide directly to us when you use our website,
          request a quotation, or engage our <Link to="/services" className="hyperlink">services</Link>. The
          types of personal information we may collect include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>Full name and contact details (email address, phone number, physical address)</li>
          <li>Company or business name and registration details</li>
          <li>Project-related information, including property details and specifications</li>
          <li>Payment and billing information necessary for processing transactions</li>
          <li>Communications and correspondence between you and our team</li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We may also automatically collect certain technical information when you visit our website, including
          your IP address, browser type, device information, pages visited, and referring URLs. For more details
          on automated data collection, please see our{' '}
          <Link to="/cookies" className="hyperlink">Cookie Policy</Link>.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>To provide, maintain, and improve our shopfitting and fabrication services</li>
          <li>To process quotations, orders, and payments</li>
          <li>To communicate with you regarding project updates, schedules, and deliverables</li>
          <li>To respond to your enquiries and provide customer support</li>
          <li>To send marketing communications, where you have opted in to receive them</li>
          <li>To comply with legal obligations and enforce our <Link to="/terms" className="hyperlink">Terms and Conditions</Link></li>
          <li>To analyse website usage and improve user experience</li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We will not use your personal information for purposes materially different from those described
          above without first obtaining your consent or as otherwise permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    number: '3',
    title: 'Information Sharing',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting does not sell, trade, or rent your personal information to third parties. We may
          share your information in the following limited circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>
            <strong>Service Providers:</strong> We may share information with trusted third-party service
            providers who assist us in operating our business, such as payment processors, delivery partners,
            and IT service providers, subject to confidentiality obligations.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose information when required to do so by law,
            regulation, court order, or governmental authority.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
            your personal information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share information with third parties when you have
            given us explicit consent to do so.
          </li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Where we share your information with third parties, we take reasonable steps to ensure that they
          handle your data in accordance with applicable data protection laws and our own privacy standards.
        </p>
      </>
    ),
  },
  {
    number: '4',
    title: 'Data Security',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting takes the security of your personal information seriously. We implement
          appropriate technical and organisational measures to protect your data against unauthorised access,
          alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>Encryption of sensitive data during transmission using secure protocols</li>
          <li>Restricted access to personal information on a need-to-know basis</li>
          <li>Regular review and updating of our security practices</li>
          <li>Secure storage of physical and electronic records</li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          While we strive to use commercially acceptable means to protect your personal information, no method
          of transmission over the Internet or method of electronic storage is completely secure. We cannot
          guarantee absolute security, but we are committed to maintaining the highest practicable standards.
        </p>
      </>
    ),
  },
  {
    number: '5',
    title: 'Cookies',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Our website uses cookies and similar tracking technologies to enhance your browsing experience,
          analyse website traffic, and understand how our visitors interact with our site.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Cookies are small text files placed on your device that help us provide a better user experience.
          We use both session cookies (which expire when you close your browser) and persistent cookies
          (which remain on your device until they expire or you delete them).
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          For comprehensive information about the types of cookies we use, how they function, and how you
          can manage your cookie preferences, please refer to our dedicated{' '}
          <Link to="/cookies" className="hyperlink">Cookie Policy</Link>.
        </p>
      </>
    ),
  },
  {
    number: '6',
    title: 'Your Rights',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Depending on your location and applicable law, you may have certain rights regarding your personal
          information, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-4">
          <li>
            <strong>Right of Access:</strong> You may request a copy of the personal information we hold
            about you.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You may request that we correct any inaccurate or
            incomplete personal information.
          </li>
          <li>
            <strong>Right to Erasure:</strong> You may request that we delete your personal information,
            subject to our legal obligations and legitimate business interests.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You may request that we limit the processing
            of your personal information in certain circumstances.
          </li>
          <li>
            <strong>Right to Object:</strong> You may object to our processing of your personal information
            for direct marketing purposes.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where we process your data based on consent, you
            may withdraw that consent at any time.
          </li>
        </ul>
        <p className="text-body text-gray-600 dark:text-gray-300">
          To exercise any of these rights, please <Link to="/contact" className="hyperlink">contact us</Link>{' '}
          using the details provided below. We will respond to your request within a reasonable timeframe
          and in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Changes to This Policy',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting reserves the right to update or modify this Privacy Policy at any time. When
          we make changes, we will revise the "Effective Date" at the top of this page and, where appropriate,
          notify you through our website or via email.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We encourage you to review this Privacy Policy periodically to stay informed about how we are
          protecting your information. Your continued use of our website or services after any changes to
          this Privacy Policy constitutes your acceptance of those changes. You may also wish to review our{' '}
          <Link to="/terms" className="hyperlink">Terms and Conditions</Link> for the complete legal framework
          governing your use of our services.
        </p>
      </>
    ),
  },
  {
    number: '8',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle
          your personal information, please <Link to="/contact" className="hyperlink">get in touch</Link>:
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
        <p className="text-body text-gray-600 dark:text-gray-300 mt-4">
          For information about cookies and tracking technologies, please see our{' '}
          <Link to="/cookies" className="hyperlink">Cookie Policy</Link>. For details on our service
          agreement, please review our <Link to="/terms" className="hyperlink">Terms and Conditions</Link>.
        </p>
      </>
    ),
  },
];

const PrivacyPage = () => (
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
            Privacy <span className="text-maroon-200">Policy</span>
          </h1>
          <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how Margcha Shopfitting collects, uses, and protects your information.
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
                This Privacy Policy applies to all personal information collected by Margcha Shopfitting (Private) Limited
                through our website and in the course of providing our services.
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
            <h3 className="font-heading text-h3 text-gray-900 dark:text-white mb-3">Have Privacy Concerns?</h3>
            <p className="text-body text-gray-500 dark:text-gray-400 mb-6">
              We are committed to protecting your privacy. Reach out to us with any questions or requests.
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

export default PrivacyPage;
