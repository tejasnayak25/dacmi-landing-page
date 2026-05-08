import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

const stages = [
  { id: 1, title: "Backend Nucleus", desc: "FastAPI & Neo4j Foundation", status: "complete" },
  { id: 2, title: "Atomic Memory", desc: "Structured JSON schema storage", status: "complete" },
  { id: 3, title: "Vector Search", desc: "Semantic retrieval via FAISS", status: "complete" },
  { id: 4, title: "Graph Memory", desc: "Conceptual relationship mapping", status: "complete" },
  { id: 5, title: "Hybrid Retrieval", desc: "Vector + Graph synchronization", status: "complete" },
  { id: 6, title: "LLM Integration", desc: "Context-aware response generation", status: "complete" },
  { id: 7, title: "Memory Loop", desc: "Self-improving learning cycle", status: "complete" },
  { id: 8, title: "Multi-Agent Sim", desc: "Decentralized knowledge sharing", status: "complete" },
  { id: 9, title: "Neural Mapping", desc: "Interactive 3D visualization", status: "current" },
  { id: 10, title: "Neural Sync", desc: "P2P memory synchronization", status: "upcoming" },
  { id: 11, title: "Integrity Layer", desc: "Cryptographic tamper detection", status: "upcoming" },
  { id: 12, title: "Live Deployment", desc: "Dockerized production cluster", status: "upcoming" },
  { id: 13, title: "Neural Sleep", desc: "Autonomous cognitive refinement", status: "upcoming" },
  { id: 14, title: "User Agency", desc: "Memory Explorer & Pruning", status: "upcoming" }
];

export const RoadmapTimeline = () => {
  const completedCount = stages.filter(s => s.status === 'complete').length;
  const progressPercent = (completedCount / stages.length) * 100;

  return (
    <div className="relative py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">

        {/* Progress Overview */}
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">System Evolution</span>
            <span className="text-xl font-bold text-primary">{Math.round(progressPercent)}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-secondary relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
            </motion.div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">8 Complete</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">1 Active</span>
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "group relative p-6 md:p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden",
                stage.status === 'complete' ? "glass-card border-primary/20 bg-primary/[0.02]" :
                  stage.status === 'current' ? "glass-card border-accent bg-accent/[0.05] shadow-[0_0_30px_rgba(168,85,247,0.1)]" :
                    "bg-white/[0.02] border-white/5"
              )}
            >
              {/* Background Glow */}
              <div className={cn(
                "absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full",
                stage.status === 'complete' ? "bg-primary" : "bg-accent"
              )} />

              <div className="relative space-y-4">
                <div className="flex justify-between items-start">
                  <div className={cn(
                    "p-3 rounded-2xl border transition-colors",
                    stage.status === 'complete' ? "bg-primary/10 border-primary/20 text-primary" :
                      stage.status === 'current' ? "bg-accent/10 border-accent/30 text-accent" :
                        "bg-white/5 border-white/10 text-white/20"
                  )}>
                    {stage.status === 'complete' ? <CheckCircle2 className="w-5 h-5" /> :
                      stage.status === 'current' ? <Zap className="w-5 h-5 animate-pulse" /> :
                        <Circle className="w-4 h-4" />}
                  </div>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.3em]",
                    stage.status === 'complete' ? "text-primary/50" :
                      stage.status === 'current' ? "text-accent" :
                        "text-white/10"
                  )}>
                    #{stage.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className={cn(
                    "text-lg font-bold tracking-tight",
                    stage.status === 'upcoming' ? "text-white/40" : "text-white"
                  )}>
                    {stage.title}
                  </h3>
                  <p className={cn(
                    "text-xs font-light leading-relaxed",
                    stage.status === 'upcoming' ? "text-white/10" : "text-gray-400"
                  )}>
                    {stage.desc}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              {stage.status === 'current' && (
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30">
                    <div className="w-1 h-1 rounded-full bg-accent animate-ping" />
                    <span className="text-[7px] font-black text-accent uppercase tracking-widest">Active</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
