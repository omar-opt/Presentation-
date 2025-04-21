"use client";

import {
  CreditCard,
  Hash,
  Lock,
  RefreshCw,
  Shield,
  Unlock,
} from "lucide-react";
import { useState } from "react";

export default function EncryptionDemo() {
  const [plaintext, setPlaintext] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("secret-key-123");

  // For hashing demo
  const [textToHash, setTextToHash] = useState("");
  const [hashedText, setHashedText] = useState("");

  // For format-preserving demo
  const [formatText, setFormatText] = useState("");
  const [formatEncrypted, setFormatEncrypted] = useState("");
  const [formatDecrypted, setFormatDecrypted] = useState("");
  const [formatKey, setFormatKey] = useState("format-key-456");

  // Simple XOR encryption for demonstration purposes only
  // This is NOT secure for real applications
  const xorEncrypt = (text: string, key: string): string => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    // Convert to base64 for display
    return btoa(result);
  };

  const xorDecrypt = (encryptedBase64: string, key: string): string => {
    try {
      // Convert from base64
      const encrypted = atob(encryptedBase64);
      let result = "";
      for (let i = 0; i < encrypted.length; i++) {
        const charCode =
          encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
      }
      return result;
    } catch (e) {
      return "Error: Invalid encrypted text";
    }
  };

  // Simple hash function (NOT secure for real applications)
  const simpleHash = (text: string): string => {
    let hash = 0;
    if (text.length === 0) return hash.toString(16);

    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }

    // Make it more complex looking for demo purposes
    const hashStr = Math.abs(hash).toString(16).padStart(8, "0");
    return hashStr.repeat(4);
  };

  // Format-preserving encryption (simplified for demo)
  // Preserves character types (digits stay digits, letters stay letters)
  const formatPreservingEncrypt = (text: string, key: string): string => {
    if (!text) return "";

    const result = [];
    const digits = "0123456789";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const keyChar = key.charCodeAt(i % key.length) % 26; // Limit key influence

      if (digits.includes(char)) {
        // Shift digit by key value, preserving digit format
        const currentPos = digits.indexOf(char);
        const newPos = (currentPos + (keyChar % 10)) % 10;
        result.push(digits[newPos]);
      } else if (lowerLetters.includes(char)) {
        // Shift lowercase letter, preserving case
        const currentPos = lowerLetters.indexOf(char);
        const newPos = (currentPos + (keyChar % 26)) % 26;
        result.push(lowerLetters[newPos]);
      } else if (upperLetters.includes(char)) {
        // Shift uppercase letter, preserving case
        const currentPos = upperLetters.indexOf(char);
        const newPos = (currentPos + (keyChar % 26)) % 26;
        result.push(upperLetters[newPos]);
      } else {
        // Keep special characters as is
        result.push(char);
      }
    }

    return result.join("");
  };

  const formatPreservingDecrypt = (text: string, key: string): string => {
    if (!text) return "";

    const result = [];
    const digits = "0123456789";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const keyChar = key.charCodeAt(i % key.length) % 26; // Limit key influence

      if (digits.includes(char)) {
        // Reverse shift digit by key value
        const currentPos = digits.indexOf(char);
        const newPos = (currentPos - (keyChar % 10) + 10) % 10;
        result.push(digits[newPos]);
      } else if (lowerLetters.includes(char)) {
        // Reverse shift lowercase letter
        const currentPos = lowerLetters.indexOf(char);
        const newPos = (currentPos - (keyChar % 26) + 26) % 26;
        result.push(lowerLetters[newPos]);
      } else if (upperLetters.includes(char)) {
        // Reverse shift uppercase letter
        const currentPos = upperLetters.indexOf(char);
        const newPos = (currentPos - (keyChar % 26) + 26) % 26;
        result.push(upperLetters[newPos]);
      } else {
        // Keep special characters as is
        result.push(char);
      }
    }

    return result.join("");
  };

  const handleEncrypt = () => {
    if (!plaintext) {
      alert("Please enter text to encrypt");
      return;
    }
    const encrypted = xorEncrypt(plaintext, encryptionKey);
    setEncryptedText(encrypted);
    setDecryptedText("");
  };

  const handleDecrypt = () => {
    if (!encryptedText) {
      alert("Please encrypt some text first");
      return;
    }
    const decrypted = xorDecrypt(encryptedText, encryptionKey);
    setDecryptedText(decrypted);
  };

  const handleHash = () => {
    if (!textToHash) {
      alert("Please enter text to hash");
      return;
    }
    const hashed = simpleHash(textToHash);
    setHashedText(hashed);
  };

  const handleFormatEncrypt = () => {
    if (!formatText) {
      alert("Please enter text to encrypt");
      return;
    }
    const encrypted = formatPreservingEncrypt(formatText, formatKey);
    setFormatEncrypted(encrypted);
    setFormatDecrypted("");
  };

  const handleFormatDecrypt = () => {
    if (!formatEncrypted) {
      alert("Please encrypt some text first");
      return;
    }
    const decrypted = formatPreservingDecrypt(formatEncrypted, formatKey);
    setFormatDecrypted(decrypted);
  };

  const generateRandomKey = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setEncryptionKey(result);
  };

  const generateFormatKey = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormatKey(result);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 to-slate-800 flex h-full w-full flex-col items-center justify-center px-6 py-8">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Encryption Demo
      </h2>

      <div className="w-full max-w-4xl rounded-xl bg-white/10 p-6 backdrop-blur-sm">
        {/* Reversible Encryption (XOR) */}
        <h3 className="mb-4 text-2xl font-bold text-white">
          Reversible Encryption
        </h3>
        <p className="mb-4 text-gray-300">Can be detokenized when needed.</p>

        <div className="mb-6 flex items-center justify-between rounded-md bg-slate-800/50 p-4">
          <div className="flex items-center">
            <RefreshCw className="mr-2 h-5 w-5 text-cyan-400" />
            <label
              htmlFor="encryptionKey"
              className="text-sm font-medium text-gray-200"
            >
              Encryption Key:
            </label>
          </div>
          <div className="flex flex-1 items-center space-x-2 px-4">
            <input
              type="text"
              id="encryptionKey"
              className="w-full rounded-md border border-gray-600 bg-slate-900 px-4 py-2 font-mono text-sm text-white focus:border-cyan-500 focus:outline-none"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
            />
            <button
              onClick={generateRandomKey}
              className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white transition hover:bg-slate-600 focus:outline-none"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center">
              <Unlock className="mr-2 h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-cyan-400">Plaintext</h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Enter text to encrypt..."
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-cyan-600 px-4 py-2 font-medium text-white transition hover:bg-cyan-700 focus:outline-none"
              onClick={handleEncrypt}
            >
              Encrypt
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center">
              <Lock className="mr-2 h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-400">
                Encrypted
              </h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 font-mono text-purple-300 focus:border-purple-500 focus:outline-none"
              placeholder="Encrypted text will appear here..."
              value={encryptedText}
              readOnly
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition hover:bg-purple-700 focus:outline-none"
              onClick={handleDecrypt}
              disabled={!encryptedText}
            >
              Decrypt
            </button>
          </div>
        </div>

        {decryptedText && (
          <div className="mb-8 rounded-md bg-slate-800/50 p-4">
            <div className="mb-2 flex items-center">
              <Unlock className="mr-2 h-5 w-5 text-green-400" />
              <p className="text-sm font-medium text-gray-300">
                Decrypted Result:
              </p>
            </div>
            <p className="rounded bg-slate-900 p-3 text-green-400">
              {decryptedText}
            </p>
          </div>
        )}

        {/* Irreversible Encryption (Hashing) */}
        <h3 className="mb-4 text-2xl font-bold text-white">
          Irreversible Encryption
        </h3>
        <p className="mb-4 text-gray-300">
          Used for anonymization and cannot be reversed.
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center">
              <Hash className="mr-2 h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-400">
                Input Text
              </h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 text-white focus:border-yellow-500 focus:outline-none"
              placeholder="Enter text to hash..."
              value={textToHash}
              onChange={(e) => setTextToHash(e.target.value)}
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-yellow-600 px-4 py-2 font-medium text-white transition hover:bg-yellow-700 focus:outline-none"
              onClick={handleHash}
            >
              Generate Hash
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center">
              <Shield className="mr-2 h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-orange-400">
                Hash Result
              </h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 font-mono text-orange-300 focus:border-orange-500 focus:outline-none"
              placeholder="Hash will appear here..."
              value={hashedText}
              readOnly
            ></textarea>
            <div className="mt-4 rounded-md bg-slate-800/30 p-3">
              <p className="text-sm text-gray-300">
                <strong>Note:</strong> Hashing is a one-way function. The
                original text cannot be recovered from the hash.
              </p>
            </div>
          </div>
        </div>

        {/* Format-Preserving Encryption */}
        <h3 className="mb-4 text-2xl font-bold text-white">
          Format-Preserving Encryption
        </h3>
        <p className="mb-4 text-gray-300">
          Maintains data structure while encrypting (e.g., numbers stay as
          numbers).
        </p>

        <div className="mb-6 flex items-center justify-between rounded-md bg-slate-800/50 p-4">
          <div className="flex items-center">
            <RefreshCw className="mr-2 h-5 w-5 text-green-400" />
            <label
              htmlFor="formatKey"
              className="text-sm font-medium text-gray-200"
            >
              Format Key:
            </label>
          </div>
          <div className="flex flex-1 items-center space-x-2 px-4">
            <input
              type="text"
              id="formatKey"
              className="w-full rounded-md border border-gray-600 bg-slate-900 px-4 py-2 font-mono text-sm text-white focus:border-green-500 focus:outline-none"
              value={formatKey}
              onChange={(e) => setFormatKey(e.target.value)}
            />
            <button
              onClick={generateFormatKey}
              className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white transition hover:bg-slate-600 focus:outline-none"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center">
              <CreditCard className="mr-2 h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">
                Original Format
              </h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 text-white focus:border-green-500 focus:outline-none"
              placeholder="Enter text with format (e.g., 1234-5678-9012-3456)..."
              value={formatText}
              onChange={(e) => setFormatText(e.target.value)}
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 focus:outline-none"
              onClick={handleFormatEncrypt}
            >
              Format-Preserve Encrypt
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center">
              <Lock className="mr-2 h-6 w-6 text-teal-400" />
              <h3 className="text-xl font-semibold text-teal-400">
                Encrypted Format
              </h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 font-mono text-teal-300 focus:border-teal-500 focus:outline-none"
              placeholder="Format-preserved encrypted text will appear here..."
              value={formatEncrypted}
              readOnly
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-teal-600 px-4 py-2 font-medium text-white transition hover:bg-teal-700 focus:outline-none"
              onClick={handleFormatDecrypt}
              disabled={!formatEncrypted}
            >
              Format-Preserve Decrypt
            </button>
          </div>
        </div>

        {formatDecrypted && (
          <div className="mt-6 rounded-md bg-slate-800/50 p-4">
            <div className="mb-2 flex items-center">
              <Unlock className="mr-2 h-5 w-5 text-green-400" />
              <p className="text-sm font-medium text-gray-300">
                Format-Preserved Decrypted Result:
              </p>
            </div>
            <p className="rounded bg-slate-900 p-3 text-green-400">
              {formatDecrypted}
            </p>
          </div>
        )}

        <div className="mt-8 rounded-md bg-slate-800/30 p-4">
          <h4 className="mb-2 text-lg font-medium text-white">
            How Database Encryption Works
          </h4>
          <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
            <li>
              <strong>Transparent Data Encryption (TDE)</strong> - Encrypts
              database files at the file system level
            </li>
            <li>
              <strong>Column-level Encryption</strong> - Encrypts specific
              columns containing sensitive data
            </li>
            <li>
              <strong>Key Management</strong> - Secure storage and rotation of
              encryption keys
            </li>
            <li>
              <strong>Hashing</strong> - One-way transformation for passwords
              and sensitive data
            </li>
            <li>
              <strong>Tokenization</strong> - Replaces sensitive data with
              non-sensitive placeholders
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
