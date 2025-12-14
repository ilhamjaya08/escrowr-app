import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { formatIDRX, timeAgo } from '~/lib/utils';

// Dummy data for projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    description: 'Need a modern e-commerce website with payment integration and admin dashboard. Must be responsive and SEO optimized.',
    budget: { min: 500, max: 1000 },
    currency: 'IDRX',
    category: 'Software Development',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    bids: 12,
    timePosted: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    client: {
      name: 'PT Digital Solutions',
      rating: 4.8,
      verified: true,
    },
    escrowStatus: 'secured',
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    description: 'Looking for a talented designer to create modern UI/UX for our fintech mobile app. Need complete design system.',
    budget: { min: 300, max: 600 },
    currency: 'USDC',
    category: 'Design & Creative',
    skills: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping'],
    bids: 8,
    timePosted: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    client: {
      name: 'FinTech Startup',
      rating: 4.9,
      verified: true,
    },
    escrowStatus: 'secured',
  },
  {
    id: 3,
    title: 'Content Writing for Tech Blog',
    description: 'Need experienced tech writer for weekly blog posts about blockchain, AI, and web development trends.',
    budget: { min: 100, max: 200 },
    currency: 'IDRX',
    category: 'Content Writing',
    skills: ['Technical Writing', 'SEO', 'Blockchain', 'AI'],
    bids: 15,
    timePosted: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    client: {
      name: 'Tech Media Co',
      rating: 4.7,
      verified: false,
    },
    escrowStatus: 'secured',
  },
];

export function ProjectCards() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Latest Projects</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          View All Projects
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  {project.escrowStatus === 'secured' && (
                    <div 
                      className="flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-medium"
                      style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
                    >
                      <Icon icon="solar:shield-check-bold" className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Budget & Currency */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon 
                    icon={project.currency === 'IDRX' ? 'cryptocurrency:idr' : 'cryptocurrency:usdc'} 
                    className="h-5 w-5 text-gray-600" 
                  />
                  <span className="font-semibold text-gray-900">
                    {project.budget.min} - {project.budget.max} {project.currency}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {project.category}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {timeAgo(project.timePosted)}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-medium"
                  style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
                >
                  {skill}
                </span>
              ))}
              {project.skills.length > 4 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs">
                  +{project.skills.length - 4} more
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Icon icon="solar:user-bold" className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{project.client.name}</span>
                  </div>
                  {project.client.verified && (
                    <Icon icon="solar:verified-check-bold" className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <Icon icon="solar:star-bold" className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{project.client.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Icon icon="solar:users-group-rounded-bold" className="h-4 w-4" />
                  <span>{project.bids} bids</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2A2A2C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#18181A';
                  }}
                >
                  Place Bid
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
      >
        Load More Projects
      </motion.button>
    </div>
  );
}