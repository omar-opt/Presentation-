"use client";

import { faker } from "@faker-js/faker";
import { Eye } from "lucide-react";
import type React from "react";
import { useState } from "react";

function generateRandomName(): string {
  return faker.name.firstName() + " " + faker.name.lastName();
}
function generateRandomCreditCard(): string {
  return faker.finance.creditCardNumber();
}
export default function DataProtectionDemo() {
  // Masking State
  const [originalDataMasking, setOriginalDataMasking] = useState("");
  const [maskedData, setMaskedData] = useState("");
  const [selectedMaskingTechnique, setSelectedMaskingTechnique] = useState("");

  // Masking Functions
  const handleMaskingTechniqueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedMaskingTechnique(event.target.value);
  };

  const handleMaskData = () => {
    if (originalDataMasking && selectedMaskingTechnique) {
      let maskedResult = originalDataMasking;
      switch (selectedMaskingTechnique) {
        case "name":
          maskedResult = generateRandomName();
          break;
        case "credit-card":
          // maskedResult = "XXXX-XXXX-XXXX-" + originalDataMasking.slice(-4);
          maskedResult =
            "XXXX-XXXX-XXXX-" + generateRandomCreditCard().slice(-4);
          break;
        case "email":
          const parts = originalDataMasking.split("@");
          if (parts.length === 2) {
            maskedResult =
              parts[0].charAt(0) +
              "***" +
              "@" +
              parts[1].charAt(0) +
              "***" +
              "." +
              parts[1].split(".").pop();
          }
          break;
        case "shuffle":
          maskedResult = originalDataMasking
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");
          break;
        default:
          maskedResult = originalDataMasking;
      }
      setMaskedData(maskedResult);
    } else {
      alert("Please enter data and select a masking technique.");
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-8 ">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Data Masking Demo
      </h2>

      <div className="grid w-full max-w-4xl gap-8  ">
        {/* Data Masking Demo */}
        <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center">
            <Eye className="mr-2 h-6 w-6 text-purple-400" />
            <h3 className="text-2xl font-semibold text-purple-400">
              Data Masking
            </h3>
          </div>
          <p className="mb-6 text-gray-300">
            Transform sensitive data while preserving its format. Choose a
            masking technique to see it in action.
          </p>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="originalDataMasking"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Original Data:
              </label>
              <input
                type="text"
                id="originalDataMasking"
                className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-purple-500 focus:outline-none"
                placeholder="e.g., john.doe@example.com"
                value={originalDataMasking}
                onChange={(e) => setOriginalDataMasking(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-200">
                Masking Technique:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="masking-name"
                    name="maskingTechnique"
                    value="name"
                    className="h-4 w-4 text-purple-600"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label
                    htmlFor="masking-name"
                    className="text-sm text-gray-300"
                  >
                    Mask Name
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="masking-credit-card"
                    name="maskingTechnique"
                    value="credit-card"
                    className="h-4 w-4 text-purple-600"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label
                    htmlFor="masking-credit-card"
                    className="text-sm text-gray-300"
                  >
                    Mask Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="masking-email"
                    name="maskingTechnique"
                    value="email"
                    className="h-4 w-4 text-purple-600"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label
                    htmlFor="masking-email"
                    className="text-sm text-gray-300"
                  >
                    Mask Email
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="masking-shuffle"
                    name="maskingTechnique"
                    value="shuffle"
                    className="h-4 w-4 text-purple-600"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label
                    htmlFor="masking-shuffle"
                    className="text-sm text-gray-300"
                  >
                    Shuffle Characters
                  </label>
                </div>
              </div>
            </div>

            <button
              className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition hover:bg-purple-700 focus:outline-none"
              onClick={handleMaskData}
              disabled={!selectedMaskingTechnique || !originalDataMasking}
            >
              Apply Masking
            </button>

            {maskedData && (
              <div className="mt-4 rounded-md bg-slate-800/50 p-4">
                <p className="mb-2 text-sm font-medium text-gray-300">
                  Masked Result:
                </p>
                <p className="font-mono text-purple-400">{maskedData}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
