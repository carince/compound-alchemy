"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import type { User } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
    const { user } = useUser();
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        async function getUserData() {
            if (user) {
                const data = await fetch('/api/user', {
                    method: 'POST',
                    body: JSON.stringify({ email: user.email }),
                })

                const userData: User = await data.json()
                setUserData(userData);
            }
        }

        getUserData();
    }, [user]);

    return (
        <div className="h-full w-full flex flex-col py-14 items-center bg-base-100">

            <div className="h-screen flex flex-col justify-center   w-3/4 gap-5">
                <p className="text-6xl font-bold self-center"> Thank You!</p>
                <div className="text-xl text-left">
                    Thank you for participating in our research! We would like to extend my heartfelt gratitude for your participation in our research study. <br /><br />

                    Your time and effort in completing the tests and using our app are deeply appreciated. Your honest and thoughtful responses are invaluable in helping us achieve the objectives of this study. Your contribution brings us closer to gaining meaningful insights and making a positive impact in this field. <br /><br />

                    Once again, thank you for your dedication and support. Your participation is truly valued and has made a significant difference. <br /><br />

                    Thank you for being a part of this journey, <br /><br />
                    <div className="flex flex-row self-center w-3/4">
                        <img src="/logo.png" alt="Logo" className="w-16 h-16 inline-block md:mr-2" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">Compound</span>
                            <span className="text-xl font-bold text-[#4b77d1]">Alchemy</span>
                        </div>
                    </div>
                    12 - St. Agatha of Sicily
                </div>


            </div>

            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-4xl font-bold self-center">Debug</p>
                <div className="bg-base-200 flex flex-col p-5 rounded-lg shadow-lg gap-5">
                    <p className="text-xl font-bold">Mongo Database</p>
                    <div className="bg-base-100 p-5 rounded-lg shadow-lg font-mono overflow-scroll">
                        <pre>{userData ? JSON.stringify(userData, null, 2) : "Loading..."}</pre>
                    </div>
                </div>

                <div className="bg-base-200 flex flex-col p-5 rounded-lg shadow-lg gap-5">
                    <p className="text-xl font-bold">Auth0 User</p>
                    <div className="bg-base-100 p-5 rounded-lg shadow-lg font-mono overflow-scroll">
                        <pre>{user ? JSON.stringify(user, null, 2) : "Loading..."}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
