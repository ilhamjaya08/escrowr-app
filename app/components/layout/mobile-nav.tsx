import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
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
    label: 'Projects',
    icon: 'solar:case-minimalistic-bold',
    href: '/projects',
  },
  {
    id: 'workers',
    label: 'Workers',
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

export function MobileNav() {
  const location = useLocation();

  const getActiveTab = () => {
    const currentPath = location.pathname;
    return navigationTabs.find(tab => 
      tab.href === currentPath || (tab.href !== '/' && currentPath.startsWith(tab.href))
    )?.id || 'dashboard';
  };

  const activeTab = getActiveTab();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Background with blur */}
      <div 
        className="backdrop-blur-md border-t"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderColor: '#E8E8E8'
        }}
      >
        <div className="grid grid-cols-4 px-2 py-2">
          {navigationTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className="relative flex flex-col items-center justify-center p-3"
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-tab"
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: '#F0F0F0' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <Icon 
                      icon={tab.icon} 
                      className="h-5 w-5"
                      style={{ 
                        color: isActive ? '#18181A' : '#A8A8A8'
                      }}
                    />
                  </motion.div>
                  
                  <span 
                    className="text-xs font-medium"
                    style={{ 
                      color: isActive ? '#18181A' : '#A8A8A8'
                    }}
                  >
                    {tab.label}
                  </span>
                </div>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#D2D88F' }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }} />
    </div>
  );
}