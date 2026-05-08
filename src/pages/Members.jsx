import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Users, Code, Globe, ExternalLink, Mail, Fingerprint, Sparkles, ShieldCheck, GraduationCap, Building2, Radio, Activity, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const TiltCard = ({ children, className }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
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
    const rotateX = (y - rect.height / 2) / 60;
    const rotateY = (rect.width / 2 - x) / 60;
    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX((x / rect.width) * 100);
    setMouseY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, scale: (rotateX !== 0 && !isMobile) ? 1.01 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={cn("relative group/tilt", className)}
    >
      <div
        className="absolute inset-0 z-30 opacity-0 group-hover/tilt:opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`
        }}
      />
      {children}
    </motion.div>
  );
};

const teamMembers = [
  {
    name: 'Tejas Nayak',
    usn: '4MW23CS173',
    image: 'pic1.png',
    color: 'from-blue-500/20 to-indigo-500/20',
    accent: 'text-blue-400',
    domain: 'Neural Orchestration',
    sdg: { id: 'SDG 09', label: 'Innovation', icon: <Building2 className="w-3 h-3" /> },
    bio: 'Pioneering the core DACMI architecture to transition AI from session-based interactions to a lifelong cognitive fabric.',
    stats: { weight: '0.992', pulse: 'Optimal' },
    github: "tejasnayak25"
  },
  {
    name: 'Swasthik Yesh',
    usn: '4MW23CS171',
    image: 'pic2.png',
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
    domain: 'Immutable Ledgers',
    sdg: { id: 'SDG 16', label: 'Justice', icon: <ShieldCheck className="w-3 h-3" /> },
    bio: 'Securing cognitive integrity through decentralized protocols and smart-contract based memory validation.',
    stats: { weight: '0.985', pulse: 'Secured' },
    github: "syesh"
  },
  {
    name: 'Tharun G Bhat',
    usn: '4MW23CS175',
    image: 'pic3.png',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
    domain: 'Semantic Mapping',
    sdg: { id: 'SDG 04', label: 'Education', icon: <GraduationCap className="w-3 h-3" /> },
    bio: 'Developing high-fidelity retrieval models and graph-based memory structures for explainable AI reasoning.',
    stats: { weight: '0.978', pulse: 'High Res' },
    github: "TharunBhat"
  },
  {
    name: 'Vinayaka U Pai',
    usn: '4MW23CS185',
    image: 'pic4.png',
    color: 'from-rose-500/20 to-orange-500/20',
    accent: 'text-rose-400',
    domain: 'Interface Synthesis',
    sdg: { id: 'SDG 11', label: 'Sustainability', icon: <Globe className="w-3 h-3" /> },
    bio: 'Crafting the bridge between complex autonomous systems and human-centric cognitive interaction.',
    stats: { weight: '0.965', pulse: 'Adaptive' },
    github: "vinayaka29"
  }
];

