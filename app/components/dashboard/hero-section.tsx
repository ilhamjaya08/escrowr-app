import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export function HeroSection() {
  return (
    <div className="relative h-96 overflow-hidden rounded-2xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Professional Freelance
            <br />
            <span style={{ color: '#D2D88F' }}>Network</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg">
            Connect with verified professionals. Secure transactions with smart contract escrow.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-2xl"
        >
          <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center px-4 py-3 border-r border-gray-200">
              <Icon icon="solar:magnifer-bold" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects, skills, or talent..."
              className="flex-1 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="m-2 px-6 py-2 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Search
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center space-x-6 mt-6 text-sm text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A8A8A8' }} />
            <span>Smart Contracts</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A8A8A8' }} />
            <span>Verified Profiles</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A8A8A8' }} />
            <span>Secure Payments</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}