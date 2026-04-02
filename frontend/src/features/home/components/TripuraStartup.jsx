import React from "react";
import { motion } from "framer-motion";

const stLogo = "/ST Logo.png";
const ditLogo = "/DIT LOGO.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const credentials = [
  {
    label: "Registered Startup Under",
    title: "Startup Tripura",
    logo: stLogo,
    alt: "Startup Tripura Logo",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "from-orange-200 via-amber-200 to-yellow-200",
    accentColor: "from-orange-400 to-amber-500",
    scale: "scale-110 md:scale-100",
  },
  {
    label: "Recognized By",
    title: "Directorate of Information Technology, Tripura",
    logo: ditLogo,
    alt: "DIT Tripura Logo",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glowColor: "from-blue-200 via-indigo-200 to-purple-200",
    accentColor: "from-blue-400 to-indigo-500",
  },
];

const TripuraStartup = () => {
  return (
    <div className="pt-2 pb-4 md:pt-3 md:pb-6">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-row items-stretch justify-center gap-2 sm:gap-4 md:gap-6"
        >
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="relative group flex-1 min-w-0"
            >
              {/* Hover glow */}
              <div
                className={`absolute -inset-1.5 bg-gradient-to-r ${cred.glowColor} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`}
              />

              {/* Card */}
              <div
                className="relative flex items-center rounded-xl sm:rounded-2xl overflow-hidden
                bg-white/90 backdrop-blur-xl
                border border-gray-200/60
                shadow-md hover:shadow-xl
                transition-all duration-300
                h-full"
              >
                {/* Text section */}
                <div className="flex-1 min-w-0 px-2 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
                  <p className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                    {cred.label}
                  </p>
                  <h3
                    className={`text-[9px] sm:text-sm md:text-lg font-bold bg-gradient-to-r ${cred.gradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {cred.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

                {/* Logo section */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center p-0.5 sm:p-1 md:p-2 overflow-hidden">
                  <img
                    src={cred.logo}
                    alt={cred.alt}
                    className={`w-full h-full object-contain rounded-md sm:rounded-lg group-hover:scale-110 transition-transform duration-300 ${cred.scale || ""}`}
                  />
                </div>

                {/* Corner accent dot */}
                <div
                  className={`absolute top-1 right-1 sm:top-2 sm:right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-br ${cred.accentColor} opacity-50`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TripuraStartup;
