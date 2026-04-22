import { motion } from 'framer-motion';
import { Linkedin, X as XIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Team = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Pedro Pelicioni",
      role: t.team.members.pedro.role,
      bio: t.team.members.pedro.bio,
      initials: "PP",
      image: "/pedro.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/pedro-pelicioni/",
        twitter: "https://x.com/pelicioni_xlm",
      }
    },
    {
      name: "Wlad Mendes",
      role: t.team.members.wlad.role,
      bio: t.team.members.wlad.bio,
      initials: "WM",
      image: "/wlad.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/wlademyr-mendes-925aaa6b/",
        twitter: "https://x.com/omagowlad",
      }
    },
    {
      name: "Vhendala Tsutsui",
      role: t.team.members.vhendala.role,
      bio: t.team.members.vhendala.bio,
      initials: "VT",
      image: "/vhendala.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/vhendala/",
        twitter: "https://x.com/vhendala",
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#6851FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-bold text-[#081229] mb-6"
          >
            {t.team.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">{t.team.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-slate-600 text-lg"
          >
            {t.team.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.15 + 0.2 }}
              className="bg-white border border-slate-200 hover:border-[#6851FF]/30 rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6851FF]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  {member.image ? (
                    <img
                      src={member.image} alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 ring-2 ring-transparent group-hover:ring-[#6851FF]/30 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#6851FF]/10 border-2 border-[#6851FF]/20 flex items-center justify-center text-[#6851FF] font-bold text-xl ring-2 ring-transparent group-hover:ring-[#6851FF]/30 transition-all duration-300">
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-[#081229] group-hover:text-[#6851FF] transition-colors">{member.name}</h3>
                    <p className="text-sm font-medium text-[#6851FF]">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm flex-grow">{member.bio}</p>
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-slate-100">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#6851FF] transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#6851FF] transition-colors" aria-label={`${member.name} X`}>
                      <XIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
