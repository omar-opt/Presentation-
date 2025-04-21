import { Database, Lock, Shield } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide1() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex justify-center space-x-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Database className="h-16 w-16 text-cyan-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <Lock className="h-16 w-16 text-cyan-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            <Shield className="h-16 w-16 text-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
      >
        Database Security
      </motion.h1>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-8 text-2xl font-medium text-cyan-400 md:text-3xl capitalize"
        >
          data masking & tokenization
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-8 text-xl font-medium text-cyan-400 md:text-4xl capitalize"
        >
          protecting sensitive data in production & testing environments
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 max-w-2xl text-lg text-gray-200"
      >
        <ul className="mb-4">
          <span className="font-semibold">Presented by:</span>
          <li className="mt-4 font-medium">FERHAT MOHAMED TAHAR</li>

          <li className="font-medium">CHABIRA AMAR ABDELLAH ABDEALAZIZE</li>
          <p className="mt-4 text-base text-gray-300/85">
            Advanced Databases | Mohamed El Habib MAICHA
          </p>
        </ul>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 max-w-2xl text-lg text-gray-300/75 capitalize"
      >
        ammar telidji university
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[120px]"
      />
    </div>
  );
}
