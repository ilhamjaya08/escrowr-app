import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Dummy data for top workers
const topWorkers = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    title: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 127,
    skills: ['React', 'Node.js', 'TypeScript'],
    hourlyRate: { min: 25, max: 50 },
    currency: 'USDC',
    sbtLevel: 'gold',
    online: true,
  },
  {
    id: 2,
    name: 'Sari Dewi',
    title: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    completedJobs: 89,
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    hourlyRate: { min: 20, max: 40 },
    currency: 'IDRX',
    sbtLevel: 'silver',
    online: true,
  },
  {
    id: 3,
    name: 'Budi Santoso',
    title: 'Content Writer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    completedJobs: 156,
    skills: ['SEO Writing', 'Technical Writing'],
    hourlyRate: { min: 15, max: 30 },
    currency: 'IDRX',
    sbtLevel: 'gold',
    online: false,
  },
  {
    id: 4,
    name: 'Maya Putri',
    title: 'Mobile Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 73,
    skills: ['Flutter', 'React Native', 'iOS'],
    hourlyRate: { min: 30, max: 60 },
    currency: 'USDC',
    sbtLevel: 'diamond',
    online: true,
  },
];

const getSBTBadge = (level: string) => {
  const badges = {
    bronze: { icon: 'noto:3rd-place-medal', color: 'text-amber-600' },
    silver: { icon: 'noto:2nd-place-medal', color: 'text-gray-500' },
    gold: { icon: 'noto:1st-place-medal', color: 'text-yellow-500' },
    diamond: { icon: 'noto:gem-stone', color: 'text-blue-500' },
  };
  return badges[level as keyof typeof badges] || badges.bronze;
};

export function TopWorkers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Top Workers</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {topWorkers.map((worker, index) => {
          const sbtBadge = getSBTBadge(worker.sbtLevel);
          
          return (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {worker.online && (
                    <div 
                      className="absolute -bottom-1 -right-1 w-4 h-4 border-2 rounded-full" 
                      style={{ backgroundColor: '#D2D88F', borderColor: '#FFFFFF' }}
                    />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">{worker.name}</h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`${sbtBadge.color}`}
                    >
                      <Icon icon={sbtBadge.icon} className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{worker.title}</p>
                  
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icon icon="solar:star-bold" className="h-3 w-3 text-gray-400" />
                      <span>{worker.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon icon="solar:check-circle-bold" className="h-3 w-3 text-gray-400" />
                      <span>{worker.completedJobs} jobs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 mb-4">
                {worker.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Rate & Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon 
                    icon={worker.currency === 'IDRX' ? 'cryptocurrency:idr' : 'cryptocurrency:usdc'} 
                    className="h-4 w-4 text-gray-600" 
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {worker.hourlyRate.min}-{worker.hourlyRate.max} {worker.currency}/hr
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2A2A2C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#18181A';
                  }}
                >
                  Hire Now
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Browse More */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
      >
        Browse More Talent
      </motion.button>
    </div>
  );
}