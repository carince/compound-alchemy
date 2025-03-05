import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Branding({ className, classNameLogo, classNameText }: { className?: string, classNameLogo?: string, classNameText?: string }) {
    return (
        <div className={twMerge("flex flex-row items-center gap-2", className)}>
            <Image priority src="/logo.svg" alt="Logo" width={50} height={50} className={twMerge("w-24 aspect-square inline-block md:mr-2", classNameLogo)} />
            <div className={twMerge("text-5xl pb-1 flex flex-col", classNameText)}>
                <span className="font-bold text-white">Compound</span>
                <span className="font-bold text-[#4b77d1]">Alchemy</span>
            </div>
        </div>
    )
}