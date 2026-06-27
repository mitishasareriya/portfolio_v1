import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 size={24} className="text-primary" />,
      title: "Laravel Specialist",
      description: "Expert in building robust, scalable PHP applications using the Laravel framework.",
    },
    {
      icon: <Layers size={24} className="text-secondary" />,
      title: "Full Stack Developer",
      description: "Proficient in end-to-end development with modern frontend technologies like React and Vue.",
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: "Business Solutions",
      description: "Creating enterprise admin systems, POS, HRM, and E-commerce platforms.",
    },
    {
      icon: <Database size={24} className="text-primary" />,
      title: "API & Architecture",
      description: "Designing RESTful APIs, RBAC systems, and optimizing database performance.",
    }
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-textPrimary">Transforming ideas into <span className="text-primary">digital reality</span>.</h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              I am a passionate Laravel & Full Stack Web Developer specializing in building scalable web applications and business solutions. With a strong foundation in backend architecture and a keen eye for modern frontend design, I create applications that are not only performant but also visually stunning.
            </p>
            <p className="text-textSecondary mb-8 leading-relaxed">
              My expertise spans across enterprise admin systems, POS & inventory management, HRM platforms, and multi-vendor e-commerce solutions. I thrive on solving complex problems with clean, maintainable code.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-textPrimary mb-1">{stat.value}</div>
                  <div className="text-sm text-textSecondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-textPrimary mb-2">{card.title}</h4>
                <p className="text-sm text-textSecondary">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
