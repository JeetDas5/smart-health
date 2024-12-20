'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

interface FormEvent {
    preventDefault: () => void;
}

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Submit all fields.");
        return;
    }

    // Simulating a login process
    if (email && password) {
        router.push("/"); // Navigate to the home page
    } else {
      toast.error("An error occurred. Please try again later.");
    }
};

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-6">
      <ToastContainer />
      <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-opacity-80"
            >
              Login
            </button>
            <Link href="/signup" className="text-sm text-primary hover:underline">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
