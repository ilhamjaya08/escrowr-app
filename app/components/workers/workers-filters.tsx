import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const skills = [
  { id: 'all', name: 'All Skills', count: 3200 },
  { id: 'react', name: 'React', count: 890 },
  { id: 'nodejs', name: 'Node.js', count: 567 },
  { id: 'python', name: 'Python', count: 445 },
  { id: 'figma', name: 'Figma', count: 334 },
  { id: 'photoshop', name: 'Photoshop', count: 289 },
];

const experience = [
  { id: 'any', name: 'Any Experience' },
  { id: 'entry', name: 'Entry Level (0-2 years)' },
  { id: 'intermediate', name: 'Intermediate (2-5 years)' },
  { id: 'expert', name: 'Expert (5+ years)' },
];

const hourlyRates = [
  { id: 'any', name: 'Any Rate' },
  { id: 'under-25', name: 'Under $25/hr' },
  { id: '25-50', name: '$25 - $50/hr' },
  { id: '50-100', name: '$50 - $100/hr' },
  { id: 'over-100', name: 'Over $100/hr' },
];

const availability = [
  { id: 'any', name: 'Any Availability' },
  { id: 'available', name: 'Available Now' },
  { id: 'part-time', name: 'Part Time' },
  { id: 'full-time', name: 'Full Time' },
];

export function WorkersFilters() {
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('any');
  const [selectedRate, setSelectedRate] = useState('any');
  const [selectedAvailability, setSelectedAvailability] = useState('any');

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

      {/* Skills */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Top Skills</h4>
        <div className="space-y-2">
          {skills.map((skill) => (
            <motion.button
              key={skill.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedSkill(skill.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedSkill === skill.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedSkill === skill.id ? '#F0F0F0' : 'transparent',
                color: selectedSkill === skill.id ? '#18181A' : '#A8A8A8'
              }}
            >
              <div className="flex items-center justify-between">
                <span>{skill.name}</span>
                <span className="text-xs">{skill.count}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Experience Level</h4>
        <div className="space-y-2">
          {experience.map((exp) => (
            <motion.button
              key={exp.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedExperience(exp.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedExperience === exp.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedExperience === exp.id ? '#F0F0F0' : 'transparent',
                color: selectedExperience === exp.id ? '#18181A' : '#A8A8A8'
              }}
            >
              {exp.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hourly Rate */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Hourly Rate</h4>
        <div className="space-y-2">
          {hourlyRates.map((rate) => (
            <motion.button
              key={rate.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedRate(rate.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedRate === rate.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedRate === rate.id ? '#F0F0F0' : 'transparent',
                color: selectedRate === rate.id ? '#18181A' : '#A8A8A8'
              }}
            >
              {rate.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3" style={{ color: '#18181A' }}>Availability</h4>
        <div className="space-y-2">
          {availability.map((avail) => (
            <motion.button
              key={avail.id}
              whileHover={{ x: 2 }}
              onClick={() => setSelectedAvailability(avail.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedAvailability === avail.id 
                  ? 'font-medium' 
                  : ''
              }`}
              style={{
                backgroundColor: selectedAvailability === avail.id ? '#F0F0F0' : 'transparent',
                color: selectedAvailability === avail.id ? '#18181A' : '#A8A8A8'
              }}
            >
              {avail.name}
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
          setSelectedSkill('all');
          setSelectedExperience('any');
          setSelectedRate('any');
          setSelectedAvailability('any');
        }}
      >
        Clear All Filters
      </motion.button>
    </motion.div>
  );
}