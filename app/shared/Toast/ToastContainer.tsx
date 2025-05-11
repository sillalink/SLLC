// components/Toast/ToastContainer.tsx
'use client'

import React from 'react';
import { Toast, ToastPosition } from './types';
import { useToast } from './ToastProvider';
import { ToastItem } from './ToastItem';

const getPositionStyles = (position: ToastPosition) => {
  switch (position) {
    case 'top-left': return 'top-4 left-4';
    case 'top-center': return 'top-4 left-1/2 -translate-x-1/2';
    case 'top-right': return 'top-16 right-4';
    case 'bottom-left': return 'bottom-4 left-4';
    case 'bottom-center': return 'bottom-4 left-1/2 -translate-x-1/2';
    case 'bottom-right': return 'bottom-4 right-4';
    default: return 'top-4 right-4';
  }
};

export const ToastContainer: React.FC<{ position?: ToastPosition }> = ({ position = 'top-right' }) => {
  const { toasts } = useToast();

  return (
    <div className={`fixed z-50 w-full max-w-xs space-y-4 pointer-events-none ${getPositionStyles(position)}`}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};