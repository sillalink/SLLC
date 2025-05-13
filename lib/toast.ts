import { useToast } from './../app/context/ToastContext';

export const showSuccessToast = (message: string, duration?: number) => {
  // This is just a placeholder - actual implementation would use the useToast hook
  // In a real component, you would use the hook directly
  return { type: 'success', message, duration }
}

export const showErrorToast = (message: string, duration?: number) => {
  return { type: 'error', message, duration }
}

export const showWarningToast = (message: string, duration?: number) => {
  return { type: 'warning', message, duration }
}

export const showInfoToast = (message: string, duration?: number) => {
  return { type: 'info', message, duration }
}