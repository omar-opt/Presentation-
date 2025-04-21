import { Cpu, Database, Lock, Shield } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide8() {
  const bestPractices = [
    {
      title: "Regular Privilege Audits",
      description:
        "Frequently review user access levels to ensure they align with current responsibilities.",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
    },

    {
      title: "3-2-1 Backup Strategy",
      description:
        "Maintain three copies of data on two different media, with one stored offsite.",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: "Encrypted & Tested Backups",
      description:
        "Encrypt all backup files and regularly test data restoration to ensure reliability.",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
    },
  ];

  const emergingTrends = [
    {
      title: "AI-Driven Access Management",
      description:
        "Leverage machine learning to automatically grant or revoke privileges based on behavior.",
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Zero Trust Integration",
      description:
        "Continuously verify access regardless of user role or location using Zero Trust models.",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
    },

    {
      title: "Immutable Backup Storage",
      description:
        "Adopt storage solutions that prevent deletion or modification of backup data.",
      icon: <Lock className="h-6 w-6 text-purple-400" />,
    },
  ];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Real-World Applications
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-cyan-400"
          >
            Best Practices
          </motion.h3>

          <div className="space-y-4">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center">
                  {practice.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">
                    {practice.title}
                  </h4>
                </div>
                <p className="text-gray-300">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-purple-400"
          >
            Emerging Trends
          </motion.h3>

          <div className="space-y-4">
            {emergingTrends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center">
                  {trend.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">
                    {trend.title}
                  </h4>
                </div>
                <p className="text-gray-300">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-10 max-w-4xl rounded-xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-gray-200">
          "Organizations that implement these practices and stay current with
          emerging trends are better positioned to protect their data assets in
          an evolving threat landscape."
        </p>
      </motion.div>
    </div>
  );
}
