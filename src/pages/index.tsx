import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import Spinner from "@/components/Spinner";
import { UserType } from "@/types";


export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleStart() {
    setLoading(true)

    if (user) {
      const request = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ email: user.email }),
      })

      if (!request.ok) {
        setLoading(false);
        return toast.error("Error occured fetching user data, please try again later");
      }

      const { progress }: UserType = await request.json()

      if (progress?.pretest.completed) {
        if (progress.posttest.completed) return router.push('/end')
        return router.push('/game');
      } else {
        return router.push('/test');
      }
    } else {
      router.push('/api/auth/login');
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100">
      <Branding className="gap-5" />
      <p className="text-md">Made with ❤️ by 12 - St. Agatha of Sicily</p>
      <button
        onClick={handleStart}
        className="bg-blue-900 disabled:bg-zinc-600 rounded-lg p-3 px-8 text-2xl leading-10 font-bold text-white flex gap-3"
        disabled={loading}
      >
        {loading && <Spinner size="w-9" strokeCn="stroke-white" />}
        {loading ? "LOADING..." : "START"}
      </button>
    </div>
  );
}
