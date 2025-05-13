// components/Toast/Toast.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Toast } from '@/app/context/ToastContext';

interface ToastProps extends Toast {
  onClose: (id: string) => void;
}

const ToastItem: React.FC<ToastProps> = ({
  id,
  message,
  type = 'default',
  duration = 5000,
  position = 'top-right',
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (duration === 0) return;

    const intervalTime = 50;
    const totalIntervals = duration / intervalTime;
    const decrement = 100 / totalIntervals;

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - decrement));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (progress <= 0 && duration > 0) {
      handleClose();
    }
  }, [progress, duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getToastStyles = () => {
    const baseStyles = 'flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow';

    switch (type) {
      case 'success':
        return `${baseStyles} text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200`;
      case 'error':
        return `${baseStyles} text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200`;
      case 'warning':
        return `${baseStyles} text-orange-500 bg-orange-100 dark:bg-orange-800 dark:text-orange-200`;
      case 'info':
        return `${baseStyles} text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200`;
      default:
        return `${baseStyles} text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200`;
    }
  };

  const getProgressStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 dark:bg-green-200';
      case 'error':
        return 'bg-red-500 dark:bg-red-200';
      case 'warning':
        return 'bg-orange-500 dark:bg-orange-200';
      case 'info':
        return 'bg-blue-500 dark:bg-blue-200';
      default:
        return 'bg-gray-500 dark:bg-gray-200';
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 -translate-x-1/2';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-center':
        return 'bottom-4 left-1/2 -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  return (
    <div
      className={`fixed ${getPositionStyles()} transition-all duration-300 ${
        isClosing ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
      role="alert"
    >
      <div className={getToastStyles()}>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      {duration > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div
            className={`h-1 rounded-full ${getProgressStyles()}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ToastItem;