import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const categories = [
  { id: 'all', name: 'All Projects', count: 2400 },
  { id: 'software', name: 'Software Dev', count: 890 },
  { id: 'design', name: 'Design', count: 567 },
  { id: 'writing', name: 'Writing', count: 234 },
  { id: 'marketing', name: 'Marketing', count: 189 },
  { id: 'video', name: 'Video', count: 123 },
];

const budgetRanges = [
  { id: 'any', name: 'Any Budget' },
  { id: 'under-500', name: 'Under $500' },
  { id: '500-1000', name: '$500 - $1,000' },
  { id: '1000-5000', name: '$1,000 - $5,000' },
  { id: 'over-5000', name: 'Over $5,000' },
];

const projectTypes = [
  { id: 'fixed', name: 'Fixed Price' },
  { id: 'hourly', name: 'Hourly Rate' },
];

export function ProjectsFilters() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('any');
  const [selectedType, setSelectedType] = useState('fixed');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm"
    >
      <h3 className="font-semibold mb-4" style={{ color: '#18181A' }}>
        <Icon icon="solar:filter-bold" className="inline h-5 w-5 mr-2" />
        Filters
      </h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? '#F0F0F0' : 'transparent',
                color: selectedCategory === category.id ? '#18181A' : '#A8A8A8'
              }}
            >
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                <span className="text-xs">{category.count}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Budget Range</h4>
        <div className="space-y-2">
          {budgetRanges.map((range) => (
            <motion.button
              key={range.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedBudget(range.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedBudget === range.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedBudget === range.id ? '#F0F0F0' : 'transparent',
                color: selectedBudget === range.id ? '#18181A' : '#A8A8A8'
              }}
            >
              {range.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Type */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Project Type</h4>
        <div className="space-y-2">
          {projectTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedType(type.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedType === type.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedType === type.id ? '#F0F0F0' : 'transparent',
                color: selectedType === type.id ? '#18181A' : '#A8A8A8'
              }}
            >
              {type.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 text-sm font-medium rounded-lg transition-colors"
        style={{ backgroundColor: '#F0F0F0', color: '#18181A' }}
        onClick={() => {
          setSelectedCategory('all');
          setSelectedBudget('any');
          setSelectedType('fixed');
        }}
      >
        Clear All Filters
      </motion.button>
    </motion.div>
  );
}