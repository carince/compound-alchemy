"use client"

import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserType } from "@/types";
import Branding from "@/components/Branding";
import { toast } from "sonner";

import { fadeIn, fadeOut } from "@/utils/transitions";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100">
      <Branding className="gap-5" />
      <p className="text-md">Made with ❤️ by 12 - St. Agatha of Sicily</p>
      <button
        onClick={async () => {
          if (user) {
            const request = await fetch('/api/user', {
              method: 'POST',
              body: JSON.stringify({ email: user.email }),
            })

            if (!request.ok) return toast.error("Error occured fetching user data, please try again later");

            const userData: UserType = await request.json()

            if (userData.progress.pretest.completed) {
              if (userData.progress.posttest.completed) {
                router.push('/end')
                fadeOut();
              }
              router.push('/game');
              fadeOut();
            } else {
              router.push('/test');
              fadeOut();
            }
          } else {
            router.push('/api/auth/login');
          }
        }}
        className="bg-blue-900 rounded-lg p-5 px-10 text-2xl font-bold text-white"
      >
        START
      </button>
    </div>
  );
}
