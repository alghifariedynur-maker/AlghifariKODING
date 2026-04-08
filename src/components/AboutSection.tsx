import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Rocket, ChevronDown, Sparkles, GraduationCap, Target } from 'lucide-react';

const STATS = [
  { icon: Coffee, value: '1000+', label: 'Cangkir Cafe Latte' },
  { icon: Rocket, value: '200+', label: 'Tinta Pulpen' },
];

const ACCORDION_DATA = [
  {
    id: 'edu',
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Perkenalan & Pendidikan",
    content:
      "Perkenalkan, saya Alghifari Emier Dynur, lahir pada 24 Februari 2010. Saya merupakan anak kedua dari 2 saudara kembar yang tumbuh dengan nilai disiplin dan tanggung jawab. Saat ini saya menempuh pendidikan di MAN 1 Banda Aceh dan terus mengembangkan diri menjadi pribadi yang terarah serta siap menghadapi tantangan demi masa depan."
  },
  {
    id: 'vision',
    icon: <Target className="w-5 h-5" />,
    title: "Visi & Cita-cita",
    content:
      "Saya memiliki tekad untuk terus berkembang dan memberikan kontribusi nyata bagi masyarakat. Dengan persiapan yang matang, saya ingin melanjutkan pendidikan ke POLTEKIM dan berkarier sebagai Aparatur Sipil Negara (PNS) yang profesional, berintegritas, dan siap mengabdi bagi negara indonesia."
  }
];

export default function AboutSection({ isDark }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="about"
      className={`relative py-20 md:py-32 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]'
          : 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]'
      }`}
    >

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            <Sparkles size={16} />
            Kenalan Lebih Dekat⚡
          </span>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-white'
          }`}>
            Tentang Saya 💫
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* FOTO */}
          <div className="space-y-8">
            <div className="relative group">

              {/* GLOW NAVY */}
              <div className={`absolute -inset-2 rounded-2xl blur-2xl opacity-80 transition duration-500 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500'
                  : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500'
              }`}></div>

              <div className="relative p-[3px] rounded-2xl bg-white/10">
                <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                  <img
                    src="/public/fotome.jpg"
                    alt="profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl text-center backdrop-blur-md transition bg-white/10 text-white hover:bg-white/20"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Calon Abdi Negara 🚀
            </h3>

            <p className="text-lg text-white/90">
              Halo, saya <strong>Alghifari Emier Dynur</strong>, pelajar dari MAN 1 Banda Aceh.
            </p>

            {/* ACCORDION */}
            <div className="space-y-3">
              {ACCORDION_DATA.map((item, idx) => (
                <div key={item.id} className="rounded-xl overflow-hidden">

                  {/* HEADER */}
                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-4 transition bg-white/10 text-white hover:bg-white/20"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-semibold">{item.title}</span>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        expanded === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 text-white/90">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}