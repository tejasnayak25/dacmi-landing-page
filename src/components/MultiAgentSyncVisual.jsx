import { motion } from 'framer-motion';
import { Box, Hexagon, Cpu, Zap, Share2 } from 'lucide-react';
import { useMemo } from 'react';

export const MultiAgentSyncVisual = () => {
  const nodes = useMemo(() => [
    { id: 1, x: 20, y: 20, icon: Box, label: 'Agent A' },
    { id: 2, x: 80, y: 30, icon: Hexagon, label: 'Agent B' },
    { id: 3, x: 40, y: 80, icon: Cpu, label: 'Agent C' },
    { id: 4, x: 70, y: 70, icon: Share2, label: 'Relay' },
  ], []);

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [0, 3]
  ];

  return (
    <div className="relative w-full h-full bg-[#020202] rounded-3xl overflow-hidden group flex items-center justify-center p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative w-full h-full">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {connections.map(([a, b], i) => (
            <g key={i}>
              <line
                x1={`${nodes[a]?.x || 0}%`} y1={`${nodes[a]?.y || 0}%`}
                x2={`${nodes[b]?.x || 0}%`} y2={`${nodes[b]?.y || 0}%`}
                stroke="var(--color-accent)"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              <motion.circle
                r="2"
                fill="var(--color-accent)"
                initial={{ cx: `${nodes[a]?.x || 0}%`, cy: `${nodes[a]?.y || 0}%` }}
                animate={{
                  cx: [`${nodes[a]?.x || 0}%`, `${nodes[b]?.x || 0}%`],
                  cy: [`${nodes[a]?.y || 0}%`, `${nodes[b]?.y || 0}%`],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3 + node.id, repeat: Infinity }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative group">
              <div className="p-3 md:p-4 rounded-2xl glass border-secondary/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:border-secondary/50 transition-colors">
                <node.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">{node.label}</span>
              </div>

              {/* Pulse effect */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-secondary/20 rounded-2xl -z-10"
              />
            </div>
          </motion.div>
        ))}

        {/* Central Sync Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 md:w-48 md:h-48 border border-dashed border-secondary/20 rounded-full flex items-center justify-center"
          >
            <div className="w-24 h-24 md:w-36 md:h-36 border border-secondary/10 rounded-full" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-secondary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};
