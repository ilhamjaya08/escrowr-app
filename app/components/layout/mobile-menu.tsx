import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const navigationTabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:home-2-bold',
    href: '/',
  },
  {
    id: 'projects',
    label: 'Browse Projects',
    icon: 'solar:case-minimalistic-bold',
    href: '/projects',
  },
  {
    id: 'workers',
    label: 'Find Workers',
    icon: 'solar:users-group-rounded-bold',
    href: '/workers',
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'solar:chat-round-dots-bold',
    href: '/messages',
  },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getActiveTab = () => {
    const currentPath = location.pathname;
    return navigationTabs.find(tab => 
      tab.href === currentPath || (tab.href !== '/' && currentPath.startsWith(tab.href))
    )?.id || 'dashboard';
  };

  const activeTab = getActiveTab();

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-colors"
        style={{ 
          backgroundColor: isOpen ? '#F0F0F0' : 'transparent',
          color: '#18181A'
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon 
            icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} 
            className="h-6 w-6" 
          />
        </motion.div>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content - Island Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 right-4 z-50 bg-white rounded-2xl shadow-2xl border"
              style={{ 
                borderColor: '#E8E8E8',
                minWidth: '200px'
              }}
            >
              {/* Header */}
              <div className="p-4 border-b" style={{ borderColor: '#E8E8E8' }}>
                <h3 className="font-semibold text-sm" style={{ color: '#18181A' }}>
                  Navigation
                </h3>
              </div>

              {/* Menu Items */}
              <div className="p-2 pb-4">
                {navigationTabs.map((tab, index) => {
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={tab.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200
                          ${isActive ? 'font-medium' : ''}
                        `}
                        style={{
                          backgroundColor: isActive ? '#F0F0F0' : 'transparent',
                          color: isActive ? '#18181A' : '#A8A8A8'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = '#F8F8F8';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <Icon 
                          icon={tab.icon} 
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span className="text-sm">{tab.label}</span>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full ml-auto"
                            style={{ backgroundColor: '#D2D88F' }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}