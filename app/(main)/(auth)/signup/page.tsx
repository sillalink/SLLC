"use client";
import { useState } from "react";
import { AuthFormInput } from './../components/AuthFormInput';
import { AuthTabs } from './../components/AuthTabs';
import { AuthFormContainer } from './../components/AuthFormContainer';
import { useToast } from "@/app/shared/Toast/useToast";

type FormState = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const SignupPage = () => {

  const {addToast} = useToast()
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const [form, setForm] = useState<FormState>({
    email: "",
    password: '',
    confirmPassword: '',
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword){
      addToast('Operation completed successfully!', {
      type: 'success',
      duration: 5000,
      position: 'top-center'
    })
    }
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
          value={form.username}
          onChange={handleChange}
        />

        <AuthFormInput
          id="email"
          label="Email Address"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <AuthFormInput
          id="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <AuthFormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
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