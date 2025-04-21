"use client";

import { GithubIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Confetti component
const Confetti = ({ count = 50 }) => {
  const [confetti, setConfetti] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      rotation: number;
      size: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: -(Math.random() * 20 + 10),
        rotation: Math.random() * 360,
        size: Math.random() * 1 + 0.5,
        delay: Math.random() * 3,
      });
    }
    setConfetti(items);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            x: `${item.x}vw`,
            y: `${item.y}vh`,
            rotate: item.rotation,
            scale: item.size,
            opacity: 1,
          }}
          animate={{
            y: "120vh",
            rotate: item.rotation + (Math.random() > 0.5 ? 360 : -360),
            opacity: [1, 1, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            delay: item.delay,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5 + 5,
          }}
          className="absolute text-3xl md:text-4xl"
          style={{ zIndex: 50 }}
        >
          🎉
        </motion.div>
      ))}
    </div>
  );
};

// Animated Blob component
const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-purple-700/30 to-pink-600/30 blur-3xl"
          style={{ width: "40vw", height: "40vw", top: "10%", left: "10%" }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-3xl"
          style={{ width: "35vw", height: "35vw", top: "50%", right: "15%" }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-300/30 blur-3xl"
          style={{ width: "30vw", height: "30vw", bottom: "10%", left: "25%" }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
};

export default function ThankYouSlide() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <AnimatedBlobs />

      {/* Confetti effect */}
      <Confetti count={33} />

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8 flex items-center"
        >
          <span className="text-6xl">🎉</span>
          <motion.h1
            className="ml-4 text-5xl font-bold text-white md:text-7xl"
            animate={{
              textShadow: [
                "0 0 5px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 5px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Thank You!
          </motion.h1>
          <span className="ml-4 text-6xl">🎉</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xl text-purple-200 md:text-2xl">
            For your attention and participation
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 rounded-xl bg-white/10 p-6 backdrop-blur-md"
          >
            <h2 className="mb-4 text-2xl font-semibold text-purple-300">
              Any Questions?
            </h2>
            <p className="text-lg text-gray-200">
              Feel free to reach out for more information.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex w-full items-center justify-center flex-col gap-4"
        >
          <div className="flex items-center rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="mr-2 text-xl">📧</span>
            <p className="text-lg text-white">m.ferhat.inf@lagh-univ.dz</p>
          </div>

          <div className="flex items-center rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="mr-2 text-xl">📧</span>
            <p className="text-lg text-white">a.chabira.inf@lagh-univ.dz</p>
          </div>

          <div className="flex items-center rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="mr-2 text-xl">
              <GithubIcon />
            </span>
            <Link
              href={"https://github.com/omar-opt/Presentation-"}
              className="text-lg text-white"
            >
              Presentation Link
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
