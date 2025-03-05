import { useRouter } from 'next/router';
import { useState } from 'react';

import Branding from '@/components/Branding';
import Spinner from '@/components/Spinner';
import { UserDataType } from '@/types';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleStart() {
    setLoading(true);

    const request = await fetch('/api/user', {
      credentials: 'include',
    });

    if (!request.ok) {
      return router.push('/login');
    }

    const { currentLevel }: UserDataType = await request.json();

    // if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') return router.push('/game');

    return router.push(`/${currentLevel}/lesson`);
  }

  return (
    <div className="h-screen w-screen flex flex-col p-5 gap-5 items-center justify-center bg-base-100">
      <Branding classNameLogo='w-16 sm:w-24' classNameText='text-3xl sm:text-5xl pl-2' />
      <p className="text-md text-center">Made with ❤️ by 12 - St. Agatha of Sicily</p>
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