const Members = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const headerOpacity = useTransform(springScroll, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[250vh] bg-[#030303] pt-24 md:pt-40 pb-24 px-4 md:px-6">

      {/* Narrative Context Background */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
      >
        <h1 className="text-5xl sm:text-7xl md:text-[15rem] lg:text-[20rem] font-black tracking-tighter uppercase opacity-[0.03] select-none whitespace-nowrap">
          ARCHITECTS
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-32 md:space-y-64">

        {/* Personnel Intro */}
        <div className="min-h-[70vh] md:h-screen flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8 max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-primary mx-auto"
            >
              <Activity className="w-3 h-3" />
              <span>Active Registry</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">
              The <br /><span className="neural-text">Collective</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              A decentralized unit of engineers and researchers committed to the persistence of cognitive integrity.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="w-px h-16 md:h-32 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-800 font-black">Personnel Files</span>
          </div>
        </div>

        {/* Personnel Data Cards */}
        <div className="grid grid-cols-1 gap-16 md:gap-48">
          {teamMembers.map((member, i) => (
            <div key={i} className="relative">
              <TiltCard className="group">
                <div className="glass-card overflow-hidden border-white/5 group-hover:border-primary/30 transition-all duration-700 shadow-2xl">
                  <div className="flex flex-col lg:flex-row">

                    {/* Personnel Visual Pillar */}
                    <div className="lg:w-2/5 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden bg-[#050505]">
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10", member.color)} />

                      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                        <Fingerprint className="w-full h-full text-white scale-150 rotate-12" />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                        {member.image ? (
                          <div className="relative group/img w-full max-w-[240px] md:max-w-[320px] aspect-[3/4]">
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity duration-1000" />
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top rounded-2xl md:rounded-[3rem] border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl relative z-10"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.nextSibling.style.display = 'flex';
                              }}
                            />
                          </div>
                        ) : null}
                        <div className="hidden w-24 h-24 md:w-48 md:h-48 items-center justify-center bg-white/5 rounded-2xl md:rounded-[3rem]">
                          <User className="w-12 h-12 md:w-24 md:h-24 text-white/5" />
                        </div>
                      </div>
                    </div>

                    {/* Information Nexus */}
                    <div className="lg:w-3/5 p-6 md:p-12 space-y-8 md:space-y-10 bg-white/[0.01]">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                        <div className="space-y-3 md:space-y-4">
                          <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">{member.name}</h3>
                          <p className="text-base md:text-xl font-light text-gray-500 italic tracking-tight">{member.domain}</p>
                        </div>

                        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto justify-between sm:justify-start">
                          <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-xl md:rounded-2xl glass border-white/10 bg-white/5">
                            {member.sdg.icon}
                            <span className="text-[8px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.2em] text-white/80">{member.sdg.id}</span>
                          </div>
                          <span className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-700 font-black">Mission Alignment</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-2xl border-l md:border-l-2 border-white/5 pl-4 md:pl-8 py-1 md:py-2">
                        {member.bio}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/5">
                        <div className="space-y-1">
                          <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-600 font-black">Synaptic Weight</p>
                          <span className="text-xl md:text-2xl font-black text-white">{member.stats.weight}</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-600 font-black">Neural Pulse</p>
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <Activity className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" />
                            <span className="text-xl md:text-2xl font-black text-white">{member.stats.pulse}</span>
                          </div>
                        </div>
                        <div className="col-span-2 flex justify-end items-center gap-3">
                          <a href={`https://github.com/${member.github}`} target="_blank" rel="noreferrer" className="p-2.5 md:p-3 rounded-xl md:rounded-2xl glass border-white/5 hover:border-primary/50 text-gray-500 hover:text-white transition-all shadow-lg group/btn">
                            <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>

              {i < teamMembers.length - 1 && (
                <div className="absolute -bottom-12 md:-bottom-48 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 opacity-20">
                  <div className="w-px h-12 md:h-24 bg-gradient-to-b from-white to-transparent" />
                  <Radio className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <div className="w-px h-12 md:h-24 bg-gradient-to-t from-white to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Scale CTA */}
        <div className="py-24 md:py-48 text-center space-y-12 md:space-y-16 relative">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full" />
          <div className="space-y-6 md:space-y-8 relative z-10 px-4">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full glass border-white/5 text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-gray-500 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exponential Growth Protocol</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">Scale with <br /><span className="neural-text">Us</span></h2>
            <p className="text-gray-500 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Join our decentralized mission to safeguard the future of collective autonomous intelligence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-8 pt-4 md:pt-8 relative z-10 px-6">
            <Link to="/" className="w-full sm:w-auto px-6 md:px-12 py-3.5 md:py-6 bg-white text-black font-black text-base md:text-xl rounded-xl md:rounded-[2rem] hover:scale-105 transition-all shadow-xl group text-center flex items-center justify-center gap-3">
              DACMI
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <a href="https://github.com/tejasnayak25/dacmi" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 md:px-12 py-3.5 md:py-6 glass rounded-xl md:rounded-[2rem] font-bold text-base md:text-xl text-white hover:bg-white/5 transition-all border-white/10 text-center flex items-center justify-center gap-3">
              <Code className="w-4 h-4 md:w-6 md:h-6" /> GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Members;
