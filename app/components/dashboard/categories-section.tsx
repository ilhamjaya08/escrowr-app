import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const categories = [
  {
    id: 'software',
    name: 'Software Development',
    icon: 'solar:code-bold',
  },
  {
    id: 'design',
    name: 'Design & Creative',
    icon: 'solar:palette-bold',
  },
  {
    id: 'writing',
    name: 'Content Writing',
    icon: 'solar:pen-bold',
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: 'solar:chart-bold',
  },
  {
    id: 'virtual',
    name: 'Virtual Assistant',
    icon: 'solar:user-hands-bold',
  },
  {
    id: 'video',
    name: 'Video & Animation',
    icon: 'solar:video-library-bold',
  },
];

const quickActions = [
  {
    id: 'post-project',
    title: 'Post Project',
    description: 'Hire professionals',
    icon: 'solar:add-circle-bold',
    style: { backgroundColor: '#18181A', color: '#FFFFFF' },
  },
  {
    id: 'browse-talent',
    title: 'Browse Talent',
    description: 'Find experts',
    icon: 'solar:users-group-rounded-bold',
    style: { backgroundColor: '#F0F0F0', color: '#18181A', border: '1px solid #E8E8E8' },
  },
];

export function CategoriesSection() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-2xl text-left transition-all duration-200 shadow-sm hover:shadow-md"
            style={action.style}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
              <Icon icon={action.icon} className="h-6 w-6 opacity-80" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Categories Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-xl text-left transition-all duration-200 border"
              style={{ 
                backgroundColor: '#FFFFFF', 
                borderColor: '#E8E8E8',
                color: '#18181A'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8F8F8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon icon={category.icon} className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-sm">{category.name}</h4>
                  </div>
                </div>
                <Icon icon="solar:arrow-right-bold" className="h-4 w-4 opacity-50" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>


    </div>
  );
}