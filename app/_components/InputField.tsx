"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  type: string;
  id: string;
  disabled?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError | undefined;
  label: string;
  placeholder?: string;
};

export default function InputField({
  type,
  id,
  disabled = false,
  register,
  error,
  label,
  placeholder = "",
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register}
        placeholder={placeholder}
        className={`p-4 rounded-lg bg-input border ${
          error ? "border-red-500" : "border-gray-700"
        } text-white focus:outline-none font-light ${
          disabled ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      />
      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}
