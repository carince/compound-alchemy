"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from "sonner"


import { UserDataType } from '@/types';

export default function LevelOnePage() {
    const router = useRouter();

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            if (!data?.progress?.level) {
                await fetch('/api/user/level', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({ level: 1 })
                })

                return
            }

            if (data?.progress?.level > 1) {
                toast("Level already completed!", {
                    description: "Continue to the next level?",
                    action: {
                        label: "Next",
                        onClick: () => router.push('/2'),
                    },
                })
            }

            if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') return
            return router.push('/end');
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


    return (
        <div className="h-min-screen w-screen bg-base-100 flex flex-col items-center py-10 gap-10">

        </div>
    );
}