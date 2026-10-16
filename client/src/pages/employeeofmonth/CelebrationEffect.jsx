import { motion } from "framer-motion";

const CelebrationEffect = () => {
  const particles = Array.from({ length: 36 }, (_, i) => {
    const angle = (i / 36) * Math.PI * 2;
    const distance = 70 + (i % 4) * 35;

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      delay: (i % 6) * 0.04,
      size: i % 4 === 0 ? 3 : 2,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      {particles.map((particle, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#d6b25e] shadow-[0_0_8px_rgba(214,178,94,0.7)]"
          style={{
            left: `${10 + ((i * 37) % 80)}%`,
            top: `${8 + ((i * 53) % 84)}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
          animate={{
            x: [0, particle.x * 0.45],
            y: [0, particle.y * 0.45],
            opacity: [0.5, 0.8, 1],
            scale: [0.5, 1.4, 0.2],
          }}
          transition={{
            duration: 1.4,
            delay: particle.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default CelebrationEffect;
