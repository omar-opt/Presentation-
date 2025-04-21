import { Lock } from "lucide-react";
import { useState } from "react";

interface TokenVault {
  [token: string]: string;
}
export default function Tokenation() {
  // Tokenization State
  const [sensitiveDataTokenize, setSensitiveDataTokenize] = useState("");
  const [tokenizedData, setTokenizedData] = useState("");
  const [deTokenizedData, setDeTokenizedData] = useState("");
  const [tokenVault, setTokenVault] = useState<TokenVault>({});
  // Tokenization Functions
  const tokenizeData = (data: string) => {
    const token = `TOKEN_${Math.random().toString(36).substring(7)}`;
    setTokenVault((prevVault: TokenVault) => ({ ...prevVault, [token]: data }));
    return token;
  };

  const deTokenizeData = (token: string) => {
    return tokenVault[token] ?? "";
  };

  const handleTokenize = () => {
    if (sensitiveDataTokenize) {
      const token = tokenizeData(sensitiveDataTokenize);
      setTokenizedData(token);
      setDeTokenizedData("");
    } else {
      alert("Please enter sensitive data to tokenize.");
    }
  };

  const handleDeTokenize = () => {
    if (tokenizedData) {
      const original = deTokenizeData(tokenizedData);
      setDeTokenizedData(original);
    } else {
      alert("Please enter a token to de-tokenize.");
    }
  };

  return (
    <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
      <div className="mb-4 flex items-center">
        <Lock className="mr-2 h-6 w-6 text-cyan-400" />
        <h3 className="text-2xl font-semibold text-cyan-400">Tokenization</h3>
      </div>
      <p className="mb-6 text-gray-300">
        Enter sensitive data to see it replaced with a secure token. The
        original data is stored in a secure vault.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="sensitiveDataTokenize"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Sensitive Data:
          </label>
          <input
            type="text"
            id="sensitiveDataTokenize"
            className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
            placeholder="e.g., Credit Card Number"
            value={sensitiveDataTokenize}
            onChange={(e) => setSensitiveDataTokenize(e.target.value)}
          />
        </div>

        <button
          className="w-full rounded-md bg-cyan-600 px-4 py-2 font-medium text-white transition hover:bg-cyan-700 focus:outline-none"
          onClick={handleTokenize}
        >
          Tokenize
        </button>

        {tokenizedData && (
          <div className="mt-4 rounded-md bg-slate-800/50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-300">Token:</p>
            <p className="font-mono text-cyan-400">{tokenizedData}</p>
            <button
              className="mt-2 w-full rounded-md bg-slate-700 px-4 py-2 font-medium text-white transition hover:bg-slate-600 focus:outline-none"
              onClick={handleDeTokenize}
            >
              De-tokenize
            </button>
            {deTokenizedData && (
              <div className="mt-4">
                <p className="mb-1 text-sm font-medium text-gray-300">
                  Original Data:
                </p>
                <p className="text-white">{deTokenizedData}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
