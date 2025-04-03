"use client";

import type React from "react";
import { setCookie } from "cookies-next";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageSquareQuote } from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { useToast } from "../../../components/ui/use-toast";
import { auth, provider } from "../../../lib/firebase";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import LeftSideAuth from "../../../components/LeftSideAuth";

export default function LoginPage() {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();

      if (!res.ok) {
        setError(response?.error);
      }
      setIsLoading(false);
      if (response?.data) {
        setCookie("token", response.data);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      setError("Failed to sign in");
      toast({
        title: "Error",
        description: "Failed to sign in",
      });
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      // Wait for user interaction before showing the popup
      document.body.click();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        setIsLoading(true);
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: "12345678",
          }),
        });
        setIsLoading(false);
        if (res.ok) {
          const response = await res.json();
          setCookie("token", response.data);
        } else {
          const error = await res.json();
          setError(error.error);
        }
        router.push("/dashboard");
      }
    } catch (error: any) {
      if (error.code === "auth/popup-blocked") {
        setError(
          "Popup blocked! Please allow popups in your browser settings."
        );
      } else {
        console.error("Google Sign-In Error:", error);
        setError("Failed to sign in with Google");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex">
      {/* <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div> */}
      <div className="lg:w-2/5 h-screen">
        <div className="p-4 h-full hidden lg:block">
          <LeftSideAuth />
        </div>
      </div>
      <div className="lg:w-3/5 w-full flex items-center  justify-center">
        <div className=" dark:bg-[#1F1F23] p-8 rounded-xl border-gray-200 dark:border-gray-800  w-full max-w-md">
          <div className=" mb-6 py-10">
            <h1 className="flex items-center fo  text-4xl font-bold">Log in</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#3C37FD] text-white"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-[#1F1F23] px-2 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign in with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
