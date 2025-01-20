import { twJoin, twMerge } from "tailwind-merge";

export default function Spinner({ size, strokeCn }: { size: string, strokeCn?: string }) {
    return (
        <div className={twJoin("aspect-square", `w-[${size}]`)}>
            <svg className="spinner" width={size} height={size} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle className={twMerge("path", strokeCn)} fill="none" stroke-width="5" stroke-linecap="round" cx="25" cy="25" r="20"></circle>
            </svg>
        </div>
    )
}