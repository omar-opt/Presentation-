// import { CheckCircle } from "lucide-react";
// import * as motion from "motion/react-client";

// export default function Slide9() {
//   const summaryPoints = [
//     "Database security protects data confidentiality, integrity, and availability",
//     "Key techniques: access control, encryption, auditing",
//     "Threats must be actively mitigated with layered security approaches",
//   ];

//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center px-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
//       >
//         Conclusion
//       </motion.h2>

//       <div className="grid md:grid-cols-2 max-w-6xl gap-8 ">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <h3 className="mb-6 text-2xl font-semibold text-cyan-400">Summary</h3>
//           <ul className="space-y-4">
//             {summaryPoints.map((point, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
//                 className="flex items-start"
//               >
//                 <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
//                 <span className="text-gray-200">{point}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="flex flex-col justify-center rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <h3 className="mb-6 text-2xl font-semibold text-cyan-400">
//             Final Thought
//           </h3>
//           <p className="text-lg text-gray-200">
//             In a world driven by data, securing your database is not
//             optional—it's mission-critical. Organizations must prioritize
//             database security as a fundamental component of their overall
//             cybersecurity strategy.
//           </p>
//         </motion.div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="mt-12 max-w-4xl rounded-xl bg-gradient-to-r from-sky-900/50 to-indigo-900/50 p-6 backdrop-blur-sm"
//       >
//         <h3 className="mb-4 text-center text-xl font-semibold text-white">
//           Data Protection Techniques
//         </h3>

//         <div className="grid gap-4 sm:grid-cols-2">
//           {/* Data Masking */}
//           <div className="space-y-2 rounded-lg bg-sky-800/40 p-4 text-white">
//             <h4 className="text-center text-lg font-bold">Data Masking</h4>
//             <ul className="list-disc space-y-1 px-4 text-sm">
//               <li>Replaces real data with fake but realistic values</li>
//               <li>Used in testing or training environments</li>
//               <li>Not reversible (usually)</li>
//               <li>Safe for non-prod environments</li>
//             </ul>
//           </div>

//           {/* Tokenization */}
//           <div className="space-y-2 rounded-lg bg-indigo-800/40 p-4 text-white">
//             <h4 className="text-center text-lg font-bold">Tokenization</h4>
//             <ul className="list-disc space-y-1 px-4 text-sm">
//               <li>Replaces data with a token</li>
//               <li>Original data stored securely in a vault</li>
//               <li>Used in production for security</li>
//               <li>Can be reversed with proper access</li>
//             </ul>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { CheckCircle } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide9() {
  const summaryPoints = [
    "Data masking hides sensitive information by replacing it with fictitious but realistic data",
    "Tokenization substitutes real data with tokens stored securely in a vault",
    "Both techniques reduce data exposure risk and support compliance with data protection regulations",
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Key Takeaways
      </motion.h2>

      <div className="grid md:grid-cols-2 max-w-6xl gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-2xl font-semibold text-cyan-400">Summary</h3>
          <ul className="space-y-4">
            {summaryPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="flex items-start"
              >
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-gray-200">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col justify-center rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-2xl font-semibold text-cyan-400">
            Final Thought
          </h3>
          <p className="text-lg text-gray-200">
            Data masking and tokenization are essential tools in a robust data
            security strategy. By limiting the exposure of sensitive data while
            maintaining usability, these techniques help organizations enhance
            security and maintain compliance without compromising operations.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 max-w-4xl rounded-xl bg-gradient-to-r from-sky-900/50 to-indigo-900/50 p-6 backdrop-blur-sm"
      >
        <h3 className="mb-4 text-center text-xl font-semibold text-white">
          Data Protection Techniques
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Data Masking */}
          <div className="space-y-2 rounded-lg bg-sky-800/40 p-4 text-white">
            <h4 className="text-center text-lg font-bold">Data Masking</h4>
            <ul className="list-disc space-y-1 px-4 text-sm">
              <li>Replaces real data with fake but realistic values</li>
              <li>Used in testing or training environments</li>
              <li>Not reversible (usually)</li>
              <li>Safe for non-prod environments</li>
            </ul>
          </div>

          {/* Tokenization */}
          <div className="space-y-2 rounded-lg bg-indigo-800/40 p-4 text-white">
            <h4 className="text-center text-lg font-bold">Tokenization</h4>
            <ul className="list-disc space-y-1 px-4 text-sm">
              <li>Replaces data with a token</li>
              <li>Original data stored securely in a vault</li>
              <li>Used in production for security</li>
              <li>Can be reversed with proper access</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
