import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users,
  Target,
  CheckCircle,
  Award,
  Heart,
  Shield,
  Sparkles,
  Clock,
  LineChart,
  Building,
  Globe,
  Medal
} from 'lucide-react';

const AboutPage = () => {
    const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const coreValues = [
    {
      icon: <Shield />,
      title: "Integrity",
      description: "We pride ourselves in upholding strong ethical values from individuals, departments and the organization as a whole."
    },
    {
      icon: <Users />,
      title: "Diversity and Inclusion",
      description: "We strongly believe in bringing different lived experiences and backgrounds into a shared environment where everyone has equal opportunity to work and contribute."
    },
    {
      icon: <Award />,
      title: "Quality",
      description: "The craftsmanship of our products and services is a priority and we have made a commitment towards upholding ourselves to high workmanship standards."
    },
    {
      icon: <Heart />,
      title: "Passion",
      description: "We have a remarkable sense of joy not just for the work, but also the people around us, to encourage boldness, innovation and creativity."
    },
    {
      icon: <CheckCircle />,
      title: "Accountability",
      description: "We are conscious of what is expected of us as an organization in both internal and external spaces and we stand accountable of our actions and inactions."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Margcha Shopfitting was established as an accessible alternative for aluminium/glass products and ceilings."
    },
    {
      year: "2023",
      title: "Market Expansion",
      description: "Expanded product lines and service offerings to meet growing customer demands."
    },
    {
      year: "2024",
      title: "Regional Growth",
      description: "Began extending services to neighboring regions within SADC."
    },
    {
      year: "2025",
      title: "Innovation Focus",
      description: "Implementing technological advancements to enhance product quality and service delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 bg-gradient-to-r from-maroon-900 to-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About Margcha Shopfitting
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Revolutionizing the shopfitting industry through innovation and creativity since 2022.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Background</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Margcha Shopfitting was founded in 2022 as an alternative that aims to enhance
                  easy accessibility of aluminium/glass products and ceilings at affordable rates,
                  catering for both commercial and domestic requirements.
                </p>
                <p>
                  Our company's purpose is to reach all segments of the market, ensuring that modern
                  shopfitting and high-quality trends are incorporated in housing and commercial projects
                  to promote value addition and achieve world-class standards.
                </p>
                <p>
                  With our drive and conviction hinged on a skilled and experienced team, we set out to be
                  one of the best shopfitting companies in Zimbabwe and within the SADC region. We make
                  great use of technological advancement to better our products and services, customizing
                  our offerings to accommodate multi-level customer requirements and budgets.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/8.jpg" 
                  alt="Margcha Shopfitting Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Excellence in Craftsmanship</h3>
                    <p className="text-gray-200">Delivering precision and quality since 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-maroon-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be recognized as a reputable brand that will revolutionize the shopfitting industry through
                innovation and creativity.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-maroon-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                Delivering enhanced products and services to all our customers on time and on detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Margcha Shopfitting, our values guide everything we do – from how we interact with our clients
              to the quality of our work.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-maroon-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tracing our path from inception to becoming a leading shopfitting company in the region.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-maroon-200 z-0"></div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-24 h-24 bg-maroon-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-maroon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Margcha</h2>
            <p className="text-lg text-maroon-100 max-w-3xl mx-auto">
              We combine expertise with innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Sparkles />, title: "Innovation", description: "Cutting-edge solutions tailored to modern needs" },
              { icon: <Clock />, title: "Timeliness", description: "Delivering projects on schedule, every time" },
              { icon: <Medal />, title: "Expertise", description: "Skilled craftsmen with years of industry experience" },
              { icon: <Building />, title: "Versatility", description: "Serving both commercial and residential needs" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-maroon-800 rounded-lg p-6 text-center hover:bg-maroon-700 transition-colors duration-300"
              >
                <div className="text-maroon-100 mb-4 flex justify-center">
                  {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-maroon-100">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Global Aspiration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Starting from Zimbabwe, our vision extends throughout the SADC region and beyond. We aim to bring our high-quality shopfitting solutions to markets across Africa, setting new standards in the industry.
              </p>
              <p className="text-lg text-gray-600">
                By leveraging technological advancements and continuously refining our craft, we're positioned to meet the evolving needs of clients around the continent.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/projects')}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 flex items-center gap-2"
                >
                  View Our Projects <Globe className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl bg-maroon-50 p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Globe className="w-64 h-64 text-maroon-600" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-maroon-800 mb-6 text-center">Currently Serving</h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                      <p className="font-semibold text-xl text-gray-800">Zimbabwe</p>
                    </div>
                    <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                      <p className="font-semibold text-xl text-gray-800">SADC Region</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-maroon-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life with our premium shopfitting solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/contact')}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300"
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;