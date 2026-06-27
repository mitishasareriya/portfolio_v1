import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, LayoutDashboard, Database, ShoppingCart, Users, UserCog, Briefcase, Calculator, Building2 } from 'lucide-react';

const services = [
  { title: "Custom Web Development", icon: <Monitor size={28} />, desc: "Tailored web applications built from scratch using modern tech stacks." },
  { title: "SaaS Development", icon: <Smartphone size={28} />, desc: "Scalable software as a service architectures with subscription models." },
  { title: "Enterprise Admin Panels", icon: <LayoutDashboard size={28} />, desc: "Complex dashboard interfaces for data management and analytics." },
  { title: "API Development", icon: <Database size={28} />, desc: "Secure and fast RESTful APIs for seamless integrations." },
  { title: "E-commerce Solutions", icon: <ShoppingCart size={28} />, desc: "End-to-end online stores with payment gateways and cart management." },
  { title: "Multi Vendor Platforms", icon: <Users size={28} />, desc: "Marketplaces where multiple sellers can list and sell products." },
  { title: "UI/UX Design", icon: <UserCog size={28} />, desc: "User-centric design focusing on experience and intuitive interfaces." },
  { title: "Business Automation", icon: <Briefcase size={28} />, desc: "Automating workflows to increase efficiency and reduce manual tasks." },
  { title: "HRM Systems", icon: <Building2 size={28} />, desc: "Human resource management platforms with attendance and payroll." },
  { title: "POS & Inventory", icon: <Calculator size={28} />, desc: "Point of sale systems integrated with real-time inventory tracking." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">My <span className="text-gradient">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass p-8 rounded-2xl group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] border border-white/5 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-surfaceHover border border-white/10 flex items-center justify-center mb-6 text-textSecondary group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-textSecondary leading-relaxed group-hover:text-textSecondary transition-colors">{service.desc}</p>
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-[30px] group-hover:bg-primary/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
