import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '~/components/ui';

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

export function Navbar() {
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isAuthenticated] = useState(false); // TODO: Replace with actual auth state

  const getActiveTab = () => {
    const currentPath = location.pathname;
    return navigationTabs.find(tab => 
      tab.href === currentPath || (tab.href !== '/' && currentPath.startsWith(tab.href))
    )?.id || 'dashboard';
  };

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/escrowr.png" 
            alt="Escrowr Logo" 
            className="h-8 w-8"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.currentTarget as HTMLImageElement;
              const fallback = target.nextElementSibling as HTMLElement;
              target.style.display = 'none';
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div 
            className="hidden h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white font-bold text-sm"
            style={{ display: 'none' }}
          >
            E
          </div>
          <span className="text-xl font-semibold text-gray-900">Escrowr</span>
        </Link>

        {/* Tab Navigation */}
        <nav className="desktop-nav hidden md:flex items-center space-x-1 bg-gray-50 rounded-2xl p-1">
          {navigationTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className="relative"
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <motion.div
                  className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-gray-900 text-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon 
                    icon={tab.icon} 
                    className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} 
                  />
                  
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {tab.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Auth Button */}
        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Icon icon="solar:bell-bold" className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Icon icon="solar:user-bold" className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              {/* <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button> */}
              <Button variant="primary" size="sm">
                <Icon icon="solar:login-3-bold" className="h-4 w-4 mr-2" />
                Join Escrowr
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}