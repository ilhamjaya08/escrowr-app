import { Link } from 'react-router';
import { Button } from '~/components/ui';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            E
          </div>
          <span className="text-xl font-bold text-gray-900">Escrowr</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/projects" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Browse Projects
          </Link>
          <Link 
            to="/workers" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Find Workers
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm">
            Join Escrowr
          </Button>
        </div>
      </div>
    </header>
  );
}