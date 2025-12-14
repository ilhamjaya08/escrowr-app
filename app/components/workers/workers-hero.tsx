import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export function WorkersHero() {
  return (
    <div className="relative">
      {/* Asymmetric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-20"
          style={{ backgroundColor: '#D2D88F' }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-24 h-24 rotate-12 opacity-30"
          style={{ backgroundColor: '#F0F0F0' }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center py-12">
        {/* Left Content - 3 columns */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#18181A' }}>
              Find Expert
              <br />
              <span style={{ color: '#D2D88F' }}>Talent</span>
            </h1>
            <p className="text-xl mb-6" style={{ color: '#A8A8A8' }}>
              Connect with verified professionals across all skill categories. 
              Browse portfolios, reviews, and hire with confidence.
            </p>
            
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-2xl shadow-sm border p-2" style={{ borderColor: '#E8E8E8' }}>
              <Icon icon="solar:magnifer-bold" className="h-5 w-5 ml-3" style={{ color: '#A8A8A8' }} />
              <input
                type="text"
                placeholder="Search by skills, name, or expertise..."
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-sm"
                style={{ color: '#18181A' }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 rounded-xl text-sm font-medium transition-colors"
                style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Stats - 2 columns */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl font-bold mb-1" style={{ color: '#18181A' }}>3.2K</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Active Workers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl font-bold mb-1" style={{ color: '#18181A' }}>98%</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Success Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm col-span-2">
              <div className="text-3xl font-bold mb-1" style={{ color: '#D2D88F' }}>4.8★</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Average Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}