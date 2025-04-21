// import * as motion  from "motion/react-client"
// import { AlertTriangle, ShieldCheck, UserX, Settings, AlertCircle } from "lucide-react"

// export default function Slide7() {
//   const risks = [
//     {
//       title: "SQL Injection",
//       icon: <AlertCircle className="h-8 w-8 text-red-400" />,
//       description: "Attackers insert malicious SQL code into application queries to manipulate the database.",
//     },
//     {
//       title: "Insider Threats",
//       icon: <UserX className="h-8 w-8 text-red-400" />,
//       description: "Authorized users misusing their access privileges to steal or compromise data.",
//     },
//     {
//       title: "Misconfigurations",
//       icon: <Settings className="h-8 w-8 text-red-400" />,
//       description: "Improperly configured database settings that leave security vulnerabilities.",
//     },
//     {
//       title: "Unpatched Vulnerabilities",
//       icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
//       description: "Outdated database software with known security flaws that haven't been patched.",
//     },
//   ]

//   const solutions = [
//     {
//       title: "Regular Updates",
//       icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
//       description: "Keep database software and security patches up to date.",
//     },
//     {
//       title: "Access Limitation",
//       icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
//       description: "Implement the principle of least privilege for all database users.",
//     },
//     {
//       title: "Encryption",
//       icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
//       description: "Encrypt sensitive data both at rest and in transit.",
//     },
//     {
//       title: "SQL Injection Prevention",
//       icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
//       description: "Use parameterized queries and input validation to prevent SQL injection attacks.",
//     },
//     {
//       title: "Database Firewalls",
//       icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
//       description: "Implement database firewalls to monitor and filter database traffic.",
//     },
//   ]

//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center px-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
//       >
//         Challenges & Solutions
//       </motion.h2>

//       <div className="grid max-w-6xl gap-8 md:grid-cols-2">
//         <div>
//           <motion.h3
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mb-6 text-center text-2xl font-semibold text-red-400"
//           >
//             Common Risks
//           </motion.h3>

//           <div className="space-y-4">
//             {risks.map((risk, index) => (
//               <motion.div
//                 key={risk.title}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
//                 className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
//               >
//                 <div className="flex items-center">
//                   {risk.icon}
//                   <h4 className="ml-3 text-lg font-medium text-white">{risk.title}</h4>
//                 </div>
//                 <p className="mt-2 text-sm text-gray-300">{risk.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <motion.h3
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mb-6 text-center text-2xl font-semibold text-green-400"
//           >
//             Solutions
//           </motion.h3>

//           <div className="space-y-4">
//             {solutions.map((solution, index) => (
//               <motion.div
//                 key={solution.title}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
//                 className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
//               >
//                 <div className="flex items-center">
//                   {solution.icon}
//                   <h4 className="ml-3 text-lg font-medium text-white">{solution.title}</h4>
//                 </div>
//                 <p className="mt-2 text-sm text-gray-300">{solution.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.5 }}
//         className="mt-8 max-w-4xl rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-6 text-center backdrop-blur-sm"
//       >
//         <p className="text-lg font-medium text-cyan-400">
//           "A proactive approach to database security involves identifying risks before they become breaches."
//         </p>
//       </motion.div>
//     </div>
//   )
// }

// import { Cpu, Database, Lock, Shield } from "lucide-react";
// import * as motion from "motion/react-client";

// export default function Slide7() {
//   const bestPractices = [
//     {
//       title: "Principle of Least Privilege",
//       description:
//         "Grant users only the minimum permissions necessary to perform their job functions.",
//       icon: <Shield className="h-6 w-6 text-cyan-400" />,
//     },
//     {
//       title: "Regular Backups",
//       description:
//         "Implement automated, encrypted backups with regular testing of restoration procedures.",
//       icon: <Database className="h-6 w-6 text-cyan-400" />,
//     },
//     {
//       title: "Real-Time Monitoring",
//       description:
//         "Deploy continuous monitoring tools to detect and alert on suspicious database activities.",
//       icon: <Shield className="h-6 w-6 text-cyan-400" />,
//     },
//   ];

//   const emergingTrends = [
//     {
//       title: "AI-driven Threat Detection",
//       description:
//         "Machine learning algorithms that identify unusual patterns and potential security threats.",
//       icon: <Cpu className="h-6 w-6 text-purple-400" />,
//     },
//     {
//       title: "Blockchain for Secure Auditing",
//       description:
//         "Immutable ledgers that provide tamper-proof records of database transactions and changes.",
//       icon: <Lock className="h-6 w-6 text-purple-400" />,
//     },
//     {
//       title: "Zero Trust Architecture",
//       description:
//         "Security model that requires verification for everyone trying to access resources, regardless of position.",
//       icon: <Shield className="h-6 w-6 text-purple-400" />,
//     },
//   ];

//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center px-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
//       >
//         Real-World Applications
//       </motion.h2>

