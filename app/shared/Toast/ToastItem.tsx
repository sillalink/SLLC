// components/Toast/ToastItem.tsx
'use client'

import React from 'react';
import { Toast } from './types';
import { useToast } from './ToastProvider';

const getToastStyles = (type: Toast['type']) => {
  const baseStyles = 'rounded-lg shadow-lg p-4 text-white flex items-start justify-between';
  
  switch (type) {
    case 'success':
      return `${baseStyles} bg-green-500`;
    case 'error':
      return `${baseStyles} bg-red-500`;
    case 'warning':
      return `${baseStyles} bg-yellow-500`;
    case 'info':
      return `${baseStyles} bg-blue-500`;
    default:
      return `${baseStyles} bg-gray-500`;
  }
};

export const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const { removeToast } = useToast();

  return (
    <div className={`${getToastStyles(toast.type)} animate-fade-in`}>
      <div className="flex-1">
        <p className="text-sm font-medium">{toast.message}</p>
      </div>
      <button 
        onClick={() => removeToast(toast.id)}
        className="ml-4 text-white hover:text-white/80 focus:outline-none"
        aria-label="Close toast"
      >
        &times;
      </button>
    </div>
  );
};