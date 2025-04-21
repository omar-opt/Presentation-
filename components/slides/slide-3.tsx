import { EyeOff, Lock, ShieldCheck, Users } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide3() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Key Concepts
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Static vs Dynamic Masking */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <ShieldCheck className="mr-2 h-6 w-6" />
            Static vs Dynamic Masking
          </h3>
          <p className="text-gray-200">
            <strong>Static:</strong> Data is masked and saved in a separate
            copy.
            <br />
            <strong>Dynamic:</strong> Data is masked in real-time when queried,
            leaving the source unchanged.
          </p>
        </motion.div>

        {/* Reversibility */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <EyeOff className="mr-2 h-6 w-6" />
            Reversibility
          </h3>
          <p className="text-gray-200">
            Most masking techniques are irreversible to maintain security.
            However, some methods can allow re-identification for authorized
            roles, if necessary.
          </p>
        </motion.div>

        {/* Format-Preserving Masking */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Lock className="mr-2 h-6 w-6" />
            Format-Preserving Masking
          </h3>
          <p className="text-gray-200">
            Masked data keeps the same format as the original, e.g., replacing a
            credit card number with another that matches the format, making
            testing easier.
          </p>
        </motion.div>

        {/* Role-Based Masking */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Users className="mr-2 h-6 w-6" />
            Role-Based Masking
          </h3>
          <p className="text-gray-200">
            Access to data is based on roles. For example, developers see masked
            values, while administrators can access full unmasked data.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
