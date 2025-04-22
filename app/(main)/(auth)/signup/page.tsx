"use client";
import { useState } from "react";
import { AuthFormInput } from './../components/AuthFormInput';
import { AuthTabs } from './../components/AuthTabs';
import { AuthFormContainer } from './../components/AuthFormContainer';

import Link from "next/link";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ email, password, confirmPassword, username });
  };

  return (
    <AuthFormContainer
      title="Welcome to Sillalink..!"
      subtitle="Create your account to get started"
    >
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthFormInput
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <AuthFormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="w-full flex justify-center md:justify-end my-10">
          <button
            type="submit"
            className="bg-primary text-small md:text-regular w-44 md:w-64 rounded-[33px] py-2 md:py-4 px-5 md:px-10 text-white hover:bg-white focus:ring-purple-500 hover:text-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default SignupPage;