import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Brain, Database, Share2,
  ShieldCheck, Network,
  Building2, GraduationCap,
  Activity, Globe, Lock,
  Layers, Users, Code
} from 'lucide-react';
import { cn } from '../utils/cn';
import { RoadmapTimeline } from '../components/RoadmapTimeline';
import { ArchitectureVisual } from '../components/ArchitectureVisual';
import { MultiAgentSyncVisual } from '../components/MultiAgentSyncVisual';

const TiltCard = ({ children, className }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const NeuralLine = ({ delay = 0 }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent my-12 md:my-24"
  />
);

const NeuralCoreVisual = () => {
  const nodes = useMemo(() => [
    { id: 1, x: -60, y: -40, icon: Database, label: 'VEC' },
    { id: 2, x: 70, y: -20, icon: Lock, label: 'SHA' },
    { id: 3, x: -50, y: 60, icon: Share2, label: 'P2P' },
    { id: 4, x: 60, y: 50, icon: Activity, label: 'SYNC' },
  ], []);

  return (
    <div className="relative w-full h-full bg-[#020202] rounded-3xl overflow-hidden group flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Floating Synaptic Nodes - Reduced offsets to prevent mobile overflow */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            animate={{
              y: [node.y, node.y - 10, node.y],
              x: [node.x, node.x + 5, node.x]
            }}
            transition={{ duration: 4 + node.id, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex flex-col items-center gap-1.5 md:gap-2">
              <div className="p-2 md:p-3 rounded-xl glass border-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <node.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </div>
              <span className="text-[5px] md:text-[6px] font-mono text-white/20 uppercase tracking-widest">{node.label}</span>

              {/* Connector Path - Adjusted for mobile sizing */}
              <svg className="absolute top-1/2 left-1/2 w-[150px] h-[150px] md:w-[300px] md:h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible opacity-30">
                <motion.path
                  d={`M 75 75 L ${75 - node.x} ${75 - node.y}`}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 8"
                  className="text-primary/20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: node.id * 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 scale-90 md:scale-100">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -inset-32 bg-primary/30 blur-[80px] md:blur-[120px] rounded-full"
        />

        <div className="relative w-20 h-20 md:w-36 md:h-36 flex items-center justify-center">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="w-14 h-14 md:w-24 md:h-24 glass border-white/10 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
            <Brain className="w-6 h-6 md:w-10 md:h-10 text-white/80" />
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
              <motion.circle
                cx="48" cy="48" r="44"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary/40 md:cx-[72] md:cy-[72] md:r-[60]"
                strokeDasharray="276"
                initial={{ strokeDashoffset: 276 }}
                animate={{ strokeDashoffset: [276, 0, 276] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, -30]);
  const heroPointerEvents = useTransform(scrollYProgress, [0, 0.05], ["auto", "none"]);
  const heroVisibility = useTransform(scrollYProgress, [0, 0.05, 0.06], ["visible", "visible", "hidden"]);
  const particlesOpacity = useTransform(scrollYProgress, [0, 0.03], [0.1, 0]);

  const [particles] = useState(() => [...Array(15)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10
  })));

  return (
    <div ref={containerRef} className="relative min-h-[400vh] md:min-h-[450vh] bg-[#030303]">

      <section className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, pointerEvents: heroPointerEvents, visibility: heroVisibility }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center space-y-8 md:space-y-12 w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-500 mx-auto">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
            <span>Entropy Level Critical</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase">
            Agentic <br />
            <span className="text-white/10">Memory</span>
          </h1>

          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-2xl font-light text-gray-500 max-w-3xl mx-auto tracking-tight leading-relaxed">
              Bridging the gap between ephemeral sessions and permanent intelligence. <br className="hidden sm:block" />
              <span className="text-white italic">DACMI: The persistent cognitive bridge.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 px-6">
              <Link to="/members" className="w-full sm:w-auto group relative px-6 md:px-12 py-3.5 md:py-6 bg-white text-black font-black text-base md:text-xl rounded-xl md:rounded-2xl overflow-hidden transition-all shadow-xl hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3">
                <Users className="w-4 h-4 md:w-5 md:h-5" /> Team
              </Link>
              <a href="https://github.com/tejasnayak25/dacmi" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 md:px-12 py-3.5 md:py-6 glass rounded-xl md:rounded-2xl font-bold text-base md:text-xl text-white hover:bg-white/5 transition-all border-white/10 text-center flex items-center justify-center gap-3">
                <Code className="w-4 h-4 md:w-5 md:h-5" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: particlesOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {particles.map((p) => (
            <motion.div
              key={p.id}
              animate={{ y: [0, 1000], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
              className="absolute w-[1px] h-24 md:h-32 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: p.left, top: -200 }}
            />
          ))}
        </motion.div>
      </section>

      <section className="relative z-20 pt-[40vh] md:pt-[50vh] px-6 max-w-7xl mx-auto space-y-16 md:space-y-32">

        <div className="space-y-24 md:space-y-48">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="flex-1 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Database className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-primary font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">Neural Protocol 01</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                Hybrid <br /><span className="neural-text">Retrieval</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Stage 05: Synchronizing Vector (FAISS) semantic search with Graph (Neo4j) conceptual relationships for high-fidelity context.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-xs font-black text-white/40 uppercase tracking-widest">Efficiency</span>
                  <span className="text-xl md:text-2xl font-bold text-white">99.2%</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-xs font-black text-white/40 uppercase tracking-widest">Reliability</span>
                  <span className="text-xl md:text-2xl font-bold text-white">Faultless</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative max-w-sm lg:max-w-none mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 blur-[60px] md:blur-[120px] rounded-full" />
              <TiltCard className="w-full h-full glass-card p-4 flex items-center justify-center border-white/5 shadow-2xl">
                <NeuralCoreVisual />
              </TiltCard>
            </div>
          </div>

          <NeuralLine delay={0.2} />

          <div className="flex flex-col lg:flex-row-reverse gap-12 md:gap-20 items-center">
            <div className="flex-1 space-y-6 md:space-y-8 lg:text-right">
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="text-secondary font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">Neural Protocol 02</span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <Network className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                Multi-Agent <br /><span className="text-secondary text-glow">Synchronization</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Stage 09: P2P mesh-sync protocols allowing autonomous agents to share memory pools across a hardened peer-to-peer network.
              </p>
              <div className="flex items-center gap-6 pt-4 lg:justify-end">
                <div className="flex flex-col lg:items-end">
                  <span className="text-[8px] md:text-xs font-black text-white/40 uppercase tracking-widest">Nodes</span>
                  <span className="text-xl md:text-2xl font-bold text-white">∞ Distributed</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-white/10" />
                <div className="flex flex-col lg:items-end">
                  <span className="text-[8px] md:text-xs font-black text-white/40 uppercase tracking-widest">Uptime</span>
                  <span className="text-xl md:text-2xl font-bold text-white">100% Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative max-w-sm lg:max-w-none mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-secondary/10 blur-[60px] md:blur-[120px] rounded-full" />
              <TiltCard className="w-full h-full glass-card p-4 flex items-center justify-center shadow-2xl">
                <MultiAgentSyncVisual />
              </TiltCard>
            </div>
          </div>
        </div>

        <div className="space-y-12 md:space-y-20 py-8 md:py-16">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-500 mx-auto">
              <Layers className="w-3 h-3" />
              <span>Cognitive Architecture</span>
            </div>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">The Hybrid Engine</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-light">
              Vector semantic search meets graph relationship mapping. A unified approach to digital memory.
            </p>
          </div>
          <ArchitectureVisual />
        </div>

        <NeuralLine delay={0.4} />

        <div className="space-y-12 md:space-y-20 py-8 md:py-16">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-500 mx-auto">
              <Activity className="w-3 h-3" />
              <span>Project Evolution</span>
            </div>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">The Neural Roadmap</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-light">
              From backend nucleus to autonomous cognitive refinement. 14 stages of agentic intelligence.
            </p>
          </div>

          <RoadmapTimeline />
        </div>

        <div className="space-y-12 md:space-y-20 py-8 md:py-16">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-500 mx-auto">
              <Globe className="w-3 h-3" />
              <span>Vision 2030 Alignment</span>
            </div>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">The Global Blueprint</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { id: 'SDG 09', title: 'Industry & Innovation', desc: 'Resilient AI infrastructure via autonomous resource orchestration.', color: 'from-primary/20 to-primary/40', icon: <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" /> },
              { id: 'SDG 16', title: 'Peace & Justice', desc: 'Transparent AI governance via immutable cognitive ledgers.', color: 'from-secondary/20 to-secondary/40', icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-secondary" /> },
              { id: 'SDG 04', title: 'Quality Education', desc: 'Democratizing intelligence by providing persistent memory.', color: 'from-accent/20 to-accent/40', icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-accent" /> }
            ].map((sdg, i) => (
              <TiltCard key={i} className="glass-card p-8 md:p-12 space-y-6 md:space-y-8 group border-white/5">
                <div className="flex justify-between items-start">
                  <div className={cn("p-4 md:p-5 rounded-2xl md:rounded-3xl bg-[#0a0a0a] border border-white/10 transition-transform", sdg.color)}>{sdg.icon}</div>
                  <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-white/10">{sdg.id}</span>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">{sdg.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">{sdg.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <section className="py-24 md:py-48 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 space-y-12 max-w-4xl mx-auto px-6"
          >
            {/* Visual Core */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
              <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full glass border-white/10 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-dashed border-white/10 rounded-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase">
                Become <br />
                <span className="neural-text">Persistent</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Step into the future of autonomous intelligence. <br />
                Initialize your neural link with the DACMI protocol today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 pt-4">
              <Link to="/members" className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white text-black font-black text-base md:text-lg rounded-2xl hover:scale-105 active:scale-95 transition-transform shadow-xl text-center flex items-center justify-center gap-3">
                <Users className="w-5 h-5 md:w-6 md:h-6" /> Team
              </Link>
              <a href="https://github.com/tejasnayak25/dacmi" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 md:py-5 glass border-white/10 text-white font-bold text-base md:text-lg rounded-2xl hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-3">
                <Code className="w-5 h-5 md:w-6 md:h-6" /> GitHub
              </a>
            </div>
          </motion.div>
        </section>

      </section>

    </div>
  );
};

export default Home;
