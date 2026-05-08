import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Users, Globe, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Platform', path: '/', icon: <Brain className="w-5 h-5" /> },
    { name: 'Team', path: '/members', icon: <Users className="w-5 h-5" /> },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Clean Corner Trigger */}
      <div className="fixed top-6 right-6 z-[60]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center shadow-xl group transition-all"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex flex-col gap-1.5">
                <div className="w-5 h-0.5 bg-white rounded-full" />
                <div className="w-5 h-0.5 bg-white rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Minimal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[50]"
            />

            {/* Light Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-[#030303]/90 border-l border-white/5 z-[55] flex flex-col p-12"
            >
              {/* Simple Branding */}
              <div className="flex items-center gap-4 mb-24 pt-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="font-black tracking-tighter text-2xl text-white">DACMI</span>
              </div>

              {/* Clean Navigation */}
              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group flex items-center gap-6"
                  >
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-500",
                      location.pathname === item.path ? "bg-primary scale-150 shadow-[0_0_10px_#6366f1]" : "bg-white/10 group-hover:bg-white/40"
                    )} />
                    <span className={cn(
                      "text-3xl font-bold tracking-tight transition-colors",
                      location.pathname === item.path ? "text-white" : "text-gray-500 group-hover:text-white"
                    )}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-6">
                  <a href="https://github.com/tejasnayak25/dacmi" target="_blank" rel="noreferrer">
                    <Globe className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                  </a>
                  <Link to="/members">
                    <Users className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                  </Link>
                </div>
                <span className="text-[10px] font-mono text-gray-700 uppercase tracking-widest italic">v1.0.4</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
