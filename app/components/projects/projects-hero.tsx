import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export function ProjectsHero() {
  return (
    <div className="relative">
      {/* Asymmetric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30"
          style={{ backgroundColor: '#F0F0F0' }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-32 h-32 rotate-45 opacity-20"
          style={{ backgroundColor: '#D2D88F' }}
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
              Browse
              <br />
              <span style={{ color: '#D2D88F' }}>Projects</span>
            </h1>
            <p className="text-xl mb-6" style={{ color: '#A8A8A8' }}>
              Discover quality opportunities from verified clients. 
              Secure payments guaranteed through smart contract escrow.
            </p>
            
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-2xl shadow-sm border p-2" style={{ borderColor: '#E8E8E8' }}>
              <Icon icon="solar:magnifer-bold" className="h-5 w-5 ml-3" style={{ color: '#A8A8A8' }} />
              <input
                type="text"
                placeholder="Search projects by skill, category, or keyword..."
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
              <div className="text-2xl font-bold mb-1" style={{ color: '#18181A' }}>2.4K</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Active Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl font-bold mb-1" style={{ color: '#18181A' }}>156</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Posted Today</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm col-span-2">
              <div className="text-3xl font-bold mb-1" style={{ color: '#D2D88F' }}>$2.8M</div>
              <div className="text-sm" style={{ color: '#A8A8A8' }}>Total Value Secured</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}