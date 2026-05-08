import { motion } from 'framer-motion';
import { Database, Network, Search, Cpu, Zap } from 'lucide-react';

export const ArchitectureVisual = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        
        {/* Step 1: Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-6 flex flex-col items-center text-center space-y-4"
        >
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <Search className="w-6 h-6 text-white/60" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Phase 01</span>
          <h4 className="text-sm font-bold">Query Embedding</h4>
        </motion.div>

        <div className="hidden md:flex justify-center">
          <Zap className="w-4 h-4 text-primary animate-pulse" />
        </div>

        {/* Step 2: Hybrid Engines */}
        <div className="md:col-span-1 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-6 flex flex-col items-center text-center space-y-4 border-primary/20"
          >
            <Database className="w-6 h-6 text-primary" />
            <h4 className="text-sm font-bold">Vector Engine</h4>
            <p className="text-[10px] text-gray-500 uppercase">FAISS / Semantic</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 flex flex-col items-center text-center space-y-4 border-secondary/20"
          >
            <Network className="w-6 h-6 text-secondary" />
            <h4 className="text-sm font-bold">Graph Engine</h4>
            <p className="text-[10px] text-gray-500 uppercase">Neo4j / Relations</p>
          </motion.div>
        </div>

        <div className="hidden md:flex justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-white/20"
          />
        </div>

        {/* Step 3: Synthesis */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-1 glass-card p-8 flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-white/10"
        >
          <div className="relative">
            <Cpu className="w-10 h-10 text-white" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-white/20 rounded-full"
            />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Stage 05</span>
            <h4 className="text-lg font-bold">Hybrid Synthesis</h4>
          </div>
        </motion.div>

      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 blur-[100px] bg-gradient-to-r from-primary via-secondary to-primary pointer-events-none" />
    </div>
  );
};
