// components/Toast/ToastProvider.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import  ToastContainer  from './ToastContainer';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  position?: ToastPosition;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  /**
   * Add a new toast to the queue
   * @param toast - The toast configuration
   * @param toast.message - The message to display
   * @param toast.type - The type of toast (success, error, etc.)
   * @param toast.duration - Duration in milliseconds (0 for persistent)
   * @param toast.position - Position on screen
   */
  const addToast = ({
    message,
    type = 'default',
    duration = 5000,
    position = 'top-right'
  }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);

    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration, position }]);

    // Auto-dismiss if duration is set
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  /**
   * Remove a toast by its ID
   * @param id - The ID of the toast to remove
   */
  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  /**
   * Clear all toasts
   */
  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

/**
 * Custom hook to access toast functions
 * @returns Toast context with helper methods
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

/**
 * Pre-configured hook with common toast types
 * @returns Object with typed toast methods
 */
export const useToastHook = () => {
  const { addToast } = useToast();

  return {
    toast: (
      message: string,
      type: ToastType = 'default',
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type, duration, position }),

    toastSuccess: (
      message: string,
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type: 'success', duration, position }),

    toastError: (
      message: string,
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type: 'error', duration, position }),

    toastWarning: (
      message: string,
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type: 'warning', duration, position }),

    toastInfo: (
      message: string,
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type: 'info', duration, position }),

    toastDefault: (
      message: string,
      duration?: number,
      position?: ToastPosition
    ) => addToast({ message, type: 'default', duration, position }),
  };
};