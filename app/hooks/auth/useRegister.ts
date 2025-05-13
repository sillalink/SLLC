// hooks/auth/useRegister.ts
'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AuthApi } from './../../lib/api/auth/auth.api';
import { RegisterPayload } from './../../lib/api/auth/auth.types';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
    onSuccess: (data) => {
    //   setCookie('auth-token', data.token, { maxAge: 60 * 60 * 24 }); // 1 day
      router.push('/dashboard');
    },
  });
};