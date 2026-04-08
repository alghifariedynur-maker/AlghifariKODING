import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const skills = {
  ipa: [
    { name: "Matematika", level: 95 },
    { name: "Fisika", level: 95 },
    { name: "Biologi", level: 90 },
    { name: "Kimia", level: 90 },
  ],
  ips: [
    { name: "Sejarah", level: 95 },
    { name: "Sosiologi", level: 90 },
    { name: "Geografi", level: 93 },
    { name: "Ekonomi", level: 90 },
  ],
  olahraga: [
    { name: "Lari", level: 90 },
    { name: "Badminton", level: 85 },
    { name: "Bola", level: 80 },
    { name: "Basket", level: 85 },
  ],
};

function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5 });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

function SkillBar({ name, level, delay, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="space-y-2"
    >
      {/* Title */}
      <div className="flex justify-between items-center text-slate-200">
        <span className="font-medium">{name}</span>
        <span className="text-sm flex items-center gap-1">
          <Counter value={level} />%
        </span>
      </div>

      {/* Bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3 }}
          className={`h-full rounded-full ${gradient} relative`}
        >
          {/* Glow */}
          <div className="absolute inset-0 blur-md opacity-70 bg-inherit" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Card({ title, icon, gradient, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl 
                 bg-white/5 backdrop-blur-xl 
                 border border-white/10 
                 shadow-[0_0_40px_rgba(0,0,0,0.6)] 
                 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] 
                 transition duration-500"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${gradient}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {data.map((skill, index) => (
          <SkillBar
            key={skill.name}
            {...skill}
            delay={index * 0.15}
            gradient={gradient}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 tracking-widest uppercase text-sm">
            Expertise
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4">
            Skill Akademik
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <Card
            title="IPA"
            icon="⚗️"
            gradient="bg-gradient-to-r from-blue-500 to-cyan-400"
            data={skills.ipa}
          />

          <Card
            title="IPS"
            icon="💰"
            gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
            data={skills.ips}
          />

          <Card
            title="Olahraga"
            icon="🏀"
            gradient="bg-gradient-to-r from-pink-500 to-orange-400"
            data={skills.olahraga}
          />

        </div>
      </div>
    </section>
  );
}