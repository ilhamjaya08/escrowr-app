import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const featuredWorkers = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Senior Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 127,
    hourlyRate: 85,
    currency: 'USDC',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    description: 'Experienced full-stack developer specializing in modern web applications with 8+ years in the industry.',
    sbtLevel: 'diamond',
    responseTime: '1 hour',
    availability: 'Available',
    location: 'Remote',
    featured: true,
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'Creative Director & UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    completedJobs: 89,
    hourlyRate: 65,
    currency: 'USDC',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Brand Design'],
    description: 'Award-winning designer with expertise in creating compelling user experiences and brand identities.',
    sbtLevel: 'gold',
    responseTime: '2 hours',
    availability: 'Available',
    location: 'Remote',
    featured: true,
  },
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

export function FeaturedWorkers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: '#18181A' }}>
          <Icon icon="solar:star-bold" className="inline h-5 w-5 mr-2" style={{ color: '#D2D88F' }} />
          Featured Talent
        </h2>
        <button className="text-sm" style={{ color: '#A8A8A8' }}>
          View All Featured
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredWorkers.map((worker, index) => {
          const sbtBadge = getSBTBadge(worker.sbtLevel);
          
          return (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-200 cursor-pointer"
              style={{ borderColor: '#D2D88F' }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 border-2 rounded-full" 
                       style={{ backgroundColor: '#D2D88F', borderColor: '#FFFFFF' }} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-lg" style={{ color: '#18181A' }}>
                      {worker.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      style={{ color: sbtBadge.color }}
                    >
                      <Icon icon={sbtBadge.icon} className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <p className="text-sm mb-2" style={{ color: '#A8A8A8' }}>
                    {worker.title}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs" style={{ color: '#A8A8A8' }}>
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

              {/* Description */}
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#A8A8A8' }}>
                {worker.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {worker.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
                  >
                    {skill}
                  </span>
                ))}
                {worker.skills.length > 4 && (
                  <span className="px-3 py-1 rounded-lg text-xs" style={{ color: '#A8A8A8' }}>
                    +{worker.skills.length - 4} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E8E8E8' }}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon icon="cryptocurrency:usdc" className="h-4 w-4" style={{ color: '#A8A8A8' }} />
                    <span className="font-semibold" style={{ color: '#18181A' }}>
                      ${worker.hourlyRate}/hr
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm" style={{ color: '#A8A8A8' }}>
                    <Icon icon="solar:map-point-bold" className="h-4 w-4" />
                    <span>{worker.location}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}