//       <div className="grid max-w-6xl gap-12 md:grid-cols-2">
//         <div>
//           <motion.h3
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mb-6 text-center text-2xl font-semibold text-cyan-400"
//           >
//             Best Practices
//           </motion.h3>

//           <div className="space-y-6">
//             {bestPractices.map((practice, index) => (
//               <motion.div
//                 key={practice.title}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
//                 className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//               >
//                 <div className="mb-3 flex items-center">
//                   {practice.icon}
//                   <h4 className="ml-3 text-lg font-medium text-white">
//                     {practice.title}
//                   </h4>
//                 </div>
//                 <p className="text-gray-300">{practice.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <motion.h3
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="mb-6 text-center text-2xl font-semibold text-purple-400"
//           >
//             Emerging Trends
//           </motion.h3>

//           <div className="space-y-6">
//             {emergingTrends.map((trend, index) => (
//               <motion.div
//                 key={trend.title}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
//                 className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//               >
//                 <div className="mb-3 flex items-center">
//                   {trend.icon}
//                   <h4 className="ml-3 text-lg font-medium text-white">
//                     {trend.title}
//                   </h4>
//                 </div>
//                 <p className="text-gray-300">{trend.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.4, duration: 0.5 }}
//         className="mt-10 max-w-4xl rounded-xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-6 text-center backdrop-blur-sm"
//       >
//         <p className="text-lg font-medium text-gray-200">
//           "Organizations that implement these practices and stay current with
//           emerging trends are better positioned to protect their data assets in
//           an evolving threat landscape."
//         </p>
//       </motion.div>
//     </div>
//   );
// }

import { AlertTriangle, Server, ShieldAlert } from "lucide-react";
import * as motion from "motion/react-client"; // Assuming this is client component safe

export default function Slide7() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Case Study
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 text-center text-xl font-semibold text-purple-400 max-w-3xl"
      >
        Fortanix: Vaultless Tokenization for Secure Data Sharing
      </motion.h3>

      {/* <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 text-center max-w-3xl text-base font-semibold text-purple-400/90"
      >
    
        Fortanix Data Security Manager (DSM) provides a vaultless,
        format-preserving encryption (FPE) solution to tokenize sensitive data.
      </motion.p> */}

      <div className="grid max-w-6xl  gap-8 md:grid-cols-2">
        {/* Challenges - Updated with Real-Life Scenario */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
            <h3 className="ml-2 text-xl font-semibold text-white">
              The Problem (Online Retailer)
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>
              Needed to share purchase data with an analytics firm for insights.
            </li>
            <li>
              Had to hide customer credit card numbers and full addresses.
            </li>
            <li>Needed to follow privacy laws like GDPR and CCPA strictly.</li>
            <li>
              Analytics tools required data (like card numbers) in the original
              format.
            </li>
            <li>Secure data across hybrid and multicloud environments</li>
            <li>Enable safe data sharing without compromising privacy</li>
          </ul>
        </motion.div>

        {/* Solution - Updated with Real-Life Scenario */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center">
            <Server className="h-8 w-8 text-red-400" />
            <h3 className="ml-2 text-xl font-semibold text-white">
              The Solution (Using Fortanix)
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>
              Used Fortanix to swap real card numbers with fake 'tokens' that
              kept the same format (e.g., 16 digits).
            </li>
            <li>Masked parts of names and addresses automatically.</li>
            <li>
              The 'vaultless' approach meant no complex token database was
              needed.
            </li>
            <li>
              Set rules ensuring the analytics firm only saw tokenized/masked
              data.
            </li>
            <li>
              Managed all security keys and rules centrally via Fortanix DSM.
            </li>
          </ul>
        </motion.div>

        {/* Results - Updated with Real-Life Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-3 backdrop-blur-sm col-span-2 flex flex-col items-center"
        >
          <div className="mb-4 flex items-center">
            <ShieldAlert className="h-8 w-8 text-green-400" />
            <h3 className="ml-2 text-xl font-semibold text-white">
              The Result
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 text-lg w-full px-4">
            <ul className="list-disc list-inside text-gray-200 flex flex-col gap-2 ">
              <li>
                Analytics firm received useful data without seeing private info,
                reducing risk.
              </li>
              <li>Retailer fully complied with data privacy regulations.</li>
            </ul>
            <ul className="list-disc list-inside text-gray-200">
              <li>
                Gained valuable marketing insights safely from the shared data.
              </li>
              <li>
                Analytics tools worked without changes due to format-preserving
                tokens.
              </li>
              <li>Secure data sharing process became easier to manage.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-4 max-w-4xl rounded-xl bg-gradient-to-r from-purple-900/20 to-purple-700/20 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-purple-300">
          {/* This quote remains as requested */}
          “Fortanix DSM's vaultless tokenization approach ensures data security
          from the point of creation, enabling organizations to confidently
          navigate the complexities of data privacy and compliance.”
        </p>
      </motion.div>
    </div>
  );
}
