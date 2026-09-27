import { ReactNode } from "react";

type AuthFormFieldProps = {
  id: string;
  label: string;
  error?: string;
  icon: ReactNode;
  children: ReactNode;
};

export default function AuthFormField({
  id,
  label,
  error,
  icon,
  children,
}: AuthFormFieldProps) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {children}

        <div
          className={`absolute top-3 left-3 ${
            error
              ? "text-error peer-focus:text-error"
              : "text-gray-400 peer-focus:text-primary"
          }`}
        >
          {icon}
        </div>

        <label
          htmlFor={id}
          className={`
            absolute left-10 top-1/2
            -translate-y-1/2
            bg-white px-1
            text-sm
            pointer-events-none
            transition-all duration-200 ease-in-out

            peer-focus:top-0
            peer-focus:left-5
            peer-focus:-translate-y-1/2
            peer-focus:text-xs

            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:left-5
            peer-not-placeholder-shown:-translate-y-1/2
            peer-not-placeholder-shown:text-xs

            ${
              error
                ? "text-error peer-focus:text-error"
                : "text-gray-600 peer-focus:text-primary"
            }
          `}
        >
          {label}
        </label>
      </div>

      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
