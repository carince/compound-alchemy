import { useUser } from "@auth0/nextjs-auth0/client";
import { twMerge } from "tailwind-merge";

export default function User({ withLogout, className, pictureCn, textCn }: { withLogout?: boolean, className?: string, pictureCn?: string, textCn?: string }) {
    const { user, error, isLoading } = useUser();

    if (error) return (
        <div className={twMerge("flex items-center justify-between ", className)} >
            <p className="pl-2 font-bold text-xl">Error occured!</p>
        </div>
    );

    if (isLoading) return (
        <div className={twMerge("flex items-center justify-between ", className)} >
            <p className="pl-2 font-bold text-xl">Loading...</p>
        </div>
    );

    const name = user && user.email!.replace("@ija.edu.ph", "").split(".").join(" ");

    return (
        user && (
            <div className="flex items-center justify-between">
                <div className={twMerge("flex gap-2 items-center justify-between ", className)}>
                    <img src={user.picture!} alt={user.name!} className={twMerge("aspect-square rounded-full", pictureCn)} />
                    <p className={twMerge("capitalize font-semibold", textCn)}>{name}</p>
                </div>
                {
                    withLogout && (
                        <a href="/api/auth/logout" className={twMerge("aspect-square p-1", pictureCn)}><img src="/logout.png" alt="Logout" /></a>
                    )
                }
            </div>
        )
    )
}