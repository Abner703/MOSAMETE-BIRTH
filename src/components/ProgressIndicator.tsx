import { motion, useScroll, useSpring } from 'framer-motion';

export function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#292723]/10 pointer-events-none"
    >
      <motion.div
        className="h-full bg-[#772E45] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
