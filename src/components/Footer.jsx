import { Brain, Code, Mail, Share2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'DACMI | Decentralized Agentic Collective Memory Intelligence',
      text: 'Check out DACMI - Redefining intelligence through persistent cognitive memory.',
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <footer className="relative z-50 border-t border-white/5 py-16 md:py-24 px-6 bg-[#030303] overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 md:mb-24">

          {/* Brand Pillar */}
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.15)] group-hover:border-primary/50 transition-all duration-500">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-tighter text-3xl text-white">DACMI</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Neural Core</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Redefining intelligence through decentralized, persistent cognitive memory. Built for a future where statelessness is no longer a constraint.
            </p>
          </div>

          {/* Social & Contact Pillar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/tejasnayak25/dacmi" target="_blank" rel="noreferrer" className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 text-gray-500 hover:text-primary hover:border-primary/50">
                  <Code className="w-5 h-5" />
                </a>
                <button onClick={handleShare} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 text-gray-500 hover:text-secondary hover:border-secondary/50">
                  <Share2 className="w-5 h-5" />
                </button>
                <a href="mailto:tejas.23cs173@sode-edu.in" className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 text-gray-500 hover:text-accent hover:border-accent/50">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Active Cluster</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-mono tracking-[0.3em] uppercase">
            © 2026 DACMI. FORGING PERMANENCE.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-white/5 font-black tracking-[0.8em] uppercase">Built for Persistence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
