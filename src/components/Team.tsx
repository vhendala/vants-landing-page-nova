import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: "Wlad Mendes",
      role: "CEO & Tech Lead",
      bio: "Former Sodexo/Lumx Tech Lead. 10+ years building payment infrastructure in LatAm. Led blockchain teams at scale. Multiple Stellar hackathon winner.",
      initials: "WM",
      image: "/wlad.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/wlademyr-mendes-925aaa6b/",
        twitter: "https://x.com/omagowlad",
      }
    },
    {
      name: "Vhendala Tsutsui",
      role: "Engineering",
      bio: "Software Engineer specialized in scalable applications. Previously built infrastructure at OLX Group serving millions of users.",
      initials: "VT",
      image: "/vhendala.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/vhendala/",
        twitter: "https://x.com/vhendala",
      }
    },
    {
      name: "Pedro Pelicioni",
      role: "Product & Partnerships",
      bio: "Product leader with deep blockchain and fintech expertise. VP of Stellar Ambassadors Program in Brazil.",
      initials: "PP",
      image: "/pedro.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/pedro-pelicioni/",
        twitter: "https://x.com/pelicioni_xlm",
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#0A192F] relative overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-bold text-white mb-6"
          >
            Meet the <span className="text-primary">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We are a team of experienced builders, engineers, and product leaders passionate about bridging traditional finance and blockchain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.2 }}
              className="bg-[#112240]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 rounded-2xl p-8 flex flex-col group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover border border-primary/20 ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-300">
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm font-medium text-emerald-400">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {member.bio}
                </p>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" aria-label={`${member.name} Twitter`}>
                      <Twitter className="w-5 h-5" />
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
