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
    title: 'Introduction',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Welcome to the website of Margcha Shopfitting (Private) Limited ("Margcha Shopfitting", "we", "us", or "our").
          These Terms and Conditions ("Terms") govern your use of our website and the provision of our{' '}
          <Link to="/services" className="hyperlink">services</Link>, including but not limited to aluminium fabrication,
          joinery, ceiling installations, and related shopfitting solutions.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree
          with any part of these Terms, please refrain from using our website or services. For any questions, please{' '}
          <Link to="/contact" className="hyperlink">contact us</Link> directly.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: 'Services',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting provides a comprehensive range of{' '}
          <Link to="/services" className="hyperlink">shopfitting and aluminium fabrication services</Link>, including
          but not limited to aluminium windows, doors, shopfronts, office partitions, ceiling solutions, shower
          enclosures, and security installations for both commercial and residential properties.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          All services are subject to a formal quotation and written agreement between Margcha Shopfitting and the
          client. Quotations are valid for a period of thirty (30) days from the date of issue, unless otherwise stated
          in writing.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          We reserve the right to amend, modify, or discontinue any service at any time without prior notice. Project
          timelines, specifications, and deliverables are subject to the terms outlined in the individual project
          agreement.
        </p>
      </>
    ),
  },
  {
    number: '3',
    title: 'Payment Terms',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Unless otherwise agreed in writing, the following payment structure applies to all projects undertaken by
          Margcha Shopfitting:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { stage: 'Initial Deposit', percent: '60%', desc: 'Due upon acceptance of the quotation and before commencement of work.' },
            { stage: 'Second Payment', percent: '20%', desc: 'Due thirty-one (31) days after the commencement date.' },
            { stage: 'Final Payment', percent: '20%', desc: 'Due sixty-two (62) days after the commencement date, or upon project completion.' },
          ].map((p) => (
            <div key={p.stage} className="card p-4 text-center">
              <p className="font-heading text-h3 text-maroon-700 dark:text-maroon-400 font-bold">{p.percent}</p>
              <p className="font-heading text-body font-semibold text-gray-900 dark:text-white mt-1">{p.stage}</p>
              <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          All payments shall be made in the agreed currency via bank transfer, mobile money, or such other method
          as may be agreed upon in writing. Late payments may attract interest at the prevailing market rate.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Margcha Shopfitting reserves the right to suspend or terminate work on any project where payments are
          overdue by more than fourteen (14) days without prior written arrangement.
        </p>
      </>
    ),
  },
  {
    number: '4',
    title: 'Warranty',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting warrants that all products and installations shall be free from defects in materials
          and workmanship for a period specified in the individual project agreement, typically twelve (12) months
          from the date of completion and handover.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          This warranty does not cover damage resulting from misuse, negligence, unauthorised modifications,
          natural disasters, or normal wear and tear. Claims under this warranty must be submitted in writing
          within the warranty period.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Margcha Shopfitting's liability under this warranty is limited to the repair or replacement of the
          defective product or workmanship at our discretion. No warranty claims shall be entertained where
          outstanding payments remain unresolved.
        </p>
      </>
    ),
  },
  {
    number: '5',
    title: 'Limitation of Liability',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          To the maximum extent permitted by the laws of Zimbabwe, Margcha Shopfitting shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of
          profits, revenue, data, or business opportunities, arising out of or in connection with the use of our
          services or website.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Our total liability in respect of any claim arising out of or in connection with our services shall not
          exceed the total amount paid by the client for the specific project or service giving rise to the claim.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Nothing in these Terms shall exclude or limit our liability for death or personal injury caused by our
          negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.
        </p>
      </>
    ),
  },
  {
    number: '6',
    title: 'Intellectual Property',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          All intellectual property rights in the content, design, graphics, logos, and materials on this website
          are owned by or licensed to Margcha Shopfitting. You may not reproduce, distribute, modify, or create
          derivative works from any material on this website without our prior written consent.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Design drawings, technical specifications, and project plans created by Margcha Shopfitting remain our
          intellectual property until full payment has been received and ownership is expressly transferred in writing.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Any unauthorised use of our intellectual property may result in legal action. For licensing enquiries,
          please <Link to="/contact" className="hyperlink">contact our team</Link>.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Termination',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Either party may terminate a project agreement by providing written notice of not less than thirty (30)
          days, subject to the terms of the individual project agreement. In the event of termination by the client,
          all payments made up to the date of termination are non-refundable.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          Margcha Shopfitting reserves the right to terminate any agreement immediately where the client is in
          material breach of these Terms, including but not limited to non-payment, provision of false information,
          or conduct that may bring Margcha Shopfitting into disrepute.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          Upon termination, any materials purchased or work completed shall be delivered to the client upon settlement
          of all outstanding amounts. Clauses relating to intellectual property, limitation of liability, and governing
          law shall survive termination.
        </p>
      </>
    ),
  },
  {
    number: '8',
    title: 'Governing Law',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic
          of Zimbabwe. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive
          jurisdiction of the courts of Zimbabwe.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300">
          The parties agree to first attempt to resolve any dispute through good-faith negotiation. If a resolution
          cannot be reached within thirty (30) days, either party may refer the matter to mediation or, failing that,
          to the appropriate court of competent jurisdiction in Harare, Zimbabwe.
        </p>
      </>
    ),
  },
  {
    number: '9',
    title: 'Contact Information',
    content: (
      <>
        <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
          If you have any questions, concerns, or requests regarding these Terms and Conditions, please do not
          hesitate to <Link to="/contact" className="hyperlink">contact us</Link>:
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
          You may also wish to review our{' '}
          <Link to="/privacy" className="hyperlink">Privacy Policy</Link> and{' '}
          <Link to="/cookies" className="hyperlink">Cookie Policy</Link> to understand how we handle your
          personal data.
        </p>
      </>
    ),
  },
];

const TermsPage = () => (
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
            Terms &amp; <span className="text-maroon-200">Conditions</span>
          </h1>
          <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our website or engaging our{' '}
            <Link to="/services" className="hyperlink text-maroon-200 hover:text-white">services</Link>.
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
                These Terms and Conditions apply to all services provided by Margcha Shopfitting (Private) Limited.
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
            <h3 className="font-heading text-h3 text-gray-900 dark:text-white mb-3">Have Questions About Our Terms?</h3>
            <p className="text-body text-gray-500 dark:text-gray-400 mb-6">
              Our team is happy to clarify any aspect of these Terms and Conditions.
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

export default TermsPage;
