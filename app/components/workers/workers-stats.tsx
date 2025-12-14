import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stats = [
  {
    icon: 'solar:user-check-bold',
    label: 'Avg Response',
    value: '1.2h',
    trend: '+15%'
  },
  {
    icon: 'solar:dollar-minimalistic-bold',
    label: 'Avg Rate',
    value: '$45/hr',
    trend: '+12%'
  },
  {
    icon: 'solar:star-bold',
    label: 'Avg Rating',
    value: '4.8★',
    trend: '+2%'
  }
];

const topCategories = [
  { name: 'Software Development', workers: 1240, growth: '+18%' },
  { name: 'Design & Creative', workers: 890, growth: '+22%' },
  { name: 'Content Writing', workers: 567, growth: '+15%' },
  { name: 'Digital Marketing', workers: 445, growth: '+28%' },
];

export function WorkersStats() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <h3 className="font-semibold mb-4" style={{ color: '#18181A' }}>
          <Icon icon="solar:chart-bold" className="inline h-5 w-5 mr-2" />
          Talent Stats
        </h3>
        
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: '#F0F0F0' }}
                >
                  <Icon icon={stat.icon} className="h-4 w-4" style={{ color: '#18181A' }} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#18181A' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: '#A8A8A8' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className="text-xs font-medium" style={{ color: '#D2D88F' }}>
                {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <h3 className="font-semibold mb-4" style={{ color: '#18181A' }}>
          <Icon icon="solar:users-group-rounded-bold" className="inline h-5 w-5 mr-2" />
          Top Categories
        </h3>
        
        <div className="space-y-3">
          {topCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium" style={{ color: '#18181A' }}>
                  {category.name}
                </div>
                <div className="text-xs" style={{ color: '#A8A8A8' }}>
                  {category.workers} workers
                </div>
              </div>
              <div className="text-xs font-medium" style={{ color: '#D2D88F' }}>
                {category.growth}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-3"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-2xl text-left transition-colors shadow-sm"
          style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
        >
          <Icon icon="solar:user-plus-bold" className="h-5 w-5 mb-2" />
          <div className="font-medium text-sm">Join as Freelancer</div>
          <div className="text-xs opacity-80">Start earning today</div>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-2xl text-left transition-colors shadow-sm"
          style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
        >
          <Icon icon="solar:heart-bold" className="h-5 w-5 mb-2" />
          <div className="font-medium text-sm">Saved Workers</div>
          <div className="text-xs opacity-80">View your favorites</div>
        </motion.button>
      </motion.div>
    </div>
  );
}