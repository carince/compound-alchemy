import React, { useRef } from "react";

export default function Page() {
    return (
        <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100">
            <div className="flex flex-row">
                <img src="/logo.png" alt="Logo" className="w-24 h-24 inline-block md:mr-2" />
                <div className="flex flex-col">
                    <span className="text-4xl font-bold text-white">Compound</span>
                    <span className="text-4xl font-bold text-[#4b77d1]">Alchemy</span>
                </div>
            </div>
        </div>
    );
}
