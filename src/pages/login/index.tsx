import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

import Branding from '@/components/Branding';
import Spinner from '@/components/Spinner';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  // Handle key press for Enter key to focus on the next input or submit the form
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, nextFieldRef: React.RefObject<HTMLInputElement | null> | null) => {
    if (e.key === 'Enter') {
      if (nextFieldRef === null) return handleLogin(); // If there's no next field, trigger login
      if (nextFieldRef.current) {
        nextFieldRef.current.focus();
      } else {
        handleLogin(); // If it's the last input, trigger login
      }
    }
  };

  async function handleLogin() {
    setLoading(true);

    // Validate email and password before sending request
    if (!email || !password) {
      toast.error('Please enter both email and password');
      setLoading(false);
      return;
    }

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      toast.error('Invalid email or password');
      setLoading(false);
      return;
    }

    router.push('/');
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100">
      <div className="flex flex-col gap-5 sm:bg-base-200 p-10 rounded-xl">
        <Branding className="flex justify-center" classNameLogo="w-16" classNameText="text-3xl pl-1 pt-2" />
        <p className="text-3xl font-bold text-center">Login</p>
        {/* Email Input */}
        <input
          type="email"
          placeholder="IJA Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, passwordInputRef)}
          className="w-full p-3 rounded-lg border border-zinc-700 bg-base-300"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, null)}
          ref={passwordInputRef}
          className="w-full p-3 rounded-lg border border-zinc-700 bg-base-300"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-900 disabled:bg-zinc-600 rounded-lg p-2 text-xl font-bold text-white flex justify-center"
          disabled={loading}
        >
          {loading ? <Spinner size="w-9" strokeCn="stroke-white" /> : 'Login'}
        </button>
        <Link className='text-zinc-500 text-sm pb-1 underline italic' href="/register">Don&apos;t have an account? Register here</Link>
      </div>
    </div>
  );
}
