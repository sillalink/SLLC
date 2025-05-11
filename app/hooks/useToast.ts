'use client'
import { useToast as useToastContext} from './../shared/Toast/ToastProvider';


export const useToast = () => {
  const { addToast } = useToastContext();
  
  const toast = {
    success: (message: string, duration?: number) => 
      addToast(message, 'success', duration),
    error: (message: string, duration?: number) => 
      addToast(message, 'error', duration),
    warning: (message: string, duration?: number) => 
      addToast(message, 'warning', duration),
    info: (message: string, duration?: number) => 
      addToast(message, 'info', duration),
  };

  return toast;
};