import { FiAlertCircle, FiLoader, FiSearch } from "react-icons/fi";

interface EmptyStateProps {
  title: string;
  description: string;
  icon: "error" | "loading" | "search";
}

export const EmptyState = ({ title, description, icon }: EmptyStateProps) => {
  const Icon = {
    error: FiAlertCircle,
    loading: FiLoader,
    search: FiSearch,
  }[icon];

  return (
    <div className="text-center">
      <Icon className="mx-auto h-12 w-12 text-gray-400 animate-spin" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};