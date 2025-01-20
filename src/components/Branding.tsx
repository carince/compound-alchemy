import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Branding({ className, logoCn, textCn }: { className?: string, logoCn?: string, textCn?: string }) {
    return (
        <div className={twMerge("flex flex-row items-center gap-2", className)}>
            <Image src="/logo.svg" alt="Logo" width={50} height={50} className={twMerge("w-24 aspect-square inline-block md:mr-2", logoCn)} />
            <div className={twMerge("text-5xl pb-1 flex flex-col", textCn)}>
                <span className="font-bold text-white">Compound</span>
                <span className="font-bold text-[#4b77d1]">Alchemy</span>
            </div>
        </div>
    )
}