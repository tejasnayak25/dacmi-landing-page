import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 glass-header px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-wider text-white">DACMI</span>
        </Link>
        <div className="flex space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-[#06b6d4] ${location.pathname === '/' ? 'text-[#06b6d4]' : 'text-gray-300'}`}
          >
            Platform
          </Link>
          <Link 
            to="/members" 
            className={`text-sm font-medium transition-colors hover:text-[#06b6d4] ${location.pathname === '/members' ? 'text-[#06b6d4]' : 'text-gray-300'}`}
          >
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
