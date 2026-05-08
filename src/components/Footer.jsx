import { motion } from 'framer-motion';
import { Brain, Globe, Search, Activity, Code, Mail, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-50 border-t border-white/5 py-12 md:py-24 px-6 bg-[#030303] overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">

          {/* Brand Pillar */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:bg-primary/20 transition-all">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="font-black tracking-tighter text-3xl text-white">DACMI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Redefining intelligence through decentralized, persistent cognitive memory. Built for a future where statelessness is no longer a constraint.
            </p>
          </div>

          {/* Navigation Pillar */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Infrastructure</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Neural Platform', path: '/' },
                { name: 'Personnel Registry', path: '/members' },
                { name: 'Technical Wiki', path: '#' },
                { name: 'Project Roadmap', path: '#' },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-gray-600 hover:text-white text-sm transition-colors w-fit">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Institution Pillar */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Institution</h4>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Department of Computer Science <br />
                <span className="text-white/80 font-bold">SMVITM</span> <br />
                Bantakal, Udupi
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-black">Cluster Active</span>
              </div>
            </div>
          </div>

          {/* Social Pillar */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Code, path: 'https://github.com/tejasnayak25/dacmi' },
                { Icon: Share2, path: '#' },
                { Icon: Mail, path: '#' },
              ].map(({ Icon, path }, i) => (
                <a key={i} href={path} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/50 hover:text-primary transition-all text-gray-600">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-[10px] text-gray-700 font-mono uppercase tracking-[0.2em]">
              Latency: 14ms <br />
              Uptime: 99.98%
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-700 text-[10px] font-mono tracking-[0.2em] uppercase">
            © 2026 DACMI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/10 font-black tracking-[0.5em] uppercase">Forging Permanence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
