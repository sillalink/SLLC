// hooks/auth/useLogin.ts
'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
// import { setCookie } from 'cookies-next';
import { AuthApi } from './../../lib/api/auth/auth.api';
import { LoginPayload } from './../../lib/api/auth/auth.types';

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthApi.login(payload),
    onSuccess: (data) => {
    //   setCookie('auth-token', data.token, { maxAge: 60 * 60 * 24 }); // 1 day
      // Redirect based on role
      const redirectPath = data.user.role === 'admin' ? '/admin' : '/';
      router.push(redirectPath);
    },
  });
};