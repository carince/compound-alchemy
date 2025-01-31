import { twMerge } from "tailwind-merge";

export default function Spinner({ size, strokeCn }: { size: string, strokeCn?: string }) {
    return (
        <div className={`aspect-square ${size}`}>
            <svg className={`spinner block aspect-square ${size}`} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle className={twMerge("path", strokeCn)} fill="none" strokeWidth="5" strokeLinecap="round" cx="25" cy="25" r="20"></circle>
            </svg>
        </div>
    )
}