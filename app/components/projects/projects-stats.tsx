import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stats = [
  {
    icon: 'solar:clock-circle-bold',
    label: 'Avg Response',
    value: '2.4h',
    trend: '+12%'
  },
  {
    icon: 'solar:dollar-minimalistic-bold',
    label: 'Avg Budget',
    value: '$1.2K',
    trend: '+8%'
  },
  {
    icon: 'solar:check-circle-bold',
    label: 'Success Rate',
    value: '94%',
    trend: '+3%'
  }
];

const recentActivity = [
  { action: 'New project posted', category: 'Software Dev', time: '2m ago' },
  { action: 'Project completed', category: 'Design', time: '5m ago' },
  { action: 'Bid accepted', category: 'Writing', time: '8m ago' },
  { action: 'New project posted', category: 'Marketing', time: '12m ago' },
];

export function ProjectsStats() {
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
          Market Stats
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

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <h3 className="font-semibold mb-4" style={{ color: '#18181A' }}>
          <Icon icon="solar:history-bold" className="inline h-5 w-5 mr-2" />
          Recent Activity
        </h3>
        
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: '#D2D88F' }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm" style={{ color: '#18181A' }}>
                  {activity.action}
                </div>
                <div className="text-xs" style={{ color: '#A8A8A8' }}>
                  {activity.category} • {activity.time}
                </div>
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
          <Icon icon="solar:add-circle-bold" className="h-5 w-5 mb-2" />
          <div className="font-medium text-sm">Post Your Project</div>
          <div className="text-xs opacity-80">Get proposals from experts</div>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-2xl text-left transition-colors shadow-sm"
          style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
        >
          <Icon icon="solar:bookmark-bold" className="h-5 w-5 mb-2" />
          <div className="font-medium text-sm">Saved Projects</div>
          <div className="text-xs opacity-80">View your bookmarks</div>
        </motion.button>
      </motion.div>
    </div>
  );
}