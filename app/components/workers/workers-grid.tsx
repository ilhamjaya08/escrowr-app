import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Extended dummy data for workers
const workers = [
  {
    id: 3,
    name: 'Alex Thompson',
    title: 'Python Developer & Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    completedJobs: 156,
    hourlyRate: 55,
    currency: 'USDC',
    skills: ['Python', 'Django', 'Machine Learning', 'PostgreSQL'],
    description: 'Specialized in building scalable web applications and implementing ML solutions for business problems.',
    sbtLevel: 'gold',
    responseTime: '3 hours',
    availability: 'Available',
    location: 'Remote',
    online: true,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Content Strategist & Copywriter',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 203,
    hourlyRate: 40,
    currency: 'USDC',
    skills: ['Content Strategy', 'SEO Writing', 'Brand Voice', 'Social Media'],
    description: 'Award-winning content strategist helping brands tell their stories through compelling copy and content.',
    sbtLevel: 'diamond',
    responseTime: '1 hour',
    availability: 'Available',
    location: 'Remote',
    online: true,
  },
  {
    id: 5,
    name: 'David Kim',
    title: 'Mobile App Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    completedJobs: 98,
    hourlyRate: 70,
    currency: 'USDC',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    description: 'Mobile development expert with 6+ years creating high-performance apps for startups and enterprises.',
    sbtLevel: 'gold',
    responseTime: '2 hours',
    availability: 'Busy',
    location: 'Remote',
    online: false,
  },
  {
    id: 6,
    name: 'Lisa Garcia',
    title: 'Digital Marketing Specialist',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    rating: 4.6,
    completedJobs: 134,
    hourlyRate: 45,
    currency: 'USDC',
    skills: ['Google Ads', 'Facebook Ads', 'Analytics', 'Conversion Optimization'],
    description: 'Results-driven marketer specializing in paid advertising and conversion rate optimization.',
    sbtLevel: 'silver',
    responseTime: '4 hours',
    availability: 'Available',
    location: 'Remote',
    online: true,
  },
  {
    id: 7,
    name: 'James Mitchell',
    title: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 87,
    hourlyRate: 80,
    currency: 'USDC',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Infrastructure specialist helping teams deploy and scale applications with modern DevOps practices.',
    sbtLevel: 'gold',
    responseTime: '2 hours',
    availability: 'Available',
    location: 'Remote',
    online: true,
  },
  {
    id: 8,
    name: 'Sophie Laurent',
    title: 'Video Editor & Motion Designer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    completedJobs: 76,
    hourlyRate: 50,
    currency: 'USDC',
    skills: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Motion Graphics'],
    description: 'Creative video professional specializing in promotional content and motion graphics for brands.',
    sbtLevel: 'silver',
    responseTime: '3 hours',
    availability: 'Available',
    location: 'Remote',
    online: false,
  },
];

const sortOptions = [
  { id: 'rating', name: 'Highest Rated' },
  { id: 'rate-high', name: 'Highest Rate' },
  { id: 'rate-low', name: 'Lowest Rate' },
  { id: 'experience', name: 'Most Experienced' },
];

const getSBTBadge = (level: string) => {
  const badges = {
    bronze: { icon: 'noto:3rd-place-medal', color: '#CD7F32' },
    silver: { icon: 'noto:2nd-place-medal', color: '#C0C0C0' },
    gold: { icon: 'noto:1st-place-medal', color: '#FFD700' },
    diamond: { icon: 'noto:gem-stone', color: '#D2D88F' },
  };
  return badges[level as keyof typeof badges] || badges.bronze;
};

export function WorkersGrid() {
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div>
      {/* Header with Sort & View Options */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: '#18181A' }}>
          All Workers
          <span className="text-sm font-normal ml-2" style={{ color: '#A8A8A8' }}>
            ({workers.length} results)
          </span>
        </h2>
        
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm border focus:outline-none"
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderColor: '#E8E8E8',
              color: '#18181A'
            }}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center rounded-lg p-1" style={{ backgroundColor: '#F0F0F0' }}>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                color: '#18181A'
              }}
            >
              <Icon icon="solar:grid-bold" className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: viewMode === 'list' ? '#FFFFFF' : 'transparent',
                color: '#18181A'
              }}
            >
              <Icon icon="solar:list-bold" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Workers Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 lg:grid-cols-2' 
          : 'grid-cols-1'
      }`}>
        {workers.map((worker, index) => {
          const sbtBadge = getSBTBadge(worker.sbtLevel);
          
          return (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-200 cursor-pointer ${
                viewMode === 'list' ? 'flex items-center space-x-6' : ''
              }`}
              style={{ borderColor: '#E8E8E8' }}
            >
              {/* Avatar Section */}
              <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                <div className="flex items-start space-x-4">
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
                      <h3 className="font-semibold" style={{ color: '#18181A' }}>
                        {worker.name}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        style={{ color: sbtBadge.color }}
                      >
                        <Icon icon={sbtBadge.icon} className="h-4 w-4" />
                      </motion.div>
                    </div>
                    <p className="text-sm mb-2" style={{ color: '#A8A8A8' }}>
                      {worker.title}
                    </p>
                    
                    <div className="flex items-center space-x-3 text-xs" style={{ color: '#A8A8A8' }}>
                      <div className="flex items-center space-x-1">
                        <Icon icon="solar:star-bold" className="h-3 w-3" />
                        <span>{worker.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon icon="solar:check-circle-bold" className="h-3 w-3" />
                        <span>{worker.completedJobs} jobs</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon icon="solar:clock-circle-bold" className="h-3 w-3" />
                        <span>{worker.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                {/* Description */}
                {viewMode === 'grid' && (
                  <p className="text-sm mb-4 leading-relaxed line-clamp-2" style={{ color: '#A8A8A8' }}>
                    {worker.description}
                  </p>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {worker.skills.slice(0, viewMode === 'list' ? 3 : 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#E8E8E8' }}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon icon="cryptocurrency:usdc" className="h-4 w-4" style={{ color: '#A8A8A8' }} />
                      <span className="font-semibold text-sm" style={{ color: '#18181A' }}>
                        ${worker.hourlyRate}/hr
                      </span>
                    </div>
                    <div 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: worker.availability === 'Available' ? '#F0F0F0' : '#E8E8E8',
                        color: '#18181A'
                      }}
                    >
                      {worker.availability}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
                  >
                    Hire Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-xl font-medium transition-colors"
          style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
        >
          Load More Workers
        </motion.button>
      </motion.div>
    </div>
  );
}