
import React, { useState } from "react";

import Branding from "@/components/Branding";
import User from "@/components/User";
import { IonicBuilder } from "@/components/Canvas/LewisIonic";
import { molecules } from "@/data/molecules";
import { MoleculeNames } from "@/types";

export default function GamePage() {
    const [validMolecules, setValidMolecules] = useState<{ [key in MoleculeNames]?: boolean }>({});

    return (
        <div className="absolute w-full h-full flex flex-col bg-base-100 text-white overflow-hidden">
            <div className="Navbar fixed z-10 top-0 h-min w-full bg-base-200 flex flex-row justify-between p-2 px-5 md:p-5 gap-3 overflow-hidden">
                <Branding className="flex justify-center sm:pt-3 md:pt-0" classNameLogo="w-12" classNameText="hidden md:flex flex-col text-xl " />

                <User pictureCn="block w-9" className="bg-base-300 px-4 rounded-lg gap-5" textCn="md:text-md text-sm" withLogout={true} />
            </div>

            <div className="flex flex-col mt-16 md:mt-28 p-5">
                <IonicBuilder currentMolecule={{ ...molecules.NaCl, name: "NaCl" }} setValidMolecules={setValidMolecules} />
            </div>
        </div >
    );
}