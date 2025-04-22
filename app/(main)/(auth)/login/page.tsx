"use client";
import { useState } from "react";
import Link from "next/link";
import { AuthFormInput } from './../components/AuthFormInput';
import { AuthTabs } from './../components/AuthTabs';
import { AuthFormContainer } from './../components/AuthFormContainer';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <AuthFormContainer
      title="Welcome to Sillalink..!"
      subtitle="Welcome back! Please login to continue"
    >
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthFormInput
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthFormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-3 w-3 md:h-4 md:w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-1 md:ml-2 block text-[8px] md:text-sm text-gray-100"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-[8px] md:text-sm text-[#2496ED] hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end my-10">
          <button
            type="submit"
            className="bg-primary text-small md:text-regular w-44 md:w-64 rounded-[33px] py-2 md:py-4 px-5 md:px-10 text-white hover:bg-white focus:ring-purple-500 hover:text-primary"
          >
            Login
          </button>
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default LoginPage;