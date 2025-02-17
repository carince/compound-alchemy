import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

import Branding from '@/components/Branding';
import Spinner from '@/components/Spinner';
import { RegisterForm } from '@/utils/schemas';

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

    // Handle key press for Enter key to focus on the next input or submit the form
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, nextFieldRef: React.RefObject<HTMLInputElement | null> | null) => {
        if (e.key === 'Enter') {
            if (nextFieldRef === null) return handleRegister(); // If there's no next field, trigger registration
            if (nextFieldRef.current) {
                nextFieldRef.current.focus();
            } else {
                handleRegister(); // If it's the last input, trigger registration
            }
        }
    };

    async function handleRegister() {
        setLoading(true);

        const results = await RegisterForm.safeParseAsync({ email, password });
        if (!results.success) {
            toast.error(results.error.errors[0].message);
            setLoading(false);
            return;
        }

        if (!email || !password || !confirmPassword) {
            toast.error('Please fill in all fields');
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            toast.error('Error creating account');
            setLoading(false);
            return;
        }

        toast.success('Account created successfully');
        return router.push('/');
    }

    return (
        <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100">
            <div className="flex flex-col gap-5 sm:w-3/4 max-w-96 sm:bg-base-200 p-10 rounded-xl">
                <Branding className="flex justify-center" classNameLogo="w-16" classNameText="text-3xl pl-1 pt-2" />                <p className="text-3xl font-bold text-center">Register</p>

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
                    onKeyDown={(e) => handleKeyPress(e, confirmPasswordInputRef)}
                    ref={passwordInputRef}
                    className="w-full p-3 rounded-lg border border-zinc-700 bg-base-300"
                />

                {/* Confirm Password Input */}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, null)}
                    ref={confirmPasswordInputRef}
                    className="w-full p-3 rounded-lg border border-zinc-700 bg-base-300"
                />

                {/* Register Button */}
                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-900 disabled:bg-zinc-600 rounded-lg p-2 text-xl font-bold text-white flex justify-center"
                    disabled={loading}
                >
                    {loading ? <Spinner size="w-9" strokeCn="stroke-white" /> : 'Register'}
                </button>
                <Link className='text-zinc-500 pb-1 underline italic' href="/login">Already a user? Log in here</Link>
            </div>
        </div>
    );
}
