import { User } from 'lucide-react';

const teamMembers = [
  { name: 'Tejas Nayak', usn: '4MW23CS173', image: 'pic1.png', color: 'group-hover:border-[#06b6d4] shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]', iconColor: 'group-hover:text-[#06b6d4]' },
  { name: 'Swasthik Yesh', usn: '4MW23CS171', image: 'pic2.png', color: 'group-hover:border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]', iconColor: 'group-hover:text-[#a855f7]' },
  { name: 'Tharun G Bhat', usn: '4MW23CS175', image: 'pic3.png', color: 'group-hover:border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]', iconColor: 'group-hover:text-[#10b981]' },
  { name: 'Vinayaka U Pai', usn: '4MW23CS185', image: 'pic4.png', color: 'group-hover:border-[#f43f5e] shadow-[0_0_15px_rgba(244,63,94,0.1)] group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]', iconColor: 'group-hover:text-[#f43f5e]' }
];

const Members = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg tracking-tight">
            The engineers and researchers behind the DACMI architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="member-card p-8 flex flex-col items-center text-center space-y-5 group">
              <div className={`w-32 h-32 rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center overflow-hidden ${member.color}`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className={`w-12 h-12 text-gray-500 transition-colors duration-300 ${member.iconColor}`} />
                )}
              </div>
              <div className="space-y-1 w-full">
                <h3 className="text-xl font-bold text-white tracking-tighter">{member.name}</h3>
                <p className="text-gray-500 font-mono text-s tracking-wider">{member.usn}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Members;
