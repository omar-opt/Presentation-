/* The above code is a TypeScript React component that defines a slide for a presentation. It presents a case study comparing two different scenarios related to data security breaches. */
// import * as motion  from "motion/react-client"
// import { AlertTriangle, Server, ShieldAlert, FileWarning } from "lucide-react"

// export default function Slide4() {
//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center px-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
//       >
//         Case Study
//       </motion.h2>

//       <motion.h3
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="mb-12 text-center text-2xl font-semibold text-cyan-400"
//       >
//         The 2019 Capital One Data Breach
//       </motion.h3>

//       <div className="grid max-w-6xl gap-8 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <div className="mb-4 flex items-center">
//             <AlertTriangle className="h-8 w-8 text-amber-500" />
//             <h3 className="ml-3 text-xl font-semibold text-white">The Incident</h3>
//           </div>
//           <p className="text-gray-200">
//             In July 2019, Capital One announced a data breach affecting approximately 100 million Americans and 6
//             million Canadians. The breach exposed personal information including names, addresses, phone numbers, email
//             addresses, dates of birth, and income.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <div className="mb-4 flex items-center">
//             <Server className="h-8 w-8 text-red-400" />
//             <h3 className="ml-3 text-xl font-semibold text-white">The Cause</h3>
//           </div>
//           <p className="text-gray-200">
//             The breach was caused by a misconfigured web application firewall (WAF) that enabled access to the data. The
//             attacker exploited a Server Side Request Forgery (SSRF) vulnerability to gain access to the AWS metadata
//             service and obtain temporary credentials.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.5 }}
//           className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <div className="mb-4 flex items-center">
//             <FileWarning className="h-8 w-8 text-orange-400" />
//             <h3 className="ml-3 text-xl font-semibold text-white">The Result</h3>
//           </div>
//           <p className="text-gray-200">
//             The breach resulted in the exposure of over 100 million customer records, including about 140,000 Social
//             Security numbers and 80,000 bank account numbers. Capital One faced an $80 million fine and had to implement
//             a comprehensive security program.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.1, duration: 0.5 }}
//           className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
//         >
//           <div className="mb-4 flex items-center">
//             <ShieldAlert className="h-8 w-8 text-green-400" />
//             <h3 className="ml-3 text-xl font-semibold text-white">The Lesson</h3>
//           </div>
//           <p className="text-gray-200">
//             This breach highlights the importance of proper configuration, continuous monitoring, and comprehensive
//             security testing. Even large organizations with significant security resources can fall victim to
//             misconfigurations and overlooked vulnerabilities.
//           </p>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.3, duration: 0.5 }}
//         className="mt-8 max-w-4xl rounded-xl bg-gradient-to-r from-amber-900/20 to-red-900/20 p-6 text-center backdrop-blur-sm"
//       >
//         <p className="text-lg font-medium text-amber-300">
//           "The Capital One breach serves as a stark reminder that database security requires vigilance across all layers
//           of infrastructure."
//         </p>
//       </motion.div>
//     </div>
//   )
// }
import { AlertTriangle, Server, ShieldAlert } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide4() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Case Study
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4 text-center text-xl font-semibold text-cyan-400 max-w-3xl"
      >
        Data Masking Examples are Everywhere
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 text-center   max-w-3xl text-base font-semibold text-cyan-400/90"
      >
        Governments, companies, and health organizations all store personal
        information about their citizens, customer, employees, or patients.
      </motion.p>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
            <h3 className="ml-3 text-xl font-semibold text-white">
              Challenges
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-200">
            <li>Protect sensitive PII from unauthorized access</li>
            <li>Not following the strict regulatory mandates</li>
            <li>Share large datasets efficiently without duplication</li>
            <li>Limit exposure to only necessary data elements</li>
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center">
            <Server className="h-8 w-8 text-red-400" />
            <h3 className="ml-3 text-xl font-semibold text-white">Solution</h3>
          </div>
          <ul className="list-disc list-inside text-gray-200">
            <li>
              User a secure system such as (Snowflake) to secure, share data
              safely.
            </li>
            <li>Dynamic masking on‑the‑fly of PII fields</li>
            <li>
              Role‑based masking policies per recipient (diffrent masked data
              based on the role: tester, developer)
            </li>
            <li>Comprehensive log trails for compliance</li>
          </ul>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm col-span-2 flex flex-col items-center"
        >
          <div className="mb-4 flex items-center">
            <ShieldAlert className="h-8 w-8 text-green-400" />
            <h3 className="ml-3 text-xl font-semibold text-white ">Results</h3>
          </div>
          <div className="grid grid-cols-2 gap-12 text-lg">
            <ul className="list-disc list-inside text-gray-200">
              <li>Reduced breach risk via dynamic masking</li>
              <li>
                Followed all data rules and regulations and avoided fines.
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-200">
              <li>Storage cost savings by avoiding data copies</li>
              <li>Faster, real‑time regulatory reporting</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-4 max-w-4xl rounded-xl bg-gradient-to-r from-amber-900/20 to-red-900/20 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-amber-300">
          “By combining Snowflake’s secure sharing with dynamic data masking, we
          delivered a cost‑efficient, compliant solution that transformed how
          our client shares sensitive data with regulators.”
        </p>
      </motion.div>
    </div>
  );
}
