"use state"

import { Geist, Geist_Mono } from "next/font/google";
import LEDSBuilder from "@/components/LedsBuilder";
import { molecules } from "@/data/molecules";
import { useState } from "react";
import { MoleculeNames } from "@/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [selectedMolecule, setSelectedMolecule] = useState<string>("O2");
  const [validMolecules, setValidMolecules] = useState<{ [key in MoleculeNames]?: boolean }>({});

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      {/* Molecule Selector Dropdown */}
      <div className="w-min mx-auto h-screen flex flex-col justify-center p-5">
        <div className="p-4 bg-white shadow-sm rounded-lg mb-4 border border-gray-200">
          <label htmlFor="molecule-select" className="block text-sm font-medium text-gray-700">
            Select a Molecule:
          </label>
          <select
            id="molecule-select"
            value={selectedMolecule}
            onChange={(e) => setSelectedMolecule(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {Object.keys(molecules).map((moleculeKey) => (
              <option key={moleculeKey} value={moleculeKey}>
                {moleculeKey} ({molecules[moleculeKey].atoms.map((atom) => atom.element).join("")})
              </option>
            ))}
          </select>
        </div>

        {/* LEDSBuilder Component */}
        <LEDSBuilder currentMolecule={{ ...molecules[selectedMolecule], name: selectedMolecule }} setValidMolecules={setValidMolecules} />
      </div>
    </div>
  );
}