import { useEffect, useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export default function User({ withLogout, className, pictureCn, textCn }: { withLogout?: boolean, className?: string, pictureCn?: string, textCn?: string }) {
    const [user, setUser] = useState<{ email: string } | null>(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/auth/me', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) {
                setIsLoading(false)
                setError(true)
                return toast.error("An error occured while fetching your data, please reload the website and try again.")
            };

            const { user } = await res.json() as { user: { email: string } };

            setIsLoading(false)
            setUser(user);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            await fetchData();
        };

        fetchUser();
    }, []);

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