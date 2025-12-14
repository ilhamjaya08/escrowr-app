import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { timeAgo } from '~/lib/utils';

// Extended dummy data for projects
const projects = [
  {
    id: 3,
    title: 'E-commerce Platform Development',
    client: 'RetailCorp',
    budget: { min: 3000, max: 5000 },
    currency: 'USDC',
    category: 'Software Development',
    skills: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
    bids: 8,
    timePosted: new Date(Date.now() - 3 * 60 * 60 * 1000),
    description: 'Build a scalable e-commerce platform with payment integration, inventory management, and admin dashboard.',
    verified: true,
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Brand Identity Design Package',
    client: 'Creative Agency',
    budget: { min: 800, max: 1200 },
    currency: 'USDC',
    category: 'Design & Creative',
    skills: ['Branding', 'Logo Design', 'Adobe Creative Suite'],
    bids: 12,
    timePosted: new Date(Date.now() - 5 * 60 * 60 * 1000),
    description: 'Complete brand identity package including logo, color palette, typography, and brand guidelines.',
    verified: false,
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Technical Documentation Writing',
    client: 'DevTools Inc',
    budget: { min: 500, max: 800 },
    currency: 'USDC',
    category: 'Content Writing',
    skills: ['Technical Writing', 'API Documentation', 'Markdown'],
    bids: 6,
    timePosted: new Date(Date.now() - 8 * 60 * 60 * 1000),
    description: 'Write comprehensive technical documentation for our API and developer tools.',
    verified: true,
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Social Media Marketing Campaign',
    client: 'GrowthCo',
    budget: { min: 1000, max: 2000 },
    currency: 'USDC',
    category: 'Digital Marketing',
    skills: ['Social Media', 'Content Strategy', 'Analytics'],
    bids: 15,
    timePosted: new Date(Date.now() - 12 * 60 * 60 * 1000),
    description: 'Develop and execute a comprehensive social media marketing campaign across multiple platforms.',
    verified: true,
    rating: 4.6,
  },
  {
    id: 7,
    title: 'Mobile App Backend API',
    client: 'MobileFirst',
    budget: { min: 2000, max: 3500 },
    currency: 'USDC',
    category: 'Software Development',
    skills: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    bids: 9,
    timePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    description: 'Build robust REST API for mobile application with authentication, data management, and real-time features.',
    verified: true,
    rating: 4.9,
  },
  {
    id: 8,
    title: 'Video Editing & Motion Graphics',
    client: 'MediaPro',
    budget: { min: 600, max: 1000 },
    currency: 'USDC',
    category: 'Video & Animation',
    skills: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    bids: 7,
    timePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    description: 'Edit promotional videos and create engaging motion graphics for marketing campaigns.',
    verified: false,
    rating: 4.5,
  },
];

const sortOptions = [
  { id: 'newest', name: 'Newest First' },
  { id: 'budget-high', name: 'Highest Budget' },
  { id: 'budget-low', name: 'Lowest Budget' },
  { id: 'bids-low', name: 'Fewest Bids' },
];

export function ProjectsGrid() {
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div>
      {/* Header with Sort & View Options */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold" style={{ color: '#18181A' }}>
          All Projects
          <span className="text-sm font-normal ml-2" style={{ color: '#A8A8A8' }}>
            ({projects.length} results)
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

      {/* Projects Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 lg:grid-cols-2' 
          : 'grid-cols-1'
      }`}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
            className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-200 cursor-pointer ${
              viewMode === 'list' ? 'flex items-center space-x-6' : ''
            }`}
            style={{ borderColor: '#E8E8E8' }}
          >
            {/* Content */}
            <div className={viewMode === 'list' ? 'flex-1' : ''}>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: '#18181A' }}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm" style={{ color: '#A8A8A8' }}>
                    <span>{project.client}</span>
                    {project.verified && (
                      <Icon icon="solar:verified-check-bold" className="h-4 w-4" />
                    )}
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Icon icon="solar:star-bold" className="h-3 w-3" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs" style={{ color: '#A8A8A8' }}>
                  {timeAgo(project.timePosted)}
                </div>
              </div>

              {/* Description */}
              {viewMode === 'grid' && (
                <p className="text-sm mb-4 leading-relaxed line-clamp-2" style={{ color: '#A8A8A8' }}>
                  {project.description}
                </p>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, viewMode === 'list' ? 3 : 4).map((skill) => (
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
                      ${project.budget.min} - ${project.budget.max}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm" style={{ color: '#A8A8A8' }}>
                    <Icon icon="solar:users-group-rounded-bold" className="h-4 w-4" />
                    <span>{project.bids} bids</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
                >
                  Place Bid
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
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
          Load More Projects
        </motion.button>
      </motion.div>
    </div>
  );
}