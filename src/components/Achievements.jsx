import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, MessageSquare, TrendingUp, Palette } from 'lucide-react';

const achievements = [
  { icon: <Award size={32} />, title: "NCC Certificates", desc: "A, B, C Certificates (A Grade)" },
  { icon: <TrendingUp size={32} />, title: "Leadership", desc: "Proven team guidance and mentoring" },
  { icon: <MessageSquare size={32} />, title: "Public Speaking", desc: "Effective communication and presentation" },
  { icon: <Users size={32} />, title: "Team Management", desc: "Coordinating cross-functional squads" },
  { icon: <Star size={32} />, title: "Communication", desc: "Clear stakeholder collaboration" },
  { icon: <Palette size={32} />, title: "Design Capabilities", desc: "Strong UI/UX foundation" }
];

const Achievements = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Achievements & <span className="text-gradient">Strengths</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-surfaceHover flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-textSecondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
