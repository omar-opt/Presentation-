import { Database, Key, Layers, Link, Shuffle, Vault } from "lucide-react";
import * as motion from "motion/react-client";

export default function Slide6() {
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
        {/* Token Generation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Shuffle className="mr-2 h-6 w-6" />
            Token Generation
          </h3>
          <p className="text-gray-200">
            Tokens can be generated using encryption, one-way hashing, or random
            number generation. Random tokens are often the strongest in terms of
            security.
          </p>
        </motion.div>

        {/* Token Mapping */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Link className="mr-2 h-6 w-6" />
            Token Mapping
          </h3>
          <p className="text-gray-200">
            Tokens are securely mapped to original data via a reference table,
            stored in a protected token vault or data store.
          </p>
        </motion.div>

        {/* Token Vault */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Vault className="mr-2 h-6 w-6" />
            Token Vault
          </h3>
          <p className="text-gray-200">
            A secure storage that holds token-original value pairs. This vault
            is often encrypted and access is tightly controlled.
          </p>
        </motion.div>

        {/* Vaultless Tokenization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Database className="mr-2 h-6 w-6" />
            Vaultless Tokenization
          </h3>
          <p className="text-gray-200">
            No sensitive data is stored. Instead, reversible algorithms generate
            and detokenize values without needing a vault.
          </p>
        </motion.div>

        {/* Token Types */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Layers className="mr-2 h-6 w-6" />
            Token Types
          </h3>
          <p className="text-gray-200">
            <strong>Irreversible:</strong> Used for anonymization.
            <br />
            <strong>Reversible:</strong> Can be detokenized when needed.
            <br />
            <strong>Format-preserving:</strong> Maintains data structure.
          </p>
        </motion.div>

        {/* Key Management */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <Key className="mr-2 h-6 w-6" />
            Encryption Key Management
          </h3>
          <p className="text-gray-200">
            Cryptographic keys used in the process are securely managed to
            protect token generation, storage, and detokenization.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
