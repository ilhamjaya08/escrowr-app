import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    client: 'TechCorp Inc.',
    budget: 2500,
    currency: 'USDC',
    deadline: '2 weeks',
    skills: ['React', 'Python', 'Machine Learning', 'D3.js'],
    description: 'Build a comprehensive analytics dashboard with AI-powered insights and real-time data visualization.',
    featured: true,
    urgent: false,
    verified: true,
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Redesign',
    client: 'StartupXYZ',
    budget: 1800,
    currency: 'USDC',
    deadline: '10 days',
    skills: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping'],
    description: 'Complete redesign of our fintech mobile app with modern UI patterns and improved user experience.',
    featured: true,
    urgent: true,
    verified: true,
  },
];

export function FeaturedProjects() {
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
          Featured Projects
        </h2>
        <button className="text-sm" style={{ color: '#A8A8A8' }}>
          View All Featured
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-200 cursor-pointer"
            style={{ borderColor: '#D2D88F' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-lg" style={{ color: '#18181A' }}>
                    {project.title}
                  </h3>
                  {project.urgent && (
                    <span 
                      className="px-2 py-1 rounded-lg text-xs font-medium"
                      style={{ backgroundColor: '#D2D88F', color: '#18181A' }}
                    >
                      Urgent
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm" style={{ color: '#A8A8A8' }}>
                  <span>{project.client}</span>
                  {project.verified && (
                    <Icon icon="solar:verified-check-bold" className="h-4 w-4" style={{ color: '#A8A8A8' }} />
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#A8A8A8' }}>
              {project.description}
            </p>

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
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E8E8E8' }}>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon icon="cryptocurrency:usdc" className="h-4 w-4" style={{ color: '#A8A8A8' }} />
                  <span className="font-semibold" style={{ color: '#18181A' }}>
                    ${project.budget} {project.currency}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-sm" style={{ color: '#A8A8A8' }}>
                  <Icon icon="solar:clock-circle-bold" className="h-4 w-4" />
                  <span>{project.deadline}</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ backgroundColor: '#18181A', color: '#FFFFFF' }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}