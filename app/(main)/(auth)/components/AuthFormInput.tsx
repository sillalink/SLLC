"use client";

interface AuthFormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const AuthFormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  required = true,
}: AuthFormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[12px] md:text-regular font-medium text-gray-100 my-3"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
        required={required}
      />
    </div>
  );
};