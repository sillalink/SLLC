// components/Toast/ToastContainer.tsx
'use client';

import React from 'react';
import ToastItem from './Toast';
import { useToast } from '@/app/context/ToastContext';

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
          onClose={removeToast}
        />
      ))}
    </>
  );
};

export default ToastContainer;