import { Link } from 'react-router';
import { Icon } from '@iconify/react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div 
                className="h-6 w-6 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#18181A' }}
              >
                <span className="font-bold text-xs" style={{ color: '#FFFFFF' }}>E</span>
              </div>
              <span className="font-semibold" style={{ color: '#18181A' }}>Escrowr</span>
            </Link>
            <span className="text-sm text-gray-500">© 2025 All rights reserved</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/support" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a 
              href="#" 
              className="p-2 transition-colors"
              style={{ color: '#A8A8A8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#18181A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; }}
              aria-label="Twitter"
            >
              <Icon icon="ri:twitter-x-fill" className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="p-2 transition-colors"
              style={{ color: '#A8A8A8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#18181A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; }}
              aria-label="GitHub"
            >
              <Icon icon="ri:github-fill" className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="p-2 transition-colors"
              style={{ color: '#A8A8A8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#18181A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; }}
              aria-label="LinkedIn"
            >
              <Icon icon="ri:linkedin-fill" className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="p-2 transition-colors"
              style={{ color: '#A8A8A8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#18181A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; }}
              aria-label="Discord"
            >
              <Icon icon="ri:discord-fill" className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="p-2 transition-colors"
              style={{ color: '#A8A8A8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#18181A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8A8A8'; }}
              aria-label="Telegram"
            >
              <Icon icon="ri:telegram-fill" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}