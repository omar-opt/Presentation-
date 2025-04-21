import { CheckCircle, TrendingUp } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide2() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
      >
        1. What is Data Masking?
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Definition
          </h3>
          <p className="text-gray-200 ">
            Data masking is the process of creating a fake, but
            realistic-looking, copy of a company's data. This copy can be used
            for things like testing software or developing new features, keeping
            the real, sensitive information safe while still providing usable
            data when the original is not required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <CheckCircle className="mr-2 h-6 w-6" />
            Benefits
          </h3>
          <ul className="ml-2 space-y-2 text-gray-200">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>
                Enables safe use of real datasets in non-production environments
                such as testing and development.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>Protects sensitive data from unauthorized users.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>Complies with regulations such as GDPR and HIPAA.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:col-span-2"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <TrendingUp className="mr-2 h-6 w-6" />
            Importance
          </h3>
          <p className="text-gray-200">
            Hackers often target databases because they contain lots of data.
            Keeping these databases secure is crucial for a business's safety
            and reputation. Since companies store more sensitive information
            now, strong database security is essential
          </p>
        </motion.div>
      </div>
    </div>
  );
}
