import { useState, useEffect } from 'react';
import { Brain, Database, Link, Share2, Search, ShieldCheck, ArrowRight, Code, Network, Hexagon, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

const objectives = [
  { icon: <Database className="w-6 h-6 text-[#06b6d4]" />, bg: 'bg-[rgba(6,182,212,0.1)]', title: 'Persistent Memory', desc: 'Transition AI from stateless interactions to long-term memory via vector and graph databases.' },
  { icon: <Brain className="w-6 h-6 text-[#a855f7]" />, bg: 'bg-[rgba(168,85,247,0.1)]', title: 'Semantic Organization', desc: 'Structure cognitive data for contextual mapping and complex reasoning.' },
  { icon: <Share2 className="w-6 h-6 text-[#10b981]" />, bg: 'bg-[rgba(16,185,129,0.1)]', title: 'Decentralized Sync', desc: 'Leverage distributed systems for seamless synchronization across autonomous agents.' },
  { icon: <Link className="w-6 h-6 text-[#f43f5e]" />, bg: 'bg-[rgba(244,63,94,0.1)]', title: 'Collaborative Learning', desc: 'Enable AI agents to share insights and build collective intelligence.' },
  { icon: <Search className="w-6 h-6 text-[#eab308]" />, bg: 'bg-[rgba(234,179,8,0.1)]', title: 'Explainable Retrieval', desc: 'Provide clear, traceable pathways for how AI recalls and utilizes past information.' },
  { icon: <ShieldCheck className="w-6 h-6 text-[#6366f1]" />, bg: 'bg-[rgba(99,102,241,0.1)]', title: 'Data Integrity', desc: 'Secure the cognitive ledger using smart contracts to ensure data immutability.' }
];

const techStack = [
  { name: 'Python & FastAPI', icon: <Code className="w-8 h-8 text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors duration-300" /> },
  { name: 'LangChain & LlamaIndex', icon: <Link className="w-8 h-8 text-[#a855f7] group-hover:text-[#c084fc] transition-colors duration-300" /> },
  { name: 'FAISS & ChromaDB', icon: <Database className="w-8 h-8 text-[#14b8a6] group-hover:text-[#2dd4bf] transition-colors duration-300" /> },
  { name: 'Neo4j Graph DB', icon: <Network className="w-8 h-8 text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors duration-300" /> },
  { name: 'Ethereum & Solidity', icon: <Hexagon className="w-8 h-8 text-[#6366f1] group-hover:text-[#818cf8] transition-colors duration-300" /> }
];

const workflow = [
  'Agent Input', 'Cognitive Retrieval', 'Reasoning Engine', 'Memory Update', 'Local Sync', 'Shared Memory State'
];

const sdgs = [
  { title: 'SDG 9: Industry & Innovation', icon: <Building2 className="w-6 h-6 text-[#f97316]" />, bg: 'bg-[rgba(249,115,22,0.1)]', desc: 'Building resilient infrastructure for next-generation AI systems.' },
  { title: 'SDG 16: Secure Digital Systems', icon: <ShieldCheck className="w-6 h-6 text-[#3b82f6]" />, bg: 'bg-[rgba(59,130,246,0.1)]', desc: 'Ensuring accountable, transparent, and secure data ledgers.' },
  { title: 'SDG 4: Quality Education', icon: <GraduationCap className="w-6 h-6 text-[#eab308]" />, bg: 'bg-[rgba(234,179,8,0.1)]', desc: 'Facilitating collective, open-access knowledge sharing.' }
];

const outcomes = [
  { title: 'Improved Retrieval Efficiency', desc: 'Faster access to contextual data and relationships.', border: 'border-t-[#10b981]', iconColor: 'text-[#10b981]' },
  { title: 'Structured Long-Term Memory', desc: 'Complete retention of cross-session context.', border: 'border-t-[#a855f7]', iconColor: 'text-[#a855f7]' },
  { title: 'System Resilience & Integrity', desc: 'Uncompromised uptime via decentralized networks.', border: 'border-t-[#0ea5e9]', iconColor: 'text-[#0ea5e9]' }
];

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative">
      
      {/* Dynamic Mesh Gradient Following Mouse */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-full h-full opacity-40 transition-transform duration-300 ease-out z-[-1]"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.15), rgba(6,182,212,0.1), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 pt-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="gradient-text">DACMI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-300 max-w-3xl mx-auto tracking-tight">
            The Future of AI Memory.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A system transitioning AI from stateless models to autonomous agents with long-term, persistent memory. Powered by a secure "cognitive ledger".
          </p>
          <div className="flex items-center justify-center space-x-6 pt-8">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-semibold rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              Read Report
            </button>
          </div>
        </section>

        {/* 1. Why DACMI? (Outcomes) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Why DACMI?</h2>
            <p className="text-gray-400">Measurable improvements over legacy AI memory architectures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-8 soft-bento border-t-2 ${outcome.border}`}>
                <CheckCircle2 className={`w-10 h-10 mb-4 ${outcome.iconColor}`} />
                <h4 className="text-lg font-semibold text-white mb-2 tracking-tight">{outcome.title}</h4>
                <p className="text-sm text-gray-400">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Visual Workflow / Methodology */}
        <section className="space-y-12 relative py-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">Live Workflow</h2>
            <p className="text-gray-400">End-to-end architecture for persistent intelligence.</p>
          </div>
          <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-max px-4 mx-auto max-w-6xl relative">
              
              {/* Glowing connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-[rgba(255,255,255,0.1)] z-0">
                <div className="h-full w-full bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#f43f5e] shadow-[0_0_10px_rgba(168,85,247,0.5)] opacity-80" />
              </div>

              {workflow.map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10 w-40">
                  {/* Glowing node */}
                  <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] mb-4">
                    <span className="text-[#06b6d4] font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-200 text-center tracking-tight">{step}</span>
                  
                  {/* Vertical connecting line for mobile */}
                  {i < workflow.length - 1 && (
                    <div className="md:hidden h-12 w-[2px] bg-gradient-to-b from-[#a855f7] to-[#06b6d4] my-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Core Infrastructure */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Core Infrastructure</h2>
            <p className="text-gray-400">The six pillars of our decentralized cognitive network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="soft-bento p-8 space-y-4 transition-all hover:bg-[rgba(255,255,255,0.04)]">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${obj.bg}`}>
                  {obj.icon}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tighter">{obj.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{obj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Interactive Tech Stack */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Tech Ecosystem</h2>
            <p className="text-gray-400">The decentralized stack powering autonomous cognition.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="soft-bento flex flex-col items-center justify-center p-6 w-48 space-y-4 hover:bg-[rgba(255,255,255,0.05)] group cursor-default">
                <div>
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-gray-200 text-center tracking-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Strategic Impact */}
        <section className="space-y-12 pb-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Global Impact</h2>
            <p className="text-gray-400">Aligning with Sustainable Development Goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdgs.map((sdg, i) => (
              <div key={i} className="soft-bento p-8 flex flex-col items-center text-center space-y-4">
                <div className={`p-3 rounded-full ${sdg.bg}`}>
                  {sdg.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tighter">{sdg.title}</h3>
                <p className="text-sm text-gray-400">{sdg.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Home;
