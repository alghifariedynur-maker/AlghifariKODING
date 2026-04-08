import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (!element) {
      console.warn(`${id} tidak ditemukan`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@yourchannel", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  ];

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.nextElementSibling;
    if (fallback) {
      fallback.classList.remove("hidden");
      fallback.classList.add("flex");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      {/* Background 3D */}
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <div className="relative">

              {/* Glow ring */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-70 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/FOTOKU.jpg"
                  alt="Foto Profil"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />

                {/* Fallback */}
                <div className="hidden w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 items-center justify-center">
                  <span className="text-6xl font-bold text-white">A</span>
                </div>
              </div>

              {/* Online badge */}
              <motion.span
                className="absolute bottom-4 right-4 w-5 h-5 bg-green-400 rounded-full border-2 border-black"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-6"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="flex-1 text-center md:text-left">

            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Programmer Alghi <br />
              <span className="text-purple-400">& Content Creator</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Saya membangun aplikasi web modern dan membagikan ilmu melalui konten kreatif.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Lihat Projects
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-3 rounded-full border border-gray-500 hover:bg-gray-800 transition"
              >
                Hubungi Saya
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll button */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll ke About"
      >
        <ArrowDown />
      </motion.button>
    </section>
  );
}
