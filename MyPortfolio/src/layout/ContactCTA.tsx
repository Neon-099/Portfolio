import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4"
        id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Floating handshake badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative mb-10"
        >
          {/* Soft glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/40 via-pink-300/30 to-amber-300/40 blur-xl" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] flex items-center justify-center border border-gray-100">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex items-center justify-center"
            >
              {/* Simple handshake glyph */}
              <span className="text-3xl">🤝</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
        >
          Tell me about your next
          <br />
          project
        </motion.h2>


        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Email button */}
          <a
            href="mailto:you@example.com"
            className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3 text-sm sm:text-base font-semibold shadow-[0_18px_40px_rgba(15,23,42,0.35)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.55)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>Email Me</span>
          </a>

          {/* WhatsApp (or chat) button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-7 py-3 text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.18)] border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-200" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